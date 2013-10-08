(function($){
    $(function(){
        var keyEl = $('#whichkey')[0],
            el;

        function onFocus(e) {
            el = e.target || window.event.srcElement;

            if(el.value === 'press any key') {
                el.value = "";
            }
        }

        function onBlur(e) {
            el = e.target || window.event.srcElement;

            if(el.value === "") {
                el.value = "press any key";
            }
        }

        if (keyEl.addEventListener) {
            keyEl.addEventListener('click', onFocus, false);
            keyEl.addEventListener('blur', onBlur, false);
        }

        $('#whichkey').on('keydown', function(e){
            $('#log').html(e.type + ': ' + e.which);
        });
    });
}(jQuery));