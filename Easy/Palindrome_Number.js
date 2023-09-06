**
 * @param {number} x
 * @return {boolean}
 */
var intIsPalindrome = function(x) {
    // Step 1. Use the split() method to return a new array
    var splitString = x.toString().split("");
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    if (x.toString() == joinArray) {
        return true;
    }
    return false;
};
