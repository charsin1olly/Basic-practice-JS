// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
  // arr = arr.filter((item) =>item ==0)
  return(arr.filter((item) =>item !== 0).concat(arr.filter((item) =>item === 0)));
}
let result = moveZerosToEnd(list)
console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//其實就是把list直接代入arr，所以下面不用再arr=list