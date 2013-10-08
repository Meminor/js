var textElement = document.getElementById("textForm"),
    element;

function onFocus(e) {
    element = e.target || window.event.srcElement;
    if(element.value === "Enter your text")
        element.value = "";
}

function onBlur(e) {
    element = e.target || window.event.srcElement;
    if(element.value === "")
        element.value = "Enter your text";
}

if(textElement.addEventListener) {
    textElement.addEventListener("click", onFocus, false);
    textElement.addEventListener("blur", onBlur, false);
} else {
    textElement.attachEvent("onclick", onFocus);
    textElement.attachEvent("onBlur", onBlur);
}