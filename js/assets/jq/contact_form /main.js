(function($){
    $('body').addClass('js');

    var form = {
        container: $('.contact'),

        config: {
            effect: 'slideToggle',
            speed: 500
        },

        init: function(config){
            $.extend(this.config, config);
            $('<button></button>',{
                text: 'Contact Me'
            })
                .insertAfter('article')
                .on('click', this.show);
        },

        show: function(){
            var fm = form,
                cont = fm.container,
                conf = fm.config;

            if (cont.is(':hidden')){
                fm.close.call(cont);
                cont[conf.effect](conf.speed);
            }
        },

        close: function(){
            var self = $(this);

            if (self.find('span.close')[0]) return;
            //.length can be used instead of [0]

            $('<span class="close">X</span>')
                .prependTo(this)
                .on('click', function(){
                    self[form.config.effect](form.config.speed);
                });
        }
    };

    form.init({
        effect: 'fadeToggle',
        speed: 400
    });
})(jQuery);