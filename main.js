const aContainer = document.querySelector('.a-container');

const FONT_SIZE_TIMEOUT = 500;
const A_ELEMENT_REMOVE_TIMEOUT = 2000;
let fontSizeFactor = 1;
let fontSizeFactorTimeoutCursor = null;

const sound = new Audio('sound.mp3');

function skream() {
  const aElement = document.createElement('div');
  aElement.className = 'a-element';
  aElement.textContent = 'А';
  if (fontSizeFactor > 2) {
    aElement.textContent = 'А-A-A-А-А';
  } else if (fontSizeFactor > 1.7) {
    aElement.textContent = 'А-A-A';
  } else if (fontSizeFactor > 1.5) {
    aElement.textContent = 'А-A';
  }
  aElement.style.fontSize = fontSizeFactor + 'em';
  aElement.style.fontVariant;

  clearTimeout(fontSizeFactorTimeoutCursor);
  fontSizeFactor += Math.random() * 0.5;
  fontSizeFactorTimeoutCursor = setTimeout(() => {
    fontSizeFactor = 1;
  }, FONT_SIZE_TIMEOUT);

  const soundClone = sound.cloneNode()
  const volume = Math.min((fontSizeFactor / 3), 1)
  soundClone.volume = volume
  soundClone.play()

  aContainer.appendChild(aElement);
  setTimeout(() => {
    aElement.remove();
  }, A_ELEMENT_REMOVE_TIMEOUT);
}

document.addEventListener('keydown', skream);
document.addEventListener('mousedown', skream);
