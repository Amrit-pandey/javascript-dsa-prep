// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// const s = ["H","a","n","n","a","h"];
const s = ["h","e","l","l","o"]

const reverseString = (s) => {
    let length = s.length;
    let halfLength = Math.floor(length / 2);

    for (let i = 0; i < halfLength; i++) {
        let temp;
        temp = s[i]
        s[i] = s[length-i-1]  
        s[length-i-1] = temp
    }
    return s
}

console.log(reverseString(s))