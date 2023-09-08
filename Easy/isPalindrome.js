/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Variables
    let test = [];

    // set all of the characters to lower case 
    s = s.toLowerCase();
    // iterate over the string
    for (let i = 0; i < s.length; i++) {
        // get the character code
        let code = s.charCodeAt(i);
        // if the character code is a lower case letter or a number -> push onto test array 
        if (code > 47 && code < 58 || code > 96 && code < 123) { 
            test.push(s[i]);
        }
    }
    // if the array is the same forward and back -> return true
    if ([...test].reverse().toString() === test.toString()) {
        return true;
    }
    // return false 
    return false;
};
