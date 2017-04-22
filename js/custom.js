jQuery(window).load(function($) { 
	"use strict";

	//Loader
	jQuery('#preloader-yellow,#preloader-blue,#preloader-green,#preloader-red,#preloader-light-brown,#preloader-blue,#preloader-pink').fadeOut('2000');

	jQuery('body').css('overflow', 'auto');

	// End of Loader

	// Buttons ScrollToTop Animations
	jQuery(".scroll-btn").on('click', function() {

		jQuery('html, body').animate({

			scrollTop: jQuery("html, body").offset().top

		}, 2000);

	});
	// End of Buttons ScrollToTop Animations

	// Banner Animations
	var animation1 = setInterval(function(){ 

		jQuery('.header-top').animate({opacity: 1, top: 0}, 500);	

		clearInterval(animation1); 

	}, 1000);

	var animation2 = setInterval(function(){ 

		jQuery('.banner-form').css('visibility', 'visible').addClass('animated  fadeInUp');

		clearInterval(animation2); 			

	}, 1800);

	var animation3 = setInterval(function(){ 

		jQuery('.banner-text p').animate({opacity: 1, top: 0}, 500);

		jQuery('.banner-text h1').animate({opacity: 1, top: 0}, 500);

		jQuery('.banner-text span').animate({opacity: 1, top: 0}, 500);

		clearInterval(animation3); 

	}, 2800); 

	// End of Banner Animations

	// Without Form Banner Animations
	var animation4 = setInterval(function(){ 

		jQuery('.banner-text-2 p').animate({opacity: 1, top: 0}, 500);

		jQuery('.banner-text-2 h1').animate({opacity: 1, top: 0}, 500);

		jQuery('.banner-text-2 span').animate({opacity: 1, top: 0}, 500);

		jQuery('.banner-text-2 button').animate({opacity: 1, top: 0}, 500);			

		clearInterval(animation4); 			

	}, 1500);

	var animation5 = setInterval(function(){ 

		jQuery('.scrolldown').animate({opacity: 1, top: 0}, 500);

		clearInterval(animation5); 

	}, 3800);

	//End Of Without Form Banner Animations		
})

