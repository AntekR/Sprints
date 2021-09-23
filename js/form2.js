const form = document.getElementById('form-registro');
const input = document.querySelectorAll('#direccion');

const expression = /^[a-zA-Z0-9#-]{0,50}$/;
const campo={
     direccion : true;
}

const validForm = () =>{
     validField(expression,'direccion');
}

const validField = (expresion, input, field) =>{
     if(expresion.test(input.value)){
          document.getElementById(`$(campo)`).classList.remove('direction_failed');
          document.getElementById(`$(campo)`).classList.add('direction_correct');
          campo[campo]=true;
     }else{
          document.getElementById(`$(campo)`).classList.add('direction_failed');
          document.getElementById(`$(campo)`).classList.remove('direction_correct');
          campo[campo]=false;

     }
}

input.forEach((i) => {
     i.addEventListener('keyup', validForm);
     i.addEventListener('blur', validForm);
});

form.addEventListener('submit', (e) => {
     e.preventDefault();
})
