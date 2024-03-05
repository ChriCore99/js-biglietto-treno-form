// recuperare nome e cognome inseriti dall'utente

// recuperare i km inseriti dall'utente

// calcolare il prezzo di base del biglietto

// recuperare la fascia di età selezionata

// applicare o meno lo sconto

// stampare su html i dati del biglietto

// resettare se si preme il tasto "nuovo"





















// chiedere quanti chilometri si dovrà percorrere

const numeroKm = parseFloat(prompt('inserisci i km da percorrere'));     //float

// moltiplicare il numero dei km per 0.21€

let costoIniziale = numeroKm * 0.21;     //number

// chiedere l'età del passeggiero

const eta = parseInt(prompt('inserisci la tua età'));     //number

// calcolare lo sconto del 20% solo se minorenni o del 40% solo se over 65, altrimenti niente sconto

let sconto;

if (eta < 18){ // Se io sono minorenne
    sconto = costoIniziale * 0.20; // Applico lo sconto del 20%
} else if (eta > 65){ // Se io sono over 65
    sconto = costoIniziale * 0.40; // Applico lo sconto del 40%
} else {
    sconto = 0; // Applico lo sconto nullo
}

// calcolo prezzo finale biglietto

const prezzoFinale = costoIniziale - sconto;     //number

// dire il prezzo del biglietto arrotondato al centesimo

console.log(prezzoFinale.toFixed(2));     //string
