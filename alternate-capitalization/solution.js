function capitalize(s){
  //in the even array, put the split chars of the input (s)
  let evenArray = s.split('');
  let oddArray = [];
  //include 0 as an even number
  oddArray.push(evenArray[0]);
  //start at index 1 because 0 is accounted for
  for(let i=1; i<evenArray.length; i++) {
    //if i is at an even index. In other words, divided by two, remainder is 0
    if(i%2 === 0) {
      oddArray.push(evenArray[i]);
      evenArray[i] = evenArray[i].toUpperCase();
    }else{
      oddArray[i] = evenArray[i].toUpperCase();
    }
  }
  //capitalize firt letter of second string
  evenArray[0] = evenArray[0].toUpperCase();
  //join letters back into strings between chars
  //return array with two variations in it
  let answer=[evenArray.join(''), oddArray.join('')];
  return answer;
}
capitalize('codewars');