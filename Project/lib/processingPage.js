var inputValue;
var cardResult;

document.getElementById("submit").addEventListener('click', clicked);

function clicked() {
inputValue = document.getElementById('inputResult').value
console.log(inputValue)
document.getElementById('displayResults').innerHTML = inputValue;
}
