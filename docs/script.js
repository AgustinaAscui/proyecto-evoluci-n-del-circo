/*
  Webstory: Ocaso del Látigo
  Archivo: script.js

  Funciones:
  1. Menú responsive en celulares.
  2. Animación suave de aparición al hacer scroll.
  3. Cierre automático del menú al hacer clic en un enlace.
  4. Pequeño cambio visual en la barra superior al bajar.
*/

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".topbar__toggle");
  const navLinks = document.querySelector(".topbar__links");
  const topbar = document.querySelector(".topbar");
  const revealElements = document.querySelectorAll(".reveal");

  /*
    MENÚ RESPONSIVE
    En pantallas pequeñas se muestra el botón tipo hamburguesa.
  */
  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("is-open");
      toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    const menuLinks = navLinks.querySelectorAll("a");

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        toggleButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  /*
    ANIMACIÓN AL HACER SCROLL
    Cada elemento con clase .reveal aparece suavemente cuando entra en pantalla.
  */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries, observerInstance) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    /*
      Respaldo para navegadores antiguos.
    */
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }

  /*
    BARRA SUPERIOR
    Agrega una clase al hacer scroll para reforzar la lectura.
  */
  function handleTopbarScroll() {
    if (!topbar) return;

    if (window.scrollY > 40) {
      topbar.classList.add("topbar--scrolled");
    } else {
      topbar.classList.remove("topbar--scrolled");
    }
  }

  handleTopbarScroll();
  window.addEventListener("scroll", handleTopbarScroll);

  /*
    ACCESIBILIDAD SIMPLE
    Si el usuario presiona Escape, se cierra el menú móvil.
  */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navLinks && toggleButton) {
      navLinks.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});
