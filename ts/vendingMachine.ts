/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="productFactory.ts" />
/// <reference path="typings/knockout.d.ts" />

enum vendingMachineSize{
    small = 6,
    medium = 9,
    large = 12
}

class Cell{
    constructor(public product: CocaCola){

    }
    stock = ko.observable(3)
    sold = ko.observable(false)
}

class vendingMachine{
    paid = ko.observable(0);
    cells = ko.observableArray([]);
    acceptedCoins: Quarter[] = [new Quarter()];

    set size(giveSize: vendingMachineSize){
        this.cells([]);
        for(let index =0; index < giveSize; index++){
            let product = productFactory.GetProduct();
            alert("Adding to array");
            this.cells.push(new Cell(product));
        }

        
    }
    acceptCoin = (coinVar: Quarter): void =>{
        let oldTotal = this.paid();
        this.paid(oldTotal + coinVar.Value)
    }
    
}