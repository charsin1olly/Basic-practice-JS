// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  const countEven = numbers.map((item) => item % 2).filter((item) => item === 0);
  const countOdd = numbers.map((item) => item % 2).filter((item) => item !== 0);

  if (countEven.length > countOdd.length) {
    return Number(numbers.filter((item) => item % 2 !== 0));
  } else {
    return Number(numbers.filter((item) => item % 2 === 0));
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// 比較陣列中奇數和偶數數量
// 判斷：當偶數數量大於奇數數量，取陣列中之奇數；當奇數數量大於偶數數量，取陣列中之偶數
