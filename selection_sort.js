function selectionSort(arr){
    for(var i = 0; i < arr.length-1; i++){
        var temp = arr[i]
        var smallest = Infinity;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < smallest){
                smallest = arr[j]
                var smallestIndex = j
            }
        }
        if(temp > smallest){
            arr[i] = smallest
            arr[smallestIndex] = temp
        }
        // console.log(arr)
    }
    return arr
}

var case1 = [33,2,52,106,73]
var case2 = [13,5,22,99,11]

console.log('test case 1')
console.log(case1)
console.log(selectionSort(case1))
console.log('test case 2')
console.log(case2)
console.log(selectionSort(case2))