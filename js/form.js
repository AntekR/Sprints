const form = document.getElementById('form-registro');
const direction = document.getElementById('direccion');
const values = document.querySelectorAll('#direccion');


var field = {
	dir: false,

}

function checkDir() {
	
	

	const character = /^[a-zA-z0-9#-\s]{0,50}$/;
	
	const valid = () =>{
		
		validField(character, direction, 'dir');
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
 
checkDir();

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if(field.dir==true){
		alert('Se han enviado correctamente los dats');
		console.log('Enviado');
		form.reset();
	}else{
		console.log('Hay datos invalidos');
		alert('Datos invalidos');

	}

});
