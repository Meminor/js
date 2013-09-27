(function($){
    $(function(){
        var xPos = 0,
            yPos = 0,
            curDown = false;
        $(window).on('mousemove', function(e){
            window.scrollTo(document.body.scrollLeft + (xPos - e.pageX), document.body.scrollTop + (yPos - e.pageY));
        });
        $(window).on('l', function(e){
            curDown = true;
            xPos = e.pageX;
            yPos = e.pageY;
            e.preventDefault();
        });
        $(window).mouseup(function(){
            curDown = false;
        });
    });
})(jQuery);

