(function($){
    $(function(){
        $('.title').on('click', function(){
            var self = $(this),
                target = self.find('span'),
                contents = $('.title').find('span').not($(this));

                $('.active').not(self)
                    .toggleClass('active')
                    .next('.content')
                    .slideToggle(300);

                self.toggleClass('active')
                    .next().slideToggle('fast');

                contents.removeClass().addClass('icon-arrow-right');

                if (target.hasClass('icon-arrow-right') && (self.hasClass('active'))) {
                    target.addClass('icon-arrow-down');
                }
        });
    });
}(jQuery));