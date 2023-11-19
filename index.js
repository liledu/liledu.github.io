$(document).ready(function() {
    console.log("jQuery está cargado correctamente.");
});
  

$(document).ready(function() {
  $("#openModalBtn").on("click", function() {
    $(".modal-container").fadeIn(500, function() {

     setTimeout(function() {
        $(".modal").addClass("blur")
      }, 120);
    });
  });



});

function felcitaciones() {
  var video = document.getElementById("myVideo");
  var hiddenDiv = $("#most");

  video.play();

  setTimeout(function () {
      hiddenDiv.show(); 
  }, 23); 
}

function enviarFormulario() {

  event.preventDefault();
    
  var deseo1 = $(".form__field[data-placeholder='tudesheoumno']").text().trim();
  var deseo2 = $(".form__field[data-placeholder='tudesheodom']").text().trim();
  var deseo3 = $(".form__field[data-placeholder='tumdeheotrem']").text().trim();

  var datos = {
      deseo1: deseo1,
      deseo2: deseo2,
      deseo3: deseo3
  };

  console.log(JSON.stringify(datos));

  // Cerrar el formulario (puedes ocultarlo o hacer lo que sea necesario)
  $(".form__contact").hide();

  $("#myVideo").attr("src", "./perrito.mp4");

  // Cargar y reproducir el nuevo video
  $("#myVideo")[0].load();
  $("#myVideo")[0].play();

  $("#myVideo").on("ended", function() {
    $(".modal").fadeOut(1200);
});
}
