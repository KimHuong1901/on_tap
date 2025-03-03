// Đảo ngược số nguyên nhưng không vượt quá giới hạn
// Viết một hàm nhận vào một số nguyên, đảo ngược các chữ số của nó,
// nhưng nếu kết quả vượt quá phạm vi của số nguyên 32-bit (-2^31 đến 2^31 - 1),
// hãy trả về 0.
// Ví dụ:
//     Input: 123
// Output: 321
const readline = require("readline-sync");

function reverseInteger(num){
    if (!Number.isInteger(num)) {
    console.error("Not a valid integer");
        num = validateInteger();
}
    const uni = Math.pow(2, 31);
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join('')) * (num < 0 ? -1 : 1);
    return (reversed  >= -uni && reversed <= uni) ? reversed : 0;
}
function validateInteger(){
    let num;
    do{
        const value = readline.question("Enter an integer ").trim();
        num = Number(value);
        if(!Number.isInteger(num)){
            console.log("Please enter a valid integer!!!")
        }
    } while(!Number.isInteger(num));
    return num;
}
console.log(reverseInteger(validateInteger())) ;
