// stampare i dati del biglietto

const submitElement = document.getElementById('invia');
console.log(submitElement);   //string - null

// aggiunta del listener

submitElement.addEventListener('click', function(){
    console.log('ho cliccato');

    // recuperare nome e cognome inseriti dall'utente

    const nomeElement = document.getElementById('nome');
    const nomeElementValue = nomeElement.value;    //string

    // recuperare i km inseriti dall'utente

    const distanzaElement = document.getElementById('km');
    const distanzaElementValue = parseInt(distanzaElement.value);    //number

    // calcolare il prezzo di base del biglietto

    const prezzoBase = distanzaElementValue * 0.21;    //number

    // recuperare la fascia di età selezionata

    const anniElement = document.getElementById('anni');
    const anniElementValue = anniElement.value;    //string

    // calcolare o meno lo sconto

    let sconto;

    if (anniElementValue === 'minorenne'){ // Se io sono minorenne
         sconto = prezzoBase * 0.20; // Applico lo sconto del 20%
    } else if (anniElementValue === 'over65'){ // Se io sono over 65
         sconto = prezzoBase * 0.40; // Applico lo sconto del 40%
    } else {
         sconto = 0; // Applico lo sconto nullo
    }

    // calcolo prezzo finale
    let prezzoFinale = prezzoBase - sconto;
    console.log(prezzoFinale)

});

// const prezzoFinale = 

// resettare la pagina se si preme il tasto "nuovo"

const nuovoElement = document.getElementById('nuovo');
console.log(nuovoElement);   //string - null

// aggiunta del listener

nuovoElement.addEventListener('click', function(){
    console.log('aggiorna pagina');
});





















// // chiedere quanti chilometri si dovrà percorrere

// const numeroKm = parseFloat(prompt('inserisci i km da percorrere'));     //float

// // moltiplicare il numero dei km per 0.21€

// let costoIniziale = numeroKm * 0.21;     //number

// // chiedere l'età del passeggiero

// const eta = parseInt(prompt('inserisci la tua età'));     //number

// // calcolare lo sconto del 20% solo se minorenni o del 40% solo se over 65, altrimenti niente sconto

// let sconto;

// if (eta < 18){ // Se io sono minorenne
//     sconto = costoIniziale * 0.20; // Applico lo sconto del 20%
// } else if (eta > 65){ // Se io sono over 65
//     sconto = costoIniziale * 0.40; // Applico lo sconto del 40%
// } else {
//     sconto = 0; // Applico lo sconto nullo
// }

// // calcolo prezzo finale biglietto

// const prezzoFinale = costoIniziale - sconto;     //number

// // dire il prezzo del biglietto arrotondato al centesimo

// console.log(prezzoFinale.toFixed(2));     //string
