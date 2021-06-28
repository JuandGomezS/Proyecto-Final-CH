// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let recBtn = document.getElementById('recordBtn');
var activador = true;
let ll = localStorage.length;
let totalPrice = 0;
let counter = 0;
let screenSize =screen.width;
let arrayrecord = [];

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



window.onload = async () => {
	let array = [];
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
	await $.getJSON('../data/datos.json', (response, estado) => {
		if (estado === 'success') {
			let json = response;
			let array1 = Object.values(json);
			array = array1;
		}
	});
	logica(array);
	responsive(screenSize)
};

function responsive(s) {
	if (s<997){
		let modales =document.querySelectorAll('[data-class="responsive"]');
		document.getElementById('menumodal').className = 'modal-body d-flex flex-column justify-content-center align-items-center';
		modales.forEach((value)=>{
			value.className = 'modal fade modal-dialog modal-dialog-scrollable';
		})
	}
}

function logica(array) {
	//Array que contendrá a los productos
	let Productos = [];

	//Creamos objetos de tipo producto según tipo.
	//Productos de estampados
	let elemento = array.shift();

	const camisetas = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	const posillos = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	const gorras = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	//productos de fotografía
	const fotografiaD = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	const fotografiaI = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	//productos de video
	const videoGr = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	const videoEd = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	const videoGe = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	//Productos de Publicidad
	elemento = array.shift();
	const publicidadB = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

	elemento = array.shift();
	const publicidadSN = new Producto(
		elemento.tipo,
		elemento.nombre,
		elemento.precio,
		elemento.iva,
		elemento.descuento,
		elemento.ruta,
		elemento.description,
		elemento.id
	);

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

		return value;
	};

	//FUNCIONALIDAD PARA ESTAMPADOS

	//Evento on click para productos de estampados, en el cual se ejecuta el DOM creando cards que toman sus valores al recorrer un array que surge
	//del filtrado de los elementos de tipo est
	document.getElementById('est').onclick = () => {
		//Agreguemos <h3> con jQuery ocultos con  style="display: none;"

		//Filtro de objetos de tipo est
		let productosEst = Productos.filter((elemento) => elemento.tipo === 'EST');

		//Seleccion de div que contendrá el grupo de cards
		let inputEsta = document.getElementById('input-est');

		//generación de cards al recorrer el array productosEst
		for (const array of productosEst) {
			$('.cards-estam').append(`
		<div class="card" id="cardsest" style="display:none" >
			<img src="${array.route}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${array.nombre}</h5>
				<p class="card-text">${array.description}</p>
				<a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
		</div>
		</div> `);
		}
		$('.card').fadeIn(1000).animate({ top: '1rem' }).animate({ top: '0rem' });

		//Evento onclick que se ejecuta al oprimir el botón presupuestar
		document.getElementById('est-shirts').onclick = (event) => {
			event.preventDefault();
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
			input.focus();

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
				let valor = printResult(input.value, camisetas.precio, inputEsta);
				let save = [camisetas.nombre, input.value, valor, camisetas.route];
				const saveString = JSON.stringify(save);
				localStorage.setItem('shirts', saveString);

				//Se reestablece el precio para no sumar el iva nuevamente
				camisetas.restablecerPrecio();
			});
		};

		document.getElementById('est-cup').onclick = (event) => {

			event.preventDefault();
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
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				posillos.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, posillos.precio, inputEsta);
				let save = [posillos.nombre, input.value, valor, posillos.route];
				const saveString = JSON.stringify(save);
				localStorage.setItem('cups', saveString);
				posillos.restablecerPrecio();
			});
		};

		document.getElementById('est-cap').onclick = (event) => {
			event.preventDefault();
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
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				gorras.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, gorras.precio, inputEsta);
				let save = [gorras.nombre, input.value, valor, gorras.route];
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
		var myModalEl = document.getElementById('estampados1');
		myModalEl.addEventListener('hidden.bs.modal', function (event) {
			$('.card').remove();
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
			console.log('si funciona');
		});
	};

	// FUNCIONALIDAD PARA FOTOGRAFÍA
	document.getElementById('foto').onclick = () => {
		let productosPh = Productos.filter((elemento) => elemento.tipo === 'PHO');
		let inputFoto = document.getElementById('input-foto');

		for (const array of productosPh) {
			$('.cards-pho').append(`
		<div class="card cardph" id="cardsfoto" style= "display:none;">
		<img src="${array.route}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${array.nombre}</h5>
			<p class="card-text">${array.description}</p>
			<a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
		</div>
		</div> `);
		}
		$('.card').fadeIn(1000).animate({ top: '1rem' }).animate({ top: '0rem' });

		document.getElementById('foto-d').onclick = (event) => {
			event.preventDefault();
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
			label.textContent = `Cantidad de fotografías digitales:`;
			label.className = 'lab';
			input.className = 'inp';
			input.min = 1;
			input.placeholder = `Ingresa la cantidad de fotografías digitales que deseas.`;
			input.type = 'number';
			input.name = 'shirtsq';
			inputFoto.appendChild(label);
			inputFoto.appendChild(input);
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				fotografiaD.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, fotografiaD.precio, inputFoto);
				let save = [fotografiaD.nombre, input.value, valor, fotografiaD.route];
				const saveString = JSON.stringify(save);
				localStorage.setItem('fdigital', saveString);
				fotografiaD.restablecerPrecio();
			});
		};

		document.getElementById('foto-i').onclick = (event) => {
			event.preventDefault();
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
			label.textContent = `Cantidad de fotografías impresas:`;
			label.className = 'lab';
			input.className = 'inp';
			input.min = 1;
			input.placeholder = `Ingresa la cantidad de fotografías impresas que deseas.`;
			input.type = 'number';
			input.name = 'shirtsq';
			inputFoto.appendChild(label);
			inputFoto.appendChild(input);
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				fotografiaI.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, fotografiaI.precio, inputFoto);
				let save = [fotografiaI.nombre, input.value, valor, fotografiaI.route];
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
		var myModalEl = document.getElementById('foto1');
		myModalEl.addEventListener('hidden.bs.modal', function (event) {
			$('.cardph').remove();
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
			console.log('si funciona');
		});
	};

	// FUNCIONALIDAD PARA VIDEO
	document.getElementById('video').onclick = () => {
		console.clear();

		let productosVi = Productos.filter((elemento) => elemento.tipo === 'VID');
		let inputVid = document.getElementById('input-vid');

		for (const array of productosVi) {
			$('.cards-vid').append(`
		<div class="card cardvi" id="cardsvid" style="display:none;">
		<img src="${array.route}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${array.nombre}</h5>
			<p class="card-text">${array.description}</p>
			<a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
		</div>
		</div> `);
		}
		$('.card').fadeIn(1000).animate({ top: '1rem' }).animate({ top: '0rem' });

		document.getElementById('video-gr').onclick = (event) => {
			event.preventDefault();
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
			label.textContent = `Minutos de grabación:`;
			label.className = 'lab';
			input.className = 'inp';
			input.min = 1;
			input.placeholder = `Ingresa la cantidad de minutos de grabación que deseas.`;
			input.type = 'number';
			input.name = 'shirtsq';
			inputVid.appendChild(label);
			inputVid.appendChild(input);
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				videoGr.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, videoGr.precio, inputVid);
				let save = [videoGr.nombre, input.value, valor, videoGr.route];
				const saveString = JSON.stringify(save);
				localStorage.setItem('vidgrabacion', saveString);
				videoGr.restablecerPrecio();
			});
		};

		document.getElementById('video-ed').onclick = (event) => {
			event.preventDefault();
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
			label.textContent = `Minutos de edición:`;
			label.className = 'lab';
			input.className = 'inp';
			input.min = 1;
			input.placeholder = `Ingresa la cantidad de minutos de edición que deseas.`;
			input.type = 'number';
			input.name = 'shirtsq';
			inputVid.appendChild(label);
			inputVid.appendChild(input);
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				videoEd.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, videoEd.precio, inputVid);
				let save = [videoEd.nombre, input.value, valor, videoEd.route];
				const saveString = JSON.stringify(save);
				localStorage.setItem('videdicion', saveString);
				videoEd.restablecerPrecio();
			});
		};

		document.getElementById('video-ge').onclick = (event) => {
			event.preventDefault();
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
			label.textContent = `Minutos de grabación y edición:`;
			label.className = 'lab';
			input.className = 'inp';
			input.min = 1;
			input.placeholder = `Ingresa la cantidad de minutos de grabación y edición que deseas.`;
			input.type = 'number';
			input.name = 'shirtsq';
			inputVid.appendChild(label);
			inputVid.appendChild(input);
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				videoGe.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, videoGe.precio, inputVid);
				let save = [videoGe.nombre, input.value, valor, videoGe.route];
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

		var myModalEl = document.getElementById('video1');
		myModalEl.addEventListener('hidden.bs.modal', function (event) {
			$('.cardvi').remove();
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
			console.log('si funciona');
		});
	};

	// FUNCIONALIDAD PARA PUBLICIDAD
	document.getElementById('ads').onclick = () => {
		let productosAd = Productos.filter((elemento) => elemento.tipo === 'AD');
		let inputAd = document.getElementById('input-ad');

		for (const array of productosAd) {
			$('.cards-ad').append(`
		<div class="card cardad" id="cardsad" style="display:none;">
		<img src="${array.route}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${array.nombre}</h5>
			<p class="card-text">${array.description}</p>
			<a href="#" id="${array.id}"class="btn btn-primary">PRESUPUESTAR</a>
		</div>
		</div> `);
		}
		$('.card').fadeIn(1000).animate({ top: '1rem' }).animate({ top: '0rem' });

		document.getElementById('pub-b').onclick = (event) => {
			event.preventDefault();
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
			label.textContent = `Servicio de Branding:`;
			label.className = 'lab';
			input.className = 'inp';
			input.min = 1;
			input.placeholder = `Ingresa cuantos servicios de branding deseas.`;
			input.type = 'number';
			input.name = 'shirtsq';
			inputAd.appendChild(label);
			inputAd.appendChild(input);
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				publicidadB.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, publicidadB.precio, inputAd);
				let save = [publicidadB.nombre, input.value, valor, publicidadB.route];
				const saveString = JSON.stringify(save);
				localStorage.setItem('pubb', saveString);
				publicidadB.restablecerPrecio();
			});
		};

		document.getElementById('pub-sn').onclick = (event) => {
			event.preventDefault();
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
			label.textContent = `Campaña en redes sociales:`;
			label.className = 'lab';
			input.className = 'inp';
			input.min = 1;
			input.placeholder = `Ingresa la cantidad de campañas en redes sociales.`;
			input.type = 'number';
			input.name = 'shirtsq';
			inputAd.appendChild(label);
			inputAd.appendChild(input);
			input.focus();

			input.addEventListener('focusout', () => {
				$('.p').remove();
				publicidadSN.sumaIva();
				if (input.value < 0) {
					input.value = 0;
				}
				let valor = printResult(input.value, publicidadSN.precio, inputAd);
				let save = [publicidadSN.nombre, input.value, valor, publicidadSN.route];
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

		var myModalEl = document.getElementById('pub1');
		myModalEl.addEventListener('hidden.bs.modal', function (event) {
			$('.cardad').remove();
			$('.inp').remove();
			$('.lab').remove();
			$('.p').remove();
		});
	};

	recBtn.addEventListener('click', (event) => {
		totalPrice = 0;
		updatell();
		clearLS();


		if (ll == 0) {
			$('.total').append(`
	
			<p class="total_price">HISTORIAL VACÍO</p>
	
			`);

			return;
		}
		for (let i = 0; i < ll; i += 1) {
			arrayrecord[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
		}
		updateRecord(arrayrecord);		
		
		
	});
	var myModalEl = document.getElementById('recordModal');
		myModalEl.addEventListener('hidden.bs.modal', function (event) {
			$('.cardsR').remove();
			$('.total_price').remove();
		});
	document.getElementById('clearRecord').onclick = () => {
		$('.cardsR').remove();
		$('.total_price').remove();
	};

	function updateRecord(arr) {
		for (let i = 0; i < arr.length; i += 1) {
			$('.cards-record').append(`
			<div class="card cardsR">
			<img src="${arr[i][3]}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${arr[i][0]}</h5>
				<p class="card-quantity"> CANTIDAD : ${arr[i][1]}</p>
				<p class="card-price">PRECIO: $ ${arr[i][2]}</p>
			</div>
			</div> `);

			totalPrice += arr[i][2];
		}

		$('.total').append(`
	
		<p class="total_price">TOTAL: $ ${totalPrice}</p>
	
		`);
	}
	function updatell() {
		ll = localStorage.length;
	}

	function clearLS() {
		if (ll > 4) {
			localStorage.clear();
			ll=0;
		}
	}

	
}
