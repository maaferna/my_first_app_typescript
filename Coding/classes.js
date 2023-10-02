"use strict";
class Stark {
    constructor() {
        this.name = "Brandon";
        this.saying = Stark.castle;
    }
    hello(person) {
        console.log("Hello, " + person);
    }
}
Stark.castle = "Winterfell";
var ned = new Stark();
ned.saying = "Winter is comming";
var sansa = new Stark();
console.log(Stark.castle);
ned.hello("Marco");
