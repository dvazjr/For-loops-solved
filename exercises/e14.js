import { bankAccounts } from "./data/data.js";
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const actualBalance = array.map((account) => {
    const totalDeposits =
      account.deposits?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0) ?? 0;
    const totalWithdrawals =
      account.withdrawals?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0) ?? 0;

    return totalDeposits - totalWithdrawals;
  });

  const wrongBalances = array.filter((accounts, index) => {
    return accounts.balance !== actualBalance[index];
  });

  return wrongBalances;
}

console.log(getClientsWithWrongBalance(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
