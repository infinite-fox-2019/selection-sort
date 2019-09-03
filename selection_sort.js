function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var smallest = arr[i];
    var x = -1
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        x = j;
      }
    }
    if (x !== -1){
      arr[x] = arr[i];  
      arr[i] = smallest;
    }
  }
  return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73])); // [2,33,52,73,106]
console.log(selectionSort([13, 5, 22, 99, 11])); // [5,11,13,22,99]
