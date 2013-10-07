var xPos = 0,
    yPos = 0,
    curDown = false;

window.addEventListener("mousemove", function(e){
    if (curDown === true) {
        window.scrollTo(document.body.scrollLeft + (xPos - e.pageX), document.body.scrollTop + (yPos - e.pageY));
    }
});

window.addEventListener("mousedown", function(e){
    curDown = true;
    xPos = e.pageX;
    yPos = e.pageY;
});

window.addEventListener("mouseup", function(){
    curDown = false;
});