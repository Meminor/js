(function($){
    var container = $('div.slider').addClass('overflow').children('ul');

    function Slider (container, nav) {
        this.container = container;
        this.nav = nav.show();
        this.imgs = this.container.find('img');
        this.imgWidth = this.imgs[0].width;
        this.imgsLen = this.imgs.length;

        this.current = 0;
        this.events.click.call(this);
    }

    Slider.prototype.transition = function( coords ) {
        this.container.animate({
            'margin-left': coords || -( this.current * this.imgWidth )
        });
    };

    Slider.prototype.setCurrent = function( dir ) {
        var pos = this.current;

        pos += (~~ ( dir === 'next' ) || - 1 );
        this.current = ( pos < 0 ) ? this.imgsLen -1: pos % this.imgsLen;
        return pos;

    };

    Slider.prototype.events = {
        click: function() {
            var self = this;

            self.nav.find('button').on('click', function(){
                self.setCurrent ( $(this).data('dir') );
                self.transition();
            });
        }
    };

    new Slider( container, $('.slider-nav'));

})(jQuery);
