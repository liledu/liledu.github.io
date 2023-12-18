
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

    var reed = new Audio('./src/sounds/red.mp3');


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
            $('.overlay-start').css('background-color', '#6c4788');
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

            $('.overlay-start').css('background-color', '#c0558e');
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

            $('.overlay-start').css('background-color', '#286b71');
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

            $('.overlay-start').css('background-color', '#c075af');
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

            $('.overlay-start').css('background-color', '#88673c');
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
                        
                                    var text = "odaaaaam mi vidaam comoetams oieem? epedooo0o qmiem \npuems codasho0o0m te hicem etoom pada decomdam l0o0 momentoms dimdiitoms qpashamos y amo a pasham \n y miividam etam fuedom algumnas de la camciomnes mas sonadom cuamdo etabamojumtooooooomss... tamo..... ";
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
                                    
                                                                timeline.to('#card1', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true  })
                                                                    .to('#card2', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true })
                                                                    .to('#card3', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true })
                                                                    .to('#card4', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true })
                                                                    .to('#card5', { autoAlpha: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)', yoyo: true });

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
                        typeWriter5();

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

    function typeWriter5() {
        var text5 = "ashi tamiem como la camciomnes fuedom pate de nueta hitodiaaam tamiem fuedom daaams fo0ooo0o0otooms... jiji";
        var index5 = 0;
    
        function type5() {
            $('#typewriter5').text(text5.substring(0, index5++));
            if (index5 <= text5.length) {
                setTimeout(type5, 100);
            } else {
                // Oculta .center-h4 y muestra .imgs-year
                gsap.to('.center-h4', {
                    opacity: 0,
                    y: -50,
                    duration: 1,
                    ease: 'power2.out',
                    onComplete: function() {
                        $('.center-h4').hide();   
                        imgsyear();                     
                    }
                });
            }
        }
    
        $('.center-h4').show();
    
        gsap.from('.center-h4', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power2.out',
            onComplete: function() {
                type5();
            }
        });
    }

    var photoContainer = $('#photo-container');
    var albumContainer = $('.album-container');

    function imgsyear() {

        $('.imgs-year').show();

        function getRandomRotation() {
            return Math.floor(Math.random() * 21) - 10;
        }
    
        function formatDate(dateString) {
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        $.getJSON('images.json', function (data) {
            photoContainer.show();
            photoContainer.empty();
    
            var photoCounter = 0;
    
            var totalImagesToShow = Math.min(data.images.length, 10);
    
            for (var index = 0; index < totalImagesToShow; index++) {
                (function (index) {
                    setTimeout(function () {
                        var rotation = getRandomRotation();
                        var yearcard = $('<div>').addClass('yearcard').css({ 'transform': 'rotate(' + rotation + 'deg)' });
    
                        var img = $('<img>').attr('src', 'src/imgs/' + data.images[index].src).appendTo(yearcard);
                        var title = $('<h2>').text(formatDate(data.images[index].date)).appendTo(yearcard);
    
                        photoContainer.append(yearcard);
    
                        yearcard.hide().fadeIn(1000);
    
                        photoCounter++;
    
                        if (photoCounter === 6) {
                            adjustSpeed(15, data, index + 1);  
                        }
    
                        if (photoCounter === totalImagesToShow) {
                            showAlbum(data.images);
                        }
                    }, index * 3000);
                })(index);
            }
        });

    }

    var palabras = ['aoi', 'buuu', 'ebuu', 'dimdiiim', 'dimditam :3', 'uwu', 'owo', 'uwu' , 'eqisom', 'amoalanexo', 'muiau', 'tiqiedo', 'AJAJKSD ###', 'taslocoime', 'taslocaoiem', 'pippipi', 'pimsheshitam', ' iacomite?', 'AKSDJK', 'haha', 'iloveoiu ', '⭐', '🏆', '🥇', '😚', '🎈', '👑', '🏠' , '🤶' , 'epalda', 'temgosueñompip', 'notnotyours' , 'qestoienamoraotuio', '2024!', '2023;v', 'oooohhhk', 'ceshidotom' , 'diñoshaudiom'];
    var palabraas = ['33', '44', '####', 'tamo0o', 'buditoo', 'buuu', 'teestaneem', 'meloquee', 'elote XD', 'eqisotasia', 'umbobosoq', '7u7', 'pwp', ':v', ':b', ':p', 'eqisoo', 'ññiññiñi', 'liiwidicimimi', 'mamii', 'aia', 'ooohk', 'banateem', 'pavo 🦃', 'dimdimtoiamtom', 'amoajugwam', 'sieteocero', 'llavacadodam', 'takintakin', 'ysiteparece' , 'pimsheshitam', 'reimnitam', 'elmosham', 'bellam', '### ASKD', 'toieqisomxD']

    //LEFT
    function animateBuble(burbujaElement) {
        var tl = gsap.timeline();
    
        var randomX = Math.random() * ($('.sidebar-left').width() - $(burbujaElement).width());
        var randomY = Math.random() * ($('.sidebar-left').height() - $(burbujaElement).height());
    
        var palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
        burbujaElement.innerText = palabraAleatoria;

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
    
    function animateBuble2(burbujaElement) {
        var tl = gsap.timeline();
    
        var palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
        burbujaElement.innerText = palabraAleatoria;
    
        var randomX = Math.random() * ($('.sidebar-left').width() - $(burbujaElement).width());
        var randomY = Math.random() * ($('.sidebar-left').height() - $(burbujaElement).height());
    
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
    

    //right
    function animaterBuble(burbujaElement) {
        var tl = gsap.timeline();

        var palabraAleatoria = palabraas[Math.floor(Math.random() * palabraas.length)];
        burbujaElement.innerText = palabraAleatoria;
    
        var randomX = Math.random() * ($('.sidebar-right').width() - $(burbujaElement).width());
        var randomY = Math.random() * ($('.sidebar-right').height() - $(burbujaElement).height());
    
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
    
    function animaterBuble2(burbujaElement) {
        var tl = gsap.timeline();
    
        var palabraAleatoria = palabraas[Math.floor(Math.random() * palabraas.length)];
        burbujaElement.innerText = palabraAleatoria;

        var randomX = Math.random() * ($('.sidebar-right').width() - $(burbujaElement).width());
        var randomY = Math.random() * ($('.sidebar-right').height() - $(burbujaElement).height());
    
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

    function showAlbum(images) {
        $('.yearcard-container').fadeOut(3200, function () {
            albumContainer.fadeIn(120);
    
            var gallery = $('.gallery');
            gallery.empty();
    
            var currentIndex = 0;
    
            while (currentIndex < images.length) {
                var paragraph = $('<p>');
    
                for (var i = 0; i < 3; i++) {
                    if (currentIndex >= images.length) {
                        break;
                    }
    
                    var image = images[currentIndex];
                    var img = $('<img>').attr('src', 'src/imgs/' + image.src).attr('alt', image.alt);
    
                    setTimeout(function (img) {
                        img.addClass('fadeInUp').css({ 'opacity': 1 });
                    }, currentIndex * 100, img);
    
                    img.appendTo(paragraph);
                    currentIndex++;
                }
    
                paragraph.appendTo(gallery);
    
                paragraph = $('<p>');
                for (var i = 0; i < 4; i++) {
                    if (currentIndex >= images.length) {
                        break;
                    }
    
                    var image = images[currentIndex];
                    var img = $('<img>').attr('src', 'src/imgs/' + image.src).attr('alt', image.alt);
    
                    setTimeout(function (img) {
                        img.addClass('fadeInUp').css({ 'opacity': 1 });
                    }, currentIndex * 100, img);
    
                    img.appendTo(paragraph);
                    currentIndex++;
                }
    
                paragraph.appendTo(gallery);
    
                paragraph = $('<p>');
                for (var i = 0; i < 5; i++) {
                    if (currentIndex >= images.length) {
                        break;
                    }
    
                    var image = images[currentIndex];
                    var img = $('<img>').attr('src', 'src/imgs/' + image.src).attr('alt', image.alt);
    
                    setTimeout(function (img) {
                        img.addClass('fadeInUp').css({ 'opacity': 1 });
                    }, currentIndex * 100, img);
    
                    img.appendTo(paragraph);
                    currentIndex++;
                }
    
                paragraph.appendTo(gallery);
            }

            $('.sidebar-left').show();
            $('.sidebar-right').show();

            function burbujas() {

                //Left 
                $('#bubbleside1').show();
                $('#bubbleside2').show();
                $('#bubbleside3').show();
                $('#bubbleside4').show();
                
                var bubble1 = document.getElementById('bubbleside1');
                var bubble2 = document.getElementById('bubbleside2');
                var bubble3 = document.getElementById('bubbleside3');
                var bubble4 = document.getElementById('bubbleside4');

                animateBuble(bubble1);
                animateBuble2(bubble2);
                animateBuble(bubble3);
                animateBuble2(bubble4);
                
                //Right 
                $('#bubbleide1').show();
                $('#bubbleide2').show();
                $('#bubbleide3').show();
                $('#bubbleide4').show();
                
                var bubbler1 = document.getElementById('bubbleide1');
                var bubbler2 = document.getElementById('bubbleide2');
                var bubbler3 = document.getElementById('bubbleide3');
                var bubbler4 = document.getElementById('bubbleide4');

                animaterBuble(bubbler1);
                animaterBuble2(bubbler2);
                animaterBuble(bubbler3);
                animaterBuble2(bubbler4);
            }
    
            setInterval(burbujas, getRandomInt(2000, 4000));
    
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }

        });


    }
    
    
    window.onscroll = function() { stickySidebar() };

    var sidebarLeft = document.getElementById("sidebarLeft");
    var sidebarRight = document.getElementById("sidebarRight");

    var stickyLeft = sidebarLeft.offsetTop;
    var stickyRight = sidebarRight.offsetTop;

    function stickySidebar() {
        if (window.pageYOffset >= stickyLeft) {
            sidebarLeft.style.position = "fixed";
            sidebarLeft.style.top = "0";
        } else {
            sidebarLeft.style.position = "absolute";
            sidebarLeft.style.top = "0";
        }

        if (window.pageYOffset >= stickyRight) {
            sidebarRight.style.position = "fixed";
            sidebarRight.style.top = "0";
        } else {
            sidebarRight.style.position = "absolute";
            sidebarRight.style.top = "0";
        }
    }
    
});

var elementosConClase = document.querySelectorAll('.emoji-hidden');

elementosConClase.forEach(function(elemento) {
  if (elemento.textContent.includes('🌽')) {
    twemoji.parse(elemento);
  }
});
