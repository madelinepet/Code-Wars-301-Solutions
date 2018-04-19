function formatWords(arr) {
  if (!arr){
    return '';
  }
  let result = arr.filter(index => index !== '');
  let str= result.join(', ');
  return str.replace(/,([^,]*)$/, ' and$1');
}
