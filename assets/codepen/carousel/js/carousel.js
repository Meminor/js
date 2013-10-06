(function(){
    var imgs = document.querySelectorAll('.content ul li img'),
        btn = document.getElementsByAttribute('data-role'),
        currentImg = 0;

    function initCar() {
        resetCar();
        // button();
        imgs[0].style.display = 'block';
    }

    function resetCar() {
        var i;

        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
    }

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function(){
            if (this.dataset.role === "left") {
                if (currentImg === 0) {
                    currentImg = imgs.length;
                }
            toLeft();
            } else {
                if(currentImg === imgs.length - 1) {
                    currentImg =- 1;
                }
                toRight();
            }

        }, false);
    }

    function toLeft() {
        resetImgs();
        imgs[currentImg - 1].style.display = 'block';
        currentImg--;
    }

    function toRight() {
        resetImgs();
        imgs[currentImg + 1].style.display = "block";
        currentImg++;
    }

    function resetImgs() {
        var i;
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
    }

    initCar();
})();