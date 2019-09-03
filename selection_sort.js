function selectionSort (arr){
    var penampung = 0
    for(var i = 0 ; i<arr.length ; i++){
        var terkecil = arr[i]
        var index = i
        for(var j = i+1 ; j<arr.length ; j++){
            if (arr[j]<terkecil){
                terkecil = arr[j]
                index = j
            }
        }
        penampung = arr[i]
        arr[i] = arr[index]
        arr[index] = penampung
    }
    return arr
}

console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([7, 1, 9, 3, 8]));