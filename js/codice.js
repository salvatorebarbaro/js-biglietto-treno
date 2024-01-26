
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

const sconto_over = ((100 / 40) * 100);
console.log(sconto_over);

let Costo_biglietto ;

if(Età >= 65 ) 
{
    Costo_biglietto = ((0.21 * km)- sconto_over)
}