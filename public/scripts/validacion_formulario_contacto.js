const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
      validar(input);
    });
  });


//** target es el elemento html */
function validar (input){ 
    let htmlinput = input.target;
    let validacion_input = htmlinput.validity;
    let input_container = htmlinput.parentElement; //** prent element solo funciona con htlml */
    let span = input_container.querySelector("#texterror");
    
    const input_tipe = htmlinput.dataset.tipo;
    let mensaje = mserror[input_tipe]
    
    if (validacion_input.valid == false){
        span.textContent = mensaje;
        htmlinput.classList.toggle("inputerror")
    }
    else{
        span.textContent = ""
        htmlinput.style.borderStyle= "none";
        htmlinput.classList.toggle("inputerror")
    }
    
}

const mserror = {
    correo: "el correo no es valido",
    password: "la contraseña debe Mínimo ocho y máximo 10 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
}