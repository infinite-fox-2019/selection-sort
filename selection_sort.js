function selectionsort ( arr ) {
    // var result = [];
    
    for(let i=0; i<arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        var tamp = arr[min]
        arr[min] = arr[i];
        arr[i] = tamp
    }
    return arr
}


//test case 
console.log(selectionsort([33,52,2,106,73])) // [2,33,52,73,106]
console.log(selectionsort([33,2,52,106,73])) // [2,33,52,73,106]
console.log(selectionsort([13,5,22,99,11])) // [5,11,13,22,99]
