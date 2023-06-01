var Navbar = document.querySelector('#alertaCrear');
var Navbar = document.querySelector('#alertaEditar');
var footer = document.querySelector('#alertaBorrar');

contenidoAlertaCrear.innerHTML += `

<div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="alertaCrear" class="toast text-bg-success" role="alert" data-bs-autohide="false"
              aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <strong class="me-auto">Api Rest</strong>
                <small>Ahora</small>
                <button type="button" id="btnCloseI" class="btn-close" data-bs-dismiss="toast"
                  aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Se creó correctamente
              </div>
            </div>
          </div>
            `;

contenidoAlertaEditar.innerHTML += `

<div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="alertaEditar" class="toast text-bg-success" role="alert" data-bs-autohide="false"
              aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <strong class="me-auto">Api Rest</strong>
                <small>Ahora</small>
                <button type="button" id="btnCloseE" class="btn-close" data-bs-dismiss="toast"
                  aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Se guardó los cambios
              </div>
            </div>
          </div>
            `;
contenidoAlertaBorrar.innerHTML += `

<div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="alertaBorrar" class="toast text-bg-danger" role="alert" data-bs-autohide="false"
              aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <strong class="me-auto">Api Rest</strong>
                <small>Ahora</small>
                <button type="button" id="btnCloseB" class="btn-close" data-bs-dismiss="toast"
                  aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Se ha eliminado el elemento
              </div>
            </div>
          </div>
            `;