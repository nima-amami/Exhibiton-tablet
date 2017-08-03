// Testimonials slider

  // Testi slider
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
          centerPadding: '60px',
        }
      },

      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
        }
      },





    ]

  });

  $('.nextbutton').click(function(){
    $('.testimonial-slider').slick('slickNext');
  })
