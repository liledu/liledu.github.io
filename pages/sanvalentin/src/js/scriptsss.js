$(document).ready(function() {

    ////////////////////////////////////////////////
    ///////////                          //////////
    //////////    #GLOBAL VARIABLES     //////////
    /////////                          //////////
    ////////////////////////////////////////////
    var passwordElement = $('.password');
    var container_pwshl = $('.container-pwsh');
    var preloader = $('.preloader');
    var textToShow = $('.text');
    var cardToShow = $('.card-tareta');
    var container = $('.container');

    
    
});
$(document).ready(function() {
    var typewriter;

    var passwordElement = $('.password');
    var container_pwshl = $('.container-pwsh');
    var preloader = $('.preloader');
    var textToShow = $('.text');
    var cardToShow = $('.card-tareta');
    var container = $('.container');
    var musiccontainer = $('.music-wrp');
    var recordPlayer = $('.record-player');

    var NextSteps = $('.next-steps')
    var boookup = $('.book');
    var nextsteepb = $('.book-next');

    var textToShow2 = $('.text2');
    var textToShow3 = $('.text3');

    var royito = $('.rollodepeli');

    var royo1 = $('#royo1');
    var royo2 = $('#royo2');
    var royo3 = $('#royo3');

    var boletoo = $('.boleto');
    var boleto_net = $('.boleto-next');
    var dspdelboleto = $('.dspdelboleto');
    var cartaultima = $('.carta-ultima');
    var textofinaal = $('.textofinal');

    // # Step 1 Onload website page
    gsap.set(passwordElement, { opacity: 0, y: '-100px' });

    gsap.to(passwordElement, {
        opacity: 1,
        y: 0,
        ease: 'back.out(1.7)',
        duration: 1.5,
        onComplete: function() {
            console.log('Animación completada');
        }
    });

    var passwordForm = $('#passwordForm');
    var submitButton = $('#submitButton');
    
    // # Step 1.5 verificate to check password is correct
    submitButton.click(function(event) {

        event.preventDefault();

        var enteredPassword = $('#password').val();

        if (enteredPassword == "2022") {
            var corr = new Audio('./src/sounds/correct.mp3');
            corr.play();
            console.log('Password is correct, access allow');
            parte2();
        } else {
            console.log('Incorrect password, access denied');
            $('.password').addClass("shake-message").on('animationend', function() {
                $(this).removeClass('shake-message');
            });
            var incro = new Audio('./src/sounds/incorrect.mp3');
            incro.play();
        }

    });

    // # Step 2
    function parte2() {
        console.log('Parte dos funcionando!');

        gsap.to(passwordElement, {
            opacity: 0,
            y: '-100px',
            ease: 'power4.out',
            duration: 2,
            onComplete: function() {
                passwordElement.css('display', 'none');
                container_pwshl.css('display', 'none');

                gsap.to(container, {
                    display: 'block',
                    opacity: 1,
                    duration: 1,
                    onComplete: function() {
                        gsap.to(preloader, {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            onComplete: function() {

                                gsap.to(preloader, {
                                    opacity: 0,
                                    scale: 0,
                                    duration: 1,
                                    delay: 3,
                                    onComplete: function() {
                                        preloader.css('display', 'none');
                                        parte2msc();
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

    }

    function parte2msc() {
        console.log('Caja de musica mostrandonse!');

        musiccontainer.css('display', 'block');

        gsap.set(recordPlayer, { opacity: 0, y: '-100px' });
        gsap.to(recordPlayer, {
            opacity: 1,
            y: 0,
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                console.log('Animación completada de musica');
            }
        });
    }

    // Music play Fuction 
    let input = document.getElementById("headshell");
    let audio = new Audio('./src/music/1.mp3');
    
    input.addEventListener("click", function(){
      if(audio.paused){
        audio.play();
        audio.currentTime = 0;
        input.innerHTML = "Pause";
      }
    });

    audio.addEventListener("play", function() {
        setTimeout(function() {
            parte2mscnext();
        }, 3000); 
    });
    
    function parte2mscnext() {
        console.log("parte2mscnext funcionando");
    
        gsap.to(recordPlayer, {
            opacity: 0,
            y: '-100px',
            ease: 'back.out(1.7)',
            duration: 2,
            onComplete: function() {
                console.log('Animación completada saliendo!');
                recordPlayer.css('display', 'none');
                musiccontainer.css('display', 'none');
                parte3step();
            }
        });
    }

    
    function parte3step() {
        NextSteps.css('display', 'block');

        setTimeout(function() {
            gsap.to(NextSteps, {
                x: "200px", 
                opacity: 0, 
                duration: 1.5,
                onComplete: function() {
                    NextSteps.css('display', 'none');
                    texto();
                }    
            });
            
        }, 6700);
    }
    

    function texto() {

        textToShow.css('display', 'block');

        gsap.set(textToShow, { opacity: 0, x: '-100px' });

        gsap.to(textToShow, {
            opacity: 1,
            x: 0,
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                console.log('Animación completada de texto');
                animartext1();
            }
        });

    }

    function animartext1() {
        var elementoTexto = document.getElementById('text1');
    
        typewriter = new Typewriter(elementoTexto, {
            loop: false, 
            delay: 50, 
        });
    
        typewriter.typeString('¡Hola, mundo!')
        .callFunction(function() {
            console.log('La animación ha terminado.');
            pasaralibro();
        })
        .start();
    } 

    function pasaralibro() {
        gsap.to(textToShow, {
            x: "200px", 
            opacity: 0, 
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                textToShow.css('display', 'none');
                mostrarlibro();
            }    
        });
    }

    function mostrarlibro() {
        cardToShow.css('display', 'block');

        gsap.set(boookup, { opacity: 0, x: '100px' });

        gsap.to(boookup, {
            opacity: 1,
            x: 0,
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                console.log('Animación completa del libro');
                botoonnext();
            }
        });
    }

    function botoonnext() {
        setTimeout(function() {
            nextsteepb.css('display', 'block');

            gsap.set(nextsteepb, { opacity: 0, y: '-100px' });

            gsap.to(nextsteepb, {
                opacity: 1,
                y: 0,
                ease: 'back.out(1.7)',
                duration: 1.5,
                onComplete: function() {
                    console.log('Animación completada del boton');
                }
            });
        }, 2000);
    }

    function botontexttocao() {
        gsap.to(cardToShow, {
            opacity: 0, 
            y: -100, 
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                cardToShow.css('display', 'none');
                textodespuesdellibro();
            }        
        });
    }
    
    window.botontexttocao = botontexttocao;

    function textodespuesdellibro() {
        console.log('Mostrando siguiente parte.')

        textToShow2.css('display', 'block');

        gsap.set(textToShow2, { opacity: 0, y: '-100px' });

        gsap.to(textToShow2, {
            opacity: 1,
            y: 0,
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                console.log('Animación completada');
                animartext2();
            }
        });
    }

    function animartext2() {
        var elementoTexto = document.getElementById('text2');
    
        typewriter = new Typewriter(elementoTexto, {
            loop: false, 
            delay: 50, 
        });
    
        typewriter.typeString('oladimdimtamoom')
        .callFunction(function() {
            console.log('La animación ha terminado.');
            pasarboleto();
        })
        .start();
    } 

    function pasarboleto() {
        gsap.to(textToShow2, {
            x: "200px", 
            opacity: 0, 
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                textToShow2.css('display', 'none');
                royitoos();
            }    
        });
    }

    function royitoos() {
        royito.css('display', 'block');
        royo1.css('display', 'block');

        gsap.set(royo1, {
            x: '-300px',
            opacity: 0
        });

        gsap.to(royo1, {
            x: 0,
            opacity: 1,
            duration: 3,
            ease: 'back.out(1.7)',
            onComplete: function() {

                royo2.css('display', 'block');

                gsap.set(royo2, {
                    x: '-300px',
                    opacity: 0
                });
        
                gsap.to(royo2, {
                    x: 0,
                    opacity: 1,
                    duration: 3,
                    ease: 'back.out(1.7)',
                    onComplete: function() {
                        royo3.css('display', 'block');

                        gsap.set(royo3, {
                            x: '-300px',
                            opacity: 0
                        });
                
                        gsap.to(royo3, {
                            x: 0,
                            opacity: 1,
                            duration: 3,
                            ease: 'back.out(1.7)',
                            onComplete: function() {                
                                postboleto();
                            }    
                        });
                
        
                    }    
                });
            }    
        });
    }

    function postboleto() {

        textToShow3.css('display', 'block');

        gsap.set(textToShow3, { opacity: 0, y: '-100px' });

        gsap.to(textToShow3, {
            opacity: 1,
            y: 0,
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                console.log('Animación completada');
                animartext3();
            }
        });
    }


    function animartext3() {
        var elementoTexto = document.getElementById('text3');
    
        typewriter = new Typewriter(elementoTexto, {
            loop: false, 
            delay: 50, 
        });
    
        typewriter.typeString('oaaaaaaaaaaaaaaaaaaaaaaadimdiiiim')
        .callFunction(function() {
            console.log('La animación ha terminado.');
            despuesdeltext();
        })
        .start();
    } 

    function despuesdeltext() {
        gsap.to(textToShow3, {
            opacity: 1,
            scale: 0.5,
            y: 0,
            ease: 'back.out(1.7)',
            duration: 1.5,
            onComplete: function() {
                gsap.to(textToShow3, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    onComplete: function() {
                        textToShow3.css('display', 'none');
                        quitarrollitoms();
                    }
                });
            }
        });
    }

    function quitarrollitoms() {
        gsap.to(royito, {
            opacity: 0,
            x: -120,
            duration: 6,
            onComplete: function() {
                royito.css('display', 'none');
                mostrarbolito();
            }
        });
    }

    function mostrarbolito() {
        console.log('Mostrando boleto');

        boletoo.css('display', 'block');

        gsap.set(boletoo, { opacity: 0});

        gsap.to(boletoo, {
          opacity: 1,
          duration: 1, 
          ease: 'back.out(1.7)'
        });
        

    }
    var isFlipped = false;

    function rotateTicket() {
        var ticket = document.querySelector('.ticket');
        if (!isFlipped) {
            ticket.style.animation = 'rotateToBackAnimation 1s ease';
            isFlipped = true;
        } else {
            ticket.style.animation = 'rotateToFrontAnimation 1s ease';
            isFlipped = false;
        }
        toggleImages();
        boletox();
    }
    
    window.rotateTicket = rotateTicket;


    function boletox() {

        boleto_net.css('display', 'block');

        gsap.set(boleto_net, { opacity: 0});

        gsap.to(boleto_net, {
          opacity: 1,
          duration: 4, 
          ease: 'back.out(1.7)'
        });
    }

    function boletotocao() {

        gsap.to(boletoo, {
            opacity: 0,
            duration: 4, 
            ease: 'back.out(1.7)',
            onComplete: function() {
                boletoo.css('display', 'none');
                dspdelboleto.css('display', 'block');
                h1escribir();
            }
        });

    }

    window.boletotocao = boletotocao;


    function h1escribir() {
        var elementoTexto = document.getElementById('text4');
    
        typewriter = new Typewriter(elementoTexto, {
            loop: false, 
            delay: 50, 
        });
    
        typewriter.typeString('oaaaaaaaaaaaaaaaaaaaaaaadimdiiiim')
        .callFunction(function() {
            console.log('La animación ha terminado.');
            cartaaam();
        })
        .start();
    }

    function cartaaam() {

        gsap.to(dspdelboleto, {
            opacity: 0,
            duration: 4, 
            ease: 'back.out(1.7)',
            onComplete: function() {
                dspdelboleto.css('display', 'none');
                mostrarcarta();
            }
        });
    }

    function mostrarcarta() {

        cartaultima.css('display', 'block');

        setTimeout(function() {
            gsap.to(cartaultima, {
                opacity: 0,
                duration: 4, 
                ease: 'back.out(1.7)',
                onComplete: function() {
                    cartaultima.css('display', 'none');
                    ultimo();
                }
            });
        }, 3000);


    }

    function ultimo() {
        textofinaal.css('display', 'block');

        gsap.to(textofinaal, {
            opacity: 0,
            duration: 4, 
            ease: 'back.out(1.7)'
        });

    }

    function toggleImages() {
        var frontImg = document.querySelector('.front img');
        var backImg = document.querySelector('.back img');
        var tempSrc = frontImg.src;
        frontImg.src = backImg.src;
        backImg.src = tempSrc;
    }


});

const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

    const words = elem.textContent.split(' ');
    elem.innerHTML = '';

    words.forEach((el, index) => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        words[index] = `<span><i style="background-color: ${randomColor}; padding: 0.2em 0.5em; border-radius: 0.3em;">${words[index]}</i></span>`;
    });

    elem.innerHTML = words.join(' ');

    const children = document.querySelectorAll('span > i');
    children.forEach((node, index) => {
        node.style.animationDelay = `${index * .6}s`;
    });

});

