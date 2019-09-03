

//basic linear search
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
// console.log(linearSearch(18, random_numbers));
// console.log(linearSearch(9, random_numbers));

//global linear search

function globalLinearSearch(search, arr) {
    var res = []
    for (var i=0; i<arr.length; i++) {
        if (search === arr[i]) {
            res.push(i)
        }
    }
    return res
}
let banana_arr = "banana".split(""); //["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr)); //[1, 3, 5]
