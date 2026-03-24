// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

let nums = [3,2,2,3]

const removeElements = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            val = nums[i]
            k++
        }        
    }
    return k
}

console.log(removeElements(nums, 3))