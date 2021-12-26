import ready from "./init.js";
import navCheckScroll from "./navbar.js";

const onReady = function () {
  window.onscroll = navCheckScroll;
}

ready(onReady);
