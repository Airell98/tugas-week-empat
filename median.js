function cariMedian(arr) {
    // you can only write your code here!
    if(arr.length % 2 != 0){
        var angka = 0
        for(var i = 0; i < arr.length/2 + 1; i++){
            angka = arr[i-1];
        }
    }else {
        for(var j = 0; j <= arr.length/2; j++){
            angka = arr[j-1] + arr[j];
           angka /= 2
        }
    }
   return angka
  }
  
  // TEST CASES  
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
   console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
   console.log(cariMedian([1, 3, 3])); // 3
   console.log(cariMedian([7, 7, 8, 8])); // 7.5