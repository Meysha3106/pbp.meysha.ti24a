function hitungKaloriLari(menit) {
    // 60 kalori per 5 menit
    const kaloriPerMenit = 60 / 5;
    return kaloriPerMenit * menit;
}

function hitungKaloriPushup(menit) {
    // 200 kalori per 30 menit
    const kaloriPerMenit = 200 / 30;
    return kaloriPerMenit * menit;
}

function hitungKaloriPlank(menit) {
    // 5 kalori per 1 menit
    const kaloriPerMenit = 5;
    return kaloriPerMenit * menit;
}

function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Lari (menit): ', (lariMenit) => {
        readline.question('Push-up (menit): ', (pushupMenit) => {
            readline.question('Plank (menit): ', (plankMenit) => {
                const kaloriLari = hitungKaloriLari(parseFloat(lariMenit));
                const kaloriPushup = hitungKaloriPushup(parseFloat(pushupMenit));
                const kaloriPlank = hitungKaloriPlank(parseFloat(plankMenit));
                
                const totalKalori = kaloriLari + kaloriPushup + kaloriPlank;
                
                console.log(`\nKalori terbakar dari lari: ${kaloriLari.toFixed(2)} kalori`);
                console.log(`Kalori terbakar dari push-up: ${kaloriPushup.toFixed(2)} kalori`);
                console.log(`Kalori terbakar dari plank: ${kaloriPlank.toFixed(2)} kalori`);
                console.log(`Total kalori terbakar: ${totalKalori.toFixed(2)} kalori`);
                
                readline.close();
            });
        });
    });
}

main();