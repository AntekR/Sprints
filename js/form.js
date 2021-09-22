



function checkNombre (){
    var nombre = document.getElementsById("nombre");
    var letters = /^[A-Za-z]+$/;
    var error = document.getElementsById("error");
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
                alert("El nombre debe contener entre 4 y 30 caracteres");
                return false;
            }  
        }
        else
        {
            alert("El campo no puede estar vacío");
            return false;
        }
      
      }
    else
      {        
        alert("El nombre no debe contener números");
        return false;
      }

}

/*module.exports= checkNombre;*/
