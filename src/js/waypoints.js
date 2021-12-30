const menuControl = document.getElementById('menu__control');
const menuDisplay = document.getElementById('menu__display');


const menuControlWaypoint = new Waypoint({
  element: menuControl,
  handler: function() {
    menuControl.classList.add('aniamted--fade_in_up');
    menuControl.classList.remove('hidden');
  },
  offset: '80%'
})

const menuDisplayWaypoint = new Waypoint({
  element: menuDisplay,
  handler: function() {
    menuDisplay.classList.add('aniamted--fade_in_up');
    menuDisplay.classList.remove('hidden');
  },
  offset: '80%'
})

const waypoints = {
  menuControlWaypoint,
  menuDisplayWaypoint
}

export default waypoints;