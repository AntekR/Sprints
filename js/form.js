
var valor = document.getElementById("nombre");
function checkNombre (valor) {
  

  function estaVacio(cadena) {
  if(cadena.length=0) {
    return true;
  } else {
    return false;
  }
}

function validarLongitudCadena(cadena, minimo, maximo) {
  if(cadena.length >= minimo && cadena.length <=maximo) {
    return true;
  } else {
    return false;
  }
}

function NoContieneNumeros(cadena) {  
  const expresion1 = /^[A-Za-z]+$/;   
  if(cadena.match(expresion1)) {
    return true;
  } else {
    return false;
  }
}

  if(estaVacio(valor)) {
    //alert("El nombre no puede estar vacío");
    return false;
  } else if(!validarLongitudCadena(valor, 4, 30)) {
    //alert("El nombre debe tener una longitud entre 4 y 30")
    return false;
  } else if(!NoContieneNumeros(valor)) {
    //alert("El nombre no puede contener números");
    return false;
  } else {
    return true;
  }
}

//module.exports= checkNombre;


