$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top + -50;
    let html_zoom = $('html').css('zoom');
    top = top * html_zoom;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");
  $('.experience-slider').slick({
  	infinite: true,
 	  slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
    adaptiveHeight: true,
  });

  $('.team-slider').slick({
  	infinite: true,
 	  slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
  	speed: 500,
    fade: true,
    cssEase: 'linear',
  	prevArrow: $('.team-slider-arrows .prev'),
  	nextArrow: $('.team-slider-arrows .next'),
  	dots: true,
    
  });

  $('.experience-btn').on('click', function() {
  	let index = $('.experience-btn').index(this);
  	$('.experience-btn').removeClass('active');
  	$(this).addClass('active');
  	$('.experience-slider').slick('slickGoTo', index);
  	return false;
  })

  $('.modal-window').css("display", "flex");
  $('.modal-window').hide();

  $('.modal-open').on('click', function() {
    $('.modal-window-callback').fadeIn();
    return false;
  })

  $('.modal-window__close').on('click', function() {
    $('.modal-window').fadeOut();
    return false;
  })

  $('.modal-hidden-btn').on('click', function() {
    $('.modal-window-news').fadeOut();
    return false;
  })

  $(document).mouseup( function(e){ // событие клика по веб-документу
    var div = $('.modal-window__inner'); // тут указываем ID элемента
    if ( !div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.modal-window').fadeOut();
    }
  });

  $('.adviсe-more').on('click', function() {
    $('.adviсe-hidden').addClass('visible');
    $(this).addClass('hidden');
    return false;
  })

  $('.flags').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 2000,
   });


  $('.adviсe-block-btn').on('click', function() {
    $('.modal-window-news').fadeIn();;
    let modal_title = $('.modal-window-news .adviсe-block__title');
    let modal_text = $('.modal-window-news .adviсe-block-content');
    let modal_date = $('.modal-window-news .adviсe-block-date');
    let modal_bg = $('.modal-window-news .photo-bg');



    let parent = $(this).closest('.adviсe-block');
    let title = $(parent).find('.adviсe-block__title');
    let text = $(parent).find('.adviсe-block-content--all');
    let date = $(parent).find('.adviсe-block-date');
    let bg = $(parent).find('.photo-bg');


    text = $(text).html();
    title = $(title).html();
    date = $(date).html();
    bg = $(bg).css('background-image');


    $(modal_title).html(title);
    $(modal_text).html(text);
    $(modal_date).html(date);
    $(modal_bg).css('background-image', bg);
    return false;
  })

  if ($(window).width() < 767) {
     $('.klien-item').unwrap();
  }
})