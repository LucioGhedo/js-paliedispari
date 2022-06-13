// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(userWord) {
    // calcolo lunghezza parola
    let wordLength = userWord.length;
    // faccio un ciclo che scorre al contrario la parola
    for (let i = 0; i < wordLength/2; i++) {
        if (userWord[i] !== userWord[wordLength - 1 - i]) {
            return false;
        }
    }
    return true;
}
// Chiedere all’utente di inserire una parola
const check = prompt('Inserisci una parola');
const value = palindrome(check);
// output
if (value === true) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}