document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        if (username === "admin" && password === "senha123") {
            alert("Login bem-sucedido! Bem-vindo, " + username + "!");
            window.location.href = "central-requisicoes.html"; 
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
