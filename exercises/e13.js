import { bankAccounts } from "./data/data.js";
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const littleDepositsArray = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    let accounts = array[i];

    if (accounts.deposits) {
      for (let j = 0; j < accounts.deposits.length; j++) {
        const bigDeposits = accounts.deposits[j];
        sum += bigDeposits;
      }
    }
    if (sum < 2000 || sum === 0) {
      littleDepositsArray.push(accounts);
    }
  }
  return littleDepositsArray;
}

getAllAccountsWithSumsOfDepositsLess2000(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
