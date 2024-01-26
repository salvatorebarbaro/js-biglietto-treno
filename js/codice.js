
// comando usato per interfacciarsi con l'utente per richiesta km e dichiarazione variabile
// abbiamo inserito number per definire sin da subito il valore inserito come numero e non come stringa
let km = Number( prompt ("inserire i chilometri da percorrere") );

// comando usato per interfacciarsi con l'utente per richiesta km e dichiarazione variabile
// abbiamo inserito number per definire sin da subito il valore inserito come numero e non come stringa
let Età = Number( prompt ("inserire la propria età") ); 

// variabile usata per riproporre a schermo i km inseriti
document.getElementById("Età").innerHTML = `Questa è l'Età inserita ${Età}anni`;

// variabile usata per riproporre a schermo i km inseriti
document.getElementById("km").innerHTML = `Questi sono i km inseriti ${km}`;

// comando usato per visualizzare risultato
console.log(km);

// comando usato per visualizzare risultato
console.log(Età);

// dichiarazione degli sconti 
const sconto_over = Number (40);
const sconto_under = Number (20);


let Costo_biglietto ;
let costo_tratta = (km * 0.21);

if(Età >= 65 ) 
{
    Costo_biglietto = Number ((costo_tratta - ((costo_tratta * sconto_over)/ 100 ) ));
    document.getElementById("Costo_biglietto").innerHTML = `Questo è quanto spendi ${Costo_biglietto}`;
 
}
else if(Età <= 17) 
{
    Costo_biglietto = Number ((costo_tratta - ((costo_tratta * sconto_under)/ 100 ) ));
    document.getElementById("Costo_biglietto").innerHTML = `Questo è quanto spendi ${Costo_biglietto}`;
}
else
{
    Costo_biglietto = Number (costo_tratta) ;
    document.getElementById("Costo_biglietto").innerHTML = `Questo è quanto spendi ${Costo_biglietto}`;
}