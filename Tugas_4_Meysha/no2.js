const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

//Kelompokkan berdasarkan negara pemenang
const groupByCountry = {};

motoGP.forEach(event => {
    const {firstName, lastName, country } = event.winner;
    const fullName = `${firstName} ${lastName}`;
    const winLocation = `${event.circuit}, ${event.location}`;

    if (!groupByCountry[country]) {
        groupByCountry[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    groupByCountry[country].winningCircuits.push({
        name: fullName,
        winLocation: winLocation
    });

    groupByCountry[country].totalWin += 1;
})

console.log(JSON.stringify(groupByCountry, null, 2));