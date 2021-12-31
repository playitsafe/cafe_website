import ready from "./init.js";
import navCheckScroll from "./navbar.js";
import slider from "./slider.js";
import waypoint from "./waypoints.js";
import gallery from "./fancybox.js";

const onReady = function () {
  window.onscroll = navCheckScroll;
  slider()



}

ready(onReady);
