(function($){
    $(function(){
        $.ajax({
            url: "http://api.flickr.com/services/feeds/photos_public.gne",
            data: "format=json",
            jsonp: "jsoncallback",
            dataType: "jsonp",
            tags: "cat",
            tagmode: "any",
            success: function(data){
                $('#flickrTpl').tmpl(data.items).appendTo('#placeholder');
            }
        });
        // $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=car&tagmode=any&format=json&jsoncallback=?",
        // function(data){
        //   $.each(data.items, function(i,item){
        //     $("<img/>").attr("src", item.media.m).appendTo("#placeholder");
        //     if ( i == 20 ) return false;
        //   });
        // });
    });
})(jQuery);