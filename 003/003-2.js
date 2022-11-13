// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
    arr=list.filter( list=> list !== 0).concat(list.filter( list=> list === 0))
    // filter 先過濾出等於0的元素，再用concat併到不等於0的元素的後面
    return arr
}

let result = moveZerosToEnd(list)
console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

