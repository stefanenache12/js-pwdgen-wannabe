alert (`CIAO GENERA LA TUA PASSWORD SUPER SICURA :)
CLICKA OK PER CONTINUARE`);

const nome = prompt ('Inserisci il tuo Nome');
const cognome = prompt ('Inserisci il tuo Cognome');
const colorePreferito = prompt ('Inserisci il tu colore preferito');

let passwordGenerated = nome + cognome + colorePreferito + '101';

document.getElementById('password').innerHTML = passwordGenerated;