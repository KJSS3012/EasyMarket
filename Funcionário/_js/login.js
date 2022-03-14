acesso = {email:"daniel@gmail.com",senha:"dandan"}

function validar() {
    email = document.getElementById('principal-email').value;
    senha = document.getElementById('principal-senha').value;

    if (email == acesso.email && senha == acesso.senha) {
        location.href = "../_html/opcoes.html";
    }else{
        document.getElementById("principal-mensagem").innerHTML = "Algum campo está incorreto";
    }
}