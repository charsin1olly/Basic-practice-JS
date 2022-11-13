// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const textArray = input.split(" ");
  const score = textArray.map((item) => {
    return item
      .split("")
      .map((i) => {
        return i.charCodeAt(0) - 96;
      })
      .reduce((previous, current) => {
        return previous + current;
      }, 0);
  });

  const result = score.indexOf(Math.max(...score));
  return textArray[result];
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// 記分>> str.charCodeAt(0) - 96
// 算字串個別分數： 一大串字串 split拆成單一字串  [ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]
// map再將內部字串拆成單個字[ 'l', 'o', 'r', 'e', 'm' ]，套入計分公式變成[ 12, 15, 18, 5, 13 ]
// reduce計算單個陣列總和最外層的[ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]矩陣產生對應[ 63, 78, 64, 48, 39 ]
// Math.max()找出最大值，使用indexOf產出元素位置(1)
// 回傳元素位置(1)到陣列[ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]取ipsum
