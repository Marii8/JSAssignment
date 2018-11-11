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


$(function() {
  setTimeout('animation()', 500)//ロードされたらアニメーションを実行
}); //おまじないタグ

function animation(){
  star();
  dog();
}

  function star() {
    $('#dec1').animate({
      left:"500px",
      opacity: .6,
      marginTop: '-=40px'
    }, 5000).animate({
      left:"-30px",
      opacity: 1,
      marginTop: '+=40px',
      color: '#f00',
    }, 5000, function() {
      star();
    });
  }

  function dog() {
    $('#dec2').animate({
      left:"-30px",
      opacity: .6,
    }, 800).animate({
      left:"30px",
      opacity: 1,
    }, 800, function() {
      dog();
    });
  }

// ドロワーメニューの開閉
$('.js-hamburger').on('click', function() {
  let isActive = $(this).hasClass('on');
  toggleDrower(isActive);
});


function toggleDrower(isActive) {
  if(isActive){
    $('#drower-bg').fadeOut(600);
  } else {
    $('#drower-bg').fadeIn(600);
  }
  $('.js-hamburger').toggleClass('on');
  $('.js-drower').toggleClass('on');
}

let data;

$(function(){
if(localStorage.getItem('userMessage')){
    data = JSON.parse(localStorage.getItem('userMessage'));
  for (let userMsg of data.userMsg){
    displayMsg(userMsg);
  }

} else {
  data = {
    dateNow: [],
    userMsg: [],
  };
}


$('.js-message, .js-login').on('click', function() {
    // console.log('button pressed!');
    let isMassage = $(this).hasClass('js-message');
    // console.log(isMassage);
    openModal(isMassage);
});

$('.js-modal-close').on('click', closeModal);

function openModal(isMassage) {
  // console.log(`openModalは${isMassage}を受け取りました。`)
  if (isMassage) {
    $('.js-modal-title').text('メッセージ').css('margin-bottom', '30px');
    $('#message').css('height', '100px');
    $('#js-modal-form-button').text('Submit Message').addClass('message').removeClass('login');
    $('.modal-form-email').css('display', 'none');
    $('.modal-form-password').css('display', 'none');
  } else {
    $('.js-modal-title').text('ログイン').css('margin-bottom', '5px');
    $('#message').css('height', '80px');
    $('#js-modal-form-button').text('Login').addClass('login').removeClass('message');
    $('.modal-form-email').css('display', '');
    $('.modal-form-password').css('display', '');
  }

  $('#modal-bg').fadeIn(600);
  $('.modal-content').fadeIn(600);
}

function closeModal() {
  console.log('close button pressed!');
  $('#modal-bg').fadeOut(600);
  $('.modal-content').fadeOut(600);
}



// テキストエリアの値を取得して、「皆様からのメッセージ」の下に表示したいけど、値が取れているのか不明。
// $('#js-modal-form-button').on('click', function() {
//     let k = $(this).hasClass('message');
//     console.log(`message送信ボタンが押されたか？${k}`);
//   let userMsg = $('textarea#message').val();
//     console.log(userMsg);
//   data.userMsg.push(userMsg);
//     console.log(data.userMsg);
//   localStorage.setItem('userMessage', JSON.stringify(data));
//   $('#js-user-message').append(li).text(userMsg);


// });



$('#js-modal-form-button').on('click', function() {
    let isMessage = $(this).hasClass('message');
    console.log(`message送信ボタンが押されたか？${isMessage}`);
    if (isMessage) {
      let userMsg  = $('textarea#message').val();
      // console.log(`${data.userMsg}というメッセージが送信されました`);
      let dtWritten = new Date();
        console.log(dt);
      data.userMsg.push(userMsg);
      data.dateNow.push(dtWritten);

      displayMsg(userMsg);

      localStorage.setItem('userMessage', JSON.stringify(data));
    } else {
      return;
    }
  return false;

});


function displayMsg(userMsg){
      let deleteIcon = '<i class="fas fa-trash-alt"></i>';
      let msgLocation = $('#msg-container');
      let li = $('<li>').addClass('js-user-msg');
      let content = $('<p>').addClass('js-user-msg-text');
        content.text(userMsg);
      let remove = $('<div>').addClass('js-trash');
      let span = $('<span>').html(deleteIcon).addClass('js-trash-btn'); //jQueryでhtmlを入れるメソッドはhtml()
        remove.append(span);
      li.append(content).append(remove);

      let num = data.userMsg.indexOf(userMsg);
      let dt = data.dateNow[num];

      let time = $('<h3>').addClass('js-user-msg-date');
      li.append(time).text(dt);
      li.append(content).append(remove);
      msgLocation.append(li);

}

$('.js-trash-btn').on('click', function() {
  let contentToRemove = $(this).parent().parent();
  let content = $(this).parent().prev().text();
    console.log(content);
  let contentNum = data.userMsg.indexOf(content);
    console.log(contentNum);
  contentToRemove.remove();
  data.userMsg.splice(contentNum, 1);
  data.dateNow.splice(contentNum, 1);
    console.log(data);
  localStorage.setItem('userMessage', JSON.stringify(data));
});








}); //jQueryのおまじない閉じタグ