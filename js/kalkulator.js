// Kalkulator Nilai Interaktif

// Fungsi menghitung rata-rata
const hitungRataRatakalkulator = (tugas, uts, uas) => {
    return (tugas + uts + uas) / 3;
};

// Fungsi menentukan predikat
function predikatkalkulator(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}

// Mengambil elemen HTML
const inputTugas = document.querySelector("#nilaiTugas");
const inputUTS = document.querySelector("#nilaiUTS");
const inputUAS = document.querySelector("#nilaiUAS");
const btnHitung = document.querySelector("#btnHitung");
const hasil = document.querySelector("#hasil");

// Menjalankan kalkulator saat tombol diklik
btnHitung.addEventListener("click", function () {
    const tugas = Number(inputTugas.value);
    const uts = Number(inputUTS.value);
    const uas = Number(inputUAS.value);

    // Memeriksa apakah semua nilai sudah diisi
    if (
        inputTugas.value === "" ||
        inputUTS.value === "" ||
        inputUAS.value === ""
    ) {
        hasil.textContent = "Masukkan semua nilai terlebih dahulu!";
        return;
    }

    // Memeriksa rentang nilai
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus berada di antara 0 sampai 100!";
        return;
    }

    // Menghitung rata-rata dan predikat
    const rataRata = hitungRataRatakalkulator(tugas, uts, uas);
    const nilaiPredikat = predikatkalkulator(rataRata);

    // Menampilkan hasil
    hasil.textContent =
        `Rata-rata: ${rataRata.toFixed(2)} | Predikat: ${nilaiPredikat}`;
});