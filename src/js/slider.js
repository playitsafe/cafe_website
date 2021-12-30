const menuNavs = document.getElementById('menu_nav').children;

const switchActiveMenu = function(i) {
  [...menuNavs].forEach((el) => {
    if ([...menuNavs].indexOf(el) === i) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

export default function () {
  // Enable Menu slider
  const menuSlider = tns({
    container: '.menu-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoplayButton: false,
    autoplayButtonOutput: false
  });

  // const info = menuSlider.getInfo();
  // menuSlider.goTo(4)
  // console.log('menuNav', menuNavs)

  // Add click function to Tab
  [...menuNavs].forEach((el) => {
    el.onclick = function () {
      const i = [...menuNavs].indexOf(el);
      switchActiveMenu(i)
      menuSlider.goTo(i)
    };
  });

  //Watch slide auto change
  menuSlider.events.on('indexChanged', function() {
    switchActiveMenu(menuSlider.getInfo().index -1)
  })

  // Testimonial Slider
  const testmonialSlider = tns({
    container: '.testimonial_slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    navPosition: 'bottom',
    nav: true,
    // navAsThumbnails: true,
    // autoplayButton: false,
    autoplayButtonOutput: false
  });
}