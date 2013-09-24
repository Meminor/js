(function($){
    $(function(){
        var $btnD = $("#buttonDiv"),
            priceData = {
                apple: 1600,
                lenovo: 1200,
                dell: 1400
            };
        
        $btnD.find("input:submit").hide();

        $("<a href=#>Order</a>").
            appendTo($btnD).
            attr("href", "http://google.com").
            addClass('btn').
            click(function(e){
                $('form').submit();
                e.preventDefault();
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

        $(".latent").show();

        $("input").bind("change keyup", function(){
            var subtotal = $(this).val() * priceData[this.name];

            $(this).siblings('span').children('span').text(subtotal);
        });
    });
})(jQuery);