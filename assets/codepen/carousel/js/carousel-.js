(function($){
    var imgs = $('.content ul li').find('img'),
        btn = $('.btn'),
        currentImg = 0;

    function init(){
        resetImgs();
        $(imgs[0]).css('display', 'block');
    }

    function resetImgs(){
        imgs.css('display', 'none');
    }

    $(btn).on('click', function(){
        var $this = $(this);

        if ($this.data('role') === 'left') {
            if (currentImg === 0) {
                currentImg = imgs.length;
            }
            toLeft();
        } else {
            if (currentImg === imgs.length - 1) {
                currentImg =- 1;
            }
            toRight();
        }
    });

    function toLeft() {
        resetImgs();
        $(imgs[currentImg - 1]).css('display', 'block');
        currentImg--;
    }

    function toRight() {
        resetImgs();
        $(imgs[currentImg + 1]).css('display', 'block');
        currentImg++;
    }
    init();

})(jQuery);