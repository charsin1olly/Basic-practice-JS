// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(min, max) {
  if (typeof max === "number") {
    return Math.floor(Math.random() * (max - min) + min);
  } else {
    return Math.floor(Math.random() * min);
  }
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字

//判斷max值是不是數字
//取max、min差值的隨機比例加在min值上
//無條件捨去法避免乘積小數的部分超過0.5，進位會等於max值
//以randomNumber(5, 30)為例，random取到0.99，則 0.99*25+5=29.75，進位為30 