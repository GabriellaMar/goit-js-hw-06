const incrementBtn = document.querySelector('[data-action="increment"]')

const decrementBtn = document.querySelector('[data-action="decrement"]')

const spanValue = document.querySelector('#value')




incrementBtn.addEventListener('click', addSpanValue);


decrementBtn.addEventListener('click', removeSpanValue);

let counterValue = 0;


function addSpanValue() { 
    counterValue += 1;
    spanValue.textContent = counterValue;
    // incrementBtn.textContent = counterValue;
    console.log(`Значення збільшується : ${counterValue}`)
}


function removeSpanValue() {
    counterValue -= 1;
    spanValue.textContent = counterValue;
    // incrementBtn.textContent = counterValue;
    console.log(`Значення зменшується : ${counterValue}`)
}