const nama = "Tarno";
let usia = "38";

let biodata = document.getElementById(`biodata`)
function biodataDiri() {
    let golongan;
    if (usia >= 12 && usia <= 18) {
        golongan = "golongan remaja";
    }
    else if(usia >= 19 && usia <= 30) {
        golongan = "golongan tuwa";
    } 
    else if(usia >= 31) {
        golongan = "golongan sepuh";
    }
    else if(usia >= 4 && usia <= 11) {
        golongan = "golongan loli";
    }
    else {
        golongan = "golongan bayi";
    } 
    return biodata.innerHTML = golongan;
}

console.log (nama);
console.log (usia);

biodataDiri();

console.log (Ilmi);