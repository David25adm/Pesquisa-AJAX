const botão =
document.getElementById('botão');
const resultado = document.getElementById('resultado');

botão.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            resultado.innerHTML = xhr.responseText;
        } else {
            resultado.innerHTML = 'Erro ao carregar dados';
        }

    }

xhr.open('GET', 'dados.txt', true);
xhr.send();
});

