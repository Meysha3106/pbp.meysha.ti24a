const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tanya(pertanyaan) {
  return new Promise((jawaban) => rl.question(pertanyaan, jawaban));
}

async function hitungKalori() {
  let totalKalori = 0;
  let lanjut = 'ya';

  while (lanjut.toLowerCase() === 'ya') {
    const olahraga = (await tanya("Masukkan jenis olahraga (lari/pushup/plank): ")).toLowerCase();
    const waktu = Number(await tanya("Masukkan lama waktu olahraga (menit): "));

    let kalori = 0;

    if (olahraga === "lari") {
      kalori = (60 / 5) * waktu; // 60 kalori tiap 5 menit
    } else if (olahraga === "pushup") {
      kalori = (200 / 30) * waktu; // 200 kalori tiap 30 menit
    } else if (olahraga === "plank") {
      kalori = 5 * waktu; // 5 kalori tiap 1 menit
    } else {
      console.log("Jenis olahraga tidak dikenal!");
    }

    totalKalori += kalori;
    console.log(`Kalori terbakar dari ${olahraga}: ${kalori.toFixed(2)} kalori`);
    lanjut = await tanya("Apakah ingin menambah olahraga lain? (ya/tidak): ");
  }

  console.log(`\nTotal kalori terbakar dari semua aktivitas: ${totalKalori.toFixed(2)} kalori`);
  rl.close();
}

hitungKalori();