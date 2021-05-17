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

//Clase para construir los objetos
class Producto {
  constructor(nombre, precio, iva, descuento) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.iva = parseFloat(iva);
      this.descuento = parseFloat(descuento);
  }

  //funcion para calcular el precio al aumentar el iva
  sumaIva() {
      this.precio = this.precio * (1 + (this.iva/100));
  }

  descontar() {
    this.precio = this.precio * ((this.descuento/100));
  }
}

/* const camisetas = new Producto("Camisetas","5000","19","0");
const posillos = new Producto("Posillos","2000","19","0");
const gorras = new Producto("Gorras","3000","19","0");
const platos = new Producto("Platos","2000","19","0"); */

let preciosProductosEst = [];



console.table(preciosProductosEst);

document.getElementById("est-shirts").onclick= () => {
  const camisetas = new Producto("Camisetas","5000","19","0");
  preciosProductosEst.push(camisetas);
  let cantidad = parseInt(prompt(`¿Cuántas ${camisetas.nombre.toLowerCase()} quieres estampar?`));
  camisetas.sumaIva();

  let myModalEl = document.getElementById('estampados')
  let modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
  modal.hide();

  alert(`El costo es de: $ ${cantidad*camisetas.precio}`);
} 

document.getElementById("est-cup").onclick= () => {
  const posillos = new Producto("Posillos","2000","19","0");
  preciosProductosEst.push(posillos);
  let cantidad = parseInt(prompt(`¿Cuántas ${posillos.nombre.toLowerCase()} quieres estampar?`));
  posillos.sumaIva();
  
  let myModalEl = document.getElementById('estampados')
  let modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
  modal.hide();

  alert(`El costo es de: $ ${cantidad*posillos.precio}`);
} 
  
document.getElementById("est-cap").onclick= () => {
  const gorras = new Producto("Gorras","3000","19","0");
  preciosProductosEst.push(gorras);
  let cantidad = parseInt(prompt(`¿Cuántas ${gorras.nombre.toLowerCase()} quieres estampar?`));
  gorras.sumaIva();
  
  let myModalEl = document.getElementById('estampados')
  let modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
  modal.hide();
  
  alert(`El costo es de: $ ${cantidad*gorras.precio}`);
} 

document.getElementById("est-dish").onclick= () => {
  const platos = new Producto("Platos","2000","19","0");
  preciosProductosEst.push(platos);
  let cantidad = parseInt(prompt(`¿Cuántas ${platos.nombre.toLowerCase()} quieres estampar?`));
  platos.sumaIva();
  
  let myModalEl = document.getElementById('estampados')
  let modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
  modal.hide();
  
  alert(`El costo es de: $ ${cantidad*platos.precio}`);
} 


  



