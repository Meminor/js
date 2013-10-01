(function($){
    $(function(){
        var searchItem = $('#tpl-img').html(),
            parsed = $.parseHTML(searchItem);

        console.log(parsed);

        // function setupBlocks() {
        //     var colCount = 0,
        //         colWidth = $searchItem.outerWidth(),
        //         margin = 20,
        //         winWidth = $(window).width(),
        //         blocks = [],
        //         i;

        //     colCount = Math.floor(winWidth/(colWidth + margin));
        //     for (i=0; i<colCount; i++) {
        //         blocks.push(margin);
        //     }
        // }

        // function positionBlocks() {
        //     $searchItem.each(function(){
        //     });
        // }

        // setupBlocks();
        // positionBlocks();


        // http://benholland.me/javascript/how-to-build-a-site-that-works-like-pinterest/
    });
})(jQuery);