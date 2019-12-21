$(document).ready(function() {

  'use strick';

  $(window).on("scroll", function() {

    if ($(window).scrollTop() > $(".navbar").height()) {

      $(".navbar").addClass("scrolling");

      $(".navbar").removeClass("bg");

    } else {

      $(".navbar").removeClass("scrolling");

      $(".navbar").addClass("bg");

    }

  });

    //THE POP-UP SECTION

  $(window).on("load", function scr() {

     $(".popup").fadeIn(200);

  });

  $(".tabs button").on("click", function() {

    $(this).addClass("colorbut").siblings().removeClass("colorbut");

  });

  $("html").niceScroll({

    cursorcolor: "rgb(255, 139, 56)",

    cursorwidth: "6px"

  });

  $(".navbar-nav .nav-item .data").on("click", function(e) {

    e.preventDefault();

    $("html, body").animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top

    }, 700);

  });

  $(".navbar-dark .navbar-nav .nav-link").on("click", function() {

    $(this).addClass("color").parent().siblings().find(".nav-link").removeClass("color");

  });

  $(".navbar-brand").on("click", function() {

    $("html,body").animate({

      scrollTop: 0

    }, 1200);

  });

  $(".popup .close").on("click", function(e) {

    $(".popup").fadeOut(800);

  });

});
$(document).keydown(function(e) {

  if (e.keyCode == 27) {

    $(".popup").fadeOut();

  }
});
