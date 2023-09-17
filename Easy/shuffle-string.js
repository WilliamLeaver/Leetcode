/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    // Variables
    let len = indices.length;
    const newString = new Array(len);
    // for the length of array -> set indice of new string = to the indice of the indices array within the string
    for (let i = 0; i < len; i++) {
        newString[indices[i]] = s[i];
    }
    // return new string joined with no additional Chars
    return newString.join('');
}
