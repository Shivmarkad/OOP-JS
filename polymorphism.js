class Person{
    constructor(name){
        this.name = name
    }
    introduce(){
        console.log(`Hello my name is ${this.name}`)
    }
}

class Professor extends Person{
    constructor(name, teaches){
        super(name)
        this.teaches = teaches
    }

    introduce(){
        console.log(`Hello my name is ${this.name} I teach ${this.teaches}`)
    }
}

class Student extends Person{
    constructor(name, year){
        super(name)
        this.year = year
    }

    introduce(){
        console.log(`Hey! My name is ${this.name}, I'm in ${this.year} year`)
    }
}

let sachin = new Professor('sachin', 'React')

let shiv = new Student('shiv', 3)

sachin.introduce()
shiv.introduce()