// Modal

$('[data-modal=send]').on('click', function() {
    $('.overlay, #send').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #send, #thanks, #order').fadeOut('slow');
  });
  
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
  });
  
  function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
  };
  
  validateForms('#send-form');
  validateForms('#send form');
  validateForms('#order form');
  
  $('input[name=phone]').mask("+7 (999) 999-99-99");
  
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#send, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
  
        $('form').trigger('reset');
    });
    return false;
  });
  
   // Smooth scroll and pageup

   $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();
});

$(document).ready(function(){
  $('.carousel_inner').slick({
      prevArrow: '<button type = "button" class = "slick-prev"><span class="icon-circle-left"></span></ button>',
      nextArrow: '<button type = "button" class = "slick-next"><span class="icon-circle-right"></span></ button>',
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }
      ]
  });
});
