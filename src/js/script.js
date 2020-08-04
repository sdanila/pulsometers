
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    controls: false,
    nav: false,
    autoHeight: true,
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});  

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});


new WOW().init();

$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
      .eq($(this).index()).addClass('catalog__content_active');
  })



  function toggleSlide(item) {
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  })

  $('.modal__close').on('click', function() {
    $('#consultation, #order, #thanks, .overlay').fadeOut('slow');
  })

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  })

  function valideForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
          name: {
            required: "Пожалуйста, введите своё имя",
            minlength: jQuery.validator.format("Минимальное количество символов: {0}!")
          },
      
        phone: 'Пожалуйста, введите свой номер телефона',
        email: {
          required: 'Пожалуйста, введите свою почту',
          email: 'Неправильно введен почтовый адрес'
        }
      }
    });
  }

  valideForm('#consultation-form');
  valideForm('#consultation form');
  valideForm('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");


  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn('slow');
    } else {
      $('.pageup').fadeOut('fast');
    }
  })

  $("a[href=#up]").click(function() {
    const _href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
    return false
  });

  // new WOW().init();
})