var n : any = 1;

n = 'Marco';

var isWinter : boolean = false;

// isWinter = 3;

var count : Number = 5;
var namesd : String = 'Marco';


var names : string[] = ["Marco", "Antonio", "Pedro"];
// to declare an array with more one types change declaration to any
var names2: any[] = ["Marco", "Antonio", "Pedro", 4];


enum Starks {Jon,Bran,Eddard};

var cat : Starks = Starks.Eddard;

function getName() : string{
    return 'Marco';
}

interface Stark {
    name: string;
    age?: number; // the character ? to defined the optional variable
}

function printName(stark : Stark) {
    console.log(stark.name);
}

printName({name:"Eddard"});
// to avoid error undifined label
//printName({label:"Jose"});