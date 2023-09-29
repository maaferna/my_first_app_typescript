class Stark {
    name: string = "Brandon";
    static castle: string = "Winterfell";
    saying?: string;

    constructor(){
        this.saying = Stark.castle;
    }
    hello(person:string){
        console.log("Hello, "+person);
    }
}

var ned = new Stark();
ned.saying = "Winter is comming";

var sansa = new Stark();

console.log(Stark.castle);
ned.hello("Marco");