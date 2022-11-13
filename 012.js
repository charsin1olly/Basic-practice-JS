// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
  const numReduce = (num) => {
    result = String(num)
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0)
      .toString();
    return result;
  };
  // console.log(numReduce(num))  //23  107  1
  // console.log(numReduce(num).length)  //2 3 1
    // console.log(numReduce(num)[0])  //
  // console.log(numReduce(num)<10)  //F F T
  // console.log(Number(numReduce(num)) === 1); //F F T
  // const numLength = numReduce(num).length;
  // function isEnd(compare) {
  //   return numReduce(num).length === 1;
  // }
  // // console.log(isEnd(A))  //true true
  function resultValue() {
    if (numReduce(num).length === 1) {
      return numReduce(num)[0];
    } else if (Number(numReduce(num)) < 100) {
      // console.log(Number(numReduce(num))<100)
      // console.log(Number(numReduce(num)[0]))
      return Number(numReduce(num)[0]) + Number(numReduce(num)[1]);
    } else {
      numReduce(resultValue())
      return ;
    }
  }
  return resultValue();
};

console.log(numberReducer(9527)); // 印出 5
// console.log(numberReducer(1450)); // 印出 1
// console.log(numberReducer(5566108)); // 印出 4
// console.log(numberReducer(1234567890)); // 印出 9
console.log(numberReducer(123456799890999890)); // 印出 ====
console.log(numberReducer(1)); // 印出 ====

//拆解成字串，用reduce相加，再拆解再相加

// result=String(num).split("").reduce(((acc,cur)=>acc+Number(cur)),0).toString().split("")
// return Number(result[0])+Number(result[1])
