// Tìm phần tử xuất hiện nhiều nhất
// Cho một danh sách số nguyên, hãy tìm phần tử xuất hiện nhiều nhất.
// Nếu có nhiều phần tử có cùng số lần xuất hiện cao nhất,
// hãy trả về phần tử nhỏ nhất trong số đó.
//     Ví dụ:
//     Input: [1, 3, 2, 3, 4, 1, 3, 2, 1] 1 3 2 3 4 1 3 2 1
// Output: 1  # (Vì cả 1 và 3 đều xuất hiện 3 lần, nhưng 1 nhỏ hơn 3)
const readline = require("readline-sync");

function maxInstance(num) {
    if (!Array.isArray(num) || num.some(n => !Number.isInteger(n))) {
        console.error("Invalid list of numbers");
        num = validIntegerArray();
    }
    const count = new Map();
    num.forEach(num => count.set(num, (count.get(num) || 0) + 1));
    const maxFreg = Math.max(...count.values());
    return Math.min(...[...count.keys()].filter(key => count.get(key) === maxFreg));
}
function validIntegerArray(){
    let array;
    do{
        const value = readline.question("Enter a list of integer (separated by spaces '_')").trim();
        array = value.split(/\s+/).map(n => Number(n));
        const invalidNumbers = array.filter(num => !Number.isInteger(num));
        if (invalidNumbers.length > 0) {
            console.log("Please enter a valid list of integers!");
        }
    } while (array.some(num => !Number.isInteger(num)));
    return array;
}
const result = maxInstance(validIntegerArray());
if (result !== null) {
    console.log("Most frequent (smallest in case of tie):", result);
}
