// 統編驗證器


// ==========
function GUINumberIsTrue(num) {
  const numSeven = num.slice(7);
  const Arr = [];
    const numArr = num.split("");
    const logicNum = [1, 2, 1, 2, 1, 2, 4, 1];

  //   console.log(logicNum[1])

  if (numSeven === "7") {
    for (let x = 0; x < 8; x++) {
      const Mu = String(numArr[x] * logicNum[x]).split("");
      Arr.push(Mu);
    }
    const a = Arr.reduce((acc, val) => acc.concat(val), []).reduce((acc, i) => {
      return acc + Number(i);
    }, 0);
    if ((a||a+1) % 10 === 0) {
      return "通過";
    } else {
      return "不符合規定";
    }
  } else {
    for (let x = 0; x < 8; x++) {
      const Mu = String(numArr[x] * logicNum[x]).split("");
      Arr.push(Mu);
    }
    const a = Arr.reduce((acc, val) => acc.concat(val), []).reduce((acc, i) => {
      return acc + Number(i);
    }, 0);

    if (a % 10 === 0) {
      return "通過";
    } else {
      return "不符合規定";
    }
  }
}

console.log(GUINumberIsTrue("04595257")); //印出true
console.log(GUINumberIsTrue("10458575")); //印出true

// 判斷倒數第二個數字是不是7

//是7
// 1.拆成陣列[0,4,5,9,5,2,5,7]
// 2.for乘上邏輯乘數
// 3.拆解數字

// 不是7

function GUINumberIsTrue(num) {
  const numSeven = num.slice(7);
  const Arr = [];
    const numArr = num.split("");
    const logicNum = [1, 2, 1, 2, 1, 2, 4, 1];

  //   console.log(logicNum[1])

  if (numSeven === "7") {
    for (let x = 0; x < 8; x++) {
      const Mu = String(numArr[x] * logicNum[x]).split("");
      Arr.push(Mu);
    }
    const a = Arr.reduce((acc, val) => acc.concat(val), []).reduce((acc, i) => {
      return acc + Number(i);
    }, 0);
    if ((a||a+1) % 10 === 0) {
      return "通過";
    } else {
      return "不符合規定";
    }
  } else {
    for (let x = 0; x < 8; x++) {
      const Mu = String(numArr[x] * logicNum[x]).split("");
      Arr.push(Mu);
    }
    const a = Arr.reduce((acc, val) => acc.concat(val), []).reduce((acc, i) => {
      return acc + Number(i);
    }, 0);

    if (a % 10 === 0) {
      return "通過";
    } else {
      return "不符合規定";
    }
  }
}
