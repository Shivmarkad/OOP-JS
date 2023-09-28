class Student {  
    constructor(name, marks){  
        let _name = name;
        let _marks = marks;

        this.getName = () => _name;
        this.getMarks = ()=> _marks;

        this.setMarks = (marks)=>{
            _marks = marks
        }
    }
}

let s = new Student("Ravi", 79)

console.log(s.getName())
console.log(s.getMarks())

s.setMarks(67)

console.log(s.getMarks())