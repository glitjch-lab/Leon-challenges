/**
 * Account list
Let's build upon a previous account object exercise. A bank account is still defined by:

  A name property.
  A balance property, initially set to 0.
  A credit method adding the value passed as an argument to the account balance.
  A describe method returning the account description.


Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
 */

class Account {
  constructor (name, balance) {
    this.owner = name;
    this.balance = !balance ? 0 : balance;
  }

  credit(value) {
    return this.balance += value;
  }

  describe() {
    return `Owner: ${this.owner}, balance: ${this.balance}`;
  }
}

const sean = new Account("Sean")
const brad = new Account("Brad")
const georges = new Account("Georges")
console.log(sean.describe());
console.log(brad.describe());
console.log(georges.describe());


const accounts = [ sean, brad, georges ]
const freeMoney = accounts.map(account => account.balance += 1000)

console.log(sean.describe());
console.log(brad.describe());
console.log(georges.describe());