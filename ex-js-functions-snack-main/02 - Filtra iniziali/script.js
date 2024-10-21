/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let i = 0;
// Dichiara la funzione qui.

const letterA = names.filter(
  (currentName, index) => index == names[0],
  index == names[3],
  index == names[5]
);

// Invoca la funzione qui e stampa il risultato in console

console.log(letterA);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
