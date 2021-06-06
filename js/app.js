// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
var activador = true;

btnMenu.addEventListener('click', (event) => {
	if (activador) {
		menu.style.left = '0%';
		menu.style.transition = '0.5s';
		activador = false;
	} else {
		activador = true;
		menu.style.left = '-100%';
	}
});

let enlaces = document.querySelectorAll('.lists li a');

function setLink(element) {
	menu.style.left = '-100%';
	activador = true;
	enlaces.forEach((link) => {
		link.classList.remove('active');
	});
	element.classList.add('active');
}

enlaces.forEach((element) => {
	element.addEventListener('click', (event) => {
		setLink(event.target);
	});
});

window.onload = () => {
	console.clear();
	const hash = window.location.hash;
	if (hash === '') {
		setLink(enlaces[0]);
	} else {
		enlaces.forEach((enlace) => {
			const link = enlace.href;
			if (link.substring(link.lastIndexOf('#'), link.length) == hash) {
				setLink(enlace);
			}
		});
	}
};

//Clase para construir los objetos
class Producto {
	constructor(tipo, nombre, precio, iva, descuento, route, description, id) {
		this.tipo = tipo.toUpperCase();
		this.nombre = nombre.toUpperCase();
		this.price = parseFloat(precio);
		this.precio = parseFloat(precio);
		this.iva = parseFloat(iva);
		this.descuento = parseFloat(descuento);
		this.route = route;
		this.description = description;
		this.id = id;
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
const camisetas = new Producto(
	'est',
	'Camisetas',
	'5000',
	'19',
	'0',
	'../img/estpre.jpg',
	'Camisetas en algodón estampadas con alta calidad.',
	'est-shirts'
);
const posillos = new Producto(
	'est',
	'Posillos',
	'2000',
	'19',
	'0',
	'../img/est4.jpg',
	'Posillos en cerámica personalizables a tu gusto.',
	'est-cup'
);
const gorras = new Producto(
	'est',
	'Gorras',
	'3000',
	'19',
	'0',
	'../img/estprego.jpg',
	'Gorras o cachuchas personalizables a tu gusto.',
	'est-cap'
);

//productos de fotografía
const fotografiaD = new Producto(
	'pho',
	'Fotografía digital',
	'5000',
	'19',
	'0',
	'../img/fotopre.jpg',
	'Fotografía en formato digital, se entrega en usb o cloud.',
	'foto-d'
);
const fotografiaI = new Producto(
	'pho',
	'Fotografía Impresa',
	'7000',
	'19',
	'0',
	'../img/fotopreim.jpg',
	'Fotografía impresa en papel fotográfico de alta calidad.',
	'foto-i'
);

//productos de video
const videoGr = new Producto(
	'vid',
	'Grabación de video digital',
	'25000',
	'19',
	'0',
	'../img/grabvid.jpg',
	'Grabación de video digital en FHD con equipos de alta tecnología.',
  'video-gr'
);
const videoEd = new Producto(
	'vid',
	'Edición de video digital',
	'30000',
	'19',
	'0',
	'../img/edivid.jpg',
	'Edición de video en software de alta fidelidad.',
  'video-ed'
);
const videoGe = new Producto(
	'vid',
	'Grabación y edición',
	'50000',
	'19',
	'0',
	'../img/combo.jpg',
	'Combo edición y grabación, se entrega en usb o cloud.',
	'video-ge'
);

//Publicidad
const publicidadB = new Producto(
  'ad',
  'Branding',
  '50000',
  '19',
  '0',
  '../img/branding.jpg',
  'Definición y contrrucción de marca según tus necesidades.',
  'pub-b'
);

const publicidadSN = new Producto('ad',
  'Redes Sociales',
  '100000',
  '19',
  '0',
  '../img/socialn.jpg',
  'Diseño grafico para campañas en redes sociales.',
  'pub-sn'
);

Productos.push(
	camisetas,
	posillos,
	gorras,
	fotografiaD,
	fotografiaI,
	videoGr,
	videoEd,
	videoGe,
	publicidadB,
	publicidadSN
);

const filtrar = (array, type) => {
	array.filter((elemento) => elemento.tipo === type);
};

const validate = (quantity, precio) => {
	if (isNaN(quantity)) {
		alert(`El costo es de: $ ${0}`);
	} else {
		alert(`El costo es de: $ ${cantidad * precio}`);
	}
};

//FUNCIONALIDAD PARA ESTAMPADOS
document.getElementById('est').onclick = () => {
	console.table(Productos);
	let productosEst = Productos.filter((elemento) => elemento.tipo === 'EST');
	console.table(productosEst);

	for (const array of productosEst) {
		$('.cards-estam').append(`
    <div class="card" id="cardsest" ">
      <img src="${array.route}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${array.nombre}</h5>
        <p class="card-text">${array.description}</p>
        <a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      </div>
    </div> `);
	}
	document.getElementById('est-shirts').onclick = () => {
		let cantidad = parseInt(prompt(`¿Cuántas ${camisetas.nombre.toLowerCase()} quieres estampar?`));
		camisetas.sumaIva();
		validate(cantidad, camisetas.precio);
		camisetas.restablecerPrecio();
	};
	document.getElementById('est-cup').onclick = () => {
		let cantidad = parseInt(prompt(`¿Cuántas ${posillos.nombre.toLowerCase()} quieres estampar?`));
		posillos.sumaIva();
		validate(cantidad, posillos.precio);
		posillos.restablecerPrecio();
	};

	document.getElementById('est-cap').onclick = () => {
		let cantidad = parseInt(prompt(`¿Cuántas ${gorras.nombre.toLowerCase()} quieres estampar?`));
		gorras.sumaIva();
		validate(cantidad, gorras.precio);
		gorras.restablecerPrecio();
	};

	document.getElementById('clear').onclick = () => {
		$('.card').remove();
	};
};

// FUNCIONALIDAD PARA FOTOGRAFÍA
document.getElementById('foto').onclick = () => {
	console.clear();
	console.table(Productos);
	let productosPh = Productos.filter((elemento) => elemento.tipo === 'PHO');
	console.table(productosPh);
	for (const array of productosPh) {
		$('.cards-pho').append(`
    <div class="card cardph" id="cardsest" ">
      <img src="${array.route}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${array.nombre}</h5>
        <p class="card-text">${array.description}</p>
        <a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      </div>
    </div> `);
	}

	document.getElementById('foto-d').onclick = () => {
		let cantidad = parseInt(prompt(`¿Cuántas ${fotografiaD.nombre.toLowerCase()} deseas?`));
		fotografiaD.sumaIva();
		validate(cantidad, fotografiaD.precio);
		fotografiaD.restablecerPrecio();
	};

	document.getElementById('foto-i').onclick = () => {
		let cantidad = parseInt(prompt(`¿Cuántas ${fotografiaI.nombre.toLowerCase()} deseas?`));
		fotografiaI.sumaIva();
		validate(cantidad, fotografiaI.precio);
		fotografiaI.restablecerPrecio();
	};

	document.getElementById('clear1').onclick = () => {
		$('.cardph').remove();
	};
};

// FUNCIONALIDAD PARA VIDEO
document.getElementById('video').onclick = () => {
	console.clear();
	
	let productosVi = Productos.filter((elemento) => elemento.tipo === 'VID');
	

  for (const array of productosVi) {
		$('.cards-vid').append(`
    <div class="card cardvi" id="cardsest" ">
      <img src="${array.route}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${array.nombre}</h5>
        <p class="card-text">${array.description}</p>
        <a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      </div>
    </div> `);
	}

  document.getElementById('video-gr').onclick = () => {
    let cantidad = parseInt(prompt(`¿Cuántos minutos de ${videoGr.nombre.toLowerCase()} en grabación deseas?`));
    videoGr.sumaIva();
    validate(cantidad, videoGr.precio);
    videoGr.restablecerPrecio();
  };
  
  document.getElementById('video-ed').onclick = () => {
    let cantidad = parseInt(prompt(`¿Cuántos minutos de ${videoEd.nombre.toLowerCase()} en edición deseas?`));
    videoEd.sumaIva();
    validate(cantidad, videoEd.precio);
    videoEd.restablecerPrecio();
  };
  
  document.getElementById('video-ge').onclick = () => {
    let cantidad = parseInt(
      prompt(`¿Cuántos minutos de ${videoGe.nombre.toLowerCase()} en edición y grabación deseas?`)
    );
    videoGe.sumaIva();
    validate(cantidad, videoGe.precio);
    videoGe.restablecerPrecio();
  };

  document.getElementById('clear2').onclick = () => {
		$('.cardvi').remove();
	};
};



// FUNCIONALIDAD PARA PUBLICIDAD
document.getElementById('ads').onclick = () => {
	console.clear();
	console.table(Productos);
	let productosAd = Productos.filter((elemento) => elemento.tipo === 'AD');
	console.table(productosAd);
  for (const array of productosAd) {
		$('.cards-ad').append(`
    <div class="card cardad" id="cardsest" ">
      <img src="${array.route}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${array.nombre}</h5>
        <p class="card-text">${array.description}</p>
        <a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      </div>
    </div> `);
	}

  document.getElementById('pub-b').onclick = () => {
    let cantidad = parseInt(prompt(`¿Cuántos servicios de ${publicidadB.nombre.toLowerCase()} deseas?`));
    publicidadB.sumaIva();
    validate(cantidad, publicidadB.precio);
    publicidadB.restablecerPrecio();
  };
  
  document.getElementById('pub-sn').onclick = () => {
    let cantidad = parseInt(prompt(`¿Cuántos servicios de publicidad en ${publicidadSN.nombre.toLowerCase()} deseas?`));
    console.log(cantidad);
    publicidadSN.sumaIva();
    validate(cantidad, publicidadSN.precio);
    publicidadSN.restablecerPrecio();
  };

  document.getElementById('clear3').onclick = () => {
		$('.cardad').remove();
	};
};


