(function($){
    $(function(){
        var $btnD = $("#buttonDiv");
        
        $btnD.find("input:submit").hide();

        $("<a href=#>Order</a>").
            appendTo($btnD).
            addClass('btn').
            click(function(){
                $('form').submit();
            }).
            hover(
                function(e){
                    var elem = $btnD.find("a");

                    if (e.type === "mouseenter") {
                        elem.addClass('btn-hover');
                    } else {
                        elem.removeClass("btn-hover");
                    }
            });
    });
})(jQuery);