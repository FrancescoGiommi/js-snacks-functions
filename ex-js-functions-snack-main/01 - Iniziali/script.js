/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names);

const extractFirstLetter = (array) => {
  const firstLetter = [];
  for (let i = 0; i < array.lenght; i++) {
    firstLetter = [names[i]];
  }
  return firstLetter;
};
console.log(extractFirstLetter(names));

// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
