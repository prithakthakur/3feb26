/* Typing Effect */
const text = "I LOVE YOU OSHI ❤️";
let index = 0;
const speed = 120;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

/* Hearts */
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('span');
  heart.innerHTML = Math.random() > 0.5 ? '💖' : '✨';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);

/* Love Message + Music */
function showMessage() {
  document.getElementById("message").style.display = "block";
  document.getElementById("bgMusic").play();
}
