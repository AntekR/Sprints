const form = document.getElementById('form-registro');
const name = document.getElementById('nombre');
const phone = document.getElementById('telefono');
const direction = document.getElementById('direccion');
const email_ = document.getElementById('correo');
const password = document.getElementById('contraseña');
const values = document.querySelectorAll('#form-registro input');


var field = {
	nom: false,
	tel : false,
	dir: false,
	email: false,
	contr: false,

}

function checkNombre() {
	
	

	const cnom = /^[a-zA-z\s]{4,30}$/;
	
	const valid = () =>{
		
		validField(cnom, name, 'nom');
		return validField;
	}

	const validField= (expression,input,campo)=>{

		if(expression.test(input.value)){
			console.log('valido');
			field[campo] = true;
			console.log(field.nom);
			
		}else{
			console.log('invalido');
			field[campo] = false;
			console.log(field.nom);
			
		}

		return field.nom;
	} 

	values.forEach((input) =>{
		input.addEventListener('keyup', valid);
		input.addEventListener('blur', valid);
	});

	

}

function checkTelefono() {
	
	

	const ctel = /^[0-9]{4,30}$/;
	
	const valid = () =>{
		
		validField(ctel, phone, 'tel');
		return validField;
	}

	const validField= (expression,input,campo)=>{

		if(expression.test(input.value)){
			console.log('valido');
			field[campo] = true;
			console.log(field.tel);
			
		}else{
			console.log('invalido');
			field[campo] = false;
			console.log(field.tel);
			
		}

		return field.tel;
	} 

	values.forEach((input) =>{
		input.addEventListener('keyup', valid);
		input.addEventListener('blur', valid);
	});

	

}


function checkDir() {
	
	

	const cdir = /^[a-zA-z0-9#-\s]{0,50}$/;
	
	const valid = () =>{
		
		validField(cdir, direction, 'dir');
		return validField;
	}

	const validField= (expression,input,campo)=>{

		if(expression.test(input.value)){
			console.log('valido');
			field[campo] = true;
			console.log(field.dir);
			
		}else{
			console.log('invalido');
			field[campo] = false;
			console.log(field.dir);
			
		}

		return field.dir;
	} 

	values.forEach((input) =>{
		input.addEventListener('keyup', valid);
		input.addEventListener('blur', valid);
	});

	

}

function checkEmail() {
	
	

	const cemail = /^[a-zA-z0-9-.+-]+@[a-zA-Z0-9-.]+.com$/i;
	
	const valid = () =>{
		
		validField(cemail, email_, 'email');
		return validField;
	}

	const validField= (expression,input,campo)=>{

		if(expression.test(input.value)){
			console.log('valido');
			field[campo] = true;
			console.log(field.email);
			
		}else{
			console.log('invalido');
			field[campo] = false;
			console.log(field.email);
			
		}

		return field.email;
	} 

	values.forEach((input) =>{
		input.addEventListener('keyup', valid);
		input.addEventListener('blur', valid);
	});

	

}

function checkContrasena() {
	
	

	const ccontra = /[a-zA-z0-9-.+-]+\d{8,}/;
	
	const valid = () =>{
		
		validField(ccontra, password, 'contr');
		return validField;
	}

	const validField= (expression,input,campo)=>{

		if(expression.test(input.value)){
			console.log('valido');
			field[campo] = true;
			console.log(field.contr);
			
		}else{
			console.log('invalido');
			field[campo] = false;
			console.log(field.contr);
			
		}

		return field.contr;
	} 

	values.forEach((input) =>{
		input.addEventListener('keyup', valid);
		input.addEventListener('blur', valid);
	});

	

}

module.exports = { checkNombre, checkTelefono, checkDir, checkEmail, checkContrasena};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if(field.nom==true && field.tel==true && field.dir==true && field.email==true && field.contr){
		alert('Se han enviado correctamente los dats');
		console.log('Enviado');
		form.reset();
	}else{
		console.log('Hay datos invalidos');
		alert('Datos invalidos');

	}

});

