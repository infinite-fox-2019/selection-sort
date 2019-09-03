function selectionSort(arr) {
    var temp
    for (var i=0; i<arr.length; i++) {
        for (var j=0; j<arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))