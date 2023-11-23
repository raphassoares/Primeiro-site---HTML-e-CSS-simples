
window.onload = function () {
    var dados = localStorage.getItem('dadosForm');
    if (dados) {
        dados = JSON.parse(dados);
        document.getElementById('confNome').textContent = dados.nome || '';
        document.getElementById('confSobrenome').textContent = dados.sobrenome || '';
        document.getElementById('confEmail').textContent = dados.email || '';
        document.getElementById('confIidade').textContent = dados.idade || '';
    }
}

function save() {
    var dados = localStorage.getItem('dadosForm');
    if (dados) {
        var blob = new Blob([dados], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.download = "data.json";
        a.href = url;
        a.style.display = 'none';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    window.location.href = 'Home.html';

}
