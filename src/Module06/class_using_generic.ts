class DataStore<T> {
	private _data: Array<T> = new Array(10);

	AddOrUpdate(index: number, item: T) {
	if (index >=0 && index <10) {
		this._data[index] = item;
		}
	}
	getData(index: number): T | undefined {
	    if (index >= 0 && index < 10) {
	      return this._data[index];
	    }
	    return undefined;
	  }
}


let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);                  
console.log(empIDs.getData(0));         // returns 50
empIDs.AddOrUpdate(0, 150);
console.log(empIDs.getData(0));         // returns 150

type Pets = {
	name: string;
	breed: string;
	age: number;
}

let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.getData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
