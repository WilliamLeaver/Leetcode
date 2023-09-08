/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort array 
    nums.sort((a, b) => a - b);

    // Variables 
    let solutions = [];

    // iterate over len of array
    for (let i = 0; i < nums.length; i++) {
        // if we already checked number -> skip
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; 
        }
        // Create sliding window
        let num1Index = i + 1;
        let num2Index = nums.length - 1;
        // While the start of window is before end of window
        while (num1Index < num2Index) {
            // sum up all three numbers
            const sum = nums[i] + nums[num1Index] + nums[num2Index]
            // if sum less than 0 -> move the start of the window forward increasing the values 
            if (sum < 0) {
                num1Index++;
            }
            // if sum greater than 0 -> move the end of the window backwards decreasing the values
            else if (sum > 0) {
                num2Index--;
            }
            // sum is 0 
            else {
                // push array of triple onto solutions array and move start window forward
                solutions.push([nums[i], nums[num1Index], nums[num2Index]]);
                num1Index++
                // if the start is the same value we already checked move start forward again until we either find a new number or our start passes the end 
                while (nums[num1Index - 1] === nums[num1Index] && num1Index < num2Index) {
                    num1Index++;
                }
            }
        }
    }
    // once we have checked all of the 3 pairs return solutions 
    return solutions;
};
