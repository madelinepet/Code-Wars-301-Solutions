function capitalize(s, arr) {
  let sAsArr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    //only do this logic if the string has a character at index
    if (arr[i] < sAsArr.length) {
      //sAsArray at the index corresponding to the value of array[i]
      let stringToInsert = `${sAsArr[arr[i]]}`;
      let uppercaseInsert = stringToInsert.toUpperCase();
      //insert between index num and delete one, add in above string
      sAsArr.splice(arr[i], 1, uppercaseInsert);
    }
  // console.log(indexString);
  }
  return sAsArr.join('');
}


// capitalize("abcdef",[1,2,5])
capitalize('abcdef',[1,2,5,100]);