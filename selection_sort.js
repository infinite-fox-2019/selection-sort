const smallestNum = arr => {
  let smallest = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i]
  }

  return smallest
}

const selectionSort = arr => {
  let smallest = smallestNum(arr)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == smallest) {
        const tempArrJ = arr[j]
        arr[j] = arr[i]
        arr[i] = tempArrJ
      }
    }
    smallest = smallestNum(arr.slice(i + 1))
  }
  return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
