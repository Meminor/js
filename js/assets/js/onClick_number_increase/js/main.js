function modify_qty(val) {
    var qty = document.getElementById("qty").value,
        new_qty = parseInt(qty, 10) + val;

    if(new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById("qty").value = new_qty;
    return new_qty;
}

var down = document.getElementById("down"),
    up = document.getElementById("up");

down.addEventListener('click', function(){
    modify_qty(-10);
});

up.addEventListener('click', function() {
    modify_qty(+10);
});
