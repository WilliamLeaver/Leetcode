/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /** O(n) Test Passed but did not solve in O(log_n) for that we need binary search
        return nums.indexOf(target);
     */
    let start=0, end=nums.length-1;    
    // Iterate while start not meets end
    while (start<=end){
        // Find the mid index
        let mid=Math.floor((start + end)/2);
        // If element is present at mid, return mid index
        if (nums[mid]==target) {
            return mid;
        }
// if Start of array is <= to middle index ANDNOT (Start number is <= target number AND target number is < the middle number) OR middle number is <= the end number AND middle number is < the target AND target is <= end number
        if((nums[start] <= nums[mid] && !(nums[start] <= target && target < nums[mid]))|| nums[mid] <= nums[end] && nums[mid] < target && target <= nums[end]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
};
