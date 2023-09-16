/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let Max = 0;
    for (const sentence of sentences) {
        Max = Math.max(Max, sentence.split(' ').length)
    }
    return Max;
};
