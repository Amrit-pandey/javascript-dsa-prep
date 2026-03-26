// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Input: nums = [1,1,0,1,1,1]
// Output: 3

const nums = [1,1,0,1,1,1]

const findMaxConsecutive = (nums) => {
    let currCnt = 0;
    let maxCnt = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 1){
            currCnt++
            maxCnt = Math.max(maxCnt, currCnt)
        }else{
            currCnt = 0;
        }
    }
    return maxCnt
}

console.log(findMaxConsecutive(nums))