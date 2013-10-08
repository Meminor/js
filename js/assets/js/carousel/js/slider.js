(function($){
    var slider = $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = slider.find('img'),
        imgWidth = imgs[0].width, // 600px
        imgsLen = imgs.length, // 3
        current = 1,
        totalImgsWidth = imgsLen * imgWidth;


    $('.slider-nav').show().find('button').on('click', function(){
        var direction = $(this).data('dir'),
            loc = imgWidth;
        // update current value
        (direction === 'next') ? ++current : --current;

        // if first image
        if ( current === 0 ) { // User is on the first image. When user clicks prev button, it goes to the last image
            current = imgsLen; // 3
            loc = totalImgsWidth - imgWidth; // 1800 -600 = 1200
            direction = 'next';
        } else if (current - 1 === imgsLen) { // Are we at end? Should we reset?
            current = 1;
            loc = 0;
        }

        transition(slider, loc, direction);
    });

    function transition( container, loc, direction ) {
        var unit; // -=600 || +=600

        if( direction && loc !== 0 ){
            unit = ( direction === 'next') ? '-=' : '+=';
        }

        container.animate({
            'margin-left' : unit ? (unit + loc) : loc
        });
    }
})(jQuery);