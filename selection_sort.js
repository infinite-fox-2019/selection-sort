function selectionSort(arr){
    var len = arr.length
    for(var i=0; i<len; i++){
        var minimum = i
        for(var j=i+1; j<len; j++){
            if(arr[minimum]>arr[j]){
                minimum = j
            }
        }
        var tampung = arr[i]
        arr[i] = arr[minimum]
        arr[minimum] = tampung
    }
    return arr
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))