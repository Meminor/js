(function($){
    $('body').addClass('js');

    var form = {
        contact: $('.contact'),
        config: {
            effect: 'slideToggle',
            speed: 300
        },

        init: function(config){
            $.extend(form.config, config);
            $('<button></button>',{
                text: 'Contact'
            })
                .insertAfter('article')
                .on('click', this.show);
        },

        show: function() {
            var fm = form,
                cont = form.contact,
                conf = form.config;

            if(cont.is(':hidden')){
                fm.close.call(cont);
                cont[conf.effect](conf.speed);
            }
        },

        close: function() {
            var self = $(this),
                config = form.config;

            if(self.find('span.close')[0]) return;

            $('<span class="close">X</span>')
                .prependTo(this)
                .on('click', function(){
                   self[config.effect](config.speed);
                });
        }
    };

    form.init({
        effect: 'fadeToggle',
        speed: 400
    });
})(jQuery);