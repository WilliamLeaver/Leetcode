/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Variable
    let numTest = 0;
    let orginalArrayLength = nums.length;
    // iterate over nums
    for (let i = 0; i < orginalArrayLength; i++) {
        // remove first num and add it to numTest
        numTest = nums.shift();
        // if num still exists in array -> Return true
        if (nums.includes(numTest)) {
            return true;
        }
    }
    // if you make if through all the nums 
    return false;
};
