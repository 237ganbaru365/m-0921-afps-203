

function sumDelta(arr){

    let total = 0

    for(let i = 1; i < arr.length; i++){
        let v1 = arr[i-1]
        let v2 = arr[i]

        let delta = Math.abs(v1 - v2)
        total += delta
    }

    return total

}

// what if the array is empty?
// what if there's just one value in the array?
// what if there's two values?
// what if there's many value?
console.log(sumDelta([]))
console.log(sumDelta([9]))
console.log(sumDelta([12,8]))
console.log(sumDelta([2,6,9,30]))