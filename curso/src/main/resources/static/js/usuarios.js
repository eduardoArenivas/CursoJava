// Call the dataTables jQuery plugin
$(document).ready(function() { //Esta funcion hace que se ejecute todo el codigo dentro de este js una vez que la pagina se cargo

    cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario(){
    document.getElementById('txtEmailUsuario').outerHTML = localStorage.email;
}

async function cargarUsuarios(){

  const request = await fetch('api/usuarios', { //await dice que detiene el codigo ahi hasta recibir la respuesta, agregamos asyn a la funcion
    method: 'GET',
    headers: getHeaders()
  });
  const usuarios = await request.json();

  let listadoHtml = '';
  for (let usuario of usuarios){
    let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

    let telefonoTexto = usuario.telefono ==null ? '-' : usuario.telefono
    let usuarioHtml = '<tr><td>'+ usuario.id +'</td><td>'+ usuario.nombre +' '+ usuario.apellido +'</td><td>'
        + usuario.email +'</td><td>'+ telefonoTexto
        +'</td><td>' + botonEliminar + '</td></tr>'
    listadoHtml += usuarioHtml;
  }


document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}

function getHeaders(){
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}


async function eliminarUsuario(id){

    if (!confirm('Desea eliminar el usuario?')){
        return;
    }
    const request = await fetch('api/usuarios/' + id, { //await dice que detiene el codigo ahi hasta recibir la respuesta, agregamos asyn a la funcion
        method: 'DELETE',
        headers: getHeaders()
      });

      location.reload() // con esto actualizamos la pagina despues de borrar el usuario
}