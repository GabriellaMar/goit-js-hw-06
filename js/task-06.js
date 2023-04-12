
const inputEl = document.querySelector('input');
// console.log(inputEl);

const inputTextlength = inputEl.getAttribute('data-length');
// console.log(inputTextlength);



inputEl.addEventListener('click', () => {
    inputEl.focus();
});

inputEl.addEventListener("focus", () => {

});


inputEl.addEventListener('blur', () => {
    if (inputEl.value.length <= inputTextlength) {

        // inputEl.style.borderColor = '#4caf50'
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {

        // inputEl.style.borderColor = '#f44336'
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});