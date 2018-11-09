new Swiper('.swiper-container', {
        // Optional parameters 他にもパラメタをつけたいときは、APIのeffectで確認できる。
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,

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
      });



$(function(){
let contact = $('#contact');
contact.on('click', function() {
  $('#modal-bg').fadeIn(600);
  $('.modal-content').fadeIn(800);
});




}); //jQueryのおまじない閉じタグ