(function($){
    $(function(){
        var xPos = 0,
            yPos = 0,
            curDown = false;

        function click(e){
            if (e.type === 'mousemove') {
                window.scrollTo(document.body.scrollLeft + (xPos - e.pageX), document.body.scrollTop + (yPos - e.pageY));
            } else if (e.type === 'mousedown') {
                curDown = true;
                xPos = e.pageX;
                yPos = e.pageY;
            } else {
                curDown = false;
            }
        }

        click();
    });
})(jQuery);
