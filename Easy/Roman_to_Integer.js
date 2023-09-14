/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // create a map to the roman numerals
    const key = new Map([
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000],
        ]);
  // initialize the total and last total
    let total = 0;
    let lastAdded = 0;
  // iterate over string 
    for(let i = 0; i < s.length; i++) {
      // set adding to the key in map
        let adding = key.get(s[i]);
      // if the previous roman numeral was less than it must be special case -> remove last total and added new total
        if (lastAdded < adding && i != 0) {
            total = total - lastAdded;
            total = total + (adding - lastAdded)
        }
          // else just add the total and set the lastadded
        else {
            total = total + adding
            lastAdded = adding;
        }
    }
    return total;
};
