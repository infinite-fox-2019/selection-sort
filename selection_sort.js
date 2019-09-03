function selectionSort(arr){
  for(var i = 0; i < arr.length-1; i++){
    
    var min = arr[i];
    var awal = arr[i];
    var indeks = i;

    for(var j = i+1; j < arr.length; j++){
      if(min > arr[j]){
        min = arr[j];
        indeks = j;
      }
    }

    arr[i] = arr[indeks]
    arr[indeks] = awal
  }
  return arr;
}

var arr = [3,4,5,6,7,8,1,2,10,11,13,15,9,-1,-4534];
var arr2 = ['b','d','a','c'];
console.log(selectionSort(arr));
console.log(selectionSort(arr2));