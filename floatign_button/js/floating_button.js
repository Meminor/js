(function($){
    $(function(){
        var ie6Browser = (navigator.userAgent.indexOf("MSIE 6") >= 0) ? true: false,
            $win = $(window),
            $targetBtn = $('[data-role="floatingEl"]'),
            $floaterDiv = $('[data-role="floaterDiv"]'),
            btnTop;

           $targetBtn.hide();
        $targetBtn.addClass('btnFixed');

        if (!ie6Browser && $floaterDiv) {
            btnTop = parseInt($targetBtn.css('top'), 10);
            $floaterDiv.wrap('<div style="position: relative"></div>');

            // setTimeout(, 5000);
            
            btnState();

            btnFloat();

            $win.scroll(function() {
                btnFloat();
            });

            $win.resize(function() {
                btnState();
            });
        }

        function btnFloat() {
            var divOffset = $floaterDiv.offset().top,
                scrollTop = $(window).scrollTop();

            if ($targetBtn) {

                if ( scrollTop <= divOffset - btnTop ) {
                    $targetBtn.removeClass('btnFixed btnAbsoluteBottom');
                    $targetBtn.addClass('btnAbsoluteTop');
                } else if ( scrollTop > (divOffset + $floaterDiv.outerHeight()) - (btnTop + $targetBtn.outerHeight()) ) {
                    $targetBtn.removeClass('btnFixed btnAbsoluteTop');
                    $targetBtn.addClass('btnAbsoluteBottom');
                } else {
                    $targetBtn.removeClass('btnAbsoluteTop btnAbsoluteBottom');
                    $targetBtn.addClass('btnFixed');
                }
            }
        }

        function btnState() {
            var winWidth = $win.width(),
                parentWidth = $floaterDiv.width(),
                targetWidth = $targetBtn.width(),
                targetArea = parentWidth + (targetWidth * 2);

            if (winWidth <= targetArea) {
                $targetBtn.hide();
            } else {
                $targetBtn.show();
            }
        }
    });

})(jQuery);