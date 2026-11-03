/**
 * Latihan JavaScript: Fungsi
 */

// Soal 1: Ganjil atau Genap
const ganjilGenap = (n) => {
    return n % 2 === 0 ? "genap" : "ganjil";
};


// Soal 2: Celsius ke Fahrenheit
const celsiusKeFahrenheit = (c) => {
    return c * 9 / 5 + 32;
};


// Soal 3: Nilai terbesar dari banyak angka
const nilaiTerbesarBanyak = (...angka) => {
    return Math.max(...angka);
};


// Soal 4: Tahun Kabisat
const tahunKabisat = (tahun) => {
    return (tahun % 4 === 0 && tahun % 100 !== 0)
        || tahun % 400 === 0;
};


// Soal 5: Harga setelah diskon
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.8;
    } else if (total >= 100000) {
        return total * 0.9;
    } else {
        return total;
    }
}


// Tantangan 1: Nilai terbesar dari 3 angka
const nilaiTerbesar = (a, b, c) => {
    return Math.max(a, b, c);
};


// Tantangan 2: Menghitung rata-rata nilai
const hitungRataRata = (tugas, uts, uas) => {
    return (tugas + uts + uas) / 3;
};


// Tantangan 3: Menentukan predikat nilai
function predikat(rataRata) {
    if (rataRata >= 90) {
        return "A";
    } else if (rataRata >= 80) {
        return "B";
    } else if (rataRata >= 70) {
        return "C";
    } else if (rataRata >= 60) {
        return "D";
    } else {
        return "E";
    }
}


// Pengujian fungsi
console.log("Soal 1:", ganjilGenap(8));
console.log("Soal 2:", celsiusKeFahrenheit(25));
console.log("Soal 3:", nilaiTerbesarBanyak(10, 25, 15));
console.log("Soal 4:", tahunKabisat(2024));
console.log("Soal 5:", hargaSetelahDiskon(200000));

console.log("Tantangan 1:", nilaiTerbesar(10, 20, 15));
console.log("Tantangan 2:", hitungRataRata(85, 78, 89));
console.log("Tantangan 3:", predikat(84));


// Pengujian predikat
console.log("Predikat 95:", predikat(95));
console.log("Predikat 90:", predikat(90));
console.log("Predikat 84:", predikat(84));
console.log("Predikat 70:", predikat(70));
console.log("Predikat 69:", predikat(69));