function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let min = Infinity
        let indeksMin = i
        for (let j=i; j<arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                indeksMin = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[indeksMin]
        arr[indeksMin] = temp
    }
    return arr
}

console.log(selectionSort([3,5,7,9,1]))
console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))