const inputEl = document.querySelector('#font-size-control')

const spanText = document.querySelector('#text')



inputEl.addEventListener('input', changeFontSize)

function changeFontSize() {
    const inputFontSize = inputEl.value;

    console.log(inputEl.value)

    spanText.style.fontSize = inputFontSize;
}
