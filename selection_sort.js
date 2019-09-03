function selectionSort(num){
    for(var i = 0;i<num.length;i++){
        for(var j=i;j<num.length;j++){
            if(num[j+1]<num[j]){
                var temp = num[j];
                num [j] = num[j+1];
                num[j+1]=temp;
            }
        }
    }
    return num;
}

console.log(selectionSort([33,3,52,106,73]))//[2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11]))//[5,11,13,22,99]