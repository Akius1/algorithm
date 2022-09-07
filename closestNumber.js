// function closestNumbers(numbers) {
//     // Write your code here
//     let numSort = numbers.sort((a,b)=> a-b);
//     let minDiff = Infinity;

//     for(let a=0; a<numSort.length; a++){
//         let diff = Math.abs(numSort[a+1] - numSort[a])
//         if(diff < minDiff && diff > 0){
//             minDiff = diff;
//         }
//         if(diff === minDiff){
//             console.log(numSort[a], numSort[a+1])
//         }
//     }
// }

function closestNumbers(arr) {
  let n = arr.length;
  if (n <= 1) return;
  arr.sort((a,b) => a-b);

  let minDiff = arr[1] - arr[0];
  for (let i = 2; i < n; i++) minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);

  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] == minDiff) {
      console.log(arr[i - 1], arr[i]);
    }
  }
}
