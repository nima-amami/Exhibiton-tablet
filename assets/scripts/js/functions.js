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





  /*News bulletin for phone slider*/

  $('#bulletin-slider').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'ease',

    responsive: [

    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },

    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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


  // 6. Smooth anchor scrolling
        $('a[href^="#"]').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {

                    $('html,body').animate({
                          scrollTop: target.offset().top - 85
                    }, 500);


                    return false;
                }
            }
        });
