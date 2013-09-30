(function($){
    $(function(){
        var tmpImg = $('#tpl-img'),
            searchBox = $('#search-box');

        function setTmp(tmp, sKey, sValue) {
            return tmp.replace(new RegExp('{{' + sKey + '}}', 'gi'), sValue);
        };

        function doSearch() {
            var search = $(this).val(),
                url = 'http://www.panoramio.com/wapi/data/get_photos?v=1&key=dummykey&tag=' + search + '&callback=?';

            $.getJSON(url, function(data) {
                var sHTML = '',
                    sTmp = tmpImg.html();

                if (data.photos.length === 0) {
                    alert('No images tagged "' + search + '"');
                } else {
                    for (var i=0; i < data.photos.length; i++) {
                        var oPhoto = data.photos[i].photoPixelsUrls,
                            src = $.trim(oPhoto[0].url);

                        if (src !== '') {
                            sHTML += setTmp(sTmp, 'src', src);
                            sHTML = setTmp(sHTML, 'ownerUrl', data.photos[1].ownerUrl);
                            sHTML = setTmp(sHTML, 'ownerName', data.photos[i].ownerName);
                        };
                    };

                    $('.images').prepend('<li class="search-term"><h3>Search for "' + search + '"</h3></li>' + sHTML);
                };
            });
        };

        searchBox.on('click', function(){
            $(this).trigger('select');
        }).on('change', doSearch).trigger('change');

    });
})(jQuery);