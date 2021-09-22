

function checkNombre (valor){
    var nombre = document.getElementsById("nombre");
    var letters = /^[A-Za-z]+$/;   
    console.log("enviando...");
    
    if(form.nombre.value.match(letters))
      {
        if (nombre.value !== null || form.nombre.value  !== "")
        {
            if(nombre.value.length>=4&& form.nombre.value.length <=30)
            {
              return true;
            }
            else
            {                
              return false;
            }  
        }
        else
        {
          return false;
        }
      
      }
    else
      {        
        return false;
      }

}

module.exports= checkNombre;
