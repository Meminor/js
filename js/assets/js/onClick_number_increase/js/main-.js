(function($){
    $(function(){
        var down = $('#down')[0],
            up = $('#up')[0];

        function modify(val) {
            var q = $('#qty')[0].value,
                newQ = parseInt(q, 10) + val;

            if (newQ < 0) {
                newQ = 0;
            }

            $('#qty')[0].value = newQ;
            // return newQ;
        }

        down.addEventListener('click', function(){
            modify(-10);
        });

        up.addEventListener('click', function(){
            modify(+10);
        });
    });
}(jQuery));