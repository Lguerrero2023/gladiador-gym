const form = document.getElementById('contacto');
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');
const textarea = document.getElementById('mensaje');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  spinner.style.display = 'inline-block';

  // Simula el envío de datos (2 segundos)
  setTimeout(() => {
    spinner.style.display = 'none';
    modal.style.display = 'flex';
    form.reset();
  }, 2000);
});

// Cerrar modal al hacer click fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Funcion para ajustar la altura del textarea
textarea.addEventListener('input', autoResize);
function autoResize() {
  this.style.height = 'auto'; // Reinicia altura para que funcione correctamente
  this.style.height = this.scrollHeight + 'px';
}