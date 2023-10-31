class BankAccound{
    #balance;
    customerName;
    accountNo = new Date()

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

}

let myAccount = new BankAccound("shiv", 800)

myAccount.name = "Shivganesh"
console.log(myAccount.balance)

console.log(myAccount)

