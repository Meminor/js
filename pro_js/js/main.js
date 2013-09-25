(function($){
    $(function(){
        var $btnDiv = $('#btn-div'),
            input = $btnDiv.find('input:submit'),
            $btnOrder = $('<a href=#>Order</a>'),
            priceData = {
                apple: 1299,
                lenovo: 980,
                dell: 1100
            };

        input.hide();

        $btnOrder.appendTo($btnDiv).
            addClass('btn').
            on('click', function(e){
                $('form').submit();
                e.preventDefault();
            }).
            hover(function(e){
                var $this = $(this);

                (e.type === 'mouseenter') ? $this.addClass('btn-hover') : $this.removeClass('btn-hover');
            });

        $('.latent').show();

        $('input').bind('change keyup', function(){
            var subTotal = $(this).val() * priceData[this.name];

            $(this).siblings('span').children('span').text(subTotal);

            calculateTotal();
            showTotal();
        });

        function calculateTotal() {
            var total = 0;

            $('.subtotal span').not('#total').each(function(index, elem){

                total += Number($(elem).text());
            });
            console.log(total);

            $('#total').text('$ ' + total);
        }

        function showTotal() {
            var inputTotal = 0;

            $('.group-content').find('input').not('.placeholder').each(function(){
                inputTotal += Number($(this).val());
            });

            $('.placeholder').val(inputTotal);
        }


    });
})(jQuery);