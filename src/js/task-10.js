function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const boxesEl = document.querySelector('#boxes');
 
  for (let i = 0; i <= amount; i += 1) {
 
    const divEl = document.createElement('div');
    
    divEl.style.width = `${30 + i * 10}px`
    console.log(divEl)
    divEl.style.backgroundColor = getRandomHexColor()
      
  }
}
console.log(createBoxes(8))