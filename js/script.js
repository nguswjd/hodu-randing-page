let subscribe = $('.user-address > button');
let modal = $('.modal');
let closeModal = $('.open-tabMenu');

subscribe.click(function(e){
  e.preventDefault();

  let email = $('#e-mail').val();

  if (!email.includes('@') || !email.includes('.')) {
    alert('이메일 형식을 확인하세요!');
    return;
  }

  modal.removeClass('sr-only');
});

closeModal.click(function(e){
  e.preventDefault();
  modal.addClass('sr-only');
});

let tabMenu = $('.mobile-tab-menu');
let openTabMenu = $('.open-tabMenu');
let closeTabMenu = $('.open-tabMenu div > a');

tabMenu.click(function(e){
  e.preventDefault();
  openTabMenu.removeClass('sr-only'); 

  setTimeout(function() {
    openTabMenu.addClass('active'); 
  }, 10);
});

closeTabMenu.click(function(e){
  e.preventDefault();
  openTabMenu.removeClass('active');

  setTimeout(function() {
    openTabMenu.addClass('sr-only');
  }, 300);
});

let topBtn = $('.top-btn');

topBtn.click(function(e){
  e.preventDefault();
  
  $('html').animate({ 
    scrollTop: 0 
  }, 500);
});
