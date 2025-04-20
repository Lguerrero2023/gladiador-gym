const toggleBtn = document.getElementById('modo-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'DARK MODE OFF ☀️'
    : 'DARK MODE ON 🌙';
});

$(document).ready(function () {
  $('.dropdown').hover(
    function () {
      $(this).addClass('show');
      $(this).find('.dropdown-menu').addClass('show');
    },
    function () {
      $(this).removeClass('show');
      $(this).find('.dropdown-menu').removeClass('show');
    }
  );
});

$(document).ready(function () {
  const frases = [
    "Motivación, fuerza y disciplina",
    "Entrenamientos para todos los niveles",
    "¡Superá tus límites cada día!",
    "Tu mejor versión empieza hoy"
  ];

  let index = 0;
  const $texto = $(".texto-dinamico");

  // Mostrar el overlay inicialmente
  $('.overlay-texto').hide().fadeIn(1000).slideDown(1500);

  // Cambiar frases cada 4 segundos
  setInterval(() => {
    index = (index + 1) % frases.length;
    $texto.fadeOut(500, function () {
      $(this).text(frases[index]).fadeIn(800);
    });
  }, 4000);
});

// CONTADOR ANIMADO 
$(document).ready(function () {
  function animarContadores() {
    $('.numero').each(function () {
      const $this = $(this);
      const numeroFinal = parseInt($this.attr('data-numero'));
      let contador = 0;
      const duracion = 3000;
      const intervalo = 20;
      const incremento = Math.ceil(numeroFinal / (duracion / intervalo));

      const timer = setInterval(function () {
        contador += incremento;
        if (contador >= numeroFinal) {
          contador = numeroFinal;
          clearInterval(timer);

          // Si es el número 500, mostrar con "+" y aplicar animación de zoom
          if (numeroFinal === 500) {
            $this.text(contador + '+');
            
            // Agregar la clase de zoom-bounce para el latido y zoom
            $this.addClass('zoom-bounce');
          } else {
            $this.text(contador);
          }
        } else {
          $this.text(contador);
        }
      }, intervalo);
    });
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animarContadores();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('.contador'));
});

//Testimonios 
$(document).ready(function () {
  // Iniciar carrusel con intervalos
  $('#carouselTestimonios').carousel({
    interval: 4000,
    pause: false
  });

  // Pausar al hacer hover
  $('#carouselTestimonios').hover(
    function () {
      $(this).carousel('pause');
    },
    function () {
      $(this).carousel('cycle');
    }
  );
});

//FOOTER
$(document).ready(function () {
  $('#newsletter-form').on('submit', function (e) {
    e.preventDefault();
    const form = this;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      $(form).addClass('was-validated');
    } else {
      $('#form-spinner').removeClass('d-none');
      $('#btn-text').text('Enviando...');

      setTimeout(() => {
        $('#form-spinner').addClass('d-none');
        $('#btn-text').text('Suscribirme');
        form.reset();
        $(form).removeClass('was-validated');
        alert('¡Gracias por suscribirte!');
      }, 2000);
    }
  });
});

//cambio de color redes sociales
$(document).ready(function () {
  // Inicializa los tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Hover para aplicar el color característico de las redes en escritorio
  $('.social-icon').hover(
    function () {
      const $icon = $(this);
      if ($icon.hasClass('facebook')) {
        $icon.css({ backgroundColor: '#1877f2', color: 'white' });
      } else if ($icon.hasClass('instagram')) {
        $icon.css({
          background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
          color: 'white'
        });
      } else if ($icon.hasClass('twitter')) {
        $icon.css({ backgroundColor: '#1da1f2', color: 'white' });
      }
    },
    function () {
      $(this).css({
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        color: 'white'
      });
    }
  );

  // Evento táctil para dispositivos móviles (cuando se toca)
  $('.social-icon').on('touchstart', function () {
    const $icon = $(this);
    if ($icon.hasClass('facebook')) {
      $icon.css({ backgroundColor: '#1877f2', color: 'white' });
    } else if ($icon.hasClass('instagram')) {
      $icon.css({
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        color: 'white'
      });
    } else if ($icon.hasClass('twitter')) {
      $icon.css({ backgroundColor: '#1da1f2', color: 'white' });
    }
  }).on('touchend', function () {
    $(this).css({
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      color: 'white'
    });
  });
});