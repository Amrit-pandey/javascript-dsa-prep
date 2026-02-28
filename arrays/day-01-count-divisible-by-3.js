// write a function to count the numbers which is divisble by 3 in an array

let arr = [2, 4, 5, 6, 3, 4, 5, 6]

const divisbleBy3 = (arr) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 3 === 0) {
           cnt++
        }
    }
    return cnt;
}

console.log(divisbleBy3(arr));