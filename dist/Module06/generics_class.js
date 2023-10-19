var processIdentityClassFile = /** @class */ (function () {
    function processIdentityClassFile(value, message) {
        this._value = value;
        this._message = message;
    }
    processIdentityClassFile.prototype.getIdentity = function () {
        console.log(this._message);
        return this._value;
    };
    return processIdentityClassFile;
}());
var processor3 = new processIdentityClassFile(100, 'Hello');
processor3.getIdentity();
