// introduction 3
const printSquare = (angka) => {
  let text = ''
  if (typeof angka === 'number') {
    for (let baris = 1; baris <= angka; baris++) {
      for (let kolom = 1; kolom <= angka; kolom++) {
        text += kolom
      }
      if (baris !== angka) text += '\n'
    }
    return text
  } else {
    return 'Data yang dimasukkan harus angka'
  }
}
console.log(printSquare(5))
