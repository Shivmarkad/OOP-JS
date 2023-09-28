//creating new object in js
const myObj = new Object()

//Assigning value to js with key as stirng and value as number
myObj.name = "Thar"
myObj.color = "Black"
myObj.transmission = "Manual"

console.log(myObj)

//accesing objects property using key
let carName = myObj.name

console.log(carName)

//accesing objects property using bracket notation
console.log(myObj['name'])

//checking whether object has the property
console.log(myObj.hasOwnProperty('name'))

//adding method in the object

myObj.displayinfo = function() {
    console.log(`The car name is ${myObj.name} and has ${myObj.transmission} transmission`);
}

//accessing the property of object
myObj.displayinfo()