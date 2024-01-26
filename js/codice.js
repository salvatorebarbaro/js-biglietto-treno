
// comando usato per interfacciarsi con l'utente per richiesta km e dichiarazione variabile
// abbiamo inserito number per definire sin da subito il valore inserito come numero e non come stringa
let km = Number( prompt ("inserire i chilometri da percorrere") );

// comando usato per interfacciarsi con l'utente per richiesta km e dichiarazione variabile
// abbiamo inserito number per definire sin da subito il valore inserito come numero e non come stringa
let Età = Number( prompt ("inserire la propria età") ); 

// isnan variabile o coamndo usato per definire se sia un numero o no
if( ((isNaN(Età)) && (Età <= 0)) || (Età > 99) )
{
    alert("non è un numero ma ti svegli ricarica la pagina");
}

else
{
    
    alert("hai inserito il numero");
}


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

// definizioni variabili e calcolo costo tratta
let Costo_biglietto ;
let costo_tratta = (km * 0.21);

// primo snodo della nostra condizione
if(Età >= 65 ) 
{
    Costo_biglietto = Number ((costo_tratta - ((costo_tratta * sconto_over)/ 100 ) ));
    // parseFloat viene usato in questo caso insieme ad to.fixed(2) perchè fixed restituisce una stringa con 2 valori decimali e parse lo traforma in numero nuovamente
    Costo_biglietto = parseFloat(Costo_biglietto.toFixed(2));
    document.getElementById("Costo_biglietto").innerHTML = `Questo è quanto spendi ${Costo_biglietto}`;
    
}
// secondo snodo della nostra condizione
else if(Età <= 17) 
{
    Costo_biglietto = Number ((costo_tratta - ((costo_tratta * sconto_under)/ 100 ) ));
    // parseFloat viene usato in questo caso insieme ad to.fixed(2) perchè fixed restituisce una stringa con 2 valori decimali e parse lo traforma in numero nuovamente
    Costo_biglietto = parseFloat(Costo_biglietto.toFixed(2));
    document.getElementById("Costo_biglietto").innerHTML = `Questo è quanto spendi ${Costo_biglietto}`;
    
}
// terzo snodo della nostra condizione
else
{
    Costo_biglietto = Number (costo_tratta) ;
    document.getElementById("Costo_biglietto").innerHTML = `Questo è quanto spendi ${Costo_biglietto}`;
}