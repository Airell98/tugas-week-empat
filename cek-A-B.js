function checkAB(num) {
	// you can only write your code here!
	var a = [];
	var b = [];
	var kotak = [];
	var box = [];
	var hasil;
	for (var i = 0; i < num.length; i++) {
		if (num[i] === 'a') {
			a.push(i);
		} else if (num[i] === 'b') {
			b.push(i);
		}
	}
	//sorting
	for (var i = 0; i < a.length; i++) {
		for (var j = 0; j < b.length; j++) {
			if (a[i] > b[j]) {
				kotak.push(a[i] - b[j]);
			} else {
				kotak.push(b[j] - a[i]);
			}
		}
	}

	//push box
	for (var i = 0; i < kotak.length; i++) {
		if (kotak[i] === 4) {
			box.push(kotak[i]);
		}
	}

	// penentuan hasil;

	if (a.length > 0 && b.length > 0) {
		if (box[0] === 4) {
			hasil = true;
		} else {
			hasil = false;
		}
	} else {
		hasil = false;
	}
	return hasil;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
