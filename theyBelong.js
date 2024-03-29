const { isPossibleTriangle } = require("./nonDegenerate");

function theyBelong(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) {
  let ab = Math.abs(x2 - x1);
  let bc = +Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y3 - y2, 2)).toFixed(2);
  let ac = +Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2)).toFixed(2);

let cb = isPossibleTriangle([x1, x2, x3,])

console.log('cb',cb)

  let pInside = isInside(x1, y1, x2, y2, x3, y3, x4, y4);

  let qInside = isInside(x1, y1, x2, y2, x3, y3, x5, y5);

  if (pInside && !qInside){
    console.log(1);
    return 1
  }else if(qInside && !pInside){
      console.log(2)
      return 2;
  }else if(pInside && qInside){
    console.log(3)
    return 3;
  }else if(!pInside && !qInside){
    console.log(4)
    return 4;
  }else if(!(ab + bc > ac && bc + ac > ab && ab + ac > bc)) {
    console.log(0);
    return 0;
  } 
}

const area = (x1, y1, x2, y2, x3, y3)=> {
    return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
  }

function isInside(x1, y1, x2, y2, x3, y3, x, y) {
  
  let A = area(x1, y1, x2, y2, x3, y3);
  let A1 = area(x, y, x2, y2, x3, y3);
  let A2 = area(x1, y1, x, y, x3, y3);
  let A3 = area(x1, y1, x2, y2, x, y);

  /* Check if sum of A1, A2 and A3 is same as A */
  return A == A1 + A2 + A3;
}
// theyBelong(2, 2, 7, 2, 5, 4, 4, 3, 7, 4);
// theyBelong(452, 476, 46, 1790, 184, 1656, 1, 1, 2, 2);
// theyBelong(0, 0,2, 0, 4, 0, 2, 0, 4, 0);
// theyBelong(3, 1, 7, 1, 5, 5, 1, 1, 2, 2);
theyBelong(0, 0, 2, 0, 4, 0, 2, 0, 4, 0);