//returns true if the given array contains the given value
// contains([1,2,3,4,5], 4) -> true
// contains([1,2,3], 4) -> false


function contains(arr, value){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return true
        }
    }

    return false
}

console.log(contains([], 67))
console.log(contains([14,15,16,22,32], 67))
console.log(contains([14,15,16,22,32,67], 67))

/**
 * -----------------
 */

function isSorted(arr){

    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] > arr[i]){
            return false
        }
    }

    return true

}

console.log('----------------------');
console.log(isSorted([]))
console.log(isSorted([1]))
console.log(isSorted([1,2]))
console.log(isSorted([1,2,3,4,5]))
console.log(isSorted([1,2,4,3,5]))
console.log(isSorted([1,2,3,5,4]))