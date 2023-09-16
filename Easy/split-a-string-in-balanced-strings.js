/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let Rcount = 0, Lcount = 0, Pcount = 0;
    for (const Char of s) {
        if (Char == 'R') {
            Rcount++;
        }
        else {
            Lcount++;
        }
        if (Rcount == Lcount) {
            Pcount++;
        }
    }
    return Pcount;
};
