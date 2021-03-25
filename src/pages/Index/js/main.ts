import { Component } from "react";
// import React from "react";
// import Swiper from "swiper";
// import ReactDOM from "react-dom";

// var res = $(".dropDown-menu");
// $('[data-class^="m"]').on("click", funk);

// $(document).on("click", function (e) {
//   console.log(e.target, this);
//   if (
//     $(e.target).closest("body").length ||
//     $(e.target).closest(".menu-a").length
//   )
//     return;
//   res.fadeOut(100);
// });

// function funk() {
//   var link = $("a").attr("data-class"),
//     el = $(".dropDown-menu." + link);
//   if (el.css("display") === "none") {
//     res.hide();
//     el.slideToggle(400);
//   } else {
//     el.slideToggle(400);
//   }
// }

// $(function () {
//   function ScrolClass() {
//     if ($(window).scrollTop() !== 0) {
//       $(".topPanel").addClass("topPanel-top");
//     } else {
//       $(".topPanel").removeClass("topPanel-top");
//     }
//   }
//   $(window).scroll(function () {
//     ScrolClass();
//   });
//   $(document).ready(function () {
//     ScrolClass();
//   });
// });

// $(".menuButton").on("click", function () {
//   $("." + $(this).attr("data-class")).toggleClass("active");
//   $(this).toggleClass("active");
// });

// $(".tab-button").on("click", function () {
//   $(".tab-button").removeClass("active");
//   $(this).addClass("active");
//   $(".tab-block").removeClass("active");
//   $("#" + $(this).attr("data-tab")).addClass("active");
// });

// $(".buttonTop").on("click", function () {
//   $("body, html").animate({ scrollTop: 0 }, 800);
// });

// $(function () {
//   var overlay = $("#overlay");
//   const x = React.createElement("a");

//   let openModal = document.getElementsByClassName("open_modal");
//   var open_modal = $(".open_modal");
//   var close = $(".modal_close, #overlay");
//   var modal = $(".modal_div");

//   open_modal.on("click", (event) => {
//     event.preventDefault();
//     var div = $("a").attr("href");
//     overlay.fadeIn(400, function () {
//       if (div)
//         div.css("display", "block").animate({ opacity: 1, top: "20%" }, 200);
//     });
//   });

//   close.on("click", function () {
//     modal.animate({ opacity: 0, top: "15%" }, 200, function () {
//       $(this).css("display", "none");
//       overlay.fadeOut(400);
//     });
//   });
// });

// var swiper = new Swiper(".swiper-container", {
//   autoplay: {
//     delay: 4000,
//   },
//   speed: 1000,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
