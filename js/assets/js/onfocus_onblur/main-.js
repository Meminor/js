(function($){
    $(function(){
        var source = $('#textForm')[0],
            el;

        function onFocus(e) {
            el = e.target || window.event.srcElement;
            if (el.value === "Search...") {
                el.value = "";
            }
        }

        function onBlur(e) {
            el = e.target || window.event.srcElement;
            if (el.value === "") {
                el.value = "Search...";
            }
        }

        if (source.addEventListener) {
            source.addEventListener('click', onFocus, false);
            source.addEventListener('blur', onBlur, false);
        } else {
            source.attachEvent('onclick', onFocus);
            source.attachEvent('onblur', onBlur);
        }
    });
}(jQuery));