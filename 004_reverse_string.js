
function reverse(str){
    //Solution 1
    // return str.split('').reverse().join('')

    //Solution 2
    let reversed = ''
    for(let char of str){
        reversed = char + reversed

        // 0 ---> h
        // 1 ---> h = e + h
        // 2 ---> eh = l + eh
        // 3 ---> leh = l + leh
        // 4 ---> lleh = o + lleh
        // output --> olleh
    }
    return reversed

}



console.log(reverse('hello')) // olleh
console.log(reverse('racecar')) // racecar
console.log(reverse('word')) // drow