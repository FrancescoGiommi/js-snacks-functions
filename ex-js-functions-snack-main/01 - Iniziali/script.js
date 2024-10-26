/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

/* Invoca la funzione qui e stampa il risultato in console */

function extraxtFirstLetter(words) {
  const getFirstLetter = [];

  words.forEach((word) => {
    const firstLetter = word[0];
    getFirstLetter.push(firstLetter);
  });

  return getFirstLetter;
}

const getFirstLetter = extraxtFirstLetter(names);

console.log(getFirstLetter);
/* Risultato atteso: ["A", "L", "M", "A", "G", "A"] */
