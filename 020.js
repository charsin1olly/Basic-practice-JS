// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const arrO = str
    .split("")
    .filter((item) => item.toLowerCase() === "o");
  const arrX = str
    .split("")
    .filter((item) => item.toLowerCase() === "x");
  return arrO.length === arrX.length;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true

//拆解元素
//過濾o或x  計算字串數
//比較
