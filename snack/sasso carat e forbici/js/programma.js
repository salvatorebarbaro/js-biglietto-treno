let scelta_utente;
scelta_utente = parseInt(prompt("Inserisci un numero tra sasso (0), carta (1) e forbici (2)"));
let errore_scelta


if (isNaN(scelta_utente) )
{
    alert("non è un numero");
    
    errore_scelta = scelta_utente;
    document.getElementById("errore_scelta").innerHTML = `hai sbagliato inserendo questo valore ${errore_scelta}`;
}
else if( scelta_utente <= 0 || scelta_utente > 2)
{
    alert("sei sicuro di aver messo il numero giusto?");
    
    errore_scelta = scelta_utente;
    document.getElementById("errore_scelta").innerHTML = `hai sbagliato inserendo questo valore ${errore_scelta}`;
}

else
{



let scelta_computer;



console.log(scelta_utente);

scelta_computer = Math.floor(Math.random() * 3);

console.log(scelta_computer);

if (scelta_utente === scelta_computer) {
    document.getElementById("risultato").innerHTML = `Avete pareggiato avendo premuto questo risultato ${scelta_utente}`;
} else if (
    (scelta_utente === 0 && scelta_computer === 2) ||
    (scelta_utente === 1 && scelta_computer === 0) ||
    (scelta_utente === 2 && scelta_computer === 1)
) {
    document.getElementById("risultato").innerHTML = "Hai vinto!";
} else {
    document.getElementById("risultato").innerHTML = "Hai perso!";
}
}