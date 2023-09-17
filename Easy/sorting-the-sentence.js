/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const sentence = new Array();
    for (const word of s.split(' ')) {
        sentence[word[word.length-1]-1] = word.slice(0, word.length-1);
    }
    return sentence.join(' ');
};
