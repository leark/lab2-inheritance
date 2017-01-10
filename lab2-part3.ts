class Account {
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

class CheckingsAccount extends Account{
    constructor(initialBalance:number, ownerName:string) {
        super(initialBalance, ownerName);
    }
}

class savingAccount extends Account{
    private numWithdraws:number;

    constructor(initialBalance:number, ownerName:string) {
        super(initialBalance, ownerName);
        this.numWithdraws = 0;
    }

    withdraw(amount:number):void {
        if (this.numWithdraws < 3) {
            super.withdraw(amount);
            this.numWithdraws++;
        } else {
            console.log("YOU HAVE EXCEEDED 3 WITHDRAWS YOU ARE ALLOTTED");
        }
    }
}

let checkings:CheckingsAccount = new CheckingsAccount(322, "Mine");
console.log("Making account with 322 and owner Mine");
checkings.checkBalance();
checkings.deposit(78);
console.log("Adding 78");
checkings.checkBalance();
console.log("Subtracting 78");
checkings.withdraw(78);
checkings.checkBalance();

let saving:savingAccount = new savingAccount(420, "Impulse");
console.log("Creating saving with 420 and Owner Impulse");
saving.checkBalance();
console.log("Withdrawing 10");
saving.withdraw(10);
saving.checkBalance();
console.log("Withdrawing 20");
saving.withdraw(20);
saving.checkBalance();
console.log("Withdrawing 30");
saving.withdraw(30);
saving.checkBalance();
console.log("Withdrawing 40");
saving.withdraw(40);
saving.checkBalance();
console.log("Withdrawing 50");
saving.withdraw(50);
saving.checkBalance();
