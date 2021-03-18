// chiede nome
var nomeUtente = prompt('Inserisci il nome:');
// chiede cognome
var cognomeUtente = prompt('inserisci il cognome:');
// chiede colore preferito
var colorePreferito = prompt('inserisci il colore preferito:');

// mostra a schermo le variabili richioeste
document.getElementById('dati-utente').innerHTML = nomeUtente + cognomeUtente + colorePreferito + '21';