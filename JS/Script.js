/*=========================================
            BOTÓN VOLVER ARRIBA
=========================================*/

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/*=========================================
            NAVBAR AL HACER SCROLL
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#0A3D91";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";

    } else {

        navbar.style.background = "rgba(10,61,145,.95)";
        navbar.style.boxShadow = "none";

    }

});

/*=========================================
            ANIMACIÓN DE HABILIDADES
=========================================*/

const barras = document.querySelectorAll(".progress-bar");

const animarBarras = () => {

    barras.forEach(barra => {

        const porcentaje = barra.innerHTML;

        barra.style.width = "0";

        setTimeout(() => {

            barra.style.width = porcentaje;

        }, 300);

    });

};

const habilidades = document.querySelector("#habilidades");

const observar = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            animarBarras();

        }

    });

});

observar.observe(habilidades);

/*=========================================
            SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(ancla => {

    ancla.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*=========================================
        EFECTO DE APARICIÓN
=========================================*/

const cards = document.querySelectorAll(".card");

const mostrar = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".8s";

    mostrar.observe(card);

});

/*=========================================
        VALIDACIÓN DEL FORMULARIO
=========================================*/

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.querySelector('input[type="text"]').value;
    const correo = document.querySelector('input[type="email"]').value;
    const mensaje = document.querySelector("textarea").value;

    if (nombre === "" || correo === "" || mensaje === "") {

        alert("Por favor completa todos los campos.");

        return;

    }

    alert("¡Gracias por tu mensaje! Me pondré en contacto contigo.");

    formulario.reset();

});

/*=========================================
        AÑO AUTOMÁTICO EN FOOTER
=========================================*/

const footer = document.querySelector("footer p:last-child");

footer.innerHTML =
`© ${new Date().getFullYear()} Todos los derechos reservados.`;