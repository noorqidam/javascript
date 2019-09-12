function panggilRegexp(value) {
 var ambilData1 = value.match(/ke/g);
 var ambilData2 = value.match(/[ke]/g)
 var ambilData3 = value.match(/[^ke]/g)
 var ambilData4 = value.match(/[a-i]/g)
 console.log(ambilData1);
 console.log(ambilData2);
 console.log(ambilData3);
 console.log(ambilData4);
}

panggilRegexp("Bulan ke 1 sd ke 4");

function panggilRegexp2() {
 let str1 = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";
 let str2 = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";
 console.log(str1.match(/c/))
 console.log(str2.match(/c/g))
}

panggilRegexp2()
