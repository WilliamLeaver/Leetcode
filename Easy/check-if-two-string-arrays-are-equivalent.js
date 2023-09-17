/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  // join the two arrays and check for their equivalance 
    return (word1.join('') == word2.join(''));
};
