import { bankAccounts } from "./data/data.js";
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const wrongBalanceArray = [];

  for (let i = 0; i < array.length; i++) {
    const accounts = array[i];
    let sum = 0;
    let sumDeposits = 0;
    let sumWithdrawals = 0;
    if (accounts.deposits) {
      for (let j = 0; j < accounts.deposits.length; j++) {
        sumDeposits += accounts.deposits[j];
      }
    }

    if (accounts.withdrawals) {
      for (let k = 0; k < accounts.withdrawals.length; k++) {
        sumWithdrawals += accounts.withdrawals[k];
      }
    }
    let realBalance = sumDeposits - sumWithdrawals;
    if (accounts.balance != realBalance) {
      wrongBalanceArray.push(accounts);
    }
  }
  return wrongBalanceArray;
}

console.log(getClientsWithWrongBalance(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
