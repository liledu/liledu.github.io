$(document).ready(function() {

    // # Step 1: Password
    var passwordElement = $('.password');
    var container_pwshl = $('.container-pwsh');
    var preloader = $('.preloader');
    var textToShow = $('.text');
    
    var cardToShow = $('.card-tareta');

    var container = $('.container');

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
    var submitButton = $('#submitButton')

    submitButton.click(function(event) {
        event.preventDefault();
        var enteredPassword = $('#password').val();
        if (enteredPassword === "2022") {
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

                                            gsap.to(textToShow, {
                                                display: 'block', // Cambia 'display' a 'opacity'
                                                opacity: 1,
                                                duration: 1,
                                                onComplete: function() {
                                                    console.log("Contraseña correcta. ¡Acceso permitido!");

                                                    const text = "olaaaaaaap";
                                                    let index = 0;

                                                    function writeText() {
                                                        if (index <= text.length) {
                                                            document.getElementById("text1").innerText = text.slice(0, index++);
                                                            setTimeout(writeText, 100); 
                                                        } else {
                                                            parte2();
                                                        }
                                                    }

                                                    writeText();
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else {
            console.log("Contraseña incorrecta. ¡Acceso denegado!");
        }
    });
    

    function parte2() {
        gsap.to(textToShow, {
            opacity: 0,
            y: '-100px',
            duration: 3,
            onComplete: function() {
                textToShow.css('display', 'none');
                cardToShow.css('display', 'block'); 
                gsap.from(cardToShow, {
                    opacity: 0,
                    duration: 1
                });
            }
        });
    }
    
    
});
