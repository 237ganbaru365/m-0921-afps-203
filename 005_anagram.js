
// 'hello', 'olleh' --> true
// 'hello', 'olle' --> false

// charMap
// h:1,
// e:1,
// l:2,
// o:1

function anagram(sideA, sideB){

    const sideAmap = charMap(sideA)
    const sideBmap = charMap(sideB)

    console.log(sideAmap);
    console.log(sideBmap);
    // console.log(Object.keys(sideAmap))

    //checks for array length (length of the word has to match for it to be an anagram)
    if(Object.keys(sideAmap).length !== Object.keys(sideBmap).length){
        console.log('throw 1');
        return false
    }

    //checks the number of alphabets if they are of the same values
    for(let char in sideAmap){
        if(sideAmap[char] !== sideBmap[char]){ // (sideAmap['h'] -> 1) !== (sideBmap['h'] --> 1) 
            console.log('throw 2');
            return false
        } 
    }

    return true

}

function charMap(str){

    const tempCharObj = {}
    let stringArr = str.replace(/[\W]/g,'').toLowerCase()

    for(let char of stringArr){
        
        if(tempCharObj[char]){
            tempCharObj[char]++ //{ h: i++ }
        }else{
            tempCharObj[char] = 1 // { h: 1 }
        }

        // 0(h) -> else { h:1 }
        // 1(e) -> else { h:1, e:1 }
        // 2(l) -> else { h:1, e:1, l:1 }
        // 3(l) -> if { h:1, e:1, l:2 }
        // 4(o) -> if { h:1, e:1, l:2, o:1 }
    }

    return tempCharObj
}



// console.log(anagram('hello', 'eollh'))
// console.log(anagram('Eleven plus two', 'twelve plus one'))
// console.log(anagram('bad credit', 'debit card'))
// console.log(anagram('A gentleman', 'Elegant man'))
console.log(anagram('Tom marvolo riddle', 'i am Lord voldemort'))