$(document).ready(function () {
    const $table = $('#tabla-precios');

    $table.find('td, th').hover(function () {
      const colIndex = $(this).index();
      const $row = $(this).closest('tr');

      // Resalta fila
      $row.addClass('highlight-row');

      // Resalta columna
      $table.find('tr').each(function () {
        $(this).find('td, th').eq(colIndex).addClass('highlight-col');
      });
    }, function () {
      const colIndex = $(this).index();
      const $row = $(this).closest('tr');

      $row.removeClass('highlight-row');

      $table.find('tr').each(function () {
        $(this).find('td, th').eq(colIndex).removeClass('highlight-col');
      });
    });
  });
   
  $(document).ready(function () {
    function actualizarPrecios() {
      if ($("#toggle").is(":checked")) {
        // Mostrar precios anuales
        $(".precio.mensual").hide();
        $(".precio.anual").show();

        // Actualizar tabla comparativa
        $("#tabla-precios tbody tr:last-child td").eq(0).text("AR$ 51000");
        $("#tabla-precios tbody tr:last-child td").eq(1).text("AR$ 81600");
        $("#tabla-precios tbody tr:last-child td").eq(2).text("AR$ 108000");
      } else {
        // Mostrar precios mensuales
        $(".precio.anual").hide();
        $(".precio.mensual").show();

        // Restaurar tabla comparativa
        $("#tabla-precios tbody tr:last-child td").eq(0).text("AR$ 5000");
        $("#tabla-precios tbody tr:last-child td").eq(1).text("AR$ 8500");
        $("#tabla-precios tbody tr:last-child td").eq(2).text("AR$ 12000");
      }
    }

    // Inicializa con mensual
    $(".precio.anual").hide();

    // Escucha el cambio del toggle
    $("#toggle").on("change", actualizarPrecios);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });