const nombre = document.getElementById("Usuario");
const email = document.getElementById("Email");
const pass = document.getElementById("Contraseña");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    let warnings = "";
    let entrar = false;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (nombre.value.length < 6) {
        warnings += `El nombre no es válido <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`;
        entrar = true;
    }
    if (pass.value.length < 8) {
        warnings += `La contraseña no es válida <br>`;
        entrar = true;
    }

    if (entrar) {
        // Mostrar mensajes de error en el mismo formulario
        alert(warnings); // Puedes usar alert para mostrar errores temporalmente
    } else {
        // Si la validación es correcta, redirigir a Login.html
        window.location.href = "/Login/Login.html";
    }
});
