$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){

	// Destellos 
	

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
		var audio = $('.song')[0];
		audio.play();
		
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

	$('#bannar_coming').click(function(){
		$('.decoracion').show()
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
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
						}, 1200);
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
			$('.saludos').fadeIn('slow'); 
		});

	});

});
