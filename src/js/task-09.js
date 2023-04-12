function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector('button');
// console.log(buttonEl)

const bodyEl = document.body
// console.log(bodyEl)

const spanEl = document.querySelector('span')
// console.log(spanEl)


buttonEl.addEventListener('click', () => { 

  bodyEl.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = bodyEl.style.backgroundColor


})
