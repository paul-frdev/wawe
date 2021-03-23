$(function () {

  $(".menu a, .footer__logo").on("click", function (b) {
    //отменяем стандартную обработку нажатия по ссылке
    b.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.slider-blog__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  var mixer = mixitup('.gallery__content');
});