// smallest value swapped with the leftmost number in array
//release 0

function selectSort(arr) {
// for (var i=0; i<arr.length-1; i++) {
//     for (var j=i+1; j<arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         console.log(arr)

//         }
//     }
// }
// return arr


// var min = Number.MAX_SAFE_INTEGER
// for (var i=0; i<arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min);



    var temp = 0
    for (var i=0; i<arr.length; i++) {
        var min = arr[i]
        var index = i
        for (var j=i+1; j<arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                index =j
            }
        }
        temp = arr[i]
        arr[i] = arr[index]
        arr[index] = temp
        
    }
    ;
    
return arr
}
console.log((selectSort([33, 2, 77, 52, 106, 73]))); //[2, 33, 52, 73, 106] 
console.log((selectSort([13, 5, 22, 99, 11] ))); //[5, 11, 13, 22, 99]
console.log((selectSort([4,5,3,2,1] ))); //[5, 11, 13, 22, 99]






