function selectionSort(array){
    for (var i = 0; i < array.length; i++) {
        var tempIndex = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[tempIndex]) {
                tempIndex = j;
            }
        }
        var temp = array[i];
        array[i] = array[tempIndex];
        array[tempIndex] = temp;
    }
    return array;
};

console.log(selectionSort([33,2,52,106,72])); // [2,33,52,72,106]
console.log(selectionSort([13,5,22,99,11])); // [5,11,13,22,99]