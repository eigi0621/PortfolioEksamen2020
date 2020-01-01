window.addEventListener("load", loadedState);

function loadedState() {
  document.querySelector(".main_h1_1").classList.add("center_ani_before");
  document.querySelector(".main_h1_2").classList.add("center_ani_before");

  setTimeout(function () {
    document.querySelector(".bg_wrapper_top").classList.add("top_push");
    document.querySelector(".bg_wrapper_bottom").classList.add("bottom_push");
    document.querySelector(".bg_wrapper_left").classList.add("left_push");
    document.querySelector(".bg_wrapper_right").classList.add("right_push");
  }, 500);

  setTimeout(function () {
    document.querySelector(".bg_wrapper_right2").classList.add("right_push");
    document.querySelector(".burger_wrap").classList.add("right_push2");
    document.querySelector(".logo_wrap").classList.add("top_push");
    document.querySelector(".logo_wrap").style.transform = "translateX(30px) translateY(307px)"
    document.querySelector(".bg_front_left").classList.add("intro_push");

  }, 750);

  setTimeout(function () {
    document.querySelector(".text_wrapper1").classList.add("center_ani1");
  }, 1000);

  setTimeout(function () {
    document.querySelector(".text_wrapper2").classList.add("center_ani2");
    document.querySelector(".main_h1_1").classList.remove("center_ani_before");
    document.querySelector(".main_h1_2").classList.remove("center_ani_before");
    document.querySelector(".main_h1_1").classList.add("center_ani3");
    document.querySelector(".main_h1_2").classList.add("center_ani3");
  }, 1750);

  setTimeout(function () {
    document.querySelector(".main_h1_1").classList.remove("center_ani3");
    document.querySelector(".main_h1_2").classList.remove("center_ani3");
  }, 2750);
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



window.onscroll = function (e) {
  // log the length scrolled vertically
  console.log(window.pageYOffset);



  if (window.pageYOffset > 110) {
    console.log("scroller over 110");


    document.querySelector(".bg_front_left").classList.remove("intro_push");
    document.querySelector(".bg_front_left").classList.add("intro_push_back");

    setTimeout(function () {
      document.querySelector(".text_wrapper1").classList.remove("center_ani1");
      document.querySelector(".text_wrapper1").classList.add("center_ani1_back");
    }, 150);
    setTimeout(function () {
      document.querySelector(".text_wrapper2").classList.remove("center_ani2");
      document.querySelector(".text_wrapper2").classList.add("center_ani2_back");
    }, 200);


    document.querySelector(".window").classList.remove("window_hide");
    document.querySelector(".window").classList.add("window_show");

  } else {
    console.log("below 110");
    document.querySelector(".bg_front_left").classList.remove("intro_push_back");
    document.querySelector(".bg_front_left").classList.add("intro_push");

    setTimeout(function () {
      document.querySelector(".text_wrapper1").classList.remove("center_ani1_back");
      document.querySelector(".text_wrapper1").classList.add("center_ani1");
    }, 150);
    setTimeout(function () {
      document.querySelector(".text_wrapper2").classList.remove("center_ani2_back");
      document.querySelector(".text_wrapper2").classList.add("center_ani2");
    }, 200);

    document.querySelector(".window").classList.remove("window_show");
    document.querySelector(".window").classList.add("window_hide");
  }

  if (window.pageYOffset > 600) {
    console.log("scroller over 200");

    if (window.matchMedia("(min-width: 800px)").matches) {
      document.querySelector(".window").style.transform = "translateY(" + window.pageYOffset * 0 + "px)";
      document.querySelector(".selvportraet").style.transform = "translateY(" + window.pageYOffset * -.1 + "px)";
      document.querySelector(".img_wrapper").style.transform = "translateY(" + window.pageYOffset * .3 + "px)";
    }

  } else {
    console.log("below 400");
  }

  if (window.pageYOffset > 2150) {
    console.log("scroller over 2000");

    document.querySelector(".col_wrapper2").classList.remove("lift_back");
    document.querySelector(".col_wrapper2").classList.add("lift");


    document.querySelector(".turn_black1").classList.remove("green_c");
    document.querySelector(".turn_black2").classList.remove("green_c");
    document.querySelector(".turn_black3").classList.remove("green_c");
    document.querySelector(".turn_black4").classList.remove("green_c");
    document.querySelector(".turn_black5").classList.remove("green_c");

    document.querySelector(".turn_black1").classList.add("black_c");
    document.querySelector(".turn_black2").classList.add("black_c");
    document.querySelector(".turn_black3").classList.add("black_c");
    document.querySelector(".turn_black4").classList.add("black_c");
    document.querySelector(".turn_black5").classList.add("black_c");
  } else {
    console.log("below 2000");

    document.querySelector(".col_wrapper2").classList.remove("lift");
    document.querySelector(".col_wrapper2").classList.add("lift_back");


    document.querySelector(".turn_black1").classList.remove("black_c");
    document.querySelector(".turn_black2").classList.remove("black_c");
    document.querySelector(".turn_black3").classList.remove("black_c");
    document.querySelector(".turn_black4").classList.remove("black_c");
    document.querySelector(".turn_black5").classList.remove("black_c");

    document.querySelector(".turn_black1").classList.add("green_c");
    document.querySelector(".turn_black2").classList.add("green_c");
    document.querySelector(".turn_black3").classList.add("green_c");
    document.querySelector(".turn_black4").classList.add("green_c");
    document.querySelector(".turn_black5").classList.add("green_c");
  }

  /*document.querySelector(".window").style.transform = "translateY(" + window.pageYOffset * -.5 + "px)";*/


}
