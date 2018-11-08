let mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters 他にもパラメタをつけたいときは、APIのeffectで確認できる。
        direction: 'vertical',
        loop: true,
        effect: 'coverflow',
        autoHeight: true,
        stopOnLastSlide: true,
        direction: 'horizontal',

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })



$(function(){

  let contact = $('#contact');
  let modalBg = $('#modal-bg');
  let modal = $('.modal-content');
  let x = $('.js-modal-close');

  contact.on('click', function() {
    console.log(1);
    modalBg.fadeIn(1500);
    modal.fadeIn(1500);
  });

  x.on('click', function() {
    modalBg.fadeOut(500);
    modal.fadeOut(500);
  });




}); //jQueryのおまじない閉じタグ