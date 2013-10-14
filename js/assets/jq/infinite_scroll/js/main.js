(function($){
    $(function(){
        var imgWrap = $('.scroll'),
            imgList = imgWrap.find('li'),
            imgClone = imgList.clone();

        imgWrap.prepend(imgClone);

        function arrangeImgs() {
            $('.bg').each( function(i, item) {
                var position = $('.scroll').position().left -8 + i * ( $(item).width() );
                $(item).css('left', position+'px');
            });
        }

        function scrollLeft() {
            $('.bg').animate({'left' : "-=100px"}, 10000, 'linear', checkEdge());
        }

        function getPosition() {
            return $('.bg:last').position().left + $('.bg:last').outerWidth();
        }

        function checkEdge() {
            var windowsLeftEdge = $('.scroll').position().left;
            $('.bg').each( function(i, list) {
                var listRightEdge = $(list).position().left + $(list).width(),
                    newPosition = getPosition();

                if ( parseFloat(listRightEdge) < parseFloat(windowsLeftEdge) ) {
                    $(list).css('left', newPosition);
                    $(list).remove().appendTo('.scroll');
                    first = $('.bg:first').attr('class');
                }
            });
        }

        arrangeImgs();
        setInterval(function(){
            scrollLeft();
        }, 100);
    });
})(jQuery);