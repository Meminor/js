(function(){
    var close = document.getElementById('closeModal'),
        open = document.getElementById('uiButton'),
        modalIt = document.getElementById('modal'),
        mask = document.getElementById('modalMask');

    function openModal() {
        close.onclick = closeModal;
        modalIt.style.display = "inline-block";
        mask.onclick = closeModal;
    }

    function closeModal() {
        modalIt.style.display = 'none';
    }

    window.onload = function() {
        open.onclick = openModal;
    }
    
}());
