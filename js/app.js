// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
var activador = true;
var counter = 0;

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

const publicidadSN = new Producto(
	'ad',
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

const printResult = (quantity, precio, container) => {
	let value;
	const p = document.createElement('p');

	if (isNaN(quantity)) {
		value = 0;
	} else {
		value = quantity * precio;
	}
	p.textContent = `El costo es de: $ ${value}`;
	p.className = 'p';
	container.appendChild(p);
};

//FUNCIONALIDAD PARA ESTAMPADOS
document.getElementById('est').onclick = () => {
	let productosEst = Productos.filter((elemento) => elemento.tipo === 'EST');
	let inputEsta = document.getElementById('input-est');

	for (const array of productosEst) {
		$('.cards-estam').append(`
    	<div class="card" id="cardsest" >
      		<img src="${array.route}" class="card-img-top" alt="...">
      		<div class="card-body">
        		<h5 class="card-title">${array.nombre}</h5>
        		<p class="card-text">${array.description}</p>
        		<a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      	</div>
    	</div> `);
	}
	document.getElementById('est-shirts').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${camisetas.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.placeholder = `Ingresa la cantidad de ${camisetas.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputEsta.appendChild(label);
		inputEsta.appendChild(input);

		

		input.addEventListener('focusout', () => {
			$('.p').remove();
			camisetas.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, camisetas.precio, inputEsta);
			camisetas.restablecerPrecio();
		});
	};

	document.getElementById('est-cup').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${posillos.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${posillos.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputEsta.appendChild(label);
		inputEsta.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			posillos.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, posillos.precio, inputEsta);
			posillos.restablecerPrecio();
		});
	};

	document.getElementById('est-cap').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${gorras.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${gorras.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputEsta.appendChild(label);
		inputEsta.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			gorras.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, gorras.precio, inputEsta);
			gorras.restablecerPrecio();
		});
	};

	document.getElementById('clear').onclick = () => {
		$('.card').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};
};

// FUNCIONALIDAD PARA FOTOGRAFÍA
document.getElementById('foto').onclick = () => {
	let productosPh = Productos.filter((elemento) => elemento.tipo === 'PHO');
	let inputFoto = document.getElementById('input-foto');

	for (const array of productosPh) {
		$('.cards-pho').append(`
    <div class="card cardph" id="cardsfoto" ">
      <img src="${array.route}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${array.nombre}</h5>
        <p class="card-text">${array.description}</p>
        <a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      </div>
    </div> `);
	}

	document.getElementById('foto-d').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${fotografiaD.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${fotografiaD.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputFoto.appendChild(label);
		inputFoto.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			fotografiaD.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, fotografiaD.precio, inputFoto);
			fotografiaD.restablecerPrecio();
		});
	};

	document.getElementById('foto-i').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${fotografiaI.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${fotografiaI.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputFoto.appendChild(label);
		inputFoto.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			fotografiaI.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, fotografiaI.precio, inputFoto);
			fotografiaI.restablecerPrecio();
		});
	};

	document.getElementById('clear1').onclick = () => {
		$('.cardph').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};
};

// FUNCIONALIDAD PARA VIDEO
document.getElementById('video').onclick = () => {
	console.clear();

	let productosVi = Productos.filter((elemento) => elemento.tipo === 'VID');
	let inputVid = document.getElementById('input-vid');

	for (const array of productosVi) {
		$('.cards-vid').append(`
    <div class="card cardvi" id="cardsvid ">
      <img src="${array.route}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${array.nombre}</h5>
        <p class="card-text">${array.description}</p>
        <a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      </div>
    </div> `);
	}

	document.getElementById('video-gr').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${videoGr.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${videoGr.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputVid.appendChild(label);
		inputVid.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			videoGr.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, videoGr.precio, inputVid);
			videoGr.restablecerPrecio();
		});
	};

	document.getElementById('video-ed').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${videoEd.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${videoGr.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputVid.appendChild(label);
		inputVid.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			videoEd.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, videoEd.precio, inputVid);
			videoEd.restablecerPrecio();
		});
	};

	document.getElementById('video-ge').onclick = () => {
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${videoGe.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${videoGe.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputVid.appendChild(label);
		inputVid.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			videoGe.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, videoGe.precio, inputVid);
			videoGe.restablecerPrecio();
		});
	};

	document.getElementById('clear2').onclick = () => {
		$('.cardvi').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};
};

// FUNCIONALIDAD PARA PUBLICIDAD
document.getElementById('ads').onclick = () => {
	let productosAd = Productos.filter((elemento) => elemento.tipo === 'AD');
	let inputAd = document.getElementById('input-ad');

	for (const array of productosAd) {
		$('.cards-ad').append(`
    <div class="card cardad" id="cardsad" ">
      <img src="${array.route}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${array.nombre}</h5>
        <p class="card-text">${array.description}</p>
        <a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
      </div>
    </div> `);
	}

	document.getElementById('pub-b').onclick = () => {
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${publicidadB.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${publicidadB.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputAd.appendChild(label);
		inputAd.appendChild(input);

		input.addEventListener('focusout', () => {
			$('.p').remove();
			publicidadB.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, publicidadB.precio, inputAd);
			publicidadB.restablecerPrecio();
		});
	};

	document.getElementById('pub-sn').onclick = () => {
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}
		const input = document.createElement('input');
		const label = document.createElement('label');
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${publicidadSN.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.min = 1;
		input.placeholder = `Ingresa la cantidad de ${publicidadSN.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';
		inputAd.appendChild(label);
		inputAd.appendChild(input);

		input.addEventListener("keydown", function (e) {
			if (e.keyCode === 13) {  
				$('.p').remove();
				publicidadSN.sumaIva();
				if (input.value<0){
					input.value=0;
				}
				printResult(input.value, publicidadSN.precio, inputAd);
				publicidadSN.restablecerPrecio();
			}
		});

		input.addEventListener('focusout', () => {
			$('.p').remove();
			publicidadSN.sumaIva();
			if (input.value<0){
				input.value=0;
			}
			printResult(input.value, publicidadSN.precio, inputAd);
			publicidadSN.restablecerPrecio();
		});
	};

	document.getElementById('clear3').onclick = () => {
		$('.cardad').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};
};
