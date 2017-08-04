// Testimonials slider

  // Testi slider
  $('.testimonial-slider').slick({

    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '90px',
    responsive: [






    ]

  });

  $('.nextbutton').click(function(){
    $('.testimonial-slider').slick('slickNext');
  })
