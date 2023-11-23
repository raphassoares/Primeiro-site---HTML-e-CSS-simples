document.getElementById('contact').addEventListener('submit', function (event) {
    event.preventDefault();

    var dados = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        mensagem: document.getElementById('mensagem').value
    };
    if (validateForm(dados)) {


        localStorage.setItem('dadosForm', JSON.stringify(dados));
        window.location.href = 'confirmacao.html';
    }
});

function validateForm(dados) {
    // Aqui estou validando nome e sobrenome
    if (dados.nome.trim() === '' || dados.sobrenome.trim() === '') {
        alert('Nome e Sobrenome não podem ser vazios.');
        return false;
    }

    if (dados.nome.length < 3 || dados.sobrenome.length < 3 || dados.nome.length > 50 || dados.sobrenome.length > 50) {
        alert('Nome e Sobrenome devem ter entre 3 e 50 caracteres.');
        return false;
    }

    // Aqui estou validando o e-mail
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(dados.email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // Aqui estou validando a idade
    if (isNaN(dados.idade) || dados.idade <= 0 || dados.idade >= 120) {
        alert('Por favor, insira uma idade válida.');
        return false;
    }

    localStorage.setItem('dadosForm', JSON.stringify(dados));

    // Se todas as validações passarem, o formulário é considerado válido
    return true;
}

