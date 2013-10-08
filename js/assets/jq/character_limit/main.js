function limitText(){
    var comments = U.$('comments'),
        count = comments.value.length;
    U.$('count').value = count;
    if(count > 100) {
        comments.value = comments.value.slice(0, 100);
    }
}

function initLimit(){
    U.addEvent(U.$('comments'), 'keyup', limitText);
    // U.addEvent(U.$('comments'), 'change', limitText);
    // try 'change event, which is triggered when focus is out of textarea'
}

window.onload = function(){
  initLimit();
};