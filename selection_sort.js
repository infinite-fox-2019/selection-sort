function selectionSort(num){
    var temp = 0;
    for(var i = 0;i<num.length;i++){
        temp = i;
        for(var j=i;j<num.length;j++){
            if(num[temp]>num[j]){
                temp = j
            }
        }
        if (i != temp){
            var test = num[i];
            num[i]=num[temp];
            num[temp] = test;
        } 
    }
    return num;
}

console.log(selectionSort([33,3,52,106,73]))//[2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11]))//[5,11,13,22,99]