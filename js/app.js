// Navegation Menu
let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
var activador = true;

btnMenu.addEventListener("click", (event) => {
  if (activador) {
    menu.style.left = "0%";
    menu.style.transition = "0.5s";
    activador = false;
  } else {
    activador = true;
    menu.style.left = "-100%";
  }
});

let enlaces = document.querySelectorAll(".lists li a");

function setLink(element) {
  menu.style.left = "-100%";
  activador = true;
  enlaces.forEach((link) => {
    link.classList.remove("active");
  });
  element.classList.add("active");
}

enlaces.forEach((element) => {
  element.addEventListener("click", (event) => {
    setLink(event.target);
  });
});

window.onload = () => {
  
  const hash = window.location.hash;
  if (hash === "") {
    setLink(enlaces[0]);
  } else {
    enlaces.forEach((enlace) => {
      const link = enlace.href;
      if (link.substring(link.lastIndexOf("#"), link.length) == hash) {
        setLink(enlace);
      }
    });
  }
}