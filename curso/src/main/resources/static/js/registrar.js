// Call the dataTables jQuery plugin
$(document).ready(function() { //Esta funcion hace que se ejecute todo el codigo dentro de este js una vez que la pagina se cargo

});

async function registrarUsuario(){

  let datos = {};
  datos.nombre = document.getElementById('txtNombre').value;
  datos.apellido = document.getElementById('txtApellido').value;
  datos.email = document.getElementById('txtEmail').value;
  datos.password = document.getElementById('txtPassword').value;

  let repetirPassword = document.getElementById('txtRepetirPassword').value;
  if(repetirPassword != datos.password){
    alert('Las contraseñas no coinciden');
    return;
  }

  const request = await fetch('api/usuarios', { //await dice que detiene el codigo ahi hasta recibir la respuesta, agregamos asyn a la funcion
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("Cuenta creada con exito")
  window.location.href = 'login.html'


}