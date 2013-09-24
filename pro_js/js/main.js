(function($){
    $(function(){
        var $btnD = $("#buttonDiv");
        
        $btnD.find("input:submit").hide();

        $("<a href=#>Order</a>").
            appendTo($btnD).
            addClass('button').
            click(function(){
                $('form').submit();
            }).
            hover(
                function(){
                    $btnD.find("a").addClass('button-hover');
                }, function(){
                    $btnD.find("a").removeClass('button-hover');
            });
    });
})(jQuery);