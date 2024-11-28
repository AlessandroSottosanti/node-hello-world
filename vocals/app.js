const argoments = process.argv;
const list = argoments.slice(2);

const userString = list[0];

const vocals = ['a', 'e', 'i', 'o', 'u', 'y'];

console.log(userString);

const stringVocals = [];

for (let i = 0; i < userString.length; i++) {
    const curVocal = userString[i];

    const result = vocals.includes(curVocal.toLowerCase());
    if (result) {
        stringVocals.push(curVocal);
    }
}


console.log(stringVocals);

console.log(`Nella parola/frase riportata ci sono ${stringVocals.length} vocali.`);