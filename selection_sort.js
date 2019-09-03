function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let smallest = arr[i];
        let index;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < smallest) {
                smallest = arr[j]
                index = j
            }
        }
        if (arr[i] > smallest) {
            let temp = arr[i]
            arr[i] = smallest;
            arr[index] = temp;
        }
        smallest = arr[i]
    }
    return arr
}

let num1 = [33, 2, 52, 106, 73]
let num2 = [13, 5, 22, 99, 11]

console.log(selectionSort(num1));
console.log(selectionSort(num2));


//QUICKSORT
//==============================================================================
let array = [5, 4, 6, 21, 3, 25, 6, 7, 2, 1, 13, 15]


function quickSort(array) {

    if (array.length === 0) {
        return []
    } else {
        let pivot = array[array.length - 1]
        let high = []
        let low = []

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > pivot) {
                high.push(array[i])
            } else {
                low.push(array[i])
            }
        }
        return quickSort(low).concat(pivot).concat(quickSort(high))
    }
}

console.log(quickSort(array))

