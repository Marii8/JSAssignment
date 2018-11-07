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