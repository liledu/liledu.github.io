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
    let audioIndex = 0;
    let songs = ['./src/music/1.mp3', './src/music/2.mp3', './src/music/3.mp3', './src/music/4.mp3']; 
    let audio = new Audio(songs[audioIndex]);
    
    input.addEventListener("click", function(){
      if(audio.paused){
        audio.play();
        audio.currentTime = 0;
        input.innerHTML = "Pause";
      }
    
      setTimeout(function() {
        parte2mscnext();
      }, 3000); 
    
      audio.addEventListener('ended', function() {
        audioIndex++;
        if(audioIndex >= songs.length) {
          audioIndex = 0; 
        }
        audio.src = songs[audioIndex];
        audio.play();
        input.innerHTML = "Pause";
      });
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
            delay: 100, 
        });
    
        typewriter.typeString(
            'odaaam dimdim como emtams mi corashom de melocootom? sabiams q tamo? y muumshitom mividam weñom puems te hicem estom ashi feitom ñosempipi esperom q te guste muumchito mi vidam y sobetodo feliims sam valemtim cariñito te amo de masiadom sabems y ashi como te amo demasiadom tamiem amo demasiadom a ñuestrom librito.. q libro diriams? JASDJA puems dejame te explicoooo................'
        )
        .pauseFor(1000)
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
        }, 10000);
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
            delay: 100, 
        });
    
        typewriter.typeString('mi niñaaam hermosa mi amoshitom limditom asi como los recuerdos perduram en ñuestroms corasomnes tamiem perduran en royitos o cinitas peliculas mividam pq el amor q ñoshotoms tenemos es bien bonito y hermoso y ems un amor de peliculam cada momento a tu lado es una escena perfecta llena de emociones risams y ternuritams y muumshito amor mutuom jiji erems mi musam y mi imspiramciom erems una historiam q perdurara en ñuestrams almitas y en ñuestroms coraasoms shi jiji...')
        .pauseFor(1000)
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
            delay: 100, 
        });
    
        typewriter.typeString('y mi dimdim mi amoshitom ashi como ñuestrom amor quedam em cimtas de peliculas y em ñuestrom coroshom em estem diam tam especial ia te lo dijem y q? perom qeriam hacertem umna invitaciom a o weñoom AJKDAJDKAS dartem um boletitom ashi :3 jijii qmsabem peroom mividam tamitom shim tamom demashiadom te amo con chochocolate de mamut com dosism de amor.. jjijitamodemashiadom y tiistañom escribemem >;C')
        .pauseFor(1000)
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
          duration: 10, 
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
            delay: 100, 
        });
    
        typewriter.typeString('ooaa dimdim como estams oieem te eestañem como estams mividam como etams de tum codashomshitom como q ia mumchitas cosas flomatems ñom? alv JKASDJKAJKDperoiamashimejom tiii pq qmsabem tamo mividam y espero q te este gustamdo y te amo y teamo y te amo y te amo y teamo yiaam tamoomuumshitim pipip mishibeshitom pa tim muuuuuuuuuuuawkkk mishibeshitom patim aiaiai qierom ahorita mimitom abashatem y darte muumshito mishiheshitoms y sacartem a pasaiarm :c ppipi peroo eii bñate coshina iuu ata aqui iedems siño le digo a tu mamiii, señitoooo 😭 su hijam apesta a meurtaam iuuu peo aum ashi la amo muumshitom muumshitom :3 y aaa iaiiamaiam dejom de escribirm aumqñoqierom yq JASDJADJKPERO TAMOO DIMDIM MUUMCHITOM 💛✨🌠')
        .pauseFor(1000)
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

        gsap.set(textofinaal, { opacity: 0});

        gsap.to(textofinaal, {
            opacity: 1,
            duration: 4, 
            ease: 'back.out(1.7)',
            onComplete: function() {
                generateRandomTexts();
            }
        });

    }

    function toggleImages() {
        var frontImg = document.querySelector('.front img');
        var backImg = document.querySelector('.back img');
        var tempSrc = frontImg.src;
        frontImg.src = backImg.src;
        backImg.src = tempSrc;
    }
    
    const texts = [
      "Te amo dimdim",
      "Feliz San Valentín",
      "Eres epeciam",
      "Siempre jumtitoms",
      "ti qiero comem",
      "cahetitomsrojitos",
      "Eres mi todo",
      "Erems mi cielom",
      "Mi cushuquitom"
    ];

    function getRandomText() {
      return texts[Math.floor(Math.random() * texts.length)];
    }

    function getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    
    function createRandomText() {
      const text = document.createElement('div');
      text.classList.add('texto-aleatorio');
      text.textContent = getRandomText();
      text.style.backgroundColor = getRandomColor();
      text.style.top = Math.random() * (window.innerHeight - 40) + 'px';
      text.style.left = Math.random() * (window.innerWidth - 120) + 'px';
      document.body.appendChild(text);
    
      gsap.fromTo(text, {
        opacity: 0,
        scale: 0 
      }, {
        opacity: 1,
        scale: 1, 
        duration: 1, 
        onComplete: () => {
          gsap.to(text, {
            opacity: 0,
            scale: 0, 
            duration: 1, 
            delay: 2,
            onComplete: () => {
              text.remove();
            }
          });
        }
      });
    }
    
    function getRandomInterval(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    function generateRandomTexts() {
      createRandomText();
      const nextInterval = getRandomInterval(3000, 6000); 
      setTimeout(generateRandomTexts, nextInterval);
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

