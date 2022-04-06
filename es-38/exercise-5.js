class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  #amount = 0;
  constructor(initialAmount, withdraw, view) {
    super(initialAmount, withdraw, view);
  }
  deposit(amount) {
    let newAmount = amount;
    if (newAmount >= 1000) {
      let plus = (newAmount / 100) * 3;
      newAmount += plus;
    }
    super.deposit(newAmount);
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
