  // Variables
  const form = document.getElementById('form-registro');
  // Selecciona todo lo que halla en los campos
  const direction = document.getElementById('direccion');
  const inputs = document.querySelectorAll('#direccion');

  var check = true;
  const character = /^[a-zA-Z0-9#-]{0,50}$/;
  // Verifica los campos
  function field (){
      valid(character, direction);
  }
  // Verifica los caracteres
  function valid(expresion,input){
  if(expresion.test(input.value)){
  check = true;
  console.log('Caracter valido');
                  // document.getElementById(`#${campo}`).classList.remove('direction_failed');
                  // document.getElementById(`#${campo}`).classList.remove('direction_correct');
  }else{
      check = false;
      console.log('Caracter invalido');
    }
  }
  // Verifica cada tecla presionada
  inputs.forEach((input) => {
  input.addEventListener('keyup', field);
  });
