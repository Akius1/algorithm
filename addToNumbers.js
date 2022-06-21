function addTwoNumbers(l1, l2) {
  let sum = 0;
  let carry = 0;

  let arr = [];

  let numberOneStr = l1.toString().split("");
  let numberTwoStr = l2.toString().split("");

  while (numberOneStr.length !== numberTwoStr.length) {
    if (numberOneStr.length < numberTwoStr.length) {
      numberOneStr.unshift(0);
    } else {
      numberTwoStr.unshift(0);
    }
  }

  for (let i = numberOneStr.length - 1; i >= 0; i--) {
    let num1 = +numberOneStr[i];
    let num2 = +numberTwoStr[i];

    sum = num1 + num2 + carry;
    carry = 0;

    if (sum > 9 && i !== 0) {
      carry = 1;
      sum = sum - 10;
      arr.unshift(sum);
    } else if (sum > 9 && i === 0) {
      carry = 1;
      sum = sum - 10;
      arr.unshift(sum);
      arr.unshift(carry);
    } else {
      arr.unshift(sum);
    }
    sum = 0;
  }
  return arr.join("");
}

let a = 901;
let b = 12;

console.log(addTwoNumbers(a, b));
