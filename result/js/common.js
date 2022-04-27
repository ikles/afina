jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $(".counter__input").mask("8  (999) - 999 - 99 - 99");



  var note = $('#note'),
  ts = new Date(2012, 0, 1),
  newYear = true;
  
  if((new Date()) > ts){
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = (new Date()).getTime() + 1*3*59*60*1000;
    newYear = false;
  }

  $('#countdown').countdown({
    timestamp : ts,
    callback  : function(days, hours, minutes, seconds){

      var message = "";
      
      message += days + " day" + ( days==1 ? '':'s' ) + ", ";
      message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
      message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
      message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
      
      if(newYear){
        message += "left until the new year!";
      }
      else {
        message += "left to 10 days from now!";
      }
      
      note.html(message);
    }
  });
  


//levels menu
let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

let body = document.querySelector('body');


if ( isMobile.any() ) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.menu-arrow');
  arrow.forEach(function (item) {
    let thisLink = item.previousElementSibling;
    let subMenu = item.nextElementSibling;
    let thisArrow = item;

    thisLink.classList.add('parent');
    item.addEventListener('click', function () {      
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  });
}
else {
  body.classList.add('mouse')
}








$('.projects__row').slick({
  infinite: true,    
  speed: 400,
  slidesToScroll: 1,
  autoplay: true,    
  slidesToShow: 4,
  cssEase: 'linear',
  autoplay: false,
  autoplaySpeed: 0,  
  arrows: true,  
});

$('.reviews__slider').slick({
  infinite: true,    
  speed: 400,
  slidesToScroll: 1,
  autoplay: true,    
  slidesToShow: 3,
  cssEase: 'linear',
  autoplay: false,
  autoplaySpeed: 0,  
  arrows: true,  
});



/************************************/

$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});

/************************************/



function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.link2', '.modal-overlay_2', '.modal-close_2');
popup('.link', '.modal-overlay_1', '.modal-close_1');


$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
  return false;
});


$(window).scroll(function(){
  var wt = $(window).scrollTop();  
  var wh = $(window).height();    
  if (wt > 600) {
    $('.serv-arr-up').show(400);
  }
  else {
   $('.serv-arr-up').hide();
 }
});

if($('select').length) {
  $('select').select2({
    minimumResultsForSearch: -1
  });
}

$('[data-fancybox="gallery1"]').fancybox({
  arrows: true,
  infobar: false,
  smallBtn: true,
  toolbar: false,
  iframe : {
    css : {
      width : '950px'
    }
  },    
  slideClass: "myClass",
  baseClass: "myclass"
});

$('[data-fancybox="gallery2"]').fancybox({
  arrows: true,
  infobar: false,
  smallBtn: true,
  toolbar: false,
  iframe : {
    css : {
      width : '950px'
    }
  },    
  slideClass: "myClass",
  baseClass: "myclass"
});


let i = 0;

/*$('.scheme__num._show').each(function () {

  let self = $(this);
  setTimeout(function () {
    self.addClass('active');
  }, 300);

});*/

function scheme() {
  $.each($('.scheme__num._show'), function(i, el) {
    setTimeout(function() {
      $(el).addClass("active");
    }, 500 + (i * 500));

  });
}


jQuery(window).scroll(function() {
    let wrap1 = $('.scheme');
    let elem1 = $('.scheme__num');
    var scroll_sticky1 = wrap1.offset().top;       
    if ( $(this).scrollTop() > scroll_sticky1 - (wrap1.height()*2) ) {
      elem1.addClass("_show");
      scheme();
    }
});


$('.rating__star').click(function () {
  let starValue = $(this).attr('data-star-value');
  $(this).parent().attr('data-result-value', starValue);
});


}); //ready

