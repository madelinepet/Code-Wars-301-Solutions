
function isNice(arr){
  let passed=[];
  let failed=[];
  for(let i=0; i<arr.length; i++){
    if(arr.includes(arr[i]-1) || arr.includes(arr[i]+1)){
      passed.push('T');
    }else{
      failed.push('F');
    }
  }
  if(!arr.length){
    return false;
  }
  if(!failed.length){
    return true;
  }
  if(passed.length < arr.length){
    return false;
  }
}
isNice([2,10,9,3]);
isNice([2,9,7,6]);