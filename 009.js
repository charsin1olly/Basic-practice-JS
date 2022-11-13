// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
return url.split("#about")[0]
}

console.log(removeAnchor("5xruby.tw")); // 印出 5xruby.tw
console.log(removeAnchor("5xruby.tw/#about")); // 印出 5xruby.tw/
console.log(removeAnchor("5xruby.tw/courses/?page=1#about")); // 印出 5xruby.tw/courses/?page=1

// 利用split可以依照自訂條件切割的特性，將字串分成兩個元素，取#about之前的元素
