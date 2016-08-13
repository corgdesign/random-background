$(function(){

	$.fn.randomBackground = function (alpha) {
		
		// Set up the variables	
		var rgb1, rgb2, rgb3;
		
		// Generate random numbers between 0 + 255 (Math.floor rounds down)
		rgb1 = Math.floor( (Math.random() * 256) );
		rgb2 = Math.floor( (Math.random() * 256) );
		rgb3 = Math.floor( (Math.random() * 256) );
		
		// Build rgba CSS style
		var rgba = "rgba(" + rgb1 + "," + rgb2 + "," + rgb3 + "," + alpha + ")";
		
		// Apply style to element(s)
		$(this).css('background-color', rgba);
		
	};

)};
