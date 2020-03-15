function naikAngkot(arrPenumpang) {
	rute = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
	//your code here
	if (arrPenumpang.length === 0 || arrPenumpang.length === undefined) {
		return arrPenumpang;
	}

	var start = 0;
  var end = 0;
  var kotak = [];
	for (var j = 0; j < arrPenumpang.length; j++) {
		start = 0;
		end = 0;
		for (var i = 0; i < rute.length; i++) {
			if (arrPenumpang[j][1] === rute[i]) {
				start += i;
			}
			if (arrPenumpang[j][2] === rute[i]) {
				end += i;
			}
		}
		var harga = (end - start) * 2000;
		var obj = {
			penumpang: arrPenumpang[j][0],
			naikDari: arrPenumpang[j][1],
			tujuan: arrPenumpang[j][2],
			bayar: harga
    };
    kotak.push(obj)
  }
 return kotak;
}

//TEST CASE
console.log(naikAngkot([ [ 'Dimitri', 'B', 'F' ], [ 'Icha', 'A', 'B' ] ]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]
