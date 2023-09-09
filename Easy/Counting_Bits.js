/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // Variables
    const bitCount = new Array(n+1);
    bitCount[0] = 0
    for (let i = 1; i <= n; i++) {
        // set i to binary and then split it into a sorted array
        const binary = i.toString(2).split('').sort((a, b) => a - b);
        // set the index of our solution array to the length of the remainder of 1s after the first 
        bitCount[i] = binary.slice(binary.indexOf('1')).length;    
    }
    return bitCount;
};
