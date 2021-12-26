const navbar = document.getElementById('navbar');

export default function navCheckScroll() {
  if (window.scrollY >= window.innerHeight / 3) {
    navbar.classList.add('header--darken');
  } else {
    navbar.classList.remove('header--darken');
  }
}