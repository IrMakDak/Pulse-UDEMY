const slider = tns({
	container: '.carousel__inner',
	items: 1,
	navCurrent: '.tns-nav',
	slideBy: 'page',
	autoplay: false,
	navAsThumbnails: true,
	responsive: {
		1035: {
			edgePadding: 30,
			gutter: 30,
			items: 1
		},
		640: {
			edgePadding: 30,
			gutter: 30,
			items: 1
		},
		700: {
			edgePadding: 30,
			items: 1,
			gutter: 30
		},
		900: {
			items: 1,
			gutter: 30,
			edgePadding: 30
		}
	}
});
document.querySelector('.prev').addEventListener('click', function() {
	slider.goTo('prev');
 });
document.querySelector('.next').addEventListener('click', function() {
	slider.goTo('next');
 });

// --------------------------------------------------------------------

$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	$('.catalog-item__link').each(function(i){
		$(this).on('click',function(e){
			e.preventDefault();
			$('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
			$('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
		})
	});
	$('.catalog-item__link-back').each(function(i){
		$(this).on('click',function(e){
			e.preventDefault();
			$('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
			$('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
		})
	});

// ----Modals-----------------------------------------------------------

	$('[data-modal=form]').on('click', function() {
		$('.overlay, #form').fadeIn('slow'); 
	});

	$('[data-modal="close"]').on('click', function(){
		$('.overlay, #form, #thanks, #order').fadeOut('slow');
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	$('form').submit(function(j) {
		j.preventDefault();

		// if (!$(this).valid()) {
		// 	return;
		// };
		$.ajax({
			type: "POST",
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#order, #form').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$('#order, #form').trigger('reset');
		});
		return false;
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 1400) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
});

