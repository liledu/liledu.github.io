$(document).ready(function(){

    var burbuja1AnimationExecuted = false;
    var burbuja2AnimationExecuted = false;
    var burbuja3AnimationExecuted = false;
    var burbuja4AnimationExecuted = false;
    var burbuja5AnimationExecuted = false;

    var takin = new Audio('./src/sounds/takin.mp3');
    var rembem = new Audio('./src/sounds/wond.mp3');
    var nino = new Audio('./src/sounds/nino.mp3');

    var burbujas = new Audio('./src/sounds/effects/globitos.mp3');
    var button = new Audio('./src/sounds/effects/button.mp3');


    function randomColor() {
        var color = '#' + Math.floor(Math.random()*16777215).toString(16);

        return color;
    }
    

    function animateBurbuja(burbujaElement) {
        var tl = gsap.timeline();
    
        var randomX = Math.random() * ($('.overlay-start').width() - $(burbujaElement).width());
        var randomY = Math.random() * ($('.overlay-start').height() - $(burbujaElement).height());
    
        tl.fromTo(burbujaElement, {
            opacity: 0,
            scale: 0,
            x: randomX,
            y: randomY,
            rotation: Math.random() * 50 - 30,
        }, {
            opacity: 1,
            scale: 1,
            ease: 'elastic.out(1, 0.3)',
            duration: 1,
            onStart: function () {
                burbujas.play();
            },
            onComplete: function () {
                gsap.to(burbujaElement, {
                    backgroundColor: randomColor(), 
                    duration: 0.5,
                    ease: 'power1.out', 
                    onStart: function () {
                        gsap.to(burbujaElement, { scale: 1.1, duration: 0.5, ease: 'power1.out' });
                    },
                    onComplete: function () {
                        gsap.to(burbujaElement, { scale: 1, duration: 0.5, ease: 'power1.in' });
                    }
                });
            }
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
            rotation: Math.random() * 60 - 20,
        }, {
            opacity: 1,
            scale: 1,
            ease: 'elastic.out(1, 0.3)',
            duration: 1,
            onComplete: function () {
                gsap.to(burbujaElement, {
                    backgroundColor: randomColor(), 
                    duration: 1,
                    ease: 'power1.out', 
                    onStart: function () {
                        gsap.to(burbujaElement, { scale: 1.2, duration: 1, ease: 'power1.out' });
                    },
                    onComplete: function () {
                        gsap.to(burbujaElement, { scale: 1.1, duration: 1, ease: 'power1.in' });
                    }
                });
            }
        });
    }
    


    $('#start').click(function(){
        var selectedStep = $('input[name="button-step"]:checked').val();

        rembem.play();
        rembem.volume = 0.1;

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

            rembem.volume = 0.2;

            $('.overlay-start').css('background-color', 'none');
            $('#burbuja2').show();
            $('#burbujaa2').show();
            $('#burbujaaa2').show();

            var burbuja2 = document.getElementById('burbuja2');
            var burbujaa2 = document.getElementById('burbujaa2');
            var burbujaaa2 = document.getElementById('burbujaaa2');

            animateBurbuja(burbuja2);
            animateBurbuja2(burbujaa2);
            animateBurbuja(burbujaaa2);

            $('.child-container img').css({
                'filter': 'grayscale(.6) blur(4px)'
            });

            burbuja2AnimationExecuted = true;
        }
   
        if (selectedStep === 'step-4' && !burbuja3AnimationExecuted) {

            rembem.volume = 0.3;

            $('.overlay-start').css('background-color', 'none');
            $('#burbuja3').show();
            $('#burbujaa3').show();
            $('#burbujaaa3').show();

            var burbuja3 = document.getElementById('burbuja3');
            var burbujaa3 = document.getElementById('burbujaa3');
            var burbujaaa3 = document.getElementById('burbujaaa3');

            animateBurbuja(burbuja3);
            animateBurbuja(burbujaa3);
            animateBurbuja2(burbujaaa3);

            $('.child-container img').css({
                'filter': 'grayscale(.5) blur(3px)'
            });

            burbuja3AnimationExecuted = true;
        }

        if (selectedStep === 'step-5' && !burbuja4AnimationExecuted) {

            rembem.volume = 0.4;

            $('.overlay-start').css('background-color', 'none');
            $('#burbuja4').show();
            $('#burbujaa4').show();
            $('#burbujaaa4').show();
            $('#burbujaaaa4').show();

            var burbuja4 = document.getElementById('burbuja4');
            var burbujaa4 = document.getElementById('burbujaa4');
            var burbujaaa4 = document.getElementById('burbujaaa4');
            var burbujaaaa4 = document.getElementById('burbujaaaa4');

            animateBurbuja(burbuja4);
            animateBurbuja2(burbujaa4);
            animateBurbuja(burbujaaa4);
            animateBurbuja2(burbujaaaa4);

            $('.child-container img').css({
                'filter': 'grayscale(.4) blur(2px)'
            });

            burbuja4AnimationExecuted = true;
        }

        if (selectedStep === 'step-6' && !burbuja5AnimationExecuted) {

            rembem.volume = 0.5;

            $('.overlay-start').css('background-color', 'none');
            $('#burbuja5').show();
            $('#burbujaa5').show();
            $('#burbujaaa5').show();
            $('#burbujaaaa5').show();
            $('#burbujaaaaa5').show();
            $('#burbujaaaaaa5').show();

            var burbuja5 = document.getElementById('burbuja5');
            var burbujaa5 = document.getElementById('burbujaa5');
            var burbujaaa5 = document.getElementById('burbujaaa5');
            var burbujaaaa5 = document.getElementById('burbujaaaa5');
            var burbujaaaaa5 = document.getElementById('burbujaaaaa5');
            var burbujaaaaaa5 = document.getElementById('burbujaaaaaa5');

            animateBurbuja(burbuja5);
            animateBurbuja2(burbujaa5);
            animateBurbuja(burbujaaa5);
            animateBurbuja2(burbujaaaa5);
            animateBurbuja(burbujaaaaa5);
            animateBurbuja2(burbujaaaaaa5);

            $('.child-container img').css({
                'filter': 'grayscale(.0) blur(0px)'
            });

            burbuja5AnimationExecuted = true;
        }

        //
        if (selectedStep === 'step-7') {
            rembem.volume = 0.1;
        
            $('.overlay-start').hide();
            $('.sub-gall').fadeOut(600);
            button.play();
        
            setTimeout(function () {
                $('.start-button').hide();
                $('.centro-transition').show();
        
                setTimeout(function () {
                    $('body').css('background-color', '#ff7c70');
        
                    setTimeout(function () {
                        $('#textos-alr').fadeOut(200);
                        $('.centro-transition').hide();
                        $('.container').show();
        
                        setTimeout(function () {
                            $('.one-section').show();
        
                            //
                            gsap.from('.first-text', {
                                y: -300,
                                opacity: 0,
                                ease: 'bounce',
                                duration: 1.5,
                                onComplete: function () {
                                    $('.card-text').fadeIn();
                        
                                    var text = ".";
                                    var index = 0;
                        
                                    function type() {
                                        $('#typewriter').text(text.substring(0, index++));
                                        if (index <= text.length) {
                                            setTimeout(type, 100);
                                        } else {
                                            setTimeout(function() {
                                                $('.first-text').fadeOut('slow');
                                                $('.songs-content').fadeIn('slow');
                                    
                                                gsap.to('.songs-title', {
                                                    y: 20,
                                                    opacity: 0,
                                                    duration: 1,
                                                    ease: 'power2.out',
                                                    onComplete: function() {
                                                        gsap.to('.songs-title', {
                                                            y: 0, 
                                                            opacity: 1, 
                                                            duration: 1,
                                                            ease: 'power2.inOut',
                                                            onComplete: function() {
                                                                const cards = document.querySelectorAll('.spotify-card');
                                    
                                                                function addActiveClass(index) {
                                                                    cards[index].classList.add('active');
                                                                }
                                    
                                                                function removeActiveClass(index) {
                                                                    cards[index].classList.remove('active');
                                                                }
                                    
                                                                const timeline = gsap.timeline({
                                                                    onComplete: function() {
                                                                        cards.forEach((card, index) => {
                                                                            setTimeout(() => {
                                                                                addActiveClass(index);
                                                                                setTimeout(() => {
                                                                                    removeActiveClass(index);
                                                                                }, 1000); 
                                                                            }, index * 1000); 
                                                                        });
                                    
                                                                        setTimeout(function() {
                                                                            $('.songs-content').fadeOut('slow', function() {

                                                                                rembem.volume = 0;
                                                                                rembem.pause()

                                                                                takin.play();
                                                                                takin.volume = 0.1;

                                                                                setTimeout(secondpart, 2000);
                                                                            });
                                                                        }, (cards.length - 1) * 1000 + 2000);
                                                                    }
                                                                });
                                    
                                                                timeline.to('#card1', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true })
                                                                    .to('#card2', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true })
                                                                    .to('#card3', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true })
                                                                    .to('#card4', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true });
                                                            }
                                                        });
                                                    }
                                                });
                                    
                                            }, 2000);
                                        }
                                    }

                                    setTimeout(type, 1000); 
                                }
                            });
                            
                            //
                            $('.first-text').fadeIn(function () {
                                setTimeout(function () {
                                }, 1000); 
                            });
        
                        }, 15);
        
                    }, 250);
        
                }, 250);
        
            }, 600);
        }
        
    });


    function secondpart() {

        $('.songs-textc').fadeIn();
        $('.center-h1').show();

        gsap.from('.center-h1', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power2.out',
            onComplete: function() {
                typeWriter2();
            }
        });    
    }



    function typeWriter2() {
        var text2 = "pedoo shabems cuaam caaamcioom somnoo munshoom cuamdo pasabamso jumtooms? :0";
        var index2 = 0;
    
        function type2() {
            $('#typewriter2').text(text2.substring(0, index2++));
            if (index2 <= text2.length) {
                setTimeout(type2, 100);
            } else {
                $('.center-h1').hide(function() {
                    $('.img-center').show();

                    takin.volume = 0.2;
    
                    gsap.from('.img-center', {
                        scale: 0.5, 
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.out',
                        onComplete: function() {

                            setTimeout(function() {
                                $('.img-center').hide();
    
                                setTimeout(function() {
                                    $('.center-h2').show();
                                    typeWriter3();
                                }, 1000);
                            }, 1000);
                        }
                    });
                });
            }
        }
        setTimeout(type2, 2000); 
    }
    
    
    function typeWriter3() {
        var text3 = "Exactoo fueeeeeeem etaaam jiji";
        var index3 = 0;
    
        function type3() {
            $('#typewriter3').text(text3.substring(0, index3++));
            if (index3 <= text3.length) {
                setTimeout(type3, 100);
            } else {
                $('.center-h2').hide();
                $('.song-content2').show();
    
                gsap.from('.song-content2', {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power2.out',
                    onComplete: function() {
                        takin.volume = 1;
    
                        setTimeout(function() {
                            gsap.to('.song-content2', {
                                opacity: 0,
                                y: -50,
                                duration: 1,
                                ease: 'power2.out',
                                onComplete: function() {
                                    $('.song-content2').hide();
                                    typeWriter4();
                                }
                            });
                        }, 2000);
                    }
                });
            }
        }
    
        setTimeout(type3, 2000);
    }

    function typeWriter4() {
        var text4 = "Ashim como nueeeuetams camciommnes fuerom pamte de nuestam dimdam histodiam tamiem fuedoms lo decuemtoms peo este año she aacaba y viemnee.. ";
        var index4 = 0;
    
        $('.center-h3').show();
    
        function type4() {
            $('#typewriter4').text(text4.substring(0, index4++));
            if (index4 <= text4.length) {
                setTimeout(type4, 100);
            } else {
                gsap.to('.songs-textc', { opacity: 0, duration: 1, onComplete: function() {
                    $('.songs-textc').hide();

                    takin.pause();

                    nino.play();
                    nino.volume = 0.5;
                    
                    $('.year2024').show();
        
                    setTimeout(function() {
                        $('.year2024').hide();

                        $('.fotos-year').show();
    
                    }, 12000); 
                }});
            }
        }
    
        setTimeout(function() {
            gsap.from('.center-h3', {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'power2.out',
                onComplete: function() {
                    type4();
                }
            });
        }, 2000);
    }
    

});
