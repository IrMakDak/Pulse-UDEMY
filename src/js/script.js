const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	responsive: {
		1035: {
			edgePadding: 30,
			gutter: 30,
			items: 1
		},
		// 1043: {
		// 	edgePadding: 30,
		// 	gutter: 30,
		// 	items: 1
		// },
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
});
