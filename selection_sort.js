//smallest value swapped with the leftmost number in array
function linearSearch(search, arr) {
    
    for (var i=0; i<arr.length; i++) {
        if (arr.indexOf(search) !== -1) {
            return arr.indexOf(search)
        } else {
            return -1
        }
    }

}
let random_numbers= [6, 29, 18, 2, 72, 19, 18, 10, 37];
console.log(linearSearch(18, random_numbers));
console.log(linearSearch(9, random_numbers));

