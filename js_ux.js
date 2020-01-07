document.body.style.overflow = "hidden";

window.addEventListener("load", loadedState);

function loadedState() {
  setTimeout(function () {
    window.scrollTo(0, 0);

    document.querySelector(".scroll_wrap").classList.add("push_scroll");
    document.querySelector(".green_intro").classList.add("green_intro_off");
    document.querySelector(".main_h1_1").classList.add("center_ani_before");
    document.querySelector(".main_h1_2").classList.add("center_ani_before");
    document.querySelector(".main_h1_3").classList.add("center_ani_before2");
  }, 100);

  setTimeout(function () {
    document.querySelector(".bg_wrapper_top").classList.add("top_push");
    document.querySelector(".bg_wrapper_bottom").classList.add("bottom_push");
    document.querySelector(".bg_wrapper_left").classList.add("left_push");
    document.querySelector(".bg_wrapper_right").classList.add("right_push");
  }, 200);

  setTimeout(function () {
    document.querySelector(".burger_wrap").classList.add("right_push2");
    document.querySelector(".logo_wrap").classList.add("top_push_menu");
    document.querySelector(".logo_wrap").style.transform = "translateX(30px) translateY(237px)"
    document.querySelector(".bg_front_left").classList.add("sub_intro_push");
    document.querySelector(".bg_front_right").classList.add("sub_intro_push");
  }, 200);

  setTimeout(function () {
    document.querySelector(".text_wrapper1").classList.add("center_ani1");
  }, 350);

  setTimeout(function () {
    document.querySelector(".center_h1").style.visibility = "visible";
    document.querySelector(".text_wrapper2").classList.add("center_ani1");

    document.body.style.overflow = "visible";
    showScroll();
    document.querySelector(".scroll_wrap").classList.remove("push_scroll");
    document.querySelector(".scroll_wrap").classList.add("push_scroll_back");
    document.querySelector(".scroll_wrap").style.visibility = "visible";
  }, 500);

  setTimeout(function () {
    document.querySelector(".main_h1_1").classList.remove("center_ani_before");
    document.querySelector(".main_h1_2").classList.remove("center_ani_before");
    document.querySelector(".main_h1_3").classList.remove("center_ani_before2");
    document.querySelector(".main_h1_1").classList.add("center_ani3");
    document.querySelector(".main_h1_2").classList.add("center_ani3");
    document.querySelector(".main_h1_3").classList.add("center_ani4");
  }, 1000);

  setTimeout(function () {
    document.querySelector(".main_h1_1").classList.remove("center_ani3");
    document.querySelector(".main_h1_2").classList.remove("center_ani3");
    document.querySelector(".main_h1_3").classList.remove("center_ani4");
  }, 1500);
}

document.querySelector(".nav3").addEventListener("click", purpleOutro);
document.querySelector(".nav4").addEventListener("click", yellowOutro);
document.querySelector(".nav2").addEventListener("click", blueOutro);
document.querySelector(".nav1").addEventListener("click", redOutro);
document.querySelector(".nav0").addEventListener("click", greenOutro);

function greenOutro() {
  document.querySelector(".green_outro").classList.add("green_outro_ani");
  setTimeout(function () {
    window.location.href = "index.html"
  }, 500);
}

function redOutro() {
  document.querySelector(".red_outro").classList.add("red_outro_ani");
  setTimeout(function () {
    window.location.href = "web.html"
  }, 500);
}

function blueOutro() {
  document.querySelector(".blue_outro").classList.add("blue_outro_ani");
  setTimeout(function () {
    window.location.href = "ux.html"
  }, 500);
}

function purpleOutro() {
  document.querySelector(".purple_outro").classList.add("purple_outro_ani");
  setTimeout(function () {
    window.location.href = "animation.html"
  }, 500);
}

function yellowOutro() {
  document.querySelector(".yellow_outro").classList.add("yellow_outro_ani");
  setTimeout(function () {
    window.location.href = "indhold.html"
  }, 500);
}

document.querySelector(".burger_div").addEventListener("click", menuShow);

