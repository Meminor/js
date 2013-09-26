function addEventHandler(oNode, sEvt, fFunc, bCaptures) {
    if ( typeof(window.event) != "undefined" ) {
        oNode.attachEvent("on" + sEvt, fFunc);
    } else {
        oNode.addEventListener(sEvt, fFunc, bCaptures);
    }
}

function onLinkClicked() {
    alert("clicked ok!");
}

function setUpClickHandler(){
    addEventHandler(document.getElementsByTagName('a'), "click", onLinkClicked, false);
}

addEventHandler(window, "load", setUpClickHandler, false);