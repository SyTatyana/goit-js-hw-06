/*const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function fillIn(event) {
    if(textInput !== ''){
        output.textContent = event.currentTarget.value;
    }
    else { output.textContent = 'Anonymous';}
}

textInput.addEventListener("input", (fillIn));*/
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (newInput) => {
    output.textContent = newInput.currentTarget.value;

    if (newInput.currentTarget.value === '') {
        output.textContent = 'Anonymus';
    };
});