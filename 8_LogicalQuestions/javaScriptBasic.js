// 1. question

class Account {
  // Write your code here
  constructor(balance) {
    this.balance = balance;
  }

  // debit
  debit(amount) {
    if (amount < 0) return false;

    if (amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  // credit
  credit(amount) {
    if (amount < 0) return false;

    this.balance += amount;
  }

  // get balance
  getBalance() {
    return this.balance;
  }
}

function account() {
  const initialBalance = 1000;
  const accountObj = new Account(initialBalance);
  console.log(`Account created with initial balance of ${initialBalance}\n`);

  let numberOfOperations = 3;
  const inputs = [
    { opration: "Credit", amount: 2000 },
    { opration: "Debit", amount: 1000 },
    { opration: "GetBalance" },
  ];
  let i = 0;
  while (numberOfOperations-- > 0) {
    switch (inputs[i].opration) {
      case "Debit":
        if (accountObj.debit(inputs[i].amount)) {
          console.log(`${inputs[i].amount} debited\n`);
        } else {
          console.log(`Insufficient balance\n`);
        }
        break;
      case "Credit":
        accountObj.credit(inputs[i].amount);
        console.log(`${inputs[i].amount} credited\n`);
        break;
      case "GetBalance":
        const currentBalance = accountObj.getBalance();
        console.log(`Current balance is ${currentBalance}\n`);
      default:
        break;
    }
    i++;
  }
}

// ========================================================================
// 2. question

function weekdayText(weekdays) {
  //Implement your code here
  return (n) => {
    if (n >= weekdays.length || n < 0)
      throw new Error("Invalid weekday number");
    return weekdays[n];
  };
}

function weekday() {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const getText = weekdayText(weekdays);
  const input = 2;
  try {
    const value = getText(input);
    console.log(value);
  } catch (e) {
    console.log(`${e}`);
  }
}

// ===================================================
// execute questions
// question 1
console.log("1). Question ++++++++++++++");
account();
// question 2
console.log("2). Question ++++++++++++++");
weekday();
