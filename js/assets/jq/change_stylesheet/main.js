(function($){
    $(function(){
        var style = $('link');
        $('button').on('click', function(){
            var self = $(this),
                data = self.data('name');

            style.attr('href', 'css/' + data + '.css');

            self
                .siblings('button')
                    .removeAttr('disabled')
                    .end()
                    .attr('disabled', 'disabled');
        });
    });
})(jQuery);