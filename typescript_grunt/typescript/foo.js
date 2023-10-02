"use strict";
class Profesion {
    constructor(info, title = "Engenieer") {
        this.data = info.name + " " + info.age + " " + title;
    }
    getData() {
        return this.data;
    }
}
function foo(bar) {
    return "Hello, " + bar.name + "you've " + bar.age + " years old";
}
let bar = { name: "Marco", age: 37 };
let developer = new Profesion(bar, 'Developer');
console.log(foo(bar));
console.log(developer.getData());
document.body.innerHTML = developer.getData();
