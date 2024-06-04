const form = document.querySelector(`form`)

form.addEventListener(`submit`, (event) => {

    event.preventDefault();

    if (!validar()){
        console.log("Invalido")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal",
            footer: 'Debes ingresar los campos pedidos!!!'
          });
        event.preventDefault();
    } else {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Iniciastes secion con Exito!!!",
            showConfirmButton: false,
            timer: 2500
          });
        console.log("Valido")
    }
})

function validar(){
    const email = document.getElementById(`correo`);
    const valor1 = email.value
    console.log(valor1)
    const pass = document.getElementById(`pass`);
    const valor2 = pass.value

    if(valor1 === `` || valor2 === ``){
        return false
        console.log("Ingresa campos")
    }else{
        return true
        console.log("Verificado")
    }
    
    
}



/*
Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });

let mail = ""
 mail = document.getElementById('email').value
console.log(mail)

function validar(){
    let mail = document.getElementById(`email`).value
    let pass = document.getElementById(`password`).value

    if(mail==""||pass==""){
        console.log("Perfecto")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }else{
        console.log("Mal ahi")}
}
validar()*/
