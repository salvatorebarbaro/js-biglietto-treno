
// comando usato per interfacciarsi con l'utente per richiesta km e dichiarazione variabile
let temperatura = ( prompt ("inserire la temperatura da convertire") ); 

let errore_temperatura;


// isnan variabile o coamndo usato per defin ire se sia un numero o no , || porta logica or che se una delle 2 condizioni inserite si blocca è restituisce errore
if (isNaN(temperatura) )
{
    alert("non è un numero");
    
    errore_temperatura = temperatura;
    document.getElementById("errore_temperatura").innerHTML = `hai sbagliato inserendo questo valore ${errore_temperatura}`;
}
else if( temperatura <= 20 || temperatura > 50)
{
    alert("sei sicuro di aver messo il numero giusta?");
    
    errore_temperatura = temperatura;
    document.getElementById("errore_temperatura").innerHTML = `hai sbagliato inserendo questo valore ${errore_temperatura}`;
}
else
{
    alert("hai inserito il numero");
    // variabile usata per riproporre a schermo la temperatura inserita
    document.getElementById("temperatura").innerHTML = `Questi sono i gradi inseriti ${temperatura}°`;

    // comando usato per visualizzare risultato
    console.log(temperatura);

    // dichiarazione valori fissi 
    const moltiplicatore = Number (1.8);
    const gradi_da_sommare = Number (32);

    // definizioni variabili e calcolo costo tratta
    let valore_convertito ;

    valore_convertito = ((moltiplicatore * temperatura)+ gradi_da_sommare);

    document.getElementById("valore_convertito").innerHTML = `Questa è la temperatura convertitia ${valore_convertito}° in gradi Fahrenheit`;
    
}