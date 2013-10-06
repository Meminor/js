function getName(){
    var name = prompt("Enter a name:", "");

    if (!name || name.length === 0) {
        throw new Error("Name is not permitted");
    }
    alert("Name is: " + name);
}

function testException(){
    try {
        getName();
    }
    catch(e) {
        alert(e.name + ": " + e.message);
    }
}

window.onload = testException;