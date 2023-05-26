//declaracion de variables
var contenidoTablaResultado = document.querySelector("#resultados");
var contenidoListaGrupos = document.querySelector("#listaGrupos");
var contenidoEditarListaGrupos=document.querySelector("#editarListaGrupos");
var contenidoListaSexo = document.querySelector("#editarSexo");
function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php")
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
        <td>${valor.cedula}</td>
        <td>${valor.correoelectronico}</td>
        <td>${valor.telefono}</td>
        <td>${valor.telefonocelular}</td>
        <td>${valor.fechanacimiento}</td>
        <td>${valor.sexo}</td>
        <td>${valor.nombre}</td>
        <td>${valor.apellidopaterno}</td>
        <td>${valor.apellidomaterno}</td>
        <td>${valor.nacionalidad}</td>        
        <td>${valor.usuario}</td>
        <td>
          <button type="button" class="btn btn-success" onclick="detalles('${valor.id}',
          '${valor.cedula}','${valor.correoelectronico}','${valor.telefono}',
          '${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}',
          '${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}'
          ,'${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}'
          ,'${valor.usuario}')">Ver detalles</button>||
          <button type="button" class="btn btn-primary" onclick="editar('${valor.id}',
          '${valor.cedula}','${valor.correoelectronico}','${valor.telefono}',
          '${valor.telefonocelular}','${valor.fechanacimiento}','${valor.sexo}',
          '${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}'
          ,'${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}'
          ,'${valor.usuario}')">Editar</button>|| 
          <button type="button" class="btn btn-danger"  onclick="borrar('${valor.id}','${valor.cedula}','${valor.nombre}' )">Borrar</button>   
        </td>
      </tr>`;
  }

}
//Funciones para pintar los datos de los grupos disponibles
function pintarSelect() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
    .then((respuesta) => respuesta.json()) //recibe los datos em formato json
    .then((datosrespuesta) => {
      setSelect(datosrespuesta.data); //lo envio a la funcion de abajo
      // console.log('Datos', datosrespuesta.data);
    })
    .catch(console.log);
}
function setSelect(datos) {
  for (const valor of datos) {
    contenidoListaGrupos.innerHTML +=
    `
    <option value="${valor.id}">${valor.nombre}</option>
    `;
  }
  for (const valor of datos) {
    contenidoEditarListaGrupos.innerHTML +=
      `
    <option value="${valor.id}">${valor.nombre}</option>
    `;
  }
  setSexosNuevos();
}
//función para pintar los sexos que no existen el select de sexo
function setSexoNuevo(){
  var sexo = document.getElementById('editarSexo').value;
  if(sexo!='Femenino'&& sexo!='Masculino'&& sexo!='Indefinido') {
    contenidoListaSexo.innerHTML +=
    `
    <option value="${sexo}">${sexo}</option>
    `
  }
}

//////////////////////////////////////////////////////////////

function actualizarPagina() {
  setTimeout(() => {
    window.location.reload();
  }, 100);
}// fin de la función actualizar pagina

function detalles(
  id, cedula, correoelectronico,
  telefono, telefonocelular,
  fechanacimiento, sexo, direccion,
  nombre, apellidopaterno, apellidomaterno,
  nacionalidad, idCarreras, usuario
) {

  const myModal = new bootstrap.Modal(document.getElementById('modalDetalles'));
  myModal.show();
  document.getElementById('detallesId').value = id;
  document.getElementById('detallesCedula').value = cedula;
  document.getElementById('detallesCorreo').value = correoelectronico;
  document.getElementById('detallesTel').value = telefono;
  document.getElementById('detallesTelCel').value = telefonocelular;
  document.getElementById('detallesFechaNa').value = fechanacimiento;
  document.getElementById('detallesSexo').value = sexo;
  document.getElementById('detallesDireccion').value = direccion;
  document.getElementById('detallesNombre').value = nombre;
  document.getElementById('detallesAPaterno').value = apellidopaterno;
  document.getElementById('detallesAMAterno').value = apellidomaterno;
  document.getElementById('detallesNacionalidad').value = nacionalidad;
  document.getElementById('detallesIdCarreras').value = idCarreras;
  document.getElementById('detallesUsuario').value = usuario;
}

function crear() {
  const modalCreate = new bootstrap.Modal(document.getElementById('modalCrear'));
  modalCreate.show();

  var formulario = document.getElementById('formularioCrear');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datosEnviar = {
      cedula: document.getElementById('crearCedula').value,
      correoelectronico: document.getElementById('crearCorreo').value,
      telefono: document.getElementById('crearTel').value,
      telefonocelular: document.getElementById('crearTelCel').value,
      fechanacimiento: document.getElementById('crearFechaNa').value,
      sexo: document.getElementById('crearSexo').value,
      direccion: document.getElementById('crearDireccion').value,
      nombre: document.getElementById('crearNombre').value,
      apellidopaterno: document.getElementById('crearAPaterno').value,
      apellidomaterno: document.getElementById('crearAMAterno').value,
      nacionalidad: document.getElementById('crearNacionalidad').value,
      idCarreras: document.getElementById('listaGrupos').value,
      usuario: 'BrandonChF'
    }

    console.log(datosEnviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        //lo envio a la funcion de abajo
        // console.log('Datos', datosrespuesta.data);
      })
      .catch(console.log);
    alert('Estudiante registrado correctamente');
    actualizarPagina();
  })
}// fin de la función crear

function borrar(id,cedula, nombre) {
  const modalDelete = new bootstrap.Modal(document.getElementById('modalBorrar'));
  modalDelete.show();
  document.getElementById('borrarId').value = id;
  document.getElementById('borrarCedula').value = cedula;
  document.getElementById('borraNombre').value = nombre;


  var formulario = document.getElementById('formularioBorrar');
    formulario.addEventListener('submit', function (e) {

  var datosEnviar = {
       id: id
     }

     fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php", {
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

     alert('El estudiante se eliminó correctamente')
   })

} // fin de la función borrar

function editar(
  id,cedula, correoelectronico,
  telefono, telefonocelular,
  fechanacimiento, sexo, direccion,
  nombre, apellidopaterno, apellidomaterno,
  nacionalidad, idCarreras, usuario,
) {
  const modalEdit = new bootstrap.Modal(document.getElementById('modalEditar'));
  modalEdit.show();
  document.getElementById('editarId').value = id;
  document.getElementById('editarCedula').value = cedula;
  document.getElementById('editarCorreo').value = correoelectronico;
  document.getElementById('editarTel').value = telefono;
  document.getElementById('editarTelCel').value = telefonocelular;
  document.getElementById('editarFechaNa').value = fechanacimiento;
  document.getElementById('editarSexo').value = sexo;
  document.getElementById('editarDireccion').value = direccion;
  document.getElementById('editarNombre').value = nombre;
  document.getElementById('editarAPaterno').value = apellidopaterno;
  document.getElementById('editarAMAterno').value = apellidomaterno;
  document.getElementById('editarNacionalidad').value = nacionalidad;
  document.getElementById('editarListaGrupos').value = idCarreras;
  document.getElementById('editarUsuario').value = usuario;

  var formulario = document.getElementById('formularioEditar');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datosEnviar = {
      id: document.getElementById('editarId').value,
      cedula: document.getElementById('editarCedula').value,
      correoelectronico: document.getElementById('editarCorreo').value,
      telefono: document.getElementById('editarTel').value,
      telefonocelular: document.getElementById('editarTelCel').value,
      fechanacimiento: document.getElementById('editarFechaNa').value,
      sexo: document.getElementById('editarSexo').value,
      direccion: document.getElementById('editarDireccion').value,
      nombre: document.getElementById('editarNombre').value,
      apellidopaterno: document.getElementById('editarAPaterno').value,
      apellidomaterno: document.getElementById('editarAMAterno').value,
      nacionalidad: document.getElementById('editarNacionalidad').value,
      idCarreras: document.getElementById('editarListaGrupos').value,
      usuario: document.getElementById('editarUsuario').value
    }

    console.log(datosEnviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php", {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        //lo envio a la funcion de abajo
        // console.log('Datos', datosrespuesta.data);
      })
      .catch(console.log);
    alert('Estudiante actualizado correctamente');
    actualizarPagina();
  })

}// fin de la función editar

cargarDatos();
pintarSelect();
