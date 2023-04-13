
const inputEl = document.querySelector('input');

const inputTextlength = inputEl.getAttribute('data-length');
//  console.log(inputTextlength);

inputEl.addEventListener('click', () => {
    inputEl.focus();
});

inputEl.addEventListener("focus", () => {

});


inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === Number(inputTextlength)) {

        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});