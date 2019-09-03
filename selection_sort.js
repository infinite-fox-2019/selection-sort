function selectionSort (arr){
  var swap = false
  for(i=0 ; i<arr.length ; i++){
    let min = arr[i]
    var temp = i
    for(j=i ; j<arr.length ; j++){
      if(min > arr[j]){
        min = arr[j]
        var temp = j
      }
    }
    arr[temp] = arr[i]
    arr[i] = min
  }

  return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))

//output [2, 33, 52, 73, 106]
//output [5, 11, 13, 22, 99]

