#include <iostream>

using namespace std;

int find_missing_number(int n, int input_numbers[]) {
  int i;

  // Cek apakah input n valid
  if (n <= 0) {
    return -1;
  }

  // Buatlah list angka dari 1 hingga n
  int list_numbers[n];
  for (i = 0; i < n; i++) {
    list_numbers[i] = i + 1;
  }

  // Hapus angka-angka yang ada dalam input kedua dari list
  for (i = 0; i < n - 1; i++) {
    for (int j = 0; j < n; j++) {
      if (list_numbers[j] == input_numbers[i]) {
        list_numbers[j] = 0;
        break;
      }
    }
  }

  // Kembalikan angka pertama yang tidak 0
  for (i = 0; i < n; i++) {
    if (list_numbers[i] != 0) {
      return list_numbers[i];
    }
  }

  // Jika tidak ada angka yang tidak 0, maka missing number adalah n
  return n;
}

int main() {
  int n, input_numbers[100];

  // Membaca input
  cin >> n;
  for (int i = 0; i < n - 1; i++) {
    cin >> input_numbers[i];
  }

  // Mencari missing number
  int missing_number = find_missing_number(n, input_numbers);

  // Mencetak output
  cout << missing_number << endl;

  return 0;
}
