
document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    cadastrarUsuario();
});

// Função para cadastrar usuário
function cadastrarUsuario() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;
    var dataNascimento = document.getElementById("data-nascimento").value;
    var documento = document.getElementById("documento").value;

    // Verificação de campos obrigatórios
    if (nome === "" || sobrenome === "" || email === "" || telefone === "" || senha === "" || confirmarSenha === "" || dataNascimento === "" || documento === "") {
        document.getElementById("mensagem-cadastro").innerText = "Todos os campos são obrigatórios.";
        return;
    }else{
        document.getElementById("mensagem-cadastro").innerText = "Cadastro realizado com sucesso";

    }

    // Verificação de senha
    if (senha !== confirmarSenha) {
        document.getElementById("mensagem-cadastro").innerText = "As senhas não coincidem.";
        return;
    }

    // Verificação de idade mínima
    var dataMinima = new Date();
    dataMinima.setFullYear(dataMinima.getFullYear() - 18);
    var dataNascimentoDate = new Date(dataNascimento);
    if (isNaN(dataNascimentoDate) || dataNascimentoDate > dataMinima) {
        document.getElementById("mensagem-cadastro").innerText = "Você deve ter pelo menos 18 anos para se cadastrar.";
        return;
    }
}



function realizarLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

}

function isNumeric(str) {
    return /^\d+$/.test(str);
}

document.getElementById("telefone").addEventListener("input", function() {
    if (!isNumeric(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});

document.getElementById("documento").addEventListener("input", function() {
    if (!isNumeric(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});
