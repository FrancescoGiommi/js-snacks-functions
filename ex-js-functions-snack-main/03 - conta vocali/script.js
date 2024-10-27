/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function getVocals(text) {
  const vocalArray = ["a", "e", "i", "o", "u"];
  const charArray = text.split("");
  let vocalIndex = 0;

  charArray.forEach((char) => {
    if (vocalArray.includes(char)) vocalIndex++;
  });

  return vocalIndex;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(getVocals(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
