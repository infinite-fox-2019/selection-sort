function sectionSort(data){
    for(let i = 0 ; i < data.length; i++){
        let temp = data[i]
        let count = -1;
        for(let j = i ; j < data.length; j++){
            if (temp > data[j]) {
                temp = data[j]
                count = j
            }
        }
        if (count !== -1) {
            data[count] = data[i]
            data[i] = temp
        }
    }
    return data
}
console.log(sectionSort([33,2,52,106,73])); //2, 33, 52, 73, 106 
console.log(sectionSort([13,5,22,99,11])); //5, 11, 13, 22, 99