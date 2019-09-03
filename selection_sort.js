function selectionSort(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        var first = arr[i];
        var min = arr[i];
        var minIndex = i;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        if(min < first) {
            swapArrElement(arr, i, minIndex);
        }
    }

    return arr;
}

function swapArrElement(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
