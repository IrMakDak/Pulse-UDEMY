$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left-line.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right-line.png" alt="next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  });
});