function menuShow() {
  document.querySelector(".burger_div").removeEventListener("click", menuShow);
  document.querySelector(".burger_div").addEventListener("click", menuHide);
  document.querySelector(".green_overlay").addEventListener("click", menuHide);


  document.querySelector(".burger_wrap").classList.remove("menu_push_right");
  document.querySelector(".bg_wrapper_right").classList.remove("menu_push_right");
  document.querySelector(".nav").classList.remove("menu_push_right");
  document.querySelector(".bg_wrapper_right").classList.remove("right_push");
  document.querySelector(".burger_wrap").classList.remove("right_push2");
  document.querySelector(".burger_wrap").style.right = "0px";
  document.querySelector(".bg_wrapper_right").style.right = "-300px";

  document.querySelector(".burger_wrap").classList.add("menu_push_left");
  document.querySelector(".bg_wrapper_right").classList.add("menu_push_left");
  document.querySelector(".nav").classList.add("menu_push_left");

  document.querySelector(".burger1").classList.remove("burger1_cross_off");
  document.querySelector(".burger2").classList.remove("burger2_cross_off");
  document.querySelector(".burger3").classList.remove("burger3_cross_off");

  document.querySelector(".burger1").classList.add("burger1_cross_on");
  document.querySelector(".burger2").classList.add("burger2_cross_on");
  document.querySelector(".burger3").classList.add("burger3_cross_on");

  document.querySelector(".bg_wrapper_top").classList.remove("top_push_menu_back");
  document.querySelector(".bg_wrapper_bottom").classList.remove("bottom_push_menu_back");
  document.querySelector(".bg_wrapper_left").classList.remove("left_push_menu_back");

  document.querySelector(".bg_wrapper_top").classList.add("top_push_menu");
  document.querySelector(".bg_wrapper_bottom").classList.add("bottom_push_menu");
  document.querySelector(".bg_wrapper_left").classList.add("left_push_menu");
  document.querySelector(".logo_wrap").classList.remove("top_push_menu");
  document.querySelector(".logo_wrap").classList.add("top_push_menu_back");

  document.querySelector(".green_overlay").classList.remove("green_overlay_off");
  document.querySelector(".green_overlay").classList.add("green_overlay_on");

  document.body.style.overflow = "hidden";
}

function menuHide() {
  document.querySelector(".burger_div").removeEventListener("click", menuHide);
  document.querySelector(".green_overlay").removeEventListener("click", menuHide);
  document.querySelector(".burger_div").addEventListener("click", menuShow);


  document.querySelector(".burger_wrap").classList.remove("menu_push_left");
  document.querySelector(".bg_wrapper_right").classList.remove("menu_push_left");
  document.querySelector(".nav").classList.remove("menu_push_left");

  document.querySelector(".burger_wrap").classList.add("menu_push_right");
  document.querySelector(".bg_wrapper_right").classList.add("menu_push_right");
  document.querySelector(".nav").classList.add("menu_push_right");

  document.querySelector(".burger1").classList.remove("burger1_cross_on");
  document.querySelector(".burger2").classList.remove("burger2_cross_on");
  document.querySelector(".burger3").classList.remove("burger3_cross_on");

  document.querySelector(".burger1").classList.add("burger1_cross_off");
  document.querySelector(".burger2").classList.add("burger2_cross_off");
  document.querySelector(".burger3").classList.add("burger3_cross_off");

  document.querySelector(".bg_wrapper_top").classList.remove("top_push_menu");
  document.querySelector(".bg_wrapper_bottom").classList.remove("bottom_push_menu");
  document.querySelector(".bg_wrapper_left").classList.remove("left_push_menu");

  document.querySelector(".bg_wrapper_top").classList.add("top_push_menu_back");
  document.querySelector(".bg_wrapper_bottom").classList.add("bottom_push_menu_back");
  document.querySelector(".bg_wrapper_left").classList.add("left_push_menu_back");

  document.querySelector(".logo_wrap").classList.remove("top_push_menu_back");
  document.querySelector(".logo_wrap").classList.add("top_push_menu");

  document.querySelector(".green_overlay").classList.remove("green_overlay_on");
  document.querySelector(".green_overlay").classList.add("green_overlay_off");

  document.body.style.overflow = "visible";
}

