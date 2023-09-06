/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParentheses = function(s) {
    // Variables
    let charArray = []
    // iterate over string  
    for (let i = 0; i < s.length;i++) {
        // if the bracket is an opening -> push it into the Array and continue
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            charArray.push(s[i]);
            continue;
        }
        // if the bracket is closing & the previous entry does not match -> Return false
        if ((s[i] == ')' && charArray[charArray.length-1] != '(') || (s[i] == ']' && charArray[charArray.length-1] != '[') || (s[i] == '}' && charArray[charArray.length-1] != '{')) {
            return false;
        }
        // remove the bracket from charArray to simulate closing 
        charArray.pop();
    }
    // if array is empty all brackets have closed -> Return true
    if (charArray.length == 0) {
        return true;
    }
    // Return false if there are still brackets to be closed
    return false;
};
