function selectionSort(arr){
    for (var i=0; i<arr.length; i++){
        var min = arr[i];
        var swap = i
        for (var j=i+1; j<arr.length; j++){
            if (arr[j] < min){
                min = arr[j]
                swap = j
            }
        }
        store = arr[i]
        arr[i] = arr[swap]
        arr[swap] = store;
    }
    return arr;
}
console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));