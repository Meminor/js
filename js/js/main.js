(function($){
    $(function(){
        // $('.content').hide();

        $('.nav').each(function(){
            $(this).find('a').on('click', function(){
                if($(this).text() == 'JavaScript') {
                    $('div.js').show();
                    $('div.ajax').hide();
                } else {
                    $('div.js').hide();
                    $('div.ajax').show();
                }
            });
        });
    });
})(jQuery);