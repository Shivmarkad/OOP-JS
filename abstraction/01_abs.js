// Abstraction example
function person(fname, lname) {
	let firstname = fname;
	let lastname = lname;

	const getDetails_noaccess = function () {
		return (`First name is: ${firstname} Lastname is: ${lastname}`);
	}

	this.getDetails_access = function () {
		return (`First name is: ${firstname}, Lastname is: ${lastname}`);
	}
}

let person1 = new person('Mukul', 'Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());
