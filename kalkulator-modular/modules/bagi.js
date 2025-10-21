function bagi(a, b){
    if(b === 0){
        return"Error: Tidak bisa membagi dengan nol!";
    }
    return a / b;
}

module.exports = bagi;