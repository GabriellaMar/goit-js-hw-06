function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('button');

const bodyEl = document.body

const spanEl = document.querySelector('span')

buttonEl.addEventListener('click', () => {

  bodyEl.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = bodyEl.style.backgroundColor


})
