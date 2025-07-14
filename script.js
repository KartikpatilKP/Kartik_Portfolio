// Typing Animation
const texts = [
  "Web Development",
  "Java Programming",
  "Frontend Design",
  "Machine Learning"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typed-text').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // wait 1 second before next word
  } else {
    setTimeout(type, 100); // typing speed
  }
}

type(); // start typing animation

// Mobile Navbar Toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}
