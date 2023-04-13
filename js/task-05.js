const inputEl = document.querySelector('#name-input')

const outputEl = document.querySelector('#name-output')

const spanText = document.querySelector('#name-output')

console.log(inputEl);
console.log(outputEl);

inputEl.addEventListener('input', addInputText)


function addInputText(event) {

    event.currentTarget.value !== ''
        ? outputEl.textContent = event.currentTarget.value
        : outputEl.textContent = 'Anonymous'

}