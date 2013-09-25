(function($){
    var pcModel = {
            category: "Desktop",
            items: [
                {
                    id: "apple",
                    name: "Apple",
                    price: 1299
                },
                {
                    id: "lenovo",
                    name: "Lenovo",
                    price: 980
                },
                {
                    id: "dell",
                    name: "Dell",
                    price: 1100
                }
            ]
        };

        ko.applyBindings(pcModel);
})(jQuery);
