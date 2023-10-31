class BankAccound{
    #balance;
    customerName;
    accountNo = Date.now()

    constructor(customerName, balance){
        this.customerName = customerName;
        this.#balance = balance
    }

    get balance(){
        return this.#balance
    }

    set name(name){
        this.customerName = name
    }
    
    #calculateInterest(){
        return this.#balance * 12 / 100
    }

    getIntrest(){
        let intrest = this.#calculateInterest()
        return intrest;
    }
}

// Inheriting properties and methods of class using extends keyword

class SavingAccound extends BankAccound{
    constructor(customerName, balance){
        super(customerName, balance)
 
    }

}

const mySavingAcc = new SavingAccound("Shivganesh", 9000)

// can't access private methods
//mySavingAcc.#calculateInterest()
console.log(mySavingAcc.getIntrest())