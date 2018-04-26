function mutateMyStrings(stringOne, stringTwo){
  let arrOne = stringOne.split('');
  let arrTwo = stringTwo.split('');
  //\n is new line
  let rtnVal = stringOne.concat('\n');
  for(let i in arrOne){
    if(arrOne[i] !== arrTwo[i]){
      //if letter not equal, change arrOne to match arrTwo's letter at i
      arrOne[i] = arrTwo[i];
      //in for loop so that we return every letter change
      let stringAgainOne = arrOne.join('');
      //there is an odd n at the end in the tests in the kata, so add that in in concatenation
      rtnVal = rtnVal.concat(stringAgainOne + '\n');
    }
  }
  return rtnVal;
}
mutateMyStrings('bubble gum', 'turtle ham');

