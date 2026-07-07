document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".topbar__toggle");
  const menu = document.querySelector(".topbar__links");
  const topbar = document.querySelector(".topbar");
  const revealElements = document.querySelectorAll(".reveal");
  const indicador = document.querySelector(".scroll-indicator");
  const progressBar = document.querySelector(".reading-progress__bar");
  const backToTop = document.querySelector(".back-to-top");
  const counters = document.querySelectorAll(".counter");

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }

  function animarContador(elemento) {
    const objetivo = Number(elemento.dataset.target || 0);
    const duracion = 900;
    const inicio = performance.now();

    function actualizar(tiempoActual) {
      const avance = Math.min((tiempoActual - inicio) / duracion, 1);
      const valor = Math.floor(avance * objetivo);
      elemento.textContent = valor;

      if (avance < 1) {
        requestAnimationFrame(actualizar);
      } else {
        elemento.textContent = objetivo;
      }
    }

    requestAnimationFrame(actualizar);
  }

  function iniciarContadores() {
    counters.forEach(function (counter) {
      if (counter.dataset.started === "true") return;
      counter.dataset.started = "true";
      animarContador(counter);
    });
  }

  if ("IntersectionObserver" in window && counters.length > 0) {
    const counterObserver = new IntersectionObserver(
      function (entries, observerInstance) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (entry.target.dataset.started !== "true") {
              entry.target.dataset.started = "true";
              animarContador(entry.target);
            }
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px 120px 0px" }
    );

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });

    // Respaldo: si por cualquier razón el observer no dispara, igual muestra los números.
    setTimeout(function () {
      counters.forEach(function (counter) {
        if (counter.textContent === "0" && counter.dataset.started !== "true") {
          counter.dataset.started = "true";
          counter.textContent = counter.dataset.target || "0";
        }
      });
    }, 1600);
  } else {
    counters.forEach(function (counter) {
      counter.textContent = counter.dataset.target || "0";
    });
  }

  function actualizarScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progreso = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = progreso + "%";
    }

    if (topbar) {
      topbar.classList.toggle("topbar--scrolled", scrollTop > 40);
    }

    if (indicador) {
      indicador.style.opacity = scrollTop > 120 ? "0" : "1";
      indicador.style.pointerEvents = scrollTop > 120 ? "none" : "auto";
    }

    if (backToTop) {
      backToTop.classList.toggle("is-visible", scrollTop > 600);
    }
  }

  actualizarScroll();
  window.addEventListener("scroll", actualizarScroll);

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && menuBtn) {
      menu.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});
