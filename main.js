$(function(){

	var adjustToWindowHeight = function() {
		
		console.log("Window Height " + window.height + "Window Outer Height " + window.outerHeight  + "inner Height " + window.innerHeight)

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
	console.log("JQuerry Loaded and rdy to use");
});
