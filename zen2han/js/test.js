(function($){
    $(function(){
        function zen2han(str){
            return str.replace(/[０-ｚ]/g,function($0){
                return String.fromCharCode(parseInt($0.charCodeAt(0))-65248);
            });
        }

        $('input').on('blur', function() {
            this.value = zen2han(this.value);

        });
    });
})(jQuery);