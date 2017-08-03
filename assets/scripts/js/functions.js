// Sales Slider
$('#sales-slider').slick({

  infinite: true,
  arrows: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  useTransform: true,

});



// Testimonials slider
$('.testimonial-slider').slick({




  // 6. Smooth anchor scrolling
    $('a[href^="#"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {

                $('html,body').animate({
                      scrollTop: target.offset().top - 60
                }, 500);


                return false;
            }
        }
    });



});


$(document).ready(function() {
  $('.animsition').animsition({loading: true,inDuration: 500,outDuration: 200,});
});
