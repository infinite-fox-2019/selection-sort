function selectionSorting (arr) {
    for (var i = 0; i < arr.length; i++) {
    var smallest = arr[i];
    var indeks = i;
        for (var j = i+1; j < arr.length; j++) {
            if (smallest > arr[j]) {
                smallest = arr[j];
                indeks = j;
            }
        }
        var temp = arr[i];
        arr[i] = smallest;
        arr[indeks] = temp;
     }
    return arr
}
console.log(selectionSorting([8,5,7,1,9,3]));
console.log(selectionSorting([33,2,52,106,73]));
console.log(selectionSorting([13,5,22,99,11]));
console.log(selectionSorting([8,5,60,1,88,3]));

