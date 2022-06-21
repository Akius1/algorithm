function longestPalindrome(s){
    let startIndex = 0;
    let maxLength = 1;

    const helper = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            let currenPal = right - left + 1;
    
            if(currenPal > maxLength){
                maxLength = currenPal;
                startIndex = left;
            }
    
            left -= 1;
            right+=1;
        }
    }
    

    for(let i = 0; i < s.length; i++){
        helper(i-1, i + 1, s,maxLength, startIndex);
        helper(i, i + 1, s,maxLength,startIndex);
    }

    return s.slice(startIndex, startIndex + maxLength);
}


let input= "babad";

console.log(longestPalindrome(input)) 