(function($){
    var pcModel = {
        products: [
            {
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
            },
            {
                category: "Laptop",
                items: [
                    {
                        id: "sony",
                        name: "Sony",
                        price: 1299
                    },
                    {
                        id: "msi",
                        name: "MSI",
                        price: 980
                    },
                    {
                        id: "toshiba",
                        name: "Toshiba",
                        price: 1100
                    }
                ]
            },

        ]
    };

    function mapProducts(func) {
        $.each(pcModel.products, function(catIndex, outerItem){
            $.each(outerItem.items, function(itemIndex, innerItem){
                func(innerItem);
            });
        });
    }

    mapProducts(function(item){
        item.price = ko.observable(item.price);
    });

    ko.applyBindings(pcModel);

    $('#btn-discount').click(function(){
        mapProducts(function(item){
            item.price(item.price() - 200);
        });
    });

})(jQuery);
