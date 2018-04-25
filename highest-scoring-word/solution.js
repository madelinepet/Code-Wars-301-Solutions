function high(x)
{
  let pointsPerWord = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let returnString = '';
  let highScore = 0;
  var inputArray = x.split(' ');

  for (let i = 0; i < inputArray.length; i++){
    pointsPerWord[i]=0;
    for (let j = 0; j < inputArray[i].length; j++){
      if(alphabet.indexOf(inputArray[i][j]) >-1){
        pointsPerWord[i]+= alphabet.indexOf(inputArray[i][j])+1;
      }
    }
  }

  for (let k = 0; k < inputArray.length; k++)
    if (pointsPerWord[k] > highScore){
      highScore = pointsPerWord[k];
      returnString = inputArray[k];
    }

  return returnString;
}


high('what time are we climbing up the volcano');
