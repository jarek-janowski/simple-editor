import '../scss/main.scss';

const entryInput = document.querySelector('.form__textarea--js');
const saveButton = document.querySelector('.button--save-js');
const loadButton = document.querySelector('.button--load-js');
const clearButton = document.querySelector('.button--clear-js');

const inputValue = localStorage.getItem('entry');

if (inputValue) {
    document.querySelector('.button__info--js').innerHTML = '  ❕';
}

saveButton.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
    if (entryInput.value) {
        document.querySelector('.button__info--js').innerHTML = '  ❕';
    } else {
        document.querySelector('.button__info--js').innerHTML = '';
    }

})

loadButton.addEventListener('click', () => {
    entryInput.value = localStorage.getItem('entry');

})

clearButton.addEventListener('click', () => {
    localStorage.clear();
    document.querySelector('.button__info--js').innerHTML = '';
})