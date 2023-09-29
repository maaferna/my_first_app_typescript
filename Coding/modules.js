var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
