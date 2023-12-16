$(document).ready(function(){

    var burbuja1AnimationExecuted = false;
    var burbuja2AnimationExecuted = false;
    var burbuja3AnimationExecuted = false;
    var burbuja4AnimationExecuted = false;
    var burbuja5AnimationExecuted = false;


    function animateBurbuja(burbujaElement) {
        var tl = gsap.timeline();

        var randomX = Math.random() * ($('.overlay-start').width() - $(burbujaElement).width());
        var randomY = Math.random() * ($('.overlay-start').height() - $(burbujaElement).height());

        tl.fromTo(burbujaElement, {
            opacity: 0,
            scale: 0,
            x: randomX,
            y: randomY,
            rotation: Math.random() * 60 - 30,
            }, {
            opacity: 1,
            scale: 1,
            ease: 'elastic.out(1, 0.3)',
            duration: 1
        });
    }

    function animateBurbuja2(burbujaElement) {
        var tl = gsap.timeline();

        var randomX = Math.random() * ($('.overlay-start').width() - $(burbujaElement).width());
        var randomY = Math.random() * ($('.overlay-start').height() - $(burbujaElement).height());

        tl.fromTo(burbujaElement, {
            opacity: 0,
            scale: 0,
            x: randomX,
            y: randomY,
            rotation: Math.random() * 90 - 10,
        }, {
            opacity: 1,
            scale: 1,
            ease: 'elastic.out(1, 1)',
            duration: 2
        });
    }



    $('#start').click(function(){
        var selectedStep = $('input[name="button-step"]:checked').val();

        $('.overlay-start').css('transition', 'background-color 0.5s ease-in-out'); 

        //
        if (selectedStep === 'step-2' && !burbuja1AnimationExecuted) {
            $('.overlay-start').css('background-color', 'none');
            $('#burbuja').show();
            $('#burbujaa').show();

            var burbuja1 = document.getElementById('burbuja');
            var burbujaa1 = document.getElementById('burbujaa');

            animateBurbuja(burbuja1);
            animateBurbuja2(burbujaa1);

            $('.child-container img').css({
                'filter': 'grayscale(.7) blur(5px)'
            });

            burbuja1AnimationExecuted = true;
        }

        if (selectedStep === 'step-3' && !burbuja2AnimationExecuted) {
            $('.overlay-start').css('background-color', 'none');
            $('#burbuja2').show();

            var burbuja2 = document.getElementById('burbuja2');
            animateBurbuja(burbuja2);

            $('.child-container img').css({
                'filter': 'grayscale(.6) blur(4px)'
            });

            burbuja2AnimationExecuted = true;
        }
   
        if (selectedStep === 'step-4' && !burbuja3AnimationExecuted) {
            $('.overlay-start').css('background-color', 'none');
            $('#burbuja3').show();

            var burbuja3 = document.getElementById('burbuja3');
            animateBurbuja(burbuja3);

            $('.child-container img').css({
                'filter': 'grayscale(.5) blur(3px)'
            });

            burbuja3AnimationExecuted = true;
        }

        if (selectedStep === 'step-5' && !burbuja4AnimationExecuted) {
            $('.overlay-start').css('background-color', 'none');
            $('#burbuja4').show();

            var burbuja4 = document.getElementById('burbuja4');
            animateBurbuja(burbuja4);

            $('.child-container img').css({
                'filter': 'grayscale(.4) blur(2px)'
            });

            burbuja4AnimationExecuted = true;
        }

        if (selectedStep === 'step-6' && !burbuja5AnimationExecuted) {
            $('.overlay-start').css('background-color', 'none');
            $('#burbuja5').show();

            var burbuja5 = document.getElementById('burbuja5');
            animateBurbuja(burbuja5);

            $('.child-container img').css({
                'filter': 'grayscale(.0) blur(0px)'
            });

            burbuja5AnimationExecuted = true;
        }

        //
        if (selectedStep === 'step-7') {

            $('.overlay-start').hide()
            $('.sub-gall').fadeOut(600);

            setTimeout(function() {
                $('.start-button').hide();
                $('.centro-transition').show();

                setTimeout(function() {
                    $('body').css('background-color', '#ff7c70');

                    setTimeout(function() {
                        $('#textos-alr').fadeOut(200);
                        $('.centro-transition').hide();
                        $('.container').show();

                        setTimeout(function() {
                            $('.one-section').show();
                        }, 15);

                    }, 250);

                }, 250);

            }, 600);
        }
    });

});
