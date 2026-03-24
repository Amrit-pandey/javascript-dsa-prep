// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

let nums = [0,0,1,1,1,2,2,3,3,4]

const removeDuplicates = (nums) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[k]){
            k++
            nums[k] = nums[i]
        }        
    }
    return k + 1;
}

console.log(removeDuplicates(nums))