$('.banner_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  nextArrow:".next",
  prevArrow:".prev",
});
VenoBox({
  selector: '.venobox',
});

$(document).ready(function(){
  $('.port_main').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slideToScroll:1,
    centerPadding:"0px",
    nextArrow:".port-next",
    prevArrow:".port-prev",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})


	