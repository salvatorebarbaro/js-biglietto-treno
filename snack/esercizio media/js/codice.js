// comando usato per interfacciarsi con l'utente per richiesta km e dichiarazione variabile
let valore1 = parseFloat( prompt ("inserire il primo valore") ); 
let valore2 = parseFloat( prompt ("inserire il secondo valore") );
let valore3 = parseFloat( prompt ("inserire il terzo valore") );



// dichiarazione variabile errore
let errore_valore1;
let errore_valore2;
let errore_valore3;

const n_variabili = 3;

let media;

if( isNaN(valore1) || isNaN(valore2) || isNaN(valore3) )
{
    alert ("non sono numeri")
    
    errore_valore1 = valore1;
    document.getElementById("errore_valore1").innerHTML = `hai sbagliato inserendo questo valore ${errore_valore1}`;

    
    errore_valore2 = valore2;
    document.getElementById("errore_valore2").innerHTML = `hai sbagliato inserendo questo valore ${errore_valore2}`;
    
    errore_valore3 = valore3;
    document.getElementById("errore_valore3").innerHTML = `hai sbagliato inserendo questo valore ${errore_valore3}`;
    
}
else
{
    // comando per controllare sulla console valori inseriti
    console.log(valore1);
    console.log(valore2);
    console.log(valore3);

    // operazione per la media
    media = ( (valore1 + valore2 + valore3) / n_variabili );
    // comando per arrotondare alla seconda cifra
    media = media.toFixed(2);
    // comando per stampare la media a schermo
    document.getElementById("media").innerHTML = `risultato della media ${media}`;




}
