var n = 1;
n = 'Marco';
var isWinter = false;
// isWinter = 3;
var count = 5;
var namesd = 'Marco';
var names = ["Marco", "Antonio", "Pedro"];
// to declare an array with more one types change declaration to any
var names2 = ["Marco", "Antonio", "Pedro", 4];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
})(Starks || (Starks = {}));
;
var cat = Starks.Eddard;
function getName() {
    return 'Marco';
}
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
// to avoid error undifined label
//printName({label:"Jose"});
