$(document).ready(function () {
  $(window).scroll(function () {
    // = = = = = = = = = = Sticky navbar on scroll = = = = = = = = = = //
    if (this.scrollY > 20) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });

  $(".nav .menu li a").click(function () {
    // = = = = = = = = = = Applying smooth scroll on menu items click = = = = = = = = = = //
    $("html").css("scrollBehavior", "smooth");
  });

  // = = = = = = = = = = = Toogle Menu/Nav = = = = = = = = = = //
  $(".menu-btn").click(function () {
    $(".nav .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // = = = = = = = = = = Text Animation = = = = = = = = = = //

  var typed = new Typed(".text-home", {
    strings: ["DUT", "R&T."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // = = = = = = = = = = Pop-up Work : Skills = = = = = = = = = = //

  // *1* : Network //

  const open1 = document.getElementById("button-open-1");
  const popUp1 = document.getElementById("popup-1");
  const close1 = document.getElementById("button-close-1");

  open1.addEventListener("click", () => {
    popUp1.classList.add("show");
  });

  close1.addEventListener("click", () => {
    popUp1.classList.remove("show");
  });

  // *2* : Web //

  const open2 = document.getElementById("button-open-2");
  const popUp2 = document.getElementById("popup-2");
  const close2 = document.getElementById("button-close-2");

  open2.addEventListener("click", () => {
    popUp2.classList.add("show");
  });

  close2.addEventListener("click", () => {
    popUp2.classList.remove("show");
  });

  // *3* : OOP //

  const open3 = document.getElementById("button-open-3");
  const popUp3 = document.getElementById("popup-3");
  const close3 = document.getElementById("button-close-3");

  open3.addEventListener("click", () => {
    popUp3.classList.add("show");
  });

  close3.addEventListener("click", () => {
    popUp3.classList.remove("show");
  });

  // *4* : Cyber //

  const open4 = document.getElementById("button-open-4");
  const popUp4 = document.getElementById("popup-4");
  const close4 = document.getElementById("button-close-4");

  open4.addEventListener("click", () => {
    popUp4.classList.add("show");
  });

  close4.addEventListener("click", () => {
    popUp4.classList.remove("show");
  });
});
