// function numBst(nodeValues){

//     let len = nodeValues.length;
//     let count = 0
//     for(let i = 0; i < len; i++){
//         if(nodeValues[i] === 1){
//            count = 1;
//         }else if (nodeValues[i] === 2){
//             count = 2;
//         }else{
//          count = possibleArray(nodeValues[i])
//         }

       
//     }
//     return count
// }

// function possibleArray(num){
//     let arr = [];
//     var permArr = [],
//     usedChars = [];

//     for(let j = 0; j < num ; j++){
//         arr.push(j + 1);
//     }

   

// function permute(input) {
//   var i, ch;
//   for (i = 0; i < input.length; i++) {
//     ch = input.splice(i, 1)[0];
//     usedChars.push(ch);
//     if (input.length == 0) {
//       permArr.push(usedChars.slice());
//     }
//     permute(input);
//     input.splice(i, 0, ch);
//     usedChars.pop();
//   }
//   console.log(permArr)
//   return permArr.length
// };
// permute(arr);

// }


// console.log(numBst([1,2,3,]));


function getResult(time) {
  // Write your code here...

  let possible = true;

  for(let i = 0; i < time.length;  i++){

    if(i + 1 < time.length){
      let lengthOfString = time[i].length;
      let sliceSubStringEnd = time[i].substring(lengthOfString-2, lengthOfString);
      let sliceSubStringStart = time[i + 1].substring(0,2);

      console.log(sliceSubStringStart, sliceSubStringEnd)

      if(sliceSubStringStart > sliceSubStringEnd){
          possible = true;
      }else{
          possible = false;
      }
    }

     
  }
  return possible;
}

console.log(getResult(["09-13", "12-14"]));