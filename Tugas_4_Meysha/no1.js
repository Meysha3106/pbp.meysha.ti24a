//Data Nilai Siswa
const studentsScore = [
    {name: 'Andi', score: 90},
    {name: 'Rudi', score: 80},
    {name: 'Dira', score: 100},
];

//Mencari siswa dengan nilai tertinggi
const siswaTertinggi = studentsScore.reduce((pemenang, siswaSekarang) => {
    return siswaSekarang.score > pemenang.score ? siswaSekarang: pemenang;
    });

console.log("Siswa dengan nilai tertinggi adalah");
console.log(`Nama: ${siswaTertinggi.name}`);
console.log(`Nilai: ${siswaTertinggi.score}`);