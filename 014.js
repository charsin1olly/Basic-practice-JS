// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  if (typeof sequence === "object") {
     // console.log(typeof sequence==="object")
    const arr = sequence;
    // console.log(arr)
    let a=[]
    for (let x = 0; x < arr.length; x++) {
      // console.log(arr[x] === arr[x - 1])
      return a.push(arr[x] === arr[x - 1]).filter(item=false)
    }
    console.log(a)
  }
  // console.log(typeof sequence==="object")
}

// console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
// console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

//檢測輸入值是否為陣列
//比對和前一項是否相同
//相同刪掉 不同留著
