// Creo un array di di bici
const bici = [{
        nome: "bianchi",
        peso: 34,
    },
    {
        nome: "fiido",
        peso: 30,

    },
    {
        nome: "liido",
        peso: 18,

    },
    {
        nome: "bicic",
        peso: 10,
    },
]
console.log(bici);

//--- Trovo la bici con il peso più leggero
let biciLeggera = bici[0];

for (i = 0; i < bici.length; i++) {
    if (biciLeggera.peso > bici[i].peso) {
        biciLeggera = bici[i];
    }
};
// ----Stampo la bici più leggera
console.log(biciLeggera);

///////////////////////////////////////Esercizio 2

const squadre = [{
        nome: "cagliari",
        puntiFatti: 0,
        falliSubiti: 0,

    },
    {
        nome: "inter",
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: "juve",
        puntiFatti: 0,
        falliSubiti: 0,

    },
    {
        nome: "milan",
        puntiFatti: 0,
        falliSubiti: 0,

    },
    {
        nome: "napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]

// Genero numeri casuali per punti e falli subiti 
//------Funzione per creare numeri casuali

function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Assegno con un ciclo numeri casuali a falli subiti e punti

for (i = 0; i < squadre.length; i++) {
    squadre[i].falliSubiti = numeroCasuale(1, 1000);
    squadre[i].puntiFatti = numeroCasuale(1, 100);
};

console.log(squadre)