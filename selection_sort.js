function selectionSort (input) {
    for (let i= 0;i<input.length-1;i++) {
        let savedItem = input[i];
        let min = input[i];
        let replaced = i;
        for (let j = i+1;j<input.length;j++) {
            if (input[j] < min) {
                min = input[j];
                replaced = j
            }
        }

        input[i] = min;
        input[replaced] = savedItem

    }
    return input;
}//end function

function subQuick(pivot,left,right) {

}

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }else {
        let alpha = [];
        let beta = [];
        let gather = [];
        let pivot = arr.pop();
        for (let i = 0;i<arr.length;i++) {
            if (arr[i] < pivot) {
                alpha.push(arr[i])
            }else {
                beta.push(arr[i])
            }
        }
        return gather.concat(quickSort(alpha),pivot,quickSort(beta))
       
    }
  
}//end function


let dataArray1 = [33,2,52,106,73];
let dataArray2 = [2,33,52,73,106];
let dataArray3 = [2,56,3,7,89,5,12,42,67,11,34]
// dataArray1.pop();
// console.log(dataArray1)

// console.log(selectionSort(dataArray1)); //
// console.log(selectionSort(dataArray2)); //

console.log(quickSort(dataArray1));
console.log(quickSort(dataArray2))
console.log(quickSort(dataArray3))

















	









