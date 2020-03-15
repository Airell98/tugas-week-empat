function ubahHuruf(kata) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var str = ''
     for(var i = 0; i < kata.length; i++){
         for(var j =0; j < abjad.length; j++){
            if(kata[i] === abjad[j]){
                str += abjad[j+1]
            }
            if(kata[i] === 'z'){
                str += 'a'
                break
            }
         }
     }
     return str;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
   console.log(ubahHuruf('developer')); // efwfmpqfs
   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
   console.log(ubahHuruf('keren')); // lfsfo
   console.log(ubahHuruf('semangat')); // tfnbohbu