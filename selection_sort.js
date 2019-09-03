// smallest value swapped with the leftmost number in array
//release 0

function selectSort(arr) {
for (var i=0; i<arr.length-1; i++) {
    for (var j=i+1; j<arr.length; j++) {
        if (arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}
return arr
}
console.log((selectSort([33, 2, 52, 106, 73]))); //[2, 33, 52, 73, 106] 
console.log((selectSort([13, 5, 22, 99, 11] ))); //[5, 11, 13, 22, 99]





