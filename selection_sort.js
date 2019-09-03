function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var min = arr[i];
        var index = i;
        for(var j = i+1; j < arr.length; j++) {
            if(min > arr[j]) {
                min = arr[j];
                index = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));