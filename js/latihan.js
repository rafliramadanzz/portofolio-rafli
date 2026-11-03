// Latihan JavaScript Dasar - Minggu 06

console.log("Halo, saya M.Rafli Ramadani!");
console.log("Ini latihan JavaScript pertamaku.");

// 2. Data siswa
const nama = "M. Rafli Ramadani";
const kelas = "X Rekayasa Perangkat Lunak";
const kkm = 75;

let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

// 3. Menampilkan data siswa
console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

// Menghitung rata-rata nilai
const rataRata = (nilaiTugas + nilaiUts + nilaiUas) / 3;

// Syarat kelulusan dan seritifikat
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

// Menampilkan hasil
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

// menentukan predikat nilai
let predikatNilai;

if (rataRata >= 90) {
    predikatNilai = "A"
} else if (rataRata >= 80) {
    predikatNilai = "B"
} else if (rataRata >= 70) {
    predikatNilai = "C"
} else {
    predikatNilai = "D";
}

console.log(`Predikat: ${predikatNilai}`);

// Pesan kelulusan
if (lulus) {
    console.log("Selamat, kamu lulus KMM!");
} else {
    console.log("Tetap semangat, ikuti remidial yaaa.");
} 