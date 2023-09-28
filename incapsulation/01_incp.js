
const car = function (){
    var name = "Maruti";
    var color = "Black"

    return {
        setName : function (value){
            name = value
        },
 
        getDetails: () => `Name of the car ${name} and the color ${color}`
    }
}()

car.setName('Thar')

console.log(car.getDetails())

console.log(car.name) // undefined