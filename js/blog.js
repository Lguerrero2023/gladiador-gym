// Crear un Intersection Observer para observar las tarjetas
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cuando la tarjeta entra en la vista, se agrega la clase 'visible'
      entry.target.classList.add('visible');
      console.log(`Tarjeta visible activada por IntersectionObserver: ${entry.target}`);
    } else {
      // Si la tarjeta sale de la vista, se puede eliminar la clase 'visible' (opcional)
      entry.target.classList.remove('visible');
      console.log(`Tarjeta salida de la vista: ${entry.target}`);
    }
  });
}, {
  threshold: 0.1 // Un umbral del 10% de visibilidad para activar el evento
});

// Mostrar solo 4 tarjetas inicialmente
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
      if (i < 4) {
          card.classList.add('visible');
          console.log(`Tarjeta visible añadida: ${card}`);
      }
  });

  // Aplicar animación a cada tarjeta del blog
  cards.forEach(card => {
    observer.observe(card);  // Ahora el observer se aplica después de la definición
    console.log(`Observador añadido para tarjeta: ${card}`);
  });
});

// Efecto de "scroll reveal" progresivo
window.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && !el.classList.contains('visible')) {
          el.classList.add('visible');
          console.log(`Tarjeta activada por scroll: ${el}`);
      }
  });
});

const radios = document.querySelectorAll('input[type="radio"][name="tag"]');
radios.forEach(radio => {
  radio.addEventListener('change', () => {
      const selected = radio.id;
      console.log(`Filtro de tag seleccionado: ${selected}`);
      document.querySelectorAll('.blog-filtros .card').forEach(card => {
          if (selected === 'all' || card.classList.contains(selected)) {
              card.style.display = 'block';
              setTimeout(() => card.classList.add('visible'), 100);
          } else {
              card.classList.remove('visible');
              setTimeout(() => card.style.display = 'none', 500);
          }
      });
  });
});

$(document).ready(function () {
  // Función para manejar el filtrado
  $('input[name="tag"]').on('change', function () {
      const selectedTag = $(this).attr('id');
      console.log(`Filtro jQuery de tag seleccionado: ${selectedTag}`);
      const cards = $('.grid-container .card');

      if (selectedTag === 'all') {
          cards
              .hide()
              .removeClass('visible')
              .filter(function () {
                  return true; // Mostrar todos
              })
              .fadeIn(400)
              .addClass('visible');
              console.log("Todos los filtros mostrados.");
      } else {
          cards
              .hide()
              .removeClass('visible')
              .filter('.' + selectedTag)
              .fadeIn(400)
              .addClass('visible');
              console.log(`Filtro aplicado a: ${selectedTag}`);
      }
  });
  // Disparar evento al cargar para mostrar los que estén marcados por defecto
  $('input[name="tag"]:checked').trigger('change');
});

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los botones "Destacar"
  const botonesDestacar = document.querySelectorAll('.btn-destacar');
  
  // Recorre cada botón y agrega un evento de clic
  botonesDestacar.forEach((boton) => {
      boton.addEventListener('click', (event) => {
          // Obtén el comentario al cual pertenece el botón
          const comentario = event.target.closest('.comentario');
          
          // Alterna la clase 'destacado' para el comentario
          comentario.classList.toggle('destacado');
          
          // Cambiar el texto del botón dependiendo de si está destacado o no
          if (comentario.classList.contains('destacado')) {
              event.target.textContent = 'Quitar destacado';
          } else {
              event.target.textContent = 'Destacar';
          }

          // Añadir log para verificar si el evento funciona
          console.log('Evento "Destacar" disparado en comentario:', comentario);
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los botones "Enviar Respuesta"
  const botonesEnviarRespuesta = document.querySelectorAll('.btn-enviar');

  botonesEnviarRespuesta.forEach(boton => {
    boton.addEventListener('click', (e) => {
      // Obtén el comentario al cual pertenece el botón
      const comentario = e.target.closest('.comentario');
      const textarea = comentario.querySelector('textarea');
      const respuestaTexto = textarea.value.trim();

      if (respuestaTexto !== '') {
        // Crear un nuevo div para la respuesta
        const nuevaRespuesta = document.createElement('div');
        nuevaRespuesta.classList.add('respuesta');
        
        // Asignar el texto de la respuesta
        nuevaRespuesta.innerHTML = `<p><strong>Respuesta:</strong> ${respuestaTexto}</p>`;

        // Insertar la nueva respuesta debajo del comentario
        comentario.appendChild(nuevaRespuesta);

        // Mostrar el mensaje "Respuesta enviada"
        const mensajeRespuesta = comentario.querySelector('.respuesta-enviada');
        mensajeRespuesta.style.display = 'block';

        // Limpiar el área de texto
        textarea.value = '';

        // Ocultar el área de respuesta después de enviar
        comentario.querySelector('.respuesta-area').style.display = 'none';
      } else {
        alert('Por favor, escribe una respuesta antes de enviarla.');
      }
    });
  });

  // Mostrar el área de respuesta cuando se haga clic en "Responder"
  const botonesResponder = document.querySelectorAll('.btn-responder');
  botonesResponder.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const comentario = e.target.closest('.comentario');
      const respuestaArea = comentario.querySelector('.respuesta-area');
      respuestaArea.style.display = 'block';
    });
  });
});