(function(){
    var imgs = document.querySelectorAll('.content ul li img'),
        btn = document.getElementsByAttribute('data-role'),
        currentImg = 0;

    function initCar() {
        resetCar();

        imgs[0].style.display = 'block';
    }

    function resetCar() {
        var i;

        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
    }

    initCar();
})();