/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // while n != 0
  while (n != 0) {
    // replace the reserved 0 in the first array with the value at the index of n-1 of the second array 
    nums1.splice(m+n-1, 1, nums2[n-1]);
    n--;
  }
  // Sort the resulting array
  nums1.sort((a,b) => a - b);
};
