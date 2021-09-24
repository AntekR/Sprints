

function checkNombre (valor) {
  if(valor.length==0) {
    return false;
  } else if(valor.length < 4 || valor.length > 30) {
    return false;
  } else if(valor.indexOf("0") >= 0 || valor.indexOf("1") >= 0 || 
  valor.indexOf("2") >= 0 || valor.indexOf("3") >= 0 || valor.indexOf("4") >= 0 
  || valor.indexOf("5") >= 0 || valor.indexOf("6") >= 0 || valor.indexOf("7") >= 0 
  || valor.indexOf("8") >= 0 || valor.indexOf("9") >= 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = checkNombre;