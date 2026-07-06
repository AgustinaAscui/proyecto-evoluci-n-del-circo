/*
  Webstory: Ocaso del Látigo
  Archivo: script.js

  Funciones:
  - Menú responsive.
  - Animaciones suaves al hacer scroll.
  - Cierre del menú al hacer clic en enlaces.
  - Efecto simple en la barra superior al bajar.
*/

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".topbar__toggle");
  const menu = document.querySelector(".topbar__links");
  const topbar = document.querySelector(".topbar");
  const revealElements = document.querySelectorAll(".reveal");
  const indicador = document.querySelector(".scroll-indicator");

  // ============================
  // MENÚ RESPONSIVE
  // ============================
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      const abierto = menu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", abierto ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ============================
  // ANIMACIONES AL HACER SCROLL
  // ============================
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
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }

  // ============================
  // BARRA SUPERIOR AL HACER SCROLL
  // ============================
  function actualizarBarra() {
    if (!topbar) return;

    if (window.scrollY > 40) {
      topbar.classList.add("topbar--scrolled");
    } else {
      topbar.classList.remove("topbar--scrolled");
    }
  }

  actualizarBarra();
  window.addEventListener("scroll", actualizarBarra);

  // ============================
  // OCULTAR INDICADOR DE SCROLL
  // ============================
  function actualizarIndicador() {
    if (!indicador) return;

    if (window.scrollY > 120) {
      indicador.style.opacity = "0";
      indicador.style.pointerEvents = "none";
    } else {
      indicador.style.opacity = "1";
      indicador.style.pointerEvents = "auto";
    }
  }

  actualizarIndicador();
  window.addEventListener("scroll", actualizarIndicador);

  // ============================
  // ESCAPE CIERRA EL MENÚ
  // ============================
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && menuBtn) {
      menu.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});
