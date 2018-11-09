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
  $('#contact').on('click', function() {
    console.log(this.id);
    $('#modal-bg').fadeIn(600);
    $('.modal-content').fadeIn(800);
  });

  x.on('click', function() {
    bg.fadeOut();
    modal.fadeOut(500);
  });


$(document).ready(function){
  $('#contact').on('click', function(){
    $('#dec1').animate({
      left: '250px',
      opacity: '.8',
      height: '200px',
    }, slow);
  });
};




}); //jQueryのおまじない閉じタグ