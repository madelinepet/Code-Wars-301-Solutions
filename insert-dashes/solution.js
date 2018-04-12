function insertDash(num) {
  var numArray = num.toString().split('');

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i]%2 === 1 && numArray[i+1]%2 === 1) {
      numArray.splice(i+1, 0, '-');
    }
  }
  var win = numArray.join().toString().replace(/,/g,'');
  return win;
}