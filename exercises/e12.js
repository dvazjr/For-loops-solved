import { bankAccounts } from "./data/data.js";
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  const filteredDeposits = bankAccounts.reduce((result, account) => {
    const deposits = account.deposits?.filter((deposit) => deposit > 100);
    if (deposits && deposits.length > 0) {
      result.push(...deposits);
    }
    return result;
  }, []);

  return filteredDeposits;
}
getAllDepositsGreaterThanOneHundred(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
