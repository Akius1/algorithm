// Method 1
let string = 'kapilalipak';

const table2={}; 
for(let char of string) {
  table2[char]=table2[char]+1 || 1;
}

console.log("method 1",table2);


// Method 2 //Most efficient

const table = {};
for (const char of string) {
    // Instead of relying on `NaN` as a falsy, ideally you should use `??`:
    table[char] = (table[char] ?? 0) + 1;
}

console.log("method 2",table);


// Method 3
// You can also write it like this, but is less performant:
const table3=
[...string].reduce(
    (table, char) => ({ ...table, [char]: (table[char] ?? 0) + 1 }),
    {},
);

console.log("method 3",table3)