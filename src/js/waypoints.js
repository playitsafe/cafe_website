const animatedElements = document.getElementsByClassName('animate__animated');

const waypoints = [];

for (const el of animatedElements) {
  waypoints.push(new Waypoint({
    element: el,
    handler: function() {
      el.classList.add('animate__fadeInUp');
      el.classList.remove('hide');
    },
    offset: '80%'
  }))
}

export default waypoints;
