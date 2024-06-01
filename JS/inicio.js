
let inputUsuario = document.getElementById("correo")
let inputContrasena = document.getElementById("pass")

let usuario = inputUsuario.value
let sena = inputContrasena.value

if(usuario ==="" && sena ===""){
    console.log("Ingresa los datos")
    alert("Datos Erroneos")
    }else{
    console.log("Estas Registrado")
    alert("Estas Registrado")
    }



console.log(document.getElementById("correo").value)
console.log(document.getElementById("pass").value)


