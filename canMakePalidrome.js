// const canFormPalindrome = require("./canFormPalindrome");

function canMakePaliQueries(s, startIndex, endingIndex, subs) {
  let n = s.length;
  let result = "";

  //   let dp = new Array(26);
  //   for (let i = 0; i < 26; i++) {
  //     dp[i] = new Array(n);
  //     for (let j = 0; j < n; j++) dp[i][j] = 0;
  //   }

  //   const sp = Array(26).fill(0).map(() => Array(n).fill(0))

  const dp = Array.from({ length: 26 }, (i) => Array(n).fill(0));

  for (let i = 0; i < 26; i++) {
    let currentChar = String.fromCharCode(i + "a".charCodeAt(0));
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[i][j] = s[j] === currentChar ? 1 : 0;
      } else {
        dp[i][j] = dp[i][j - 1] + (s[j] === currentChar ? 1 : 0);
      }
    }
  }


  // For each queries
  for (let query = 0; query < startIndex.length; query++) {
    let left = startIndex[query];
    let right = endingIndex[query];
    let k = subs[query];

    let unMatchedCount = 0;
    for (let i = 0; i < 26; i++) {
      let occurrence =
        dp[i][right] -
        dp[i][left] +
        (s[left] === i + "a".charCodeAt(0) ? 1 : 0);
      if (occurrence % 2 === 1) unMatchedCount++;
    }
    let ans = Math.floor(unMatchedCount / 2);

    console.log(ans, k)
 
    if (right - left === 0) {
      result += "1";
    } else if (ans <= k && k>0 ) {
      result += "1";
    } else {
      let serve = s.slice(left,right+1)
      console.log(serve)
     let res =  helper(serve)

      res ? result += "1":result += "0";
    }
   
  }
  console.log(result);
}
function helper(str) {
  
  let NO_OF_CHARS = 256;
  let count = Array(NO_OF_CHARS).fill(0);

  
  for (let i = 0; i < str.length; i++) count[str[i].charCodeAt()]++;

  let odd = 0;
  for (let i = 0; i < NO_OF_CHARS; i++) {
    if ((count[i] & 1) == 1) odd++;

    if (odd > 1){
        console.log(false)
        return false;
    } 
  }

  return true;
}
// canMakePaliQueries("cdecd", [0, 0, 0, 0], [0, 1, 2, 3], [0, 1, 1, 0]); //1110
// canMakePaliQueries("xxdnssuqevu", [0], [10], [3]); //1
// canMakePaliQueries("bcba", [1, 2, 1], [3, 3, 1], [2, 0, 0]); //101
// canMakePaliQueries("bcba", [1, 2, 1], [3, 3, 1], [2, 0, 0]); //101
canMakePaliQueries("yczuykvelbobvfnjtfuqxxdnssuqevucxvwxgtetuuurzjaspvkounbpgyfmtboswmrcfvvzprqqbsksnvgkikzqigcdhqvdeoijkdkbxasyveskzyuiitaszdvgvsmchulrzwuwym", [16,6,54,30],[43,133,103,122],[28, 118,6, 6])
