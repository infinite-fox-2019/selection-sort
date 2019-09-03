function selection_sort (arr) {
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }

        }
    }

    return arr
}

var example = [8, 5, 7, 1, 9, 3]
console.log(selection_sort(example));
