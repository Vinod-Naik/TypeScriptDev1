class Quarter{
    private value: number = .25;
    get Value(){
        return this.value;
    }
    set Value(newValue){
        this.value = newValue;
    }
    getImageUrl ():string{
        return "img/Quarter.png"
    }
}

var coin = new Quarter();
var value = coin.Value
coin.Value = 25;

