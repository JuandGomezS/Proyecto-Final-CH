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
  console.clear();
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
};

//Clase para construir los objetos
class Producto {
  constructor(tipo, nombre, precio, iva, descuento) {
    this.tipo = tipo.toUpperCase();
    this.nombre = nombre.toUpperCase();
    this.price = parseFloat(precio);
    this.precio = parseFloat(precio);
    this.iva = parseFloat(iva);
    this.descuento = parseFloat(descuento);
  }

  //funcion para calcular el precio al aumentar el iva
  sumaIva() {
    this.precio = this.precio * (1 + this.iva / 100);
  }

  descontar() {
    this.precio = this.precio * (this.descuento / 100);
  }

  restablecerPrecio() {
    this.precio = this.price;
  }
}

let Productos = [];

//productos de estampados
const camisetas = new Producto("est", "Camisetas", "5000", "19", "0");
const posillos = new Producto("est", "Posillos", "2000", "19", "0");
const gorras = new Producto("est", "Gorras", "3000", "19", "0");
const platos = new Producto("est", "Platos", "2000", "19", "0");

//productos de fotografía
const fotografiaD = new Producto("pho", "Fotografía digital", "5000", "19", "0");
const fotografiaI = new Producto("pho", "Fotografía Impresa", "7000", "19", "0");

//productos de video
const videoGr = new Producto("vid", "Video Digital", "25000", "19", "0");
const videoEd= new Producto("vid", "Video Digital", "30000", "19", "0");
const videoGe = new Producto("vid", "Video Digital", "50000", "19", "0");

//Publicidad
const publicidadB = new Producto("ad", "Branding", "50000", "19", "0");
const publicidadSN = new Producto("ad", "Redes Sociales", "100000", "19", "0");

Productos.push(camisetas, posillos, gorras, platos, fotografiaD, fotografiaI, videoGr,videoEd, videoGe, publicidadB, publicidadSN);





//FUNCIONALIDAD PARA ESTAMPADOS
document.getElementById("est").onclick = () => {
  console.clear();
  console.table(Productos);
  let productosEst = Productos.filter(elemento => elemento.tipo === "EST");
  console.table(productosEst);
  
  productosEst.sort(function (a, b) {
    if (a.precio < b.precio){
      return 1;
    }
    if (a.precio > b.precio){
      return -1;
    }
    return 0;
  });
  console.table(productosEst);
};

document.getElementById("est-shirts").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántas ${camisetas.nombre.toLowerCase()} quieres estampar?`));
  camisetas.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * camisetas.precio}`);
  }
  camisetas.restablecerPrecio();
};

document.getElementById("est-cup").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántas ${posillos.nombre.toLowerCase()} quieres estampar?`));
  posillos.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * posillos.precio}`);
  }
  posillos.restablecerPrecio();
};

document.getElementById("est-cap").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántas ${gorras.nombre.toLowerCase()} quieres estampar?`));
  gorras.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * gorras.precio}`);
  }
  gorras.restablecerPrecio();
};

document.getElementById("est-dish").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántas ${platos.nombre.toLowerCase()} quieres estampar?`));
  platos.sumaIva();  
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * platos.precio}`);
  }
  platos.restablecerPrecio();
};

// FUNCIONALIDAD PARA FOTOGRAFÍA
document.getElementById("foto").onclick = () => {
  console.clear();
  console.table(Productos);
  let productosPh = Productos.filter(elemento => elemento.tipo === "PHO");
  console.table(productosPh);
  
  productosPh.sort(function (a, b) {
    if (a.precio < b.precio){
      return 1;
    }
    if (a.precio > b.precio){
      return -1;
    }
    return 0;
  });
  console.table(productosPh);
};

document.getElementById("foto-d").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántas ${fotografiaD.nombre.toLowerCase()} deseas?`));
  fotografiaD.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * fotografiaD.precio}`);
  }
  fotografiaD.restablecerPrecio();
};

document.getElementById("foto-i").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántas ${fotografiaI.nombre.toLowerCase()} deseas?`));
  fotografiaI.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * fotografiaI.precio}`);
  }
  fotografiaI.restablecerPrecio();
};

// FUNCIONALIDAD PARA VIDEO
document.getElementById("video").onclick = () => {
  console.clear();
  console.table(Productos);
  let productosVi = Productos.filter(elemento => elemento.tipo === "VID");
  console.table(productosVi);
  
  productosVi.sort(function (a, b) {
    if (a.precio < b.precio){
      return 1;
    }
    if (a.precio > b.precio){
      return -1;
    }
    return 0;
  });
  console.table(productosVi);
};

document.getElementById("video-gr").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántos minutos de ${videoGr.nombre.toLowerCase()} en grabación deseas?`));
  videoGr.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * videoGr.precio}`);
  }
  videoGr.restablecerPrecio();
};

document.getElementById("video-ed").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántos minutos de ${videoEd.nombre.toLowerCase()} en edición deseas?`));
  videoEd.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * videoEd.precio}`);
  }
  videoEd.restablecerPrecio();
};

document.getElementById("video-ge").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántos minutos de ${videoGe.nombre.toLowerCase()} en edición y grabación deseas?`));
  videoGe.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * videoGe.precio}`);
  }
  videoGe.restablecerPrecio();
};

// FUNCIONALIDAD PARA PUBLICIDAD
document.getElementById("ads").onclick = () => {
  console.clear();
  console.table(Productos);
  let productosAd = Productos.filter(elemento => elemento.tipo === "AD");
  console.table(productosAd);
  
  productosAd.sort(function (a, b) {
    if (a.precio < b.precio){
      return 1;
    }
    if (a.precio > b.precio){
      return -1;
    }
    return 0;
  });
  console.table(productosAd);
};

document.getElementById("pub-b").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántos servicios de ${publicidadB.nombre.toLowerCase()} deseas?`));
  publicidadB.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * publicidadB.precio}`);
  }
  publicidadB.restablecerPrecio();
};

document.getElementById("pub-sn").onclick = () => {
  let cantidad = parseInt(prompt(`¿Cuántos servicios de publicidad en ${publicidadSN.nombre.toLowerCase()} deseas?`));
  console.log(cantidad)
  publicidadSN.sumaIva();
  if (isNaN(cantidad)){
    alert(`El costo es de: $ ${0}`);
  }
  else{
    alert(`El costo es de: $ ${cantidad * publicidadSN.precio}`);
  }
  
  publicidadSN.restablecerPrecio();
};