$(document).ready(function() {
    // Hover en las clases para mostrar el overlay
    $('.clase').hover(
      function() {
        $(this).find('.overlay').stop(true, true).fadeIn(300); // Mostrar overlay al hacer hover
      },
      function() {
        $(this).find('.overlay').stop(true, true).fadeOut(300); // Ocultar overlay cuando se quita el hover
      }
    );
  });