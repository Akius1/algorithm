function closestNumbers(numbers) {
    // Write your code here
    let numSort = numbers.sort((a,b)=> a-b);
    let minDiff = Infinity;
    
    for(let a=0; a<numSort.length; a++){
        let diff = Math.abs(numSort[a+1] - numSort[a])
        if(diff < minDiff && diff > 0){
            minDiff = diff;
        }
        if(diff === minDiff){
            console.log(numSort[a], numSort[a+1])
        }   
    }
}