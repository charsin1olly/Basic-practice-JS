// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  // 把數字拆成字串
  arr = String(num).split("");
  console.log(arr);

  // x為10的次方，y為陣列的元素位置編號
  // 選取元素不為0 : 進行迴圈(套上格式)，僅取至倒數第二個元素(因個位數只需要一個數字，不需要符號"+")
  let result = "";
  for (let x = arr.length - 1, y = 0; x > 1, y < arr.length - 1; x--, y++) {
    if (arr[y] !== "0") {
      result = result + 10 ** x + "x" + arr[y] + "+";
      console.log("二" + result);
    }
  }
  // 取arr陣列的最後一個元素:不為0則合併迴圈結果；為0則去除最尾端字元"+"
  const n = arr.slice(-1);
  if (+n !== 0) {
    return "三" + result + n;
  } else {
    return "三" + result.slice(0, -1);
  }
}

console.log(expandedForm(111111)); // 印出 10000 x 6 + 100 x 3 + 8
