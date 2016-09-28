var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
var coin = new Quarter();
var value = coin.Value;
coin.Value = 25;
var SodaCategory = (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        //return "img/sodacan.png"
        return "img/SodaCan.png";
    };
    return SodaCategory;
}());
/// <reference path="productCategory.ts" />
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        return new CocaCola();
    };
    return productFactory;
}());
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="productFactory.ts" />
/// <reference path="typings/knockout.d.ts" />
var vendingMachineSize;
(function (vendingMachineSize) {
    vendingMachineSize[vendingMachineSize["small"] = 6] = "small";
    vendingMachineSize[vendingMachineSize["medium"] = 9] = "medium";
    vendingMachineSize[vendingMachineSize["large"] = 12] = "large";
})(vendingMachineSize || (vendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var vendingMachine = (function () {
    function vendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quarter()];
        this.acceptCoin = function (coinVar) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coinVar.Value);
        };
    }
    Object.defineProperty(vendingMachine.prototype, "size", {
        set: function (giveSize) {
            this.cells([]);
            for (var index = 0; index < giveSize; index++) {
                var product = productFactory.GetProduct();
                alert("Adding to array");
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return vendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new vendingMachine();
machine.size = vendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map