function panggilUnshift(){
  var kota = ["Bandung","Jakarta","Medan","Malang"];
  console.log(kota)
  // kota.splice(2,0,"Palembang")
  kota.unshift("Surabaya","Bali")
  return kota
}
console.log(panggilUnshift())
