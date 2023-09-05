/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//O(n^2)
var twoSum = function(nums, target) {
    // iterate over nums
    let returnArray = [];
    for (let i = 0; i < nums.length - 1; i++) {
        // iterate over remaining nums
        for (let j = i + 1; j < nums.length; j++) {
            // if nums add to target -> return returnArry with index positions 
            if (nums[i] + nums[j] == target) {
                returnArray.push(i, j);
                return(returnArray);
            }
        }
    }
};
