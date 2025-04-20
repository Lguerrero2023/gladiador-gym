$(document).ready(function() {
    var isFlipped = false;

    // Detectar el hover en PC para animar las barras de habilidad automáticamente
    $('.flip-card').hover(
        function() {
            // Al pasar el ratón sobre la tarjeta, voltear la tarjeta
            $(this).find('.flip-card-inner').addClass('flipped');
            isFlipped = true;

            // Mostrar las barras de habilidad
            $('.barra-fuerza, .barra-flexibilidad').show();

            // Animar las barras de habilidad automáticamente
            animateProgressBar('.barra-fuerza', 90);  // Fuerza al 90%
            animateProgressBar('.barra-flexibilidad', 80);  // Flexibilidad al 80%
        },
        function() {
            // Al quitar el ratón de la tarjeta, revertir la tarjeta
            $(this).find('.flip-card-inner').removeClass('flipped');
            isFlipped = false;

            // Ocultar las barras de habilidad
            $('.barra-fuerza, .barra-flexibilidad').hide();
        }
    );

    // Detectar clic fuera de la tarjeta para revertir el volteo (móvil)
    $(document).on('click', function(event) {
        // Si el clic no fue dentro de la tarjeta
        if (!$(event.target).closest('.flip-card').length) {
            if (isFlipped) {
                $('.flip-card-inner').removeClass('flipped');
                isFlipped = false;

                // Ocultar las barras de habilidad
                $('.barra-fuerza, .barra-flexibilidad').hide();
            }
        }
    });

    // Función para animar las barras de habilidad
    function animateProgressBar(barClass, width) {
        $(barClass).animate({ width: width + '%' }, {
            duration: 3000, // Duración de la animación
            step: function (now) {
                $(this).text(Math.round(now) + '%'); // Mostrar el porcentaje
                $(this).css('background-color', 'limegreen'); // Cambiar el color de la barra
            }
        });
    }

    // Inicialmente las barras de habilidad están ocultas
    $('.barra-fuerza, .barra-flexibilidad').hide();
});

//RATING CON ESTRELLAS
$(document).ready(function () {
    $('.rating input').on('change', function () {
        const $this = $(this);
        const rating = parseInt($this.val());
        const groupName = $this.attr('name');

        // Seleccionar todas las labels del grupo
        const $labels = $(`input[name='${groupName}']`).next('label');

        $labels.each(function () {
            const value = parseInt($(this).prev('input').val());
            if (value <= rating) {
                $(this).css('color', 'gold');
            } else {
                $(this).css('color', '#ddd');
            }
        });
    });

    // Resalta estrellas temporalmente en hover
    // Resalta estrellas temporalmente en hover
$('.rating label').hover(
    function () {
        const $label = $(this);
        const $input = $label.prev('input');
        const groupName = $input.attr('name');
        const value = parseInt($input.val());

        const checkedVal = parseInt($(`input[name='${groupName}']:checked`).val()) || 0;

        $(`input[name='${groupName}']`).next('label').each(function () {
            const val = parseInt($(this).prev('input').val());

            if (val <= value) {
                $(this).css('color', 'gold');
            } else {
                // Evita pintar de gris si ya está seleccionada
                if (val > checkedVal) {
                    $(this).css('color', '#ddd');
                }
            }
        });
    },
    function () {
        const groupName = $(this).prev('input').attr('name');
        const checked = $(`input[name='${groupName}']:checked`);
    
        if (checked.length > 0) {
            const rating = parseInt(checked.val());
    
            $(`input[name='${groupName}']`).next('label').each(function () {
                const val = parseInt($(this).prev('input').val());
                if (val <= rating) {
                    $(this).css('color', 'gold');
                } else {
                    $(this).css('color', '#ddd');
                }
            });
        } else {
            $(`input[name='${groupName}']`).next('label').css('color', '#ddd');
        }
    }
    );
});