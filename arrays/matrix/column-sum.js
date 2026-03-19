// write a function to column-wise sum of matrix

// Input:
// [
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ]

// Output:
// [12, 15, 18]

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const columnSum = (arr) => {
    let result = [];
    for (let i = 0; i < arr[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            sum = sum + arr[j][i]
        }
        result.push(sum)
    }
    return result
}

console.log(columnSum(arr))