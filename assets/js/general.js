function header() {
  var hhight = $(".header").innerHeight();
  console.log(hhight);
  $(".main-wrapper").css("padding-top", hhight);
}
function footer() {
  var fhight = $(".footer-part").innerHeight();
  console.log(fhight);
  $(".wrapper").css("padding-bottom", fhight);
  $(".footer-part").css("margin-top", -fhight);
}

$(document).ready(function () {
  $(".slider-box").slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
  });

  $(".slide-event").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".open-btn").click(function () {
    $(".nav-menu").css("right", "0");
    $("body").css("overflow","hidden");
  });
  $(".close-btn").click(function () {
    $(".nav-menu").css("right", "-300px");
    $("body").css("overflow","visible");
  });

  if ($(window).width() < 991) {
    $(".item-content").hide();
    $(".item-heading").click(function () {
      $(this).closest(".footer-item").find(".item-content").slideToggle();
      $(this).toggleClass("toggle-slide");
      $(".item-content")
        .not($(this).closest(".footer-item").find(".item-content"))
        .slideUp();
      $(".item-heading").not($(this)).removeClass("toggle-slide");
    });
  }

  $(".up-arrow").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      $(".up-arrow").css("display", "none");
    } else {
      $(".up-arrow").css("display", "block");
    }
  });

  header();
  footer();
});

$(window).resize(function () {
  header();
  footer();
});
