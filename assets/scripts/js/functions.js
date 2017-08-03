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

    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [



      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          infinite: false,
          centerPadding: '100px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          infinite: false,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },


    {
      breakpoint: 640,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 340,
      settings: {

        dots: true,
        centerPadding: '10px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }


    ]

  });

  $('.nextbutton').click(function(){
    $('.testimonial-slider').slick('slickNext');
  })
