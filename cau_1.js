console.log('Happy developing ✨')
// Sắp xếp chuỗi theo tần suất ký tự
// Viết một hàm nhận vào một chuỗi và trả về chuỗi đó
// được sắp xếp theo tần suất xuất hiện của các ký tự
// (từ nhiều nhất đến ít nhất). Nếu hai ký tự có cùng tần suất,
//     giữ nguyên thứ tự ban đầu của chúng trong chuỗi.
const readline = require("readline-sync");
function sortContent(string){
    const count = {};
    [...string].forEach(item => count[item] = (count[item] || 0) + 1);
    const uniCount = [...new Set(string)];
    uniCount.sort((a, b) => count[b] - count[a] );
    return uniCount.map(item => item.repeat(count[item])).join('');
}
const userInput = readline.question("Enter a string: ").trim();

if (userInput.length === 0) {
    console.log("⚠ Please enter a valid string!");
} else {
    console.log("✅ Sorted string by frequency:", sortContent(userInput));
}
