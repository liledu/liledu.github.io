$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){

	var audio = $('.song')[0];


	var vw;
	$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');

		//Foquitos 2
		$('#bulb_yellow_2').addClass('bulb-glow-yellow');
		$('#bulb_red_2').addClass('bulb-glow-red');
		$('#bulb_blue_2').addClass('bulb-glow-blue');
		$('#bulb_green_2').addClass('bulb-glow-green');
		$('#bulb_pink_2').addClass('bulb-glow-pink');
		$('#bulb_orange_2').addClass('bulb-glow-orange');

		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').one('click', function(){
		var songs = ["./music/amtrak.mp3", "./music/amtrak.mp3"];

		var currentSongIndex = 0;
				audio.src = songs[currentSongIndex];
		audio.play();

		audio.addEventListener('ended', function() {
			currentSongIndex++;
			if (currentSongIndex >= songs.length) {
				currentSongIndex = 0;
			}
			audio.src = songs[currentSongIndex];
			audio.play();
		});
		
    setTimeout(function() {
        $('.cajita').fadeOut('slow', function() {

            $('#bulb_yellow').addClass('bulb-glow-yellow-after');
            $('#bulb_red').addClass('bulb-glow-red-after');
            $('#bulb_blue').addClass('bulb-glow-blue-after');
            $('#bulb_green').addClass('bulb-glow-green-after');
            $('#bulb_pink').addClass('bulb-glow-pink-after');
            $('#bulb_orange').addClass('bulb-glow-orange-after');

            // Foquitos 2
            $('#bulb_yellow_2').addClass('bulb-glow-yellow-after');
            $('#bulb_red_2').addClass('bulb-glow-red-after');
            $('#bulb_blue_2').addClass('bulb-glow-blue-after');
            $('#bulb_green_2').addClass('bulb-glow-green-after');
            $('#bulb_pink_2').addClass('bulb-glow-pink-after');
            $('#bulb_orange_2').addClass('bulb-glow-orange-after');

            // Cambiar el color de fondo del cuerpo
            $('body').css('background-color', '#fafafa');
            $('body').addClass('peach-after');

			//Typing
			const phrases = [
				"Odaaa mi flancitoo <3 pimeo q nada fedii cumpeañoo epedo q la pases muii miem oi en tudia, io te hicem ete regalito epedo q te guteee jiji, y poo chietoooooo que laaa cumplaaaaaa fediiiiiiiiiiii 🥳🥳"
			  ];
			  
			  let currentPhrase = Math.floor(Math.random() * (phrases.length - 1));
			  let currentChar = 0;
			  let typingLine = document.getElementById("typing");
			  
			  function type() {
				typingLine.textContent = phrases[currentPhrase].slice(0, ++currentChar);
			  
				if (currentChar < phrases[currentPhrase].length) {
				  setTimeout(function () {
					requestAnimationFrame(type);
				  }, 30);
				} else {
			  
				  setTimeout(erase, 2000);
				}
			  }
			  
			  
			  function erase() {
				typingLine.textContent = phrases[currentPhrase].slice(0, --currentChar);
			  
				if (currentChar > 0) {
				  setTimeout(function () {
					requestAnimationFrame(erase);
				  }, 25);
				} else {
				  currentPhrase = (currentPhrase + 1) % phrases.length;
				  setTimeout(type, 1000);
				}
			  }
			  
			  type();

			$(this).fadeOut('slow').delay(0).promise().done(function(){
				$('.palabras').fadeIn('slow').delay(6600).promise().done(function(){
					$('.palabras').fadeOut('slow', function(){
						$('#bannar_coming').fadeIn('slow');
					});
				});
			});
			
        });
    }, 3000);
	});

    $('#bannar_coming').click(function () {
      $('.decoracion').show();
      $('#confeaea').show();
      $(this).fadeOut('slow').delay(6000).promise().done(function () {
        $('#balloons_flying').fadeIn('slow');
      });
    });

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();

		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	function flyBalloons() {
		$('.balloons').each(function() {
			var $balloon = $(this);
			var randleft = Math.random() * $(window).width();
			var randtop = Math.random() * $(window).height();
			
			$balloon.mouseover(function() {
				randleft = Math.random() * 50 - 25 + $balloon.offset().left;
				randtop = Math.random() * 50 - 25 + $balloon.offset().top;
				$balloon.animate({ left: randleft, top: randtop }, 500); 
			});
	
			$balloon.animate({ left: randleft, top: randtop }, 10000);
		});
	}
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
			flyBalloons();
		});
	
		var i;
	
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==50){
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {						
						setTimeout(function() {
							$('#saludoos').fadeIn('slow'); 
						}, 320);
					});
					
				}
				else{
					msgLoop(i);
				}
			});
		}
	
		msgLoop(0);
	});
	
	$('#saludoos').click(function() {
		$(this).fadeOut('slow').delay(2000).promise().done(function() {
			$('#sevaocultar').fadeOut();
			$('#sevaocultar2').fadeOut();
			$('#sevaocultar3').fadeOut();

			$('.saludos').fadeIn('slow'); 
		});
	});

	$('#primersaludo').click(function() {
		var video = document.getElementById("myVideo");
		video.play();

		if (audio) {
            audio.volume = 0.1;
            console.log('Volumen del audio reducido');
        } else {
            console.log('Error: audio no está definido');
        }

		var elementosAEAEA = document.getElementsByClassName('sevaocultar');

		for (var i = 0; i < elementosAEAEA.length; i++) {
		  elementosAEAEA[i].style.transition = 'opacity 1s';
		
		  elementosAEAEA[i].addEventListener('transitionend', function() {
			this.style.opacity = '0';
		  });
		
		  elementosAEAEA[i].addEventListener('transitionend', function() {
			this.style.display = 'none';
		  });
		
		  elementosAEAEA[i].style.opacity = '0';
		}
		
		
		setTimeout(function() {
			$('.mmmdeseitos').fadeIn('slow'); 
		}, 23);

	});
	
});

const firebaseConfig = {
  apiKey: "AIzaSyDfl1IDNli0z3JWngNH8cS0IKlBw5T_B-4",
  authDomain: "deseitos.firebaseapp.com",
  databaseURL: "https://deseitos-default-rtdb.firebaseio.com",
  projectId: "deseitos",
  storageBucket: "deseitos.appspot.com",
  messagingSenderId: "255306964249",
  appId: "1:255306964249:web:60c7d3726542e97096b988",
  measurementId: "G-KTM288H1RE"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("deseitos");

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

  saveDatos(datos);

  $(".form__contact").fadeOut(6000);
  $(".mm-deseitos2").fadeOut(6000);

setTimeout(function() {
    $("#myVideo").hide();

    $(".h1s").fadeIn(1200, function() {
        $(this).delay(2000).fadeOut(1200, function() {
            $("#myVideo").fadeIn(1200, function() {
                var video = $(this)[0];

                video.src = './videos/kion_leslie.mp4';
                video.load(); // Asegurarse de que el video esté cargado

                video.onloadedmetadata = function() {
                    video.play();

                    $(this).on('ended', function() {
                        $("#myVideo").hide();
                        $(".h2s").fadeIn(1200);
                    });
                };
            });
        });
    });
}, 6000);


}

function saveDatos(datos) {
  var newContactForm = contactFormDB.push();
  newContactForm.set(datos);
  var datosenviadoscorrect = document.getElementById("ecsito")
  datosenviadoscorrect.style.display = "block";
}

document.body = twemoji.parse(document.body);



