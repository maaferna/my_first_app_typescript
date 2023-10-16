interface IceCream {
   flavor:string;
   scoops:number;
   price: number;
}

let myIceCream: IceCream = {
	flavor:'vanilla',
	scoops: 2,
	price: 100
}

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
	if (dessert.scoops >=4) {
		return dessert.scoops + ' is too many scoops';
	} else {
		return 'Your order will be ready soon!';
	}
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, price: 2000}));

interface IceCreamArray {
    [index: number]: string;
}

let myIceCreamArray:  IceCream[] = [
  { flavor: 'chocolate', scoops: 2, price: 150 },
  { flavor: 'vanilla', scoops: 3, price: 120 },
  { flavor: 'strawberry', scoops: 2, price: 130 },
];

console.log(myIceCreamArray);