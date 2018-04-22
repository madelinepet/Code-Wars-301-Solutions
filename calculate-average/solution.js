function find_average(array) {
  //reduce takes you from a list of values to one
  return array.reduce(function(sum, a) { return sum + a; },0)/(array.length);
}

find_average([1,2,3]);