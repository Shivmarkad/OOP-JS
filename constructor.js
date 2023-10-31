
//constructor function
function BankAccound(customerName, balance = 0){
    this.customerName = customerName;
    this.balance = balance;

    this.getBalance = function(){
        return this.balance
    }
    this.deposite = function(amt){
        this.balance += amt
    }
}

const myAcc = new BankAccound("Shiv", 100)

console.log(myAcc)
console.log(myAcc.getBalance())
myAcc.deposite(800)
console.log(myAcc.getBalance())