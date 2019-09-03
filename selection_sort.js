function selectionSort(arr) {
    var penampung = 0;
    var lokasi = 0;
    for(var i = 0; i<arr.length; i++){
        for(var j = i + 1; j<arr.length; j++){
            if(j == i + 1){
                penampung = arr[i];
                lokasi = i;   
            }
            if(arr[j] < penampung){
                penampung = arr[j];
                lokasi = j;
            }
        }
        if(penampung < arr[i] && j == arr.length && i !== arr.length - 1){
            var swap = arr[i];
            arr[i] = arr[lokasi];
            arr[lokasi] = swap;
        }
    }   
    return arr;
}

var arrA = [33,2,52,106,73];
var arrB = [13,5,22,99,11];
console.log(selectionSort(arrA));
console.log(selectionSort(arrB));