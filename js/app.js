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

//Array que contendrá a los productos
let Productos = [];

var data = `
{
	"camisetas": {
	  "tipo": "est",
	  "nombre": "Camisetas",
	  "precio": "5000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/estpre.jpg",
	  "description": "Camisetas en algodón estampadas con alta calidad.",
	  "id": "est-shirts"
	},
	"posillos": {
	  "tipo": "est",
	  "nombre": "Posillos",
	  "precio": "2000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/est4.jpg",
	  "description": "Posillos en cerámica personalizables a tu gusto.",
	  "id": "est-cup"
	},
	"gorras": {
	  "tipo": "est",
	  "nombre": "Gorras",
	  "precio": "3000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/estprego.jpg",
	  "description": "Gorras o cachuchas personalizables a tu gusto.",
	  "id": "est-cap"
	},
	"fotografiaD": {
	  "tipo": "pho",
	  "nombre": "Fotografía Digital",
	  "precio": "5000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/fotopre.jpg",
	  "description": "Fotografía en formato digital, se entrega en usb o cloud.",
	  "id": "foto-d"
	},
	"fotografiaI": {
	  "tipo": "pho",
	  "nombre": "Fotografía Impresa",
	  "precio": "7000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/fotopreim.jpg",
	  "description": "Fotografía impresa en papel fotográfico de alta calidad.",
	  "id": "foto-i"
	},
	"videoGr": {
	  "tipo": "vid",
	  "nombre": "Grabación de video digital",
	  "precio": "25000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/grabvid.jpg",
	  "description": "Grabación de video digital en FHD con equipos de alta tecnología.",
	  "id": "video-gr"
	},
	"videoEd": {
	  "tipo": "vid",
	  "nombre": "Edición de video digital",
	  "precio": "30000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/edivid.jpg",
	  "description": "Edición de video en software de alta fidelidad.",
	  "id": "video-ed"
	},
	"videoGe": {
	  "tipo": "vid",
	  "nombre": "Grabación y edición",
	  "precio": "50000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/combo.jpg",
	  "description": "Combo edición y grabación, se entrega en usb o cloud.",
	  "id": "video-ge"
	},
	"publicidadB": {
	  "tipo": "ad",
	  "nombre": "Branding",
	  "precio": "50000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/branding.jpg",
	  "description": "Definición y construcción de marca según tus necesidades.",
	  "id": "pub-b"
	},
	"publicidadSN": {
	  "tipo": "ad",
	  "nombre": "Redes sociales",
	  "precio": "100000",
	  "iva": "19",
	  "descuento": "0",
	  "ruta": "../img/socialn.jpg",
	  "description": "Diseño grafico para campañas en redes sociales.",
	  "id": "pub-sn"
	}
}`;

//convertimos en array el json que contiene los datos
const json = JSON.parse(data);
const array = Object.values(json);




//Creamos objetos de tipo producto según tipo.
//Productos de estampados
const camisetas = new Producto(array[0].tipo,array[0].nombre, array[0].precio,array[0].iva,array[0].descuento,array[0].ruta,array[0].description,array[0].id);
const posillos = new Producto(array[1].tipo,array[1].nombre, array[1].precio,array[1].iva,array[1].descuento,array[1].ruta,array[1].description,array[1].id);
const gorras = new Producto(array[2].tipo,array[2].nombre, array[2].precio,array[2].iva,array[2].descuento,array[2].ruta,array[2].description,array[2].id);

//productos de fotografía
const fotografiaD = new Producto(array[3].tipo,array[3].nombre, array[3].precio,array[3].iva,array[3].descuento,array[3].ruta,array[3].description,array[3].id);
const fotografiaI = new Producto(array[4].tipo,array[4].nombre, array[4].precio,array[4].iva,array[4].descuento,array[4].ruta,array[4].description,array[4].id);

//productos de video
const videoGr = new Producto(array[5].tipo,array[5].nombre, array[5].precio,array[5].iva,array[5].descuento,array[5].ruta,array[5].description,array[5].id);
const videoEd = new Producto(array[6].tipo,array[6].nombre, array[6].precio,array[6].iva,array[6].descuento,array[6].ruta,array[6].description,array[6].id);
const videoGe = new Producto(array[7].tipo,array[7].nombre, array[7].precio,array[7].iva,array[7].descuento,array[7].ruta,array[7].description,array[7].id);

//Productos de Publicidad
const publicidadB = new Producto(array[8].tipo,array[8].nombre, array[8].precio,array[8].iva,array[8].descuento,array[8].ruta,array[8].description,array[8].id);
const publicidadSN = new Producto(array[9].tipo,array[9].nombre, array[9].precio,array[9].iva,array[9].descuento,array[9].ruta,array[9].description,array[9].id);

//Push de los objetos producto al array Productos
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

//Función para la impresión del costo de la consulta presupuestal que retorna value para su almacenamiento
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

	return value
};

//FUNCIONALIDAD PARA ESTAMPADOS

