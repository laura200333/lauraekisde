function login() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("password").value;

    var usu = "jesusmedina010405@gmail.com";
    var pass = "1234";

    if (usuario === usu && contraseña === pass) {
        document.getElementById("message").innerText = "Bienvenida";
        window.location.href = "/Interfaz/Menu/Menu.html"; // Redirige si las credenciales son correctas
    } else {
        document.getElementById("message").innerText = "Datos incorrectos";
    }
}
