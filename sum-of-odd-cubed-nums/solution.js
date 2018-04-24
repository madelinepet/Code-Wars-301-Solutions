function cubeOdd(arr) {
  console.log(arr);
  if(!arr){return undefined;}
  let filtered = arr.filter(x => typeof x === 'number');
  console.log(filtered);
  if(filtered.length < arr.length){
    return undefined;
  }
  let cubedArr = arr.map(x => Math.pow(x,3));
  let oddNums = cubedArr.filter(num => num% 2 !== 0);
  return oddNums.reduce((a,c) => a+c);
}
cubeOdd(['a',12,9,'z',42]);
