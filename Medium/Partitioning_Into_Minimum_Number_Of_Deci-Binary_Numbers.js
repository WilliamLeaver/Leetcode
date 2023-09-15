/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    // Variables
    let max = 0;
    for (let i = 0; i < n.length; i++) {
        if (max < n[i]) {
            max = n[i];
        }
    }
    return max;
};
