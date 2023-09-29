var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.exercise = function () {
        console.log(this.name + " is running");
    };
    return Person;
}());
var marco = new Person("Marco");
marco.exercise();
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.exercise = function () {
        console.log("So Awesome¡");
        _super.prototype.exercise.call(this);
    };
    return AwesomePerson;
}(Person));
var robb = new AwesomePerson("Rob");
robb.exercise();
