// START from p. 63

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

    pcModel.specials = {
        category: "Special Offers",
        discount: 200,
        ids: ["lenovo", "dell"],
        items: []
    };

    function mapProducts(func) {
        $.each(pcModel.products, function(catIndex, outerItem){
            $.each(outerItem.items, function(itemIndex, innerItem){
                func(innerItem);
            });
        });
    }

    mapProducts(function(item){
        if ($.inArray(item.id, pcModel.specials.ids) > -1) {
            item.price -= pcModel.specials.discount;
            pcModel.specials.items.push(item);
        }
        item.price = ko.observable(item.price);
        item.quantity = ko.observable(0);
    });

    ko.applyBindings(pcModel);

    $('#btn-discount').click(function(){
        mapProducts(function(item){
            item.price(item.price() - 200);
        });
    });

})(jQuery);
