

function checkNombre (valor) {
  if(valor.length==0) {
    return false;
  } else if(valor.length < 4 || valor.length > 30) {
    return false;
  } else if(valor.includes("0")|| valor.includes("1") || 
  valor.includes("2") || valor.includes("3") || valor.includes("4") 
  || valor.includes("5") || valor.includes("6") || valor.includes("7")  
  || valor.includes("8") || valor.includes("9") ) {
    return false;
  } else {
    return true;
  }
}

//module.exports = checkNombre;