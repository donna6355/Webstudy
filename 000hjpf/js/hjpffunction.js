$(function() {
	const $mnuNav = $('.side>ul>li>a');
	const $mnuSub = $('.side ol>li>a');
	$mnuNav.eq(0).parent().addClass('on');

	$mnuNav.eq(0).click(function(evt) {
		evt.preventDefault();
		$('html,body').animate({ scrollTop: 0 }, 1000);
	});
	$mnuNav.eq(1).click(function(evt) {
		evt.preventDefault();
		let val = $('.project').offset().top;
		$('html,body').animate({ scrollTop: val }, 1000);
	});

	$mnuSub.click(function(evt) {
		evt.preventDefault();
	});

	$mnuSub.eq(0).click(function(evt) {
		let val = $('.project1').offset().top - 120;
		$('html,body').animate({ scrollTop: val }, 1000);
	});
	$mnuSub.eq(1).click(function(evt) {
		let val = $('.project2').offset().top - 120;
		$('html,body').animate({ scrollTop: val }, 1000);
	});
	$mnuSub.eq(2).click(function(evt) {
		let val = $('.project3').offset().top - 120;
		$('html,body').animate({ scrollTop: val }, 1000);
	});

	$(window).scroll(function() {
		let scrVal = $(window).scrollTop();
		if (scrVal >= $('.project').offset().top) {
			$mnuNav.eq(0).parent().removeClass('on');
			$mnuNav.eq(1).parent().addClass('on');
		} else {
			$mnuNav.eq(1).parent().removeClass('on');
			$mnuNav.eq(0).parent().addClass('on');
		}
	});
});
