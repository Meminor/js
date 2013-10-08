(function($){
    var slider = $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = slider.find('img'),
        imgWidth = imgs[0].width(),
        imgLen = imgs.length,
        current = 1,
        totalImgsWidth = imgWidth * imgLen;

        $('div.slider-nav').show().find('button').on('click', function(){
            console.log(123);
        });
})(jQuery);