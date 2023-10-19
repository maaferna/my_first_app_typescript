function getPets(pet, key) {
    return pet[key];
}
var pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
var pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error
