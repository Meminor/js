(function($){
    $(function(){

        $('.title').click(function(){
            var self = $(this),
                target = self.find('span'),
                content = $('.title').find('span').not($(this));


                self.toggleClass('active')
                    .next().slideToggle('fast');

                $('.active').not(self)
                    .toggleClass('active')
                    .next('.content')
                    .slideToggle(300);

                content.removeClass().addClass('icon-arrow-right');

                if(target.hasClass('icon-arrow-right') && (self.hasClass('active'))) {
                    target.addClass('icon-arrow-down');
                }
        });
    });
}(jQuery));