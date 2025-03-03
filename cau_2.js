    const readline = require("readline-sync");
    function maxSum(num) {
        if (!Array.isArray(num) || num.some(n => !Number.isInteger(n))) {
            console.error("Invalid input. Please enter a valid list of integers.");
            return null;}
        let maxSum = num[0];
        let currentSum = num[0];
        num.slice(1).forEach(num => {
            currentSum = Math.max(num, currentSum + num);
            maxSum = Math.max(maxSum, currentSum);
        });
        return maxSum;
    }
function validIntegerArray() {
    let array;
    do {
        const value = readline.question("Enter a list of integers (separated by spaces): ")
            .trim();
        array = value.split(/\s+/).map(n => Number(n));
        const invalidNumbers = array.filter(num => !Number.isInteger(num));
        if (invalidNumbers.length > 0) {
            console.log("Please enter a valid list of integers!");
        }
    } while (array.some(num => !Number.isInteger(num)));
    return array;
    }
const result = maxSum(validIntegerArray());
if (result !== null) {
    console.log("Maximum sum of subarray:", result);
}