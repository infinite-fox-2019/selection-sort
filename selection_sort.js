function selectionSort(arr){

    // var newArr = []

    for(var i=0; i<arr.length; i++){
        var min = arr[i]
        var minIndex = -1
        for(var j = i+1; j<arr.length; j++){
            if(arr[j] < min){
                min = arr[j]
                minIndex = j
            }
        }
        if(arr[i] > arr[minIndex]){
            var temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

// console.log(selectionSort([8,5,7,1,9,3]))
console.log(selectionSort([33,2,52,106,72])) //2,33,52,72,106