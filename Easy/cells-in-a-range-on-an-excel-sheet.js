/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const traveled = new Array();
  // for every col starting at the charCode for the first index and end at the charCode for the last index 
    for (let c = s.charCodeAt(0); c <= s.charCodeAt(3); c++) {
      // for every row starting at the first index and ending at the last index
        for (let r = s[1]; r <= s[4]; r++) {        
          // push the col char and row index to traveled array
            traveled.push(String.fromCharCode(c) + r);
        }
    }
  // return traveled
    return traveled;
};
