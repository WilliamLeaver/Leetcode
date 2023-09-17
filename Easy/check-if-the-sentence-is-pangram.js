/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // Variables
    const letter = new Array();
    // iterate over sentence chars
    for (const char of sentence) {
        // if the char has not shown up -> add char to letter array 
        if (!(letter.includes(char))) {
            letter.push(char)
        }
    }
    // if all 26 letters have been counted return true 
    if (letter.length == 26) {
        return true;
    }
    // return false
    return false;
    
};
