console.log(`===SELECTION SORT===`)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j
    }
    if (i !== minIndex) {
      let swap = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = swap
    }
  }
  return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))


// console.log(`\n===QUICK SORT===`)

// const getPartition = (arr, low, high) => {
//   let minIndex = low - 1
//   let value = arr[high]
//   for (let i = low; i < high; i++) {
//     if (arr[i] < value) {
//       minIndex++
//       let swapLeft = arr[minIndex]
//       arr[minIndex] = arr[i]
//       arr[i] = swapLeft      
//     }
//   }
//   let swapRight = arr[high]
//   arr[high] = arr[minIndex + 1]
//   arr[minIndex + 1] = swapRight
//   return minIndex + 1
// }

// const quickSort = (arr, min, max) => {
  
//   if (min < max) {
//     let value = getPartition(arr, min, max)
//     quickSort(arr, min, value - 1)
//     quickSort(arr, value + 1, max)
//   }
//   return arr
// }

// const unsortedArr = [33, 2, 52, 106, 73]
// console.log(quickSort(unsortedArr, 0, unsortedArr.length - 1))

