$(function(){
	$("#typed").typed({
		strings: [
			"TAMBIEN HAGO BACKEND",
			"AMO EL ANIME Y MANGA",
			"ME GUSTA EL VOLEIBOL",
			"TAMBIEN LOS TACOS",
			"DE VERDAD ME GUSTAN LOS TACOS!",
			"ME APASIONA PROGRAMAR"
		],
		typeSpeed: 100,
		backDelay: 1500,
		callback: function(){}
	});
});

$('.option').click(function(e){
	e.preventDefault();
	option = $(this);
	content = $(this).data('content');
	$('.about_content').removeClass('active');
	$('.option').removeClass('active');
	$('#' + content).addClass('active animated fadeInUp');
	option.addClass('active');
});

$(document).ready(function(){
	function hex_initial_animation()
	{
		$(".hex-wrap, .hover-notify").velocity("transition.expandIn", { stagger: 150 });
		$(".hex-wrap").velocity("callout.pulse");
		$(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
	}

	hex_initial_animation();

	var hoverdetect = setInterval(function(){
		hovernotify()
	}, 300);

	function hovernotify()
	{
		$(".hover-notify").velocity("callout.tada");
	}

	function myStopFunction()
	{
		$(".hover-notify").velocity("stop", true).velocity("fadeOut");
		clearInterval();
	}

	$(".hex-init").mouseenter(function()
	{
		myStopFunction();
		var title_color = $(this).parent().attr("data-color");
		var title_name = $(this).parent().attr("data-title");
		var desc_name = $(this).parent().attr("data-content");

		function hex_description()
		{
			$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
			$('.' + desc_name).siblings().removeClass('desc-active');
			setTimeout(function(){
				$('.' + desc_name).addClass('desc-active');
				$('.code-description > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 0 });
				$('.code-title, .desc-active span').velocity({ color: title_color }, { queue: false });
				$('.code-title').text(title_name)
			}, 0);
		}

		hex_description();

		$(this).parent().addClass('hexactive');
		$('.hexactive').velocity({ scaleX: "1.1", scaleY: "1.1" }, { duration: 200 });
	}).mouseleave(function()
	{
		$('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
	});
});

$('.service').hover(function(){
	msj = $(this).children("p");
	msj.show();
}, function(){
	msj = $(this).children("p");
	msj.hide();	
});

$('.project').hover(function(){
	$(this).css({
		"-webkit-filter": "blur(0)",
		"-moz-filter": "blur(0)",
		"-ms-filter": "blur(0)",
		"-o-filter": "blur(0)",
		"filter": "blur(0)",
	});
	msj = $(this).children(".project_cover");
	msj.show();
}, function(){
	$(this).css({
		"-webkit-filter": "blur(2px)",
		"-moz-filter": "blur(2px)",
		"-ms-filter": "blur(2px)",
		"-o-filter": "blur(2px)",
		"filter": "blur(2px)",
	});
	msj = $(this).children(".project_cover");
	msj.hide();	
});

$('.click').click(function(){
	section = $(this).data("section");
	$('html, body').animate({
		scrollTop: $("#" + section).offset().top
	}, 2000);
});