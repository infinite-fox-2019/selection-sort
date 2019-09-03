function selectionSort(arr) {
  // loop arr from the start
  for (var i = 0; i < arr.length; i++) {
    // set variables to store the element and its index
    var temp = arr[i];
    var tempIndex = -1;
    // loop arr from the next element
    for (var j = i+1; j < arr.length; j++) {
      // if the element is smaller than temp, store its value and its index
      if (arr[j] < temp) {
        temp = arr[j];
        tempIndex = j;
      }
    }
    // set a variable to store the element planned to be swapped
    var swap = -1;
    // if the smallest element found in j loop is smaller than arr[i]:
    // a. take out arr[i] to be swapped
    // b. set arr[i] to temp
    // c. move arr[i]--stored in swap--to the location of the smallest element in j
    if (temp < arr[i]) {
      swap = arr[i];
      arr[i] = temp;
      arr[tempIndex] = swap;
    }
  }
  return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));