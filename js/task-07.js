const input = document.querySelector("#font-size-control");
input.addEventListener('input', function() {
    const sizeOfText = input.value;
    document.getElementById(`text`).style.fontSize = sizeOfText + "px";
});