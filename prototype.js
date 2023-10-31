
//constructor function
function BankAccound(customerName, balance = 0){
    this.customerName = customerName;
    this.balance = balance;

}

// adds prototype property
BankAccound.prototype.deposite = function(amt){
    this.balance += amt
}

// adds prototype property
BankAccound.prototype.getBalance = function(){
    return this.balance;
}

const shiv = new BankAccound("Shiv", 900)

console.log(shiv.getBalance())
shiv.deposite(100)
console.log(shiv.getBalance())