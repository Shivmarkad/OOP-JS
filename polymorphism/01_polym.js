class Operations {
  area(x, y) {
    console.log(x * y);
  }
}

class Area extends Operations {
  area(a, b) {
    super.area(a, b);
    console.log("Class Area");
  }
}

class NewArea extends Operations{
    area(){
        console.log("calculatig area")
    }
}

let ob = new Area();
let newAr = new NewArea()

ob.area(10, 29);

newAr.area()