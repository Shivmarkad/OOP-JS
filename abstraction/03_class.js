class Student {
  constructor(name) {
    this.name = name;
    if (this.constructor == Student) {
      throw new Error("You cannot create an instance of Abstract Class");
    }
  }
  print() {
    return "Name of the student " + this.name;
  }
}

class Std extends Student {
  constructor(name) {
    super(name);
  }
}

var newStd = new Std("Shiv");

var det = newStd.print();

console.log(det);
