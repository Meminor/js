(function($){
    $(function(){
        var $imgTpl = $('#tpl-img').html(),
            $searchBox = $('#search-box');

        function tplReplace(tpl, key, val) {
            return tpl.replace(new RegExp('{{' + key + '}}', 'gi'), val);
        };

        function searchFor() {
            var queryEl = $(this).val(),
                url = 'http://www.panoramio.com/wapi/data/get_photos?v=1&key=dummykey&tag=' + queryEl + '&callback=?';

                $.getJSON(url, function(data){
                    var sHtml = '',
                        i,
                        photoData = data.photos;

                    if (photoData.length === 0) {
                        alert('No images found for ' + queryEl + '.');
                    } else {
                        for (i=0; i<photoData.length; i++) {
                            var oPhoto = photoData[i].photoPixelsUrls,
                                imgSrc = $.trim(oPhoto[0].url);

                            if (imgSrc !== 0) {
                                sHtml += tplReplace($imgTpl, 'src', imgSrc);
                                sHtml = tplReplace(sHtml, 'ownerUrl', photoData[i].ownerUrl);
                                sHtml = tplReplace(sHtml, 'ownerName', photoData[i].ownerName);
                            };
                        };

                        $('.search-result').prepend('<h3>Search for "' + queryEl +'"</h3>' + sHtml);
                    };

                });
        };

        $searchBox.on('click', function(){
            $(this).trigger('select');
        }).on('change', searchFor).trigger('change');

    });
})(jQuery);