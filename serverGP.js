// Import library Express
const express = require('express');
const app = express();
const PORT = 8000;

// Data MotoGP
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

// Tampil semua data
app.get('/', (req, res) => {
  res.status(200).json(motoGP);
});

//Tampil data dikelompokkan berdasarkan negara
app.get('/country', (req, res) => {
  const groupedByCountry = {};
  motoGP.forEach(item => {
    const country = item.winner.country;
    if (!groupedByCountry[country]) groupedByCountry[country] = [];
    groupedByCountry[country].push(item);
  });
  res.status(200).json(groupedByCountry);
});

//Tampil data dikelompokkan berdasarkan nama pemenang
app.get('/name', (req, res) => {
  const groupedByName = {};
  motoGP.forEach(item => {
    const fullName = `${item.winner.firstName} ${item.winner.lastName}`;
    if (!groupedByName[fullName]) groupedByName[fullName] = [];
    groupedByName[fullName].push(item);
  });
  res.status(200).json(groupedByName);
});

//Tampil “Bad Request”
app.use((req, res) => {
  res.status(400).send('Bad Request');
});

//Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});