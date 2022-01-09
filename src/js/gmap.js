let map;

export default function initMap() {
  map = new google.maps.Map(document.getElementById("gmap"), {
    center: { lat: -42.735667873295014, lng: 147.43729728520722 },
    zoom: 16,
  });
}
