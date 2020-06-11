import '../scss/main.scss';

/* place your code below */

const entry = localStorage.getItem('entry');
let result = '';

// if (entry) {
//     result = entry;
// }

const entryInput = document.querySelector('.form__textarea--js');
entryInput.value = result;



const saveButton = document.querySelector('.button--save-js');
const loadButton = document.querySelector('.button--load-js');
const clearButton = document.querySelector('.button--clear-js')

saveButton.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
    location.reload();
})

loadButton.addEventListener('click', () => {
    entryInput.value = entry;


})

clearButton.addEventListener('click', () => {
    localStorage.clear();
})