function urutkanAbjad(str) {
	// you can only write your code here!
	var kotak = [];

	// Memasukan str ke dalam array
	for (var i = 0; i < str.length; i++) {
		kotak.push(str[i]);
	}
	//sort array
	for (var i = 0; i < kotak.length; i++) {
		for (var j = 0; j < kotak.length - 1; j++) {
			var abjad = kotak[j];
			if (kotak[j] > kotak[j + 1]) {
				kotak[j] = kotak[j + 1];
			}
			if (kotak[j] === kotak[j + 1]) {
				kotak[j + 1] = abjad;
			}
		}
	}
	var tampung = '';
	// Merubah array menjadi string kembali
	for (var i = 0; i < kotak.length; i++) {
		tampung += kotak[i];
	}
	return tampung;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
