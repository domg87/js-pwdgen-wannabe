// CHIEDERE ALL'UTENTE IL NOME
var nomeUtente = prompt("Qualè il tuo nome");

// CHIEDERE ALL'UTENTE IL COGNOME
var cognomeUtente = prompt("Qualè il tuo cognome");

// CHIEDERE ALL'UTENTE IL COLORE PREFERITO
var coloreUtente = prompt("Qualè il tuo colore preferito?");

// GENERIAMO LA PASSWORD
var password = nomeUtente + cognomeUtente + coloreUtente + "19";
// STAMPIAMO
document.getElementById("pass").innerHTML = password;
