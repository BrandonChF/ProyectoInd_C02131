//declaracion de variabe
var contenidoTablaResultado = document.querySelector("#resultados");

function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php")
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
        <td>${valor.direccion}</td>
        <td>${valor.nombre}</td>
        <td>${valor.apellidopaterno}</td>
        <td>${valor.apellidomaterno}</td>
        <td>${valor.nacionalidad}</td>
        <td>${valor.idCarreras}</td>          
        <td>${valor.usuario}</td>
        <td>${valor.nacionalidad}</td>
        <td>
          <button type="button" class="btn btn-success" onclick="detalles('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Ver detalles</button>||
          <button type="button" class="btn btn-primary" onclick="editar('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Editar</button>|| 
          <button type="button" class="btn btn-danger" onclick="borrar('${valor.id}','${valor.nombre}' )">Borrar</button>   
        </td>
      </tr>`;
  }
}

cargarDatos();