function checkTelefono (valor) {
  const enteros = /^(?:\+|-)?\d+$/;
  if(valor.length==0) {
    return false;
  } else if(valor.length < 7 || valor.length > 7) {
    return false;
  } else if(valor.indexOf("0") !=enteros || valor.indexOf("1") !=enteros || 
  valor.indexOf("2") !=enteros || valor.indexOf("3") !=enteros || valor.indexOf("4") !=enteros 
  || valor.indexOf("5") !=enteros || valor.indexOf("6") !=enteros){
    return false;
  } else if(valor = 7){
    return true;
  } else {
    return true;
  }
}

module.exports = checkTelefono;