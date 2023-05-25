//declaracion de variabe
var contenidoTablaResultado = document.querySelector("#resultados");

function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php")
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
        <td>${valor.name}</td>
        <td>${valor.email}</td>
        <td>${valor.password}</td>
        <td>
          <button type="button" class="btn btn-success" onclick="detalles('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Ver detalles</button>||
          <button type="button" class="btn btn-primary" onclick="editar('${valor.id}','${valor.nombre}','${valor.descripcion}','${valor.tiempo}','${valor.usuario}')">Editar</button>|| 
          <button type="button" class="btn btn-danger" onclick="borrar('${valor.id}','${valor.nombre}' )">Borrar</button>   
        </td>
      </tr>`;
  }
}

cargarDatos();