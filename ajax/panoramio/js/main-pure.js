var $time = jQuery('.time');
var tmpImg = jQuery('#image');
var iTabIndex = 2;

function setTmp(tmp, sKey, sValue) {
    return tmp.replace(new RegExp('%%' + sKey + '%%', 'ig'), sValue)
};

function doSearch(that) {
    var search = jQuery(that.target).val();
    var url = 'http://www.panoramio.com/wapi/data/get_photos?v=1&key=dummykey&tag=' + search + '&callback=?';
    jQuery.getJSON(url, function(data) {
        var sHTML = '';
        var sTmp = tmpImg.html();
        if (data.photos.length === 0) {
            alert('No images tagged "' + search + '"');
        } else {
            for (var i = 0; i < data.photos.length; i++) {
                var oPhoto = data.photos[i].photoPixelsUrls;
                var src = jQuery.trim(oPhoto[0].url);
                if (src !== '') {
                    sHTML += setTmp(sTmp, 'src', src);
                    sHTML = setTmp(sHTML, 'ownerUrl', data.photos[i].ownerUrl);
                    sHTML = setTmp(sHTML, 'ownerName', data.photos[i].ownerName);
                    sHTML = setTmp(sHTML, 'ti', iTabIndex);
                };
            };

            jQuery('.images').prepend('<li class="clear"><h3>Search for "' + search + '"</h3></li>' + sHTML);
        };
    });
};

jQuery('#searchFor').on('change', doSearch).trigger('change');