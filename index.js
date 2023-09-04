// index.js
console.log(`Hello World!`);

const numbers = [1, 2, 3, 4, 5, 6, 7]

squared = x => x**x 


const squaredNumbers = numbers.map(squared);
console.log(`Squared numbers: `);
console.table(squaredNumbers);

const sumOfSquares = squaredNumbers.reduce((previous, current) => previous + current, 0);
console.log(`Sum of squares: ${sumOfSquares}`);

const rootedSumOfSquares = Math.sqrt(sumOfSquares);
console.log(`Square rooted sum of squares: ${rootedSumOfSquares}`);