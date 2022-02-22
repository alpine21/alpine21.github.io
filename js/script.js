$(document).ready(function () {
  $(window).scroll(function () {
    // STICKY NAV ON SCROLL
    if (this.scrollY > 20) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }

    // SCROLL-UP BUTTON SHOW/HIDE
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // SLIDE-UP
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // REMOVING SMOOTH SCROLL ON SLIDE-UP BUTTON CLICK
    $("html").css("scrollBehavior", "auto");
  });

  $(".nav .menu li a").click(function () {
    // APPLYING AGAIN SMOOTH SCROLL ON MENU ITEMS CLICK
    $("html").css("scrollBehavior", "smooth");
  });

  //
  // TOOGLE MENU/NAV
  //
  $(".menu-btn").click(function () {
    $(".nav .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //
  //TEXTE ANIMATION
  //
  var typed = new Typed(".texte-home", {
    strings: ["un", "étudiant", "en", "Réseaux", "et", "Télécoms."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //
  // READ MORE
  //
});
