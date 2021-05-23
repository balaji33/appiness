$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    
    loop: true,

    stagePadding: 15,

    items: 2,

    dots: false,

    nav: true,

    touchDrag: true,

    mouseDrag: true,

    margin: 10,

    autoplay: true,

    lazyLoad: true,

    slideSpeed: 600,

    navText: [
      "<img src='https://www.arkmedis.com/css/images/left-arrow.png'>",
      "<img src='https://www.arkmedis.com/css/images/right-arrow.png'>",
    ],

    responsive: {
      0: {
        items: 1,

        nav: false,

        dots: false,
      },

      600: {
        items: 1,

        nav: false,

        dots: false,
      },

      768: {
        items: 2,

        nav: false,

        dots: false,
      },

      1100: {
        items: 2,

        nav: true,

        dots: false,
      },
    },
  });
});


var btn = $('#button-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
