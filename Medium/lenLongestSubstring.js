/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charStore = [];
    let maxLength = 0;
    // iterate over the string
    for (let i = 0; i < s.length; i++) {
        // charStore does not include char -> add char to storage 
        if (charStore.includes(s[i]) == false){
            charStore.push(s[i]);
        }
        else {
            // set maxLength to length of storage if maxLength is lower than current
            if (maxLength < charStore.length) {
                maxLength = charStore.length;
            }    
            // clear storage up to the repeated character
            charStore = charStore.slice(charStore.indexOf(s[i])+ 1);
            // add char to storage
            charStore.push(s[i]);              
        }     
    }
    // if maxLength is greater than the length of the storage -> return the maxLength
    if (maxLength > charStore.length) { 
        return maxLength;
    }
    else {
        return charStore.length;
    }
};
