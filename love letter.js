$(document).ready(function () {
  // Ocultar la carta inicialmente
  $('.card').hide();

     const player = document.getElementById('youtubePlayer');

  // Botón Abrir Carta
  $('#openButton').click(function () {
      $('.card').show(); // Muestra la carta
       $('.envelope').addClass('active'); // Agrega la clase para transformar
      $('#openButton').hide(); // Oculta el botón de abrir
      $('#closeButton').show(); // Muestra el botón de cerrar
        $('#audioPlayer')[0].play(); // Reproduce el audio
   });

  // Botón Cerrar Carta
  $('#closeButton').click(function () {
      $('.card').hide(); // Oculta la carta
       $('.envelope').removeClass('active'); // Elimina la clase para revertir la transformación
      $('#closeButton').hide(); // Oculta el botón de cerrar
      $('#openButton').show(); // Muestra el botón de abrir

     $('#audioPlayer')[0].pause(); // Pausa el audio
       $('#audioPlayer')[0].currentTime = 0; // Reinicia el audio
    });

  // Animación para la carta
  $(".container").mouseenter(function () {
    if ($('.card').is(':visible')) { // Solo anima si la carta está visible
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    }
  }).mouseleave(function () {
    if ($('.card').is(':visible')) { // Solo anima si la carta está visible
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    }
  });
});

