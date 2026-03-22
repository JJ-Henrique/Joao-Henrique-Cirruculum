// Mensagem de boas-vindas
function mostrarMensagem() {
  alert("Bem-vindo ao meu portfólio!");
}

// rolamento
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 60;

  links.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// fade
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// barra de hab
const skills = document.querySelectorAll(".progresso");

window.addEventListener("scroll", () => {
  skills.forEach((bar) => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
