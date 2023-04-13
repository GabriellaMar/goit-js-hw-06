function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {

  const inputEl = document.querySelector('input');
  const amount = inputEl.value;
  createBoxes(amount)
})

destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  const boxesNodes = [];
  for (let i = 1; i <= amount; i += 1) {

    const divEl = document.createElement('div');

    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    console.log(divEl)

    divEl.style.backgroundColor = getRandomHexColor();

    boxesNodes.push(divEl);
  }

  boxesEl.append(...boxesNodes);
}


function destroyBoxes() {
  const boxList = boxesEl.querySelectorAll('div');
  for (const box of boxList) {
    box.remove();
  }
}


