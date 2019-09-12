function panggilSplice(){
  var kota = ["Jakarta","Medan","Padang","Malang"];
  console.log(kota)
  // kota.splice(2,0,"Palembang")
  kota.splice(1,2)
  return kota
}
console.log(panggilSplice())
