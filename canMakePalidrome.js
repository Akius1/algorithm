function canMakePaliQueries(str, startIndex, endingIndex, subs) {
  let n = str.length;
  let result = "";

  let dp = new Array(26);
  for (let i = 0; i < 26; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; j++) dp[i][j] = 0;
  }

  const sp = Array(26).fill(0).map(() => Array(n).fill(0))

  const ap = Array.from({length:26}, i => Array(n).fill(0));

    // console.log('first', sp,)
    console.log('Second', dp)
    console.log('third', ap)

  for (let i = 0; i < 26; i++) {
    let currentChar = String.fromCharCode(i + "a".charCodeAt(0));
    // console.log(currentChar)
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[i][j] = str[j] === currentChar ? 1 : 0;
      } else {
        dp[i][j] = dp[i][j - 1] + (str[j] === currentChar ? 1 : 0);
      }
    }
  }

  //   console.log('Second', dp)

  // For each queries
  for (let query = 0; query < startIndex.length; query++) {
    let left = startIndex[query];
    let right = endingIndex[query];
    let k = subs[query];

    let unMatchedCount = 0;
    for (let i = 0; i < 26; i++) {
      let occurrence = dp[i][right] - dp[i][left] +
        (str[left] === i + "a".charCodeAt(0) ? 1 : 0);
        // console.log("str",str[left],"index", i + "a".charCodeAt(0) )

      if (occurrence % 2 === 1) unMatchedCount++;
    }
    let ans = (unMatchedCount / 2);
    // console.log('ans', ans)

    if (ans <= k) {
      result += "1";
    } else {
      result += "0";
    }
  }
  //   console.log('Third', dp)
//   console.log("yczuykvelbobvfnjtfuqxxdnssuqevucxvwxgtetuuurzjaspvkounbpgyfmtboswmrcfvvzprqqbsksnvgkikzqigcdhqvdeoijkdkbxasyveskzyuiitaszdvgvsmchulrzwuwym".length)
  console.log(result);
}

// canMakePaliQueries("cdecd", [0,0,0,0],[0,1,2,3],[0,1,1,0])
canMakePaliQueries("xxdnssuqevu", [0],[10],[3]);
// canMakePaliQueries("bcba", [1, 2, 1], [3, 3, 1], [2, 0, 0]);
// canMakePaliQueries("yczuykvelbobvfnjtfuqxxdnssuqevucxvwxgtetuuurzjaspvkounbpgyfmtboswmrcfvvzprqqbsksnvgkikzqigcdhqvdeoijkdkbxasyveskzyuiitaszdvgvsmchulrzwuwym", [16,6,54],[43,133,103],[28, 118,6])
