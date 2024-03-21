console.log('Father!'); // => Father!
console.log('Father!'); // => Father!

// greeting – переводится как приветствие
let greeting = 'Father!';
console.log(greeting); // => Father!
console.log(greeting); // => Father!

let greeting1 = 'Father!';
console.log(greeting1); // => Father!
console.log(greeting1); // => Father!

let greeting2 = 'Mother!';
console.log(greeting2); // => Mother!
console.log(greeting2); // => Mother!

greeting = 'Mother!';
console.log(greeting); // => Mother!
console.log(greeting); // => Mother!

let dollarsInEuro = 1.25;
let rublesInDollar = 60;

let dollarsCount = 50 * dollarsInEuro; // 62.5
let rublesCount = dollarsCount * rublesInDollar; // 3750

console.log(rublesCount); // => 3750

const dollarsInEuro1 = 1.25;
const rublesInDollar1 = 60;

const euros = 1000;
const dollars = euros * dollarsInEuro1;    // 1250
const rubles = dollars * rublesInDollar1; // 75000

console.log(rubles); // => 75000
const pi = 3.14;