const payment = (total) => {
  let diskon, keterangan, totalBelanja
  if (total >= 1_000_000) {
    diskon = 10
  } else if (total >= 500_000 && total < 1_000_000) {
    diskon = 5
  } else {
    diskon = 0
  }
  diskon != 0
    ? (keterangan = `Anda mendapatkan diskon ${diskon}%`)
    : (keterangan = 'Anda tidak mendapatkan diskon')

  diskon = (total * diskon) / 100
  totalBelanja = total - diskon
  return `${keterangan}, total belanja anda ${totalBelanja}`
}
console.log(payment(1200000))
