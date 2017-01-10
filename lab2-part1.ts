class CheckingsAccount {
    private balance:number;
    private ownerName:string;

    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(amount:number):void {
        this.balance += amount;
    }

    withdraw(amount:number):void {
        this.balance -= amount;
    }

    checkBalance():void {
        console.log(`Balance: ${this.balance} Owner: ${this.ownerName}`);
    }
}

let myBank:CheckingsAccount = new CheckingsAccount(322, "Mine");
console.log("Making account with 322 and owner Mine");
myBank.checkBalance();
myBank.deposit(78);
console.log("Adding 78");
myBank.checkBalance();
console.log("Subtracting 78");
myBank.withdraw(78);
myBank.checkBalance();