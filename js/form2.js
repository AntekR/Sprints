const direccion = document.getElementById('direccion');



function checkDir(){
    
     let check = true;
     const expression = /^[a-zA-z0-9#-]{0,50}$/;
     const inputs = document.querySelectorAll('#direccion');

     inputs.forEach((input) => {
          
          input.addEventListener('keyup', () => {
               if (expression.test(input.value)){
                    check = true;
                    console.log('valido');
                    return true;
                    
               }else{
                    check = false;
                    console.log('invalido');
                    return false;
               };
          });
     });
     
}

checkDir();