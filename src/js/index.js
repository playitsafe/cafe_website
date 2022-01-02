import ready from "./init.js";
import navCheckScroll from "./navbar.js";
import slider from "./slider.js";
import waypoint from "./waypoints.js";
import gallery from "./fancybox.js";
import initMap from "./gmap.js";

const onReady = function () {
  window.onscroll = navCheckScroll;
  slider()
  initMap()
  // console.log(initMap)


}

ready(onReady);
