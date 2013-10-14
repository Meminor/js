(function($){
    var container = $('div.slider').addClass('overflow').children('ul'),
        slider = new Slider( container, $('.slider-nav'));

    function Slider (container, nav) {
        this.container = container;
        this.nav = nav.fadeIn();
        this.imgs = this.container.find('img');
        this.imgWidth = this.imgs[0].width; // 600px
        this.imgsLen = this.imgs.length;

        this.current = 0;
    }

    Slider.prototype.transition = function( coords ){
        this.container.animate({
            'margin-left': coords || -( this.current * this.imgWidth )
        });
    };

    Slider.prototype.setCurrent = function( dir ) {
        var pos = this.current;

        pos += (~~ (dir === 'next') || -1);
        this.current = ( pos < 0 ) ? this.imgsLen -1 : pos % this.imgsLen;
        return pos;
    };

    slider.nav.find('button').on('click', function(){
        slider.setCurrent( $(this).data('dir') );
        slider.transition();
    });

})(jQuery);