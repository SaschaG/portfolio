$(function(){



	$("#detail-screen-background").hide();
	$("#detail-screen").hide();

	var adjustToWindowHeight = function() {
		
		

		if(window.innerHeight > 550 && window.outerWidth > 992){
			$(".mainbar").css("height", $(window).height()-30);

			if(window.innerHeight <= 885){
				$("#second-p").hide();
			}
			else{
				$("#second-p").show();
			}

			if(window.innerHeight < 680){
				$("#first-p").hide();
			}
			else{
				$("#first-p").show();
			}
		}

		if(window.innerHeight > 550 && window.outerWidth <= 992){
			$("#second-p").show();
			$("#first-p").show();
			$(".mainbar").css("height", "auto");
		}
	}

	


	$(window).resize(function(){

		adjustToWindowHeight();
	});





	adjustToWindowHeight(); 

	//Buttons
	//Suhi
	$("#sushi-button").click(function(){
		
	$("#detail-screen-background").show(250);
	$("#detail-screen").show(250);

	});





	console.log("JQuerry Loaded and rdy to use");
});


