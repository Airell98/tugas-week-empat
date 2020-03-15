function shoppingTime(memberId, money) {
	// you can only write your code here!
	var hasil = '';
	var kotak = [];
	var check;
	var jumlah = money;
	var object = {};

	var barang = [
		[ 'Sepatu Stacattu', 1500000 ],
		[ 'Baju Zoro', 500000 ],
		[ 'Baju H&N', 250000 ],
		[ 'Sweater Unikloh', 175000 ],
		[ 'Casing Handphone', 50000 ]
	];
	if (memberId == undefined || memberId == '' || money < 50000) {
		if (money < 50000) {
			check = false;
			hasil += 'Mohon maaf uang anda tidak cukup';
		} else if (memberId == '' || memberId == undefined) {
			check = false;
			hasil += 'Mohon maaf, toko X hanya berlaku untuk member saja';
		}
	} else {
		check = true;
		for (var i = 0; i < barang.length; i++) {
			if (jumlah >= barang[i][1]) {
				jumlah -= barang[i][1];
				kotak.push(barang[i][0]);
			}
		}
		object.memberId = memberId;
		object.money = money;
		object.listPurchased = kotak;
		object.changeMoney = jumlah;
	}
	if (check) {
		return object;
	} else {
		return hasil;
	}
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
 console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
 console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
 console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
