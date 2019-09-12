function panggilObjects() {
 var mobil = {
   type: 'Sedan',
   harga: 200000,
   warna: 'Putih',
   // tahun: ['2001','2002','2003','2004']
 }
 mobil.tahun = 2018; //menambah property tahun
 mobil.harga = 100000; //merubah property harga
 console.log(mobil);
 console.log(mobil.warna);
 // console.log(mobil.tahun[1])
}
panggilObjects()
