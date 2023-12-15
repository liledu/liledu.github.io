$(document).ready(function(){

    $('#start').click(function(){
        var selectedStep = $('input[name="button-step"]:checked').val();

        //
        if (selectedStep === 'step-2') {$('.child-container img').css({  'filter': 'grayscale(.7) blur(5px)'});}
        if (selectedStep === 'step-3') {$('.child-container img').css({  'filter': 'grayscale(.6) blur(4px)'});}
        if (selectedStep === 'step-4') {$('.child-container img').css({  'filter': 'grayscale(.5) blur(3px)'});}
        if (selectedStep === 'step-5') {$('.child-container img').css({  'filter': 'grayscale(.4) blur(2px)'});}
        if (selectedStep === 'step-6') {$('.child-container img').css({  'filter': 'grayscale(.0) blur(0px)'});}

        //
        if (selectedStep === 'step-7') {

            $('.sub-gall').fadeOut(600);

            setTimeout(function() {
                $('.start-button').hide();
                $('.centro-transition').show();

                setTimeout(function() {
                    $('body').css('background-color', '#ff7c70');

                    setTimeout(function() {
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
