(function($){
    $(function(){
        $.ajax({
            url: "http://api.flickr.com/services/feeds/photos_public.gne",
            data: "format=json",
            jsonp: "jsoncallback",
            dataType: "jsonp",
            success: function(data){
                $('#flickrTpl').tmpl(data.items).appendTo('#placeholder');
            }
        });
    });

})(jQuery);