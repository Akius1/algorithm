function isPossibleTriangle(arr, N)
    {
           
        // If number of elements are
        // less than 3, then no
        // triangle is possible
        if (N < 3)
            return false;
       
        // first sort the array
        arr.sort();
       
        // loop for all 3
        // consecutive triplets
        for (let i = 0; i < N - 2; i++)
       
            // If triplet satisfies
            // triangle condition, break
            if (arr[i] + arr[i + 1] > arr[i + 2])
                return true;
                   
        return false;
    }
      
    exports.isPossibleTriangle = isPossibleTriangle;