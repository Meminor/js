(function($){
    $(function(){
        var btn = $('input:button'),
            placeInfoTpl = $('#place-info').html(),
            result = $('.result');

        function replaceTpl(tpl, key, val) {
            return tpl.replace(new RegExp('{{' + key + '}}', 'gi'), val);
        }

        btn.on('click', function(){
            var sHTML = '';

            result.html('loading...');

            $.ajax({
                url: 'https://api.mercadolibre.com/geolocation/whereami',
                success: function(data) {
                    var country = data.country_name,
                        city = data.city_name,
                        countryId = data.country_id,
                        ip = data.ip;
                    sHTML += replaceTpl(placeInfoTpl, 'country', country);
                    sHTML = replaceTpl(sHTML, 'country_id', countryId);
                    sHTML = replaceTpl(sHTML, 'city', city);
                    sHTML = replaceTpl(sHTML, 'ip', ip);
            
                $('.result').html(sHTML);
                },
                error: function() {
                    console.log('no data');
                }

            });
        });
    });
})(jQuery);