const argoments = process.argv;
const list = argoments.slice(2);

let userNum = list[0];

console.log(userNum);

// if(userNum % 2 === 0) {
//     console.log(`${userNum} è un numero pari`);
// }
// else {
//     console.log(`${userNum} è un numero dispari`);
// }

// Oppure

const result = (userNum % 2 === 0) ? `${userNum} è un numero pari` : `${userNum} è un numero dispari`;

console.log(result);