//Evento on click para productos de estampados, en el cual se ejecuta el DOM creando cards que toman sus valores al recorrer un array que surge
//del filtrado de los elementos de tipo est
document.getElementById('est').onclick = () => {
	//Filtro de objetos de tipo est
	let productosEst = Productos.filter((elemento) => elemento.tipo === 'EST');

	//Seleccion de div que contendrá el grupo de cards
	let inputEsta = document.getElementById('input-est');

	//generación de cards al recorrer el array productosEst
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

	//Evento onclick que se ejecuta al oprimir el botón presupuestar
	document.getElementById('est-shirts').onclick = () => {

		//se borran el input, label y p que se generan al consultar un presupuesto
		$('.iest').remove();
		$('.lab').remove();
		$('.p').remove();

		//Se implementa un contador que permite saber si se oprime más de una vez el botón presupuestar para no imprimir más de una vez el input y el label
		counter += 1;
		if (counter >= 1) {
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		}

		//Creación de elementos que irán en la respuesta de consulta presupuestal
		const input = document.createElement('input');
		const label = document.createElement('label');

		//Asignación de caracteristicas de los elementos creados
		label.for = 'shirtsq';
		label.textContent = `Cantidad de ${camisetas.nombre}:`;
		label.className = 'lab';
		input.className = 'inp';
		input.placeholder = `Ingresa la cantidad de ${camisetas.nombre} que deseas.`;
		input.type = 'number';
		input.name = 'shirtsq';

		//Se agregan al div que contiene la respuesta inputEsta
		inputEsta.appendChild(label);
		inputEsta.appendChild(input);

		//Evento focusout que genera la respuesta a la consulta de presupuesto y almacena en local storage
		input.addEventListener('focusout', () => {
			//Se remueven respuestas previas
			$('.p').remove();
			camisetas.sumaIva();

			//Se hace validación de que no se ingresen valores negativos
			if (input.value < 0) {
				input.value = 0;
			}

			//Se genera respuesta y almacena en el local storage: Cantidad, precio, nombre
			let valor=printResult(input.value, camisetas.precio, inputEsta);
			let save = [camisetas.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('shirts', saveString);

			//Se reestablece el precio para no sumar el iva nuevamente
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor = printResult(input.value, posillos.precio, inputEsta);
			let save = [posillos.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('cups', saveString);
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, gorras.precio, inputEsta);
			let save = [gorras.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('caps', saveString);
			gorras.restablecerPrecio();
		});
	};

	document.getElementById('clear').onclick = () => {
		$('.card').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};
	var myModalEl = document.getElementById('estampados1')
	myModalEl.addEventListener('hidden.bs.modal', function (event) {
		$('.card').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
		console.log("si funciona")
	})
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, fotografiaD.precio, inputFoto);
			let save = [fotografiaD.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('fdigital', saveString);
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, fotografiaI.precio, inputFoto);
			let save = [fotografiaI.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('fimpresa', saveString);
			fotografiaI.restablecerPrecio();
		});
	};

	document.getElementById('clear1').onclick = () => {
		$('.cardph').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};
	var myModalEl = document.getElementById('foto1')
	myModalEl.addEventListener('hidden.bs.modal', function (event) {
		$('.cardph').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
		console.log("si funciona")
	})
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, videoGr.precio, inputVid);
			let save = [videoGr.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('vidgrabacion', saveString);
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, videoEd.precio, inputVid);
			let save = [videoEd.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('videdicion', saveString);
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, videoGe.precio, inputVid);
			let save = [videoGe.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('vigraed', saveString);
			videoGe.restablecerPrecio();
		});
	};

	document.getElementById('clear2').onclick = () => {
		$('.cardvi').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};

	var myModalEl = document.getElementById('video1')
	myModalEl.addEventListener('hidden.bs.modal', function (event) {
		$('.cardvi').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
		console.log("si funciona")
	})
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
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, publicidadB.precio, inputAd);
			let save = [publicidadB.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('pubb', saveString);
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

		/* input.addEventListener('keydown', function (e) {
			if (e.keyCode === 13) {
				$('.p').remove();
				publicidadSN.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				printResult(input.value, publicidadSN.precio, inputAd);
				publicidadSN.restablecerPrecio();
			}
		}); */

		input.addEventListener('focusout', () => {
			$('.p').remove();
			publicidadSN.sumaIva();
			if (input.value < 0) {
				input.value = 0;
			}
			let valor=printResult(input.value, publicidadSN.precio, inputAd);
			let save = [publicidadSN.nombre,input.value,valor];
			const saveString = JSON.stringify(save);
			localStorage.setItem('pubsn', saveString);
			publicidadSN.restablecerPrecio();
		});
	};

	document.getElementById('clear3').onclick = () => {
		$('.cardad').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
	};

	var myModalEl = document.getElementById('pub1')
	myModalEl.addEventListener('hidden.bs.modal', function (event) {
		$('.cardad').remove();
		$('.inp').remove();
		$('.lab').remove();
		$('.p').remove();
		console.log("si funciona")
	})	
};

