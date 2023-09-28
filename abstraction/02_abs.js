class Car {
  #mnfY;
  constructor(name = null, color = null, mnfY) {
    (this.name = name), (this.color = color);
    this.#mnfY = mnfY;
  }

  setDetails(name, color) {
    (this.name = name), (this.color = color);
  }

  getDetails() {
    return `Car name ${this.name} and color ${this.color} and manufactured in ${
      this.#mnfY
    }`;
  }

  addDetails(key, data) {
    this[key] = data;
  }
}

const myCar = new Car("Thar", "black", 2014);

myCar.setDetails("Suzuki", "red");

myCar.addDetails("trans", "manual");

let details = myCar.getDetails();

console.log(details);
console.log(myCar);
