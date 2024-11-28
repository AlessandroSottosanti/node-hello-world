const argoments = process.argv;
const list = argoments.slice(2);

let userString = list[0];

const vocals = ['a', 'e', 'i', 'o', 'u', 'y'];

console.log(userString);

let stringVocals = [];

for (let i = 0; i < userString.length; i++) {
    let curVocal = userString[i];

    let result = vocals.includes(curVocal.toLowerCase());
    if (result) {
        stringVocals.push(curVocal);
    }
}


console.log(stringVocals);

console.log(`Nella parola/frase riportata ci sono ${stringVocals.length} vocali.`);