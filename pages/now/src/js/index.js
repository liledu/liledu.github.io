$(window).on('load', function () {
    setTimeout(function () {
        $("#loader").hide();
        $("#content").show();
        AOS.init();

        var music = document.getElementById("background-music");
        music.play();
    }, 6000);
});