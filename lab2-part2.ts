class SavingsAccount {
    private balance:number;
    private ownerName:string;
    private numWithdraws:number;

    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
        this.numWithdraws = 0;
    }

    deposit(amount:number):void {
        this.balance += amount;
    }

    withdraw(amount:number):void {
        if (this.numWithdraws < 3) {
            this.balance -= amount;
            this.numWithdraws++;
        } else {
            console.log("YOU HAVE EXCEEDED 3 WITHDRAWS YOU ARE ALLOTTED");
        }
    }

    checkBalance():void {
        console.log(`Balance: ${this.balance} Owner: ${this.ownerName}`);
    }
}

let savings:SavingsAccount = new SavingsAccount(420, "Impulse");
console.log("Creating savings with 420 and Owner Impulse");
savings.checkBalance();
console.log("Withdrawing 10");
savings.withdraw(10);
savings.checkBalance();
console.log("Withdrawing 20");
savings.withdraw(20);
savings.checkBalance();
console.log("Withdrawing 30");
savings.withdraw(30);
savings.checkBalance();
console.log("Withdrawing 40");
savings.withdraw(40);
savings.checkBalance();
console.log("Withdrawing 50");
savings.withdraw(50);
savings.checkBalance();