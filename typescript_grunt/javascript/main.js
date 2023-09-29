var Helper;
(function (Helper) {
    var Languague = (function () {
        function Languague() {
        }
        Languague.Greeting = "Bonjour";
        return Languague;
    }());
    Helper.Languague = Languague;
})(Helper || (Helper = {}));
console.log(Helper.Languague.Greeting + "Hello World");
//# sourceMappingURL=main.js.map