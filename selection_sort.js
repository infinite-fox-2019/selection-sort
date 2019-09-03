let num = [33, 2, 52, 106, 73]
let num2 = [13, 5, 22, 99, 11]

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = array[i]
        let happen = false
        for (let j = i + 1; j < array.length; j++) {
            if (min > array[j]) {
                min = j
                happen = true
            }
        }
        if (happen) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }

    }

    return array
}

console.log(selectionSort(num));
console.log(selectionSort(num2));