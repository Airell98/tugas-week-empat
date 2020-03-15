function digitPerkalianMinimum(angka) {
	// you can only write your code here!
	var kotak = [];

	for (var i = 1; i <= angka; i++) {
		for (var j = 1; j <= angka; j++)
			if (i * j == angka) {
				kotak.push(i.toString() + j.toString());
			}
	}
	//sorting kotak
	for (var i = 0; i < kotak.length; i++) {
		for (var j = 0; j < kotak.length - 1; j++) {
			var nomor = kotak[j];
			if (kotak[j].length > kotak[j + 1].length) {
				kotak[j] = kotak[j + 1];
			}
			if (kotak[j] == kotak[j + 1]) {
				kotak[j + 1] = nomor;
			}
		}
	}
	var hasil = kotak[0].length;

	return hasil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
   console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
