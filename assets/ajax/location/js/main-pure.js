var button = document.getElementsByTagName('input')[0],
    message = document.getElementsByClassName('my-place')[0];

console.log(button);

button.onclick = function(e) {
    message.innerHTML = "loading...";
}