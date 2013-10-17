(function($){
    $(function(){
        var imgWrap = $('.scroll'),
            imgList = imgWrap.find('li'),
            imgClone = imgList.clone();

        imgWrap.prepend(imgClone);

       function scrollLeft() {
            var $scroll = $('.scroll'),
                $bg = $scroll.find('.bg'),
                bgWidth = $bg.outerWidth();

            $scroll.animate({'left' : '-='+ bgWidth +'px'}, 120000, 'linear', checkEdge);
        }

        function checkEdge() {
            var $scroll = $('.scroll');

            $scroll.css('left', 0);
            scrollLeft();
        }

        scrollLeft();
    });
})(jQuery);