
// comando usato per interfacciarsi con l'utente per richiesta km e dichiarazione variabile
let km = ( prompt ("inserire i chilometri da percorrere") );
let Eta = ( prompt ("inserire la propria età") ); 

let errore_km;
let errore_Eta;

// isnan variabile o coamndo usato per defin ire se sia un numero o no , || porta logica or che se una delle 2 condizioni inserite si blocca è restituisce errore
if (isNaN(km) || isNaN(Eta))
{
    alert("non è un numero");
    
    errore_km = km;
    document.getElementById("errore_km").innerHTML = `hai sbagliato inserendo questo valore ${errore_km}`;
    
    errore_Eta = Eta;
    document.getElementById("errore_Eta").innerHTML = `hai sbagliato inserendo questo valore ${errore_Eta}`;
}
else if( km <= 0 || Eta <= 0 || Eta > 99)
{
    alert("sei sicuro di aver messo il numero giusta?");
    
    errore_km = km;
    document.getElementById("errore_km").innerHTML = `hai sbagliato inserendo questo valore ${errore_km}`;
    
    errore_Eta = Eta;
    document.getElementById("errore_Eta").innerHTML = `hai sbagliato inserendo questo valore ${errore_Eta}`;
}
else
{
    alert("hai inserito il numero");
    // variabile usata per riproporre a schermo i km inseriti
    document.getElementById("km").innerHTML = `Questi sono i km ${km}inseriti`;
    // variabile usata per riproporre a schermo i km inseriti
    document.getElementById("Età").innerHTML = `Questa è l'Età inserita ${Eta}anni`;

    // comando usato per visualizzare risultato
    console.log(km);

    // comando usato per visualizzare risultato
    console.log(Eta);

    // dichiarazione degli sconti 
    const sconto_over = Number (40);
    const sconto_under = Number (20);

    // definizioni variabili e calcolo costo tratta
    let Costo_biglietto ;
    let costo_tratta = (km * 0.21);

    // primo snodo della nostra condizione
    if(Eta >= 65 ) 
    {
        Costo_biglietto = Number ((costo_tratta - ((costo_tratta * sconto_over)/ 100 ) ));
        // parseFloat viene usato in questo caso insieme ad to.fixed(2) perchè fixed restituisce una stringa con 2 valori decimali e parse lo traforma in numero nuovamente
        Costo_biglietto = parseFloat(Costo_biglietto.toFixed(2));
        document.getElementById("Costo_biglietto").innerHTML = `Questo è quanto spendi ${Costo_biglietto}`;
        
    }
    // secondo snodo della nostra condizione
    else if(Eta <= 17) 
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
}