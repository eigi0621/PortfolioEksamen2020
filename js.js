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

  }, 1000);

  setTimeout(function () {
    document.querySelector(".bg_front_left").classList.add("intro_push");
    document.querySelector(".text_wrapper1").classList.add("center_ani1");
  }, 1000);

  setTimeout(function () {
    document.querySelector(".text_wrapper2").classList.add("center_ani2");
    document.querySelector(".main_h1_1").classList.remove("center_ani_before");
    document.querySelector(".main_h1_2").classList.remove("center_ani_before");
    document.querySelector(".main_h1_1").classList.add("center_ani3");
    document.querySelector(".main_h1_2").classList.add("center_ani3");
  }, 2000);

  setTimeout(function () {
    document.querySelector(".main_h1_1").classList.remove("center_ani3");
    document.querySelector(".main_h1_2").classList.remove("center_ani3");
  }, 3000);
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
  }




}
