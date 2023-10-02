"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    exercise() {
        console.log(this.name + " is running");
    }
}
var marco = new Person("Marco");
marco.exercise();
class AwesomePerson extends Person {
    exercise() {
        console.log("So Awesome¡");
        super.exercise();
    }
}
var robb = new AwesomePerson("Rob");
robb.exercise();
