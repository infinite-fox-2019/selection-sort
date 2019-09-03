
function sortSelect(arr){
    for(var i = 0; i<arr.length;i++){
        var terkecil = i
        for(var j = i+1; j<arr.length;j++){
            if (arr[j] < arr[terkecil]){
                terkecil = j
            }
        }
         var temp = arr[i]
         arr[i] = arr[terkecil]
         arr[terkecil] = temp
    }
    return arr
}


console.log(sortSelect([33,2,52,106,73]))
console.log(sortSelect([13,5,22,99,11]))