function showScroll() {
  window.onscroll = function (e) {
    // log the length scrolled vertically
    console.log(window.pageYOffset);

    if (window.matchMedia("(min-width: 1060px)").matches) {
      var speedOfImg1 = -.5
      var speedOfWrap1 = .1
      var speedOfWrap5 = .7
    } else {
      var speedOfImg1 = 0
      var speedOfWrap1 = 0
      var speedOfWrap5 = 0
    }

    var break1 = document.querySelector(".section_class2").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;
    var break2 = document.querySelector(".section_class3").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;
    var break3 = document.querySelector(".section_class4").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;
    var break4 = document.querySelector(".footer_class").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;

    var imgSpeed1 = window.pageYOffset * speedOfImg1 - break2 * speedOfImg1;
    var wrapSpeed1 = window.pageYOffset * speedOfWrap1 - break2 * speedOfWrap1;
    var wrapSpeed5 = window.pageYOffset * speedOfWrap5 - break4 * speedOfWrap5;

    var colWrapperPadding = (window.innerWidth - 1000) / 2;

    if (window.matchMedia("(min-width: 1060px)").matches) {
      document.querySelector(".section_class1").style.padding = "100px " + colWrapperPadding + "px";
      document.querySelector(".section_class2").style.padding = "100px " + colWrapperPadding + "px";
      document.querySelector(".section_class3").style.padding = "100px " + colWrapperPadding + "px";
      document.querySelector(".section_class4").style.padding = "100px " + colWrapperPadding + "px";
      document.querySelector(".footer_class").style.padding = "200px " + colWrapperPadding + "px 100px " + colWrapperPadding + "px";
    } else {
      document.querySelector(".footer_class").style.padding = "50px 10px 10px 10px";
    }

    if (window.pageYOffset > 1) {
      document.querySelector(".bg_front_left").classList.remove("sub_intro_push");
      document.querySelector(".bg_front_left").classList.add("sub_intro_push_back");
      document.querySelector(".bg_front_right").classList.remove("sub_intro_push");
      document.querySelector(".bg_front_right").classList.add("sub_intro_push_back");

      setTimeout(function () {
        document.querySelector(".text_wrapper1").classList.remove("center_ani1");
        document.querySelector(".text_wrapper1").classList.add("center_ani1_back");
      }, 150);
      setTimeout(function () {
        document.querySelector(".text_wrapper2").classList.remove("center_ani1");
        document.querySelector(".text_wrapper2").classList.add("center_ani1_back");
      }, 200);

      document.querySelector(".scroll_wrap").classList.remove("push_scroll_back");
      document.querySelector(".scroll_wrap").classList.add("push_scroll");

      document.querySelector(".window").classList.remove("window_hide");
      document.querySelector(".window").classList.add("window_show");

    } else {
      document.querySelector(".bg_front_left").classList.remove("sub_intro_push_back");
      document.querySelector(".bg_front_left").classList.add("sub_intro_push");
      document.querySelector(".bg_front_right").classList.remove("sub_intro_push_back");
      document.querySelector(".bg_front_right").classList.add("sub_intro_push");

      document.querySelector(".scroll_wrap").classList.remove("push_scroll");
      document.querySelector(".scroll_wrap").classList.add("push_scroll_back");

      setTimeout(function () {
        document.querySelector(".text_wrapper1").classList.remove("center_ani1_back");
        document.querySelector(".text_wrapper1").classList.add("center_ani1");
      }, 150);
      setTimeout(function () {
        document.querySelector(".text_wrapper2").classList.remove("center_ani1_back");
        document.querySelector(".text_wrapper2").classList.add("center_ani1");
      }, 200);

      document.querySelector(".window").classList.remove("window_show");
      document.querySelector(".window").classList.add("window_hide");
    }


    if (window.pageYOffset > break1) {

      document.querySelector(".section_class2").classList.remove("lift_back");
      document.querySelector(".section_class2").classList.add("lift");
    } else {
      document.querySelector(".section_class2").classList.remove("lift");
      document.querySelector(".section_class2").classList.add("lift_back");
    }

    if (window.pageYOffset > break2) {
      document.querySelector(".fressy").style.transform = "translateY(" + imgSpeed1 + "px)";
      document.querySelector(".img_wrapper3_fressy").style.transform = "translateY(" + wrapSpeed1 + "px)";

      document.querySelector(".section_class3").classList.remove("lift_back");
      document.querySelector(".section_class3").classList.add("lift");
    } else {
      document.querySelector(".section_class3").classList.remove("lift");
      document.querySelector(".section_class3").classList.add("lift_back");
    }

    if (window.pageYOffset > break3) {
      document.querySelector(".section_class4").classList.remove("lift_back");
      document.querySelector(".section_class4").classList.add("lift");
    } else {
      document.querySelector(".section_class4").classList.remove("lift");
      document.querySelector(".section_class4").classList.add("lift_back");
    }

    if (window.pageYOffset > break4) {
      document.querySelector(".footer_class").classList.remove("lift_back");
      document.querySelector(".footer_class").classList.add("lift");
    } else {
      document.querySelector(".footer_class").classList.remove("lift");
      document.querySelector(".footer_class").classList.add("lift_back");

    }
  }
}
