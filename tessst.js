// // Use native http or https module to send network request if needed.
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var inputData = "";
// process.stdin.on("data", function (chunk) {
//     inputData += chunk;
// });
// process.stdin.on("end", function () {
//     // Do not edit: Output the solution to the console.
//     const output = writeOutput(inputData);
//     console.log(output);
// });

// Filtered is using the nodejs v8 engine to process JavaScript. Please write your code inside the function block below.
// Our grading criteria is based on stream output, please return your output to log your final result.

const input = `13
Four score and seven years ago our fathers brought forth upon this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal`

function writeOutput(inputData) {
  // Start writing code here to consume input, and return result.
  let separatedValue = inputData.split("\n");

  let maxLength = +separatedValue[0] + 1;
  let inputString = separatedValue[1];

  let newLineStr = "\n";
  found = false;
  res = "";

  while (inputString.length > maxLength) {
    found = false;

    for (i = maxLength - 1; i >= 0; i--) {
      if (test(inputString.charAt(i))) {
        res = res + [inputString.slice(0, i), newLineStr].join("");
        inputString = inputString.slice(i + 1);
        found = true;
        break;
      }
    }

    if (!found) {
      res += [str.slice(0, maxLength), newLineStr].join("");
      inputString = inputString.slice(maxLength);
    }
  }

//   console.log(res + inputString)
  return res + inputString;
}

function test(x) {
    // console.log('xx',x)
    if(x === " "){
        return true
    }
//   let pattern = new RegExp(/^\s$/);
//   console.log("patta", pattern.test(x.charAt(0)))
//   return pattern.test(x.charAt(0));
return false;
}

writeOutput(input)