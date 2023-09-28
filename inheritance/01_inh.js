class Car {
	constructor(name) {
		this.name = name;
	}

	getDetails() {
		return (`Name of car: ${this.name}`);
	}
}

//Inheriting the properties of class Car to MyCar
class MyCar extends Car {
	constructor(name, color) {
		super(name);
		this.color = color;
	}
	getDetails() {
		return (`${super.getDetails()}, and color is : ${this.color}`);
	}
}

let car = new MyCar('Maruti', 'white');

console.log(car.getDetails());
