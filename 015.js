// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  function distributeNum(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      const team = arr[2 * i] + arr[2 * i + 1];
      result.push(team);
    }
  }
  
  const arr = str.split("");
  const result = [];

  if (arr.length % 2 === 0) {
    distributeNum(arr);
    return result;
  } else {
    arr.push("_");
    distributeNum(arr);
    return result;
  }
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
// 先拆成單字串判斷長度判斷 ：奇數補“＿” 偶數直接計算
// 分成兩個一組
