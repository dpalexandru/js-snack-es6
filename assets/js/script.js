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

// Trovo la bici con il peso più leggero
let biciLeggera = bici[0];

for (i = 0; i < bici.length; i++) {
    if (biciLeggera.peso > bici[i].peso) {
        biciLeggera = bici[i];
    }
};
// Stampo la bici più leggera
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