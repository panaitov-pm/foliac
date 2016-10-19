$(document).ready(function() {

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.portfolio-scroll").click(function() {
		$.scrollTo($("#portfolio"), 800, {
			offset: 0 //it's like margin-top
		});
	});
	$("a.about-scroll").click(function() {
		$.scrollTo($("#about"), 800, {
			offset: 0
		});
	});
	$("a.contact-scroll").click(function() {
		$.scrollTo($("#contact"), 800, {
			offset: 0
		});
	});
});