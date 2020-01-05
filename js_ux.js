document.body.style.overflow = "hidden";
window.addEventListener("load", loadedState);


function loadedState() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.querySelector(".main_scroller").scrollTo(0, 0);
  window.scrollTo(0, 0);

  document.querySelector(".scroll_wrap").classList.add("push_scroll");

  setTimeout(function () {
    document.querySelector(".green_intro").classList.add("green_intro_off");

    document.querySelector(".main_scroller").scrollTo(0, 0);
    window.scrollTo(0, 0);


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
    document.querySelector(".bg_wrapper_right2").classList.add("right_push");
    document.querySelector(".burger_wrap").classList.add("right_push2");
    document.querySelector(".logo_wrap").classList.add("top_push");
    document.querySelector(".logo_wrap").style.transform = "translateX(30px) translateY(307px)"
    document.querySelector(".bg_front_left").classList.add("intro_push");
  }, 200);

  setTimeout(function () {
    document.querySelector(".ux-text_wrapper1").classList.add("ux-center_ani1");
  }, 350);

  setTimeout(function () {
    document.querySelector(".center_h1").style.visibility = "visible";
    document.querySelector(".ux-text_wrapper2").classList.add("ux-center_ani2");

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


document.querySelector(".nav0").addEventListener("click", greenOutro);

function greenOutro() {
  document.querySelector(".green_outro").classList.add("green_outro_ani");

  setTimeout(function () {
    window.location.href = "index.html"
  }, 500);

}

document.querySelector(".nav1").addEventListener("click", redOutro);

function redOutro() {
  document.querySelector(".red_outro").classList.add("red_outro_ani");

  setTimeout(function () {
    window.location.href = "web.html"
  }, 500);

}

document.querySelector(".nav2").addEventListener("click", blueOutro);

function blueOutro() {
  document.querySelector(".blue_outro").classList.add("blue_outro_ani");

  setTimeout(function () {
    window.location.href = "ux.html"
  }, 500);

}

document.querySelector(".nav3").addEventListener("click", purpleOutro);

function purpleOutro() {
  document.querySelector(".purple_outro").classList.add("purple_outro_ani");

  setTimeout(function () {
    window.location.href = "animation.html"
  }, 500);

}

document.querySelector(".nav4").addEventListener("click", yellowOutro);

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
  document.querySelector(".bg_wrapper_right2").classList.remove("right_push");
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

  document.querySelector(".green_overlay").classList.remove("green_overlay_on");
  document.querySelector(".green_overlay").classList.add("green_overlay_off");

  document.body.style.overflow = "visible";
}


function showScroll() {
  window.onscroll = function (e) {
    // log the length scrolled vertically
    console.log(window.pageYOffset);

    var speedOfImg = -.1
    var speedOfWrap = .4
    var speedOfImg2 = -.5
    var speedOfWrap2 = .1
    var speedOfImg3 = 0
    var speedOfWrap3 = .05
    var speedOfImg4 = -.2
    var speedOfWrap4 = .05
    var speedOfWrap5 = .7

    var break1 = document.querySelector(".col_wrapper2").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;
    var break2 = document.querySelector(".col_wrapper3").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;
    var break3 = document.querySelector(".col_wrapper4").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;
    var break4 = document.querySelector(".col_wrapper5").getBoundingClientRect().top + window.pageYOffset - window.innerHeight;

    var imgSpeed = window.pageYOffset * speedOfImg - 100 * speedOfImg;
    var wrapSpeed = window.pageYOffset * speedOfWrap - 100 * speedOfWrap;
    var imgSpeed2 = window.pageYOffset * speedOfImg3 - break2 * speedOfImg3;
    var wrapSpeed2 = window.pageYOffset * speedOfWrap3 - break2 * speedOfWrap3;
    var imgSpeed3 = window.pageYOffset * speedOfImg2 - break2 * speedOfImg2;
    var wrapSpeed3 = window.pageYOffset * speedOfWrap2 - break2 * speedOfWrap2;
    var imgSpeed4 = window.pageYOffset * speedOfImg4 - break3 * speedOfImg4;
    var wrapSpeed4 = window.pageYOffset * speedOfWrap4 - break3 * speedOfWrap4;
    var wrapSpeed5 = window.pageYOffset * speedOfWrap5 - break4 * speedOfWrap5;



    var colWrapperPadding = (window.innerWidth - 1000) / 2;

    if (window.matchMedia("(min-width: 1000px)").matches) {
      document.querySelector(".col_wrapper1").style.padding = "100px " + colWrapperPadding + "px 100px " + colWrapperPadding + "px";
      document.querySelector(".col_wrapper2").style.padding = "100px " + colWrapperPadding + "px 100px " + colWrapperPadding + "px";
      document.querySelector(".col_wrapper3").style.padding = "100px " + colWrapperPadding + "px 100px " + colWrapperPadding + "px";
      document.querySelector(".col_wrapper4").style.padding = "100px " + colWrapperPadding + "px 100px " + colWrapperPadding + "px";
      document.querySelector(".col_wrapper5").style.padding = "200px " + colWrapperPadding + "px 100px " + colWrapperPadding + "px";
    }

    if (window.pageYOffset > 10) {


      document.querySelector(".bg_front_left").classList.remove("intro_push");
      document.querySelector(".bg_front_left").classList.add("intro_push_back");

      setTimeout(function () {
        document.querySelector(".ux-text_wrapper1").classList.remove("ux-center_ani1");

        document.querySelector(".ux-text_wrapper1").classList.add("ux-center_ani1_back");
      }, 150);
      setTimeout(function () {
        document.querySelector(".ux-text_wrapper2").classList.remove("ux-center_ani2");

        document.querySelector(".ux-text_wrapper2").classList.add("ux-center_ani2_back");
      }, 200);


      document.querySelector(".scroll_wrap").classList.remove("push_scroll_back");
      document.querySelector(".scroll_wrap").classList.add("push_scroll");

      document.querySelector(".window").classList.remove("window_hide");
      document.querySelector(".window").classList.add("window_show");

    } else {
      document.querySelector(".bg_front_left").classList.remove("intro_push_back");
      document.querySelector(".bg_front_left").classList.add("intro_push");

        document.querySelector(".scroll_wrap").classList.remove("push_scroll");
        document.querySelector(".scroll_wrap").classList.add("push_scroll_back");

      setTimeout(function () {
        document.querySelector(".ux-text_wrapper1").classList.remove("ux-center_ani1_back");
        document.querySelector(".ux-text_wrapper1").classList.add("ux-center_ani1");
      }, 150);
      setTimeout(function () {
        document.querySelector(".ux-text_wrapper2").classList.remove("ux-center_ani2_back");
        document.querySelector(".ux-text_wrapper2").classList.add("ux-center_ani2");
      }, 200);

      document.querySelector(".window").classList.remove("window_show");
      document.querySelector(".window").classList.add("window_hide");
    }
    if (window.matchMedia("(min-width: 1000px)").matches) {
      if (window.pageYOffset > 100) {}

      if (window.pageYOffset > break1) {

        document.querySelector(".col_wrapper2").classList.remove("lift_back");
        document.querySelector(".col_wrapper2").classList.add("lift");
      } else {
        document.querySelector(".col_wrapper2").classList.remove("lift");
        document.querySelector(".col_wrapper2").classList.add("lift_back");
      }

      if (window.pageYOffset > break2) {
        document.querySelector(".fressy").style.transform = "translateY(" + imgSpeed3 + "px)";
        document.querySelector(".img_wrapper3_fressy").style.transform = "translateY(" + wrapSpeed3 + "px)";

        document.querySelector(".col_wrapper3").classList.remove("lift_back");
        document.querySelector(".col_wrapper3").classList.add("lift");
      } else {
        document.querySelector(".col_wrapper3").classList.remove("lift");
        document.querySelector(".col_wrapper3").classList.add("lift_back");
      }

      if (window.pageYOffset > break3) {
        document.querySelector(".col_wrapper4").classList.remove("lift_back");
        document.querySelector(".col_wrapper4").classList.add("lift");
      } else {
        document.querySelector(".col_wrapper4").classList.remove("lift");
        document.querySelector(".col_wrapper4").classList.add("lift_back");
      }

      if (window.pageYOffset > break4) {
        console.log(break4);
        document.querySelector(".last_wrap").style.transform = "translateY(" + wrapSpeed5 + "px)";
      }
    }
  }
}
