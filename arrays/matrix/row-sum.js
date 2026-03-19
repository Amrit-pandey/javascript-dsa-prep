// write a function to Row-wise sum of matrix

// Input:
// [
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ]

// Output:
// [6, 15, 24]

const arr = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
]

const rowSum = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[0].length; j++) {
             sum = sum + arr[i][j]
        }
        result.push(sum)
    }
    return result
}

console.log(rowSum(arr))