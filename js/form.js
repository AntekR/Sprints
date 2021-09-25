

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

function checkTelefono (valor) {
     const enteros = /^(?:\+|-)?\d+$/;
     if(valor.length==0) {
       return false;
     } else if(valor.length < 7 || valor.length > 7) {
       return false;
     } else if(valor.indexOf("0") ==enteros || valor.indexOf("1") ==enteros || 
     valor.indexOf("2") ==enteros || valor.indexOf("3") ==enteros || valor.indexOf("4") ==enteros 
     || valor.indexOf("5") ==enteros || valor.indexOf("6") ==enteros){
       return false;
     } else if(valor = 7){
       return true;
     } else {
       return true;
     }
   }

function checkDir (valor) {
     
     const cdir = /[!"\($\)%&/\(\)=\?¡¿\*\+¨´\}\{_\.;:><|°\\\^'~]/;

     if(valor.length==0) {
       return false;
     } else if(valor.length == 0 || valor.length > 50) {
       return false;
     } else if(cdir.test(valor)) {
       return false;
     
     } else if(!cdir.test(valor) || valor.includes(/^[#\-]$/)){
       return true;
     }
}
  
function checkCorreo (valor) {
     
     const cemail = /^[a-zA-z0-9-.+-]+@[a-zA-Z0-9-.]+.com$/i;

     if(valor.length==0) {
       return false;
     } else if(cemail.test(valor)) {
       return true;
     } else {
       return false;
     }
}

function checkContrasena (valor) {

     const ccontra = /[a-zA-z0-9-.+-]+\d{7,}/;

     if(valor.length==0) {
       return false;
     } else if(valor.length < 7) {
       return false;
     } else if( ccontra.test(valor)) {
       return true;
     } else {
       return false;
     }
}

module.exports = {checkNombre,checkTelefono,checkDir,checkCorreo,checkContrasena};

