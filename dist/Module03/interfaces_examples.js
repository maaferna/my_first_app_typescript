var myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    price: 100
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, price: 2000 }));
var myIceCreamArray = [
    { flavor: 'chocolate', scoops: 2, price: 150 },
    { flavor: 'vanilla', scoops: 3, price: 120 },
    { flavor: 'strawberry', scoops: 2, price: 130 },
];
console.log(myIceCreamArray);
