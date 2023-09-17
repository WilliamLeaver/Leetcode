/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  // split the string into an array of words then slice it to the required length of words and then join it back into a string and return 
    return s.split(' ').slice(0, k).join(' ');
};
