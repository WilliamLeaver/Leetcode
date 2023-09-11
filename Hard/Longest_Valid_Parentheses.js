/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let charArray=[-1];
    let count = 0;
    for (let i = 0; i < s.length;i++) {
        // if the bracket is an opening -> push the index onto the array
        if (s[i] == '(') {
            charArray.push(i);
        }
        // else if the length of the array is equal to one -> set the first entry in the array to the index 
        else if (charArray.length == 1) {
            charArray[0] = i;
        }
        // else remove index from array and update count 
        else {
          charArray.pop();
          count = Math.max(count, i - charArray[charArray.length-1]);
        } 
    }
    return count;
};
