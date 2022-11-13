// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  let arr = str.split("_");
  const result = arr.map((element) => {
    const items = element.split("");
    items[0] = items[0].toUpperCase();
    return items.join("");
  });

  return result.join("");
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore

// 以“＿”拆分字串成陣列arr
//arr陣列內的每個元素再拆分成陣列items
//將items的第一個元素轉大寫，回傳合併成第一個字母為大寫的單字
//再將單字（陣列）合併為字串

//提示：map
