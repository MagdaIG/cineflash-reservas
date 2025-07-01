$(document).ready(function () {
  // Inicializa el modal de reserva de entradas
  const modal = new bootstrap.Modal(document.getElementById('modalReserva'));

  // Inicializa el modal de confirmación de reserva
  const confirmModal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));

  // Cuando se hace clic en un botón "Reservar"
  $('.reservar-btn').click(function () {
    // Obtiene el nombre de la película desde el botón presionado
    const pelicula = $(this).data('pelicula');

    // Rellena el campo de texto con el nombre de la película seleccionada
    $('#pelicula').val(pelicula);

    // Muestra el modal de reserva
    modal.show();
  });

  // Al enviar el formulario de reserva
  $('#formReserva').submit(function (e) {
    e.preventDefault(); // Previene que el formulario recargue la página

    // Obtiene el nombre de la película ingresado
    const nombrePelicula = $('#pelicula').val();

    // Inserta el nombre de la película en el modal de confirmación
    $('#peliculaConfirmada').text(nombrePelicula);

    // Oculta el modal de reserva
    modal.hide();

    // Resetea el formulario para dejarlo limpio
    this.reset();

    // Muestra el modal de confirmación luego de 0.5 segundos
    setTimeout(() => confirmModal.show(), 500);
  });
});
