function selectionSorting(input){

    for(var i=0; i<input.length; i++){
        var minIndex = i
        for(var j=i+1; j<input.length; j++){
            //console.log(input[i], input[j], input[minIndex])
            if(input[j]<input[minIndex]){
                minIndex = j
                //console.log(input[minIndex])
            }
            
        }

        var swap = input[i]
        input[i]= input[minIndex]
        input[minIndex] = swap
        //console.log(input[i])
    }
    return input
}

console.log(selectionSorting([33,2,53,106,73]))
console.log(selectionSorting([2,33,52,73,106]))