jQuery(document).ready(function($) {
	"use strict";

/*	var windowWidth  = $(window).width();	
	if(windowWidth >= 1280){			
		headerHt();
		$(window).resize(function() {  
			headerHt();
		});  
	}//End If*/
	
	jQuery('.datepicker').find('.day').on('click', function(){

		jQuery(this).parents('.datepicker').fadeOut('slow');

	});
	
	//Call ScrollDown Funtion
	scrollDown();

	//Call date Picker Function
	datePicker();

     // video script
	jQuery('.video-iframe a').on('click', function(){

		var video = '<iframe src="'+ $('.video-iframe img').attr('data-video') +'"></iframe>';

		jQuery('.video-iframe img').replaceWith(video);

		jQuery('.video-iframe a').hide();

	});

	//Booking form validations
	$('#appointmentModal').appendTo("body");
	$("#bookform").validate({
		rules: {     
			destination: {required: true},
			checkin:     {required: true, date: true},
			checkout:    {required: true, date: true}
		},
		tooltip_options: {
			destination: {trigger:'focus'},
			checkin:     {trigger:'focus'},			
			checkout:    {trigger:'focus'}
		},
		submitHandler: function(form) { 
		
			$.ajax({
				   type: "POST",
				   url:'appiontment-form.php',
				   data: $("#bookform").serialize(), // serializes the form's elements. $(this).serializeArray();
				   success: function(data){
					  if(data==1){
						  $('#appointmentModal').modal('show');
						  $('input[name="destination"]').val('');
						  $('input[name="checkin"]').val('');
						  $('input[name="checkout"]').val('');
						  $('#bookform select option:first-child').prop('selected', true);	
						   	setTimeout(function () {  
						    	$('#appointmentModal').modal('hide');
							}, 40000);
					  }
				   }
				 });
				 
				$("#validity_label").html('<div class="alert alert-success">No errors.  Like a boss.</div>');
			},
		invalidHandler: function(form, validator) {
			$("#validity_label").html('<div class="alert alert-error">There be '+validator.numberOfInvalids()+' error'+(validator.numberOfInvalids()>1?'s':'')+' here.  OH NOES!!!!!</div>');
		}
	}); 
	$("#bookFormModal").validate({
		rules: {     
			destination: {required: true},
			checkin:     {required: true, date: true},
			checkout:    {required: true, date: true}
		},
		tooltip_options: {
			destination: {trigger:'focus'},
			checkin:     {trigger:'focus'},
			checkout:    {trigger:'focus'}
		},
		submitHandler: function(form) { 
			$.ajax({
			   type: "POST",
			   url:'appiontment-form.php',
			   data: $("#bookFormModal").serialize(), // serializes the form's elements. $(this).serializeArray();
			   success: function(data){
					if(data==1){
						$('.modal-body-trav .alert').show(); 
						$('input[name="destination"]').val('');
						$('input[name="checkin"]').val('');
						$('input[name="checkout"]').val('');
						$('#bookFormModal select option:first-child').prop('selected', true);
						setTimeout(function () {  
					    	$('.modal-body-trav .alert').hide();
						}, 10000);			   
				  	}
			   }
			});
				 
				$("#validity_label").html('<div class="alert alert-success">No errors.  Like a boss.</div>');
			},
		invalidHandler: function(form, validator) {
			$("#validity_label").html('<div class="alert alert-error">There be '+validator.numberOfInvalids()+' error'+(validator.numberOfInvalids()>1?'s':'')+' here.  OH NOES!!!!!</div>');
		}
	});
	
		
	//Contact Form validations
	$('#contactModal').appendTo("body");
	$("#contactform").validate({
		rules: {     
			username: {required: true},
			email:    {required: true, email: true},
			phone:    {required: true, number: true},
			comment:  {required: true}
		},
		tooltip_options: {
			username: {trigger:'focus'},
			email:    {trigger:'focus'},			
			phone:    {trigger:'focus'},
			comment:  {trigger:'focus'}
		},
		submitHandler: function(form) { 
			$.ajax({
			   type: "POST",
			   url:'subscription-form.php',
			   data: $("#contactform").serialize(), // serializes the form's elements. $(this).serializeArray();
			   success: function(data)
			   {
				  if(data==1){ 
					  $('#contactModal').modal('show'); 
					  $('input[name="username"]').val(''); 
					  $('input[name="email"]').val(''); 
					  $('input[name="phone"]').val(''); 					  
					  $('textarea[name="comment"]').val(''); 
					   	setTimeout(function () {  
					    	$('#contactModal').modal('hide');
						}, 10000);
				  }
			   }
			 });
			 
			$("#validity_label").html('<div class="alert alert-success">No errors.  Like a boss.</div>');
		},
		invalidHandler: function(form, validator) {
			$("#validity_label").html('<div class="alert alert-error">There be '+validator.numberOfInvalids()+' error'+(validator.numberOfInvalids()>1?'s':'')+' here.  OH NOES!!!!!</div>');
		}
	});

	
	//Spa form validations
	$("#spaForm").validate({
		rules: {     
			name         : {required: true},
			email        :   {required: true, email: true},
			phonenumber  :   {required: true, number: true},
			appointment  :     {required: true, date: true} 
		},
		tooltip_options: {
			name         : {trigger:'focus'},
			email        :   {trigger:'focus'},
			phonenumber  :   {trigger:'focus'},
			appointment  :     {trigger:'focus'} 
		},
		submitHandler: function(form) { 
			$.ajax({
			   type: "POST",
			   url:'spa-appiontment-form.php',
			   data: $("#spaForm").serialize(), // serializes the form's elements. $(this).serializeArray();
			   success: function(data){
					if(data==1){
						$('#appointmentModal').modal('show'); 
						$('input[name="name"]').val('');
						$('input[name="email"]').val('');
						$('input[name="phonenumber"]').val('');
						$('input[name="appointment"]').val(''); 
						$('#spaForm select option:first-child').prop('selected', true);	 
						setTimeout(function () {  
					    	$('#appointmentModal').modal('hide');
						}, 10000);			   
				  	}
			   }
			});
				 
				$("#validity_label").html('<div class="alert alert-success">No errors.  Like a boss.</div>');
			},
		invalidHandler: function(form, validator) {
			$("#validity_label").html('<div class="alert alert-error">There be '+validator.numberOfInvalids()+' error'+(validator.numberOfInvalids()>1?'s':'')+' here.  OH NOES!!!!!</div>');
		}
	});
	$("#spaFormModal").validate({
		rules: {     
			name         : {required: true},
			email        :   {required: true, email: true},
			phonenumber  :   {required: true, number: true},
			appointment  :     {required: true, date: true} 
		},
		tooltip_options: {
			name         : {trigger:'focus'},
			email        :   {trigger:'focus'},
			phonenumber  :   {trigger:'focus'},
			appointment  :     {trigger:'focus'} 
		},
		submitHandler: function(form) { 
			$.ajax({
			   type: "POST",
			   url:'spa-appiontment-form.php',
			   data: $("#spaFormModal").serialize(), // serializes the form's elements. $(this).serializeArray();
			   success: function(data){
					if(data==1){
						$('.modal-body-spa .alert').show(); 
						$('input[name="name"]').val('');
						$('input[name="email"]').val('');
						$('input[name="phonenumber"]').val('');
						$('input[name="appointment"]').val(''); 
						$('#spaFormModal select option:first-child').prop('selected', true);	 
						setTimeout(function () {  
					    	$('.modal-body-spa .alert').hide();
						}, 10000);			   
				  	}
			   }
			});
				 
				$("#validity_label").html('<div class="alert alert-success">No errors.  Like a boss.</div>');
			},
		invalidHandler: function(form, validator) {
			$("#validity_label").html('<div class="alert alert-error">There be '+validator.numberOfInvalids()+' error'+(validator.numberOfInvalids()>1?'s':'')+' here.  OH NOES!!!!!</div>');
		}
	});
		
});

// Header Height Function
function headerHt(){
	"use strict";

	var documentHeight = $(window).height();
	$('header').css('height',documentHeight);
};

//Date Picker Funtion
function datePicker() {
	"use strict";

	$('#dp1,#dp2').datepicker().on('changeDate', function(ev){
		$('.datepicker').fadeOut('slow');
	});
};

//Scroll Down Funtion
function scrollDown() {
	"use strict";

	$('a[href*=#]:not([href=#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});
};
