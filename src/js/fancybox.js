Fancybox.bind("[data-fancybox]", {
  Thumbs: false,
  Toolbar: false,
  groupAll : true, // Group all items
  on : {
    ready : (fancybox) => {
      console.log(`fancybox #${fancybox.id} is ready!`);
    }
  },
  Image: {
    zoom: false,
    click: true,
    wheel: "slide",
  },
  padding: 0,
  helpers: {
    overlay: {
      locked: false
    }
  }
});

// Fancybox.show(
//   [
//     {
//       src: "../../resource/img/menu/breakfast3.webp",
//       type: "image",
//     },
//     {
//       src: "../../resource/img/menu/breakfast4.webp",
//       type: "image",
//     },
//   ],
//   // {
//   //   infinite: false,
//   // }
// );

export default Fancybox