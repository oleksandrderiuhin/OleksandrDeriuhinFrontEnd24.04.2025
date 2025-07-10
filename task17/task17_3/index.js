class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Сума для внесення повинна бути більшою за 0.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку.");
        } else {
            console.log("Сума для зняття повинна бути більшою за 0.");
        }
    }
}


const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300
