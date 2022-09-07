 function canFormPalindrome(str) {
  // Create a count array and initialize all
  // values as 0
  let NO_OF_CHARS = 256;
  let count = Array(NO_OF_CHARS).fill(0);

  // For each character in input strings,
  // increment count in the corresponding
  // count array
  for (let i = 0; i < str.length; i++) count[str[i].charCodeAt()]++;

  // Count odd occurring characters
  let odd = 0;
  for (let i = 0; i < NO_OF_CHARS; i++) {
    if ((count[i] & 1) == 1) odd++;

    if (odd > 1){
        console.log(false)
        return false;
    } 
  }

  // Return true if odd count is 0 or 1,
  return true;
}

canFormPalindrome("xxdnssuqevu")
canFormPalindrome("xsudnvndusx")
canFormPalindrome("xxdnssudnvu")

exports.canFormPalindrome = canFormPalindrome;