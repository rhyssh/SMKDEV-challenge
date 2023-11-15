// Fungsi untuk mencari missing number
function cariMissingNumber(n, inputNumbers) {
    // Cek apakah input n valid
    if (n <= 0) {
        return -1;
    }

    // Buatlah list angka dari 1 hingga n
    const listNumbers = [];
    for (let i = 0; i < n; i++) {
        listNumbers.push(i + 1);
    }

    // Hapus angka-angka yang ada dalam input kedua dari list
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n; j++) {
            if (listNumbers[j] === inputNumbers[i]) {
                listNumbers[j] = 0;
                break;
            }
        }
    }

    // Kembalikan angka pertama yang tidak 0
    for (let i = 0; i < n; i++) {
        if (listNumbers[i] !== 0) {
            return listNumbers[i];
        }
    }

    // Jika tidak ada angka yang tidak 0, maka missing number adalah n
    return n;
}

// Fungsi utama untuk membaca input dan mencetak output
function main() {
    let n, inputNumbers;

    // Baca input n
    n = parseInt(prompt('Masukkan nilai n:'));

    // Baca input array angka
    inputNumbers = prompt('Masukkan angka-angka (dipisahkan spasi):').split(' ');

    // Konversi input ke array angka
    inputNumbers = inputNumbers.map(Number);

    // Cari missing number
    const missingNumber = cariMissingNumber(n, inputNumbers);

    // Cetak output
    console.log('Angka yang hilang adalah:', missingNumber);
}

main();