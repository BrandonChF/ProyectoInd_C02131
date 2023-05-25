//declaracion de variabe
var contenidoTablaResultado = document.querySelector("#resultados");
var cAlerta;
var tAlerta;



function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")
    .then((respuesta) => respuesta.json()) //recibe los datos em formato json
    .then((datosrespuesta) => {
      setTable(datosrespuesta.data); //lo envio a la funcion de abajo
      // console.log('Datos', datosrespuesta.data);
    })
    .catch(console.log);
}

function setTable(datos) {
  console.log("Datos", datos);

  for (const valor of datos) {
    console.log("valor", valor);
    contenidoTablaResultado.innerHTML += `
      <tr class="table-dark">
        <td>${valor.id}</td>
        <td>${valor.nombre}</td>
        <td>${valor.descripcion}</td>
        <td>${valor.tiempo}</td>
        <td>${valor.usuario}</td>
        <td>
          <button type="button" class="btn btn-success" onclick="detalles('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Ver detalles</button>||
          <button type="button" class="btn btn-primary" onclick="editar('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Editar</button>|| 
          <button type="button" class="btn btn-danger" onclick="borrar('${valor.id}','${valor.nombre}' )">Borrar</button>   
        </td>
      </tr>`;
  }

}

function actualizarPagina() {
  setTimeout(() => {
    window.location.reload();
  }, 100);
}// fin de la función actualizar pagina

function desplegarAlerta(colorAlerta, textoAlerta) {
  //const mensajeAlerta = new bootstrap.Modal(document.getElementById('mensajeAlerta'));
  var mensajeAlerta = document.querySelector("#mensajeAlerta");
  //var alerta = '<div class="alert alert-' + colorAlerta + '" role="alert">' + textoAlerta + '</div>';
  var alerta = '<div class="alert alert-'+colorAlerta+' alert-dismissible fade show" role="alert">'
    +textoAlerta+'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="btnAlerta"></button></div>'
    alertaMensaje = new bootstrap.alert(alerta);
    alertaMensaje.show();
    alerta.onclick=() => actualizarPagina();
  
  //mensajeAlerta.innerHTML='<div class="alert alert-'+colorAlert+'" role="alert">'+textoAlerta+'</div>';
  //mensajeAlerta.show();
}


function borrar(id, nombre) {

  const modalDelete = new bootstrap.Modal(document.getElementById('modalBorrar'));
  modalDelete.show();
  document.getElementById('idBorrar').value = id;
  document.getElementById('nombreBorrar').value = nombre;
  cAlerta = 'danger';
  tAlerta = 'El curso se eliminó correctamente'
  
  var formulario = document.getElementById('formularioBorrar');
  formulario.addEventListener('submit', function (e) {

    var datosEnviar = {
      id: id,
    }

    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        //lo envio a la funcion de abajo
        console.log('Datos', datosrespuesta.data);
      })
      e.preventDefault();
      actualizarPagina();
    
    alert('El curso se eliminó correctamente')
  })

} // fin de la función borrar


function editar(id, nombre, descripcion, tiempo, usuario) {

  const myModal = new bootstrap.Modal(document.getElementById('modalEditar'));
  myModal.show();
  document.getElementById('nombreModal').value = nombre;
  document.getElementById('descripcionModal').value = descripcion;
  document.getElementById('tiempoModal').value = tiempo;
  document.getElementById('usuarioModal').value = usuario;


  var formulario = document.getElementById('formularioEditar');
  formulario.addEventListener('submit', function (e) {


    var datosEnviar = {
      id: id,
      nombre: document.getElementById('nombreModal').value,
      descripcion: document.getElementById('descripcionModal').value,
      tiempo: document.getElementById('tiempoModal').value,
      usuario: document.getElementById('usuarioModal').value
    }
    console.log(datosEnviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        //lo envio a la funcion de abajo
        // console.log('Datos', datosrespuesta.data);
      })

      .catch(console.log);
    e.preventDefault();
    actualizarPagina();

  })
}//fin de la función editar

function crear() {
  const myModal = new bootstrap.Modal(document.getElementById('modalCrear'));
  myModal.show();

  var formulario = document.getElementById('formularioCrear');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datosEnviar = {
      nombre: document.getElementById('crearNombre').value,
      descripcion: document.getElementById('crearDescripcion').value,
      tiempo: document.getElementById('crearTiempo').value,
      usuario: 'BrandonChF'
    }

    console.log(datosEnviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        //lo envio a la funcion de abajo
        // console.log('Datos', datosrespuesta.data);
      })
      .catch(console.log);
    alert('Curso creado');
    actualizarPagina()
  })

}//fin de la función crear

function detalles(id, nombre, descripcion, tiempo, usuario) {

  const myModal = new bootstrap.Modal(document.getElementById('modalDetalles'));
  myModal.show();
  document.getElementById('detallesId').value = id;
  document.getElementById('detallesNombre').value = nombre;
  document.getElementById('detallesDescripcion').value = descripcion;
  document.getElementById('detallesTiempo').value = tiempo;
  document.getElementById('detallesUsuario').value = usuario;
}// fin de la función detalles


cargarDatos();