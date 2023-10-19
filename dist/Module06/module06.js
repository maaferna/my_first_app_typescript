var returnNumberM6 = {
    value: 25,
    message: 'hello'
};
var returnStringM6 = {
    value: 'hello',
    message: 25
};
function ProcessIdentity(value, message) {
    console.log(message);
    return value;
}
var processor = ProcessIdentity;
var returnNumber1 = processor(100, 'Hello!'); // OK
var returnString1 = processor('Hello!', 100); // Type check error
var processIdentityClass = /** @class */ (function () {
    function processIdentityClass(val, msg) {
        this.value = val;
        this.message = msg;
    }
    processIdentityClass.prototype.process = function () {
        console.log(this.message);
        return this.value;
    };
    return processIdentityClass;
}());
var processor2 = new processIdentityClass(100, "Hello");
processor2.process();
processor2.value = '100';
