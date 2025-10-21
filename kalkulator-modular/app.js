//Import modul
const tambah = require('./modules/tambah');
const kurang = require('./modules/kurang');
const kali = require('./modules/kali');
const bagi = require('./modules/bagi');

//Jalankan beberapa oprasi sederhana
const a = 12;
const b = 4;

console.log("===== Kalkulator Modular =====");
console.log(`Angka pertama: ${a}`);
console.log(`Angka kedua: ${b}`);
console.log("-------------------");
console.log(`Penjumlahan: ${tambah(a, b)}`);
console.log(`Pengurangan: ${kurang(a, b)}`);
console.log(`Perkalian: ${kali(a, b)}`);
console.log(`Pembagian: ${bagi(a, b)}`);