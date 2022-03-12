// Call the dataTables jQuery plugin
$(document).ready(function() { //Esta funcion hace que se ejecute todo el codigo dentro de este js una vez que la pagina se cargo

});

async function iniciarSesion(){

  let datos = {};
  datos.email = document.getElementById('txtEmail').value;
  datos.password = document.getElementById('txtPassword').value;


  const request = await fetch('api/login', { //await dice que detiene el codigo ahi hasta recibir la respuesta, agregamos asyn a la funcion
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const respuesta = await request.text();
  if(respuesta != 'FAIL'){
    localStorage.token = respuesta;
    localStorage.email = datos.email;
    window.location.href = 'usuarios.html'
  } else {
    alert("Credenciales incorrectas");
  }

}