"use strict";

const pathname = window.location.pathname; // Gets URL path and stores in pathname

$(document).ready(function () {
  // Initiate Slick
  $(".cod-legacy-carousel").slick({
    dots: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
