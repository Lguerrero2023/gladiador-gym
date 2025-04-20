const form = document.getElementById('contacto');
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');
const textarea = document.getElementById('mensaje');
const botonEnviar = document.getElementById('btn-enviar');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Desactivar el botón y mostrar spinner
  botonEnviar.disabled = true;
  botonEnviar.textContent = 'Enviando...';
  $('#spinner').fadeIn();

  // Simular envío (2 segundos)
  setTimeout(() => {
    $('#spinner').fadeOut();
   $('#modal-bootstrap').modal('show');
    form.reset();

    // Restaurar botón
    botonEnviar.disabled = false;
    botonEnviar.textContent = 'Enviar';

    // Limpiar validaciones visuales
    $('#contacto input, #contacto textarea').removeClass('is-valid is-invalid');
  }, 2000);
});

// Funcion para ajustar la altura del textarea
textarea.addEventListener('input', autoResize);
function autoResize() {
  this.style.height = 'auto'; // Reinicia altura para que funcione correctamente
  this.style.height = this.scrollHeight + 'px';
}

// VALIDACION EN TIEMPO REAL

$(document).ready(function () {
  // Validación en tiempo real para los campos del formulario
  $('#contacto input, #contacto textarea').on('input', function () {
    const $field = $(this);
    const isValid = this.checkValidity();

    // Toggle de clases de validación de Bootstrap
    $field.toggleClass('is-valid', isValid);
    $field.toggleClass('is-invalid', !isValid);

    // Si el campo es inválido, muestra el mensaje de error correspondiente
    if (!isValid) {
      $field.siblings('.invalid-feedback').show();
      $field.siblings('.valid-feedback').hide();
    } else {
      $field.siblings('.valid-feedback').show();
      $field.siblings('.invalid-feedback').hide();
    }
  });

  // Validación en tiempo real para el formulario del newsletter (si lo tienes en el footer)
  $('#newsletter-form input[type="email"]').on('input', function () {
    const $field = $(this);
    const isValid = this.checkValidity();

    // Toggle de clases de validación de Bootstrap
    $field.toggleClass('is-valid', isValid);
    $field.toggleClass('is-invalid', !isValid);
  });
});