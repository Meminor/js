(function($){
    $(function(){
        function limitText() {
            var comments = $('#comments'),
                count = comments.val().length,
                max = 10,
                remain = max - count;

            if (count >= max) {
                comments.val(comments.val().slice(0, 10));
                if (e.which !== 8) {
                    return false;
                }
            }
            $('#count').val(remain);
        }

        $('#comments').keyup(function(){
            limitText();
        });
    });
}(jQuery));