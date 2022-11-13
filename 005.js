// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  let arr = String(num)
    .split("")
    .map(Number)
    .map((item) => item ** 2);
  return arr.join("");
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

//說明：將num輸入值轉為字串，用split數字拆成陣列，map(Number)陣列內的元素轉為數字作平方計算後，join將元素串起來
