function changeMe(arr) {
	// you can only write your code here!
	var object = {};

	for (var i = 0; i < arr.length; i++) {
		(object.firstName = arr[i][0]), (object.lastName = arr[i][1]);
		object.gender = arr[i][2];
		object.age = 2020 - arr[i][3];
		if (arr[i][3] == undefined || arr[i][3] > 2020) object.age = 'Invalid Birth Year';
		console.log(i + 1 + '. ' + arr[i][0] + arr[i][1] + ' :');
		console.log(object);
	}
	if (arr.length == 0) {
		console.log('""');
	}
}

// TEST CASES
changeMe([ [ 'Christ', 'Evans', 'Male', 1982 ], [ 'Robert', 'Downey', 'Male' ] ]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
