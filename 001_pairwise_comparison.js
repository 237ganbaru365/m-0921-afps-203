//difference ---> Delta

const ww = [32,30,15,16,18,40,35];
     // -1  0, 1, 2, 3, 4, 5, 6   7

let max_delta = ww[0] - ww[1] //compare the first set

for(let i = 0; i < ww.length - 1; i++){
    let temp1 = ww[i]
    let temp2 = ww[i+1]
    let delta = Math.abs(temp1 - temp2)

    console.log('comparing', temp1, temp2, 'delta', delta)

    if(delta > max_delta){
        max_delta = delta
    }
}

console.log('Max Delta:', max_delta);