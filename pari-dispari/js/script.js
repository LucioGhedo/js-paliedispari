// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt('Scrivi pari o dispari');
let userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(num) {
    let random = Math.floor((Math.random() * 5) + 1);
    return random;
}
let randomNum = randomNumber(1);

// Sommiamo i due numeri
let sum = 0;
sum = randomNum + userNum;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEvenOrOdd(number) {
    let evenOrOdd;
    if(number % 2 === 0) {
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }
    return evenOrOdd;
}
let winner = isEvenOrOdd(sum);

// Dichiariamo chi ha vinto.
if (userChoice === 'pari') {
    if (winner === 'even') {
        alert('Hai vinto');
    } else {
        alert('Ritenta.. sarai più fortunato');
    }
} else if (userChoice === 'dispari') {
    if (winner === 'odd') {
        alert('Hai vinto');
    } else {
        alert('Ritenta.. sarai più fortunato');
    }
} else {
    alert('SCRIVI "pari" O "dispari"');
}