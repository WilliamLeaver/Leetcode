/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let total = 0;
  // switch statment for the key
    switch (ruleKey) {
        // depending on case match check the index of items for matches and increase total for matches
        case "type":
            items.forEach((item) => {
                if (item[0] == ruleValue) {
                    total++;
                }
            });
            break;
        case "color":
            items.forEach((item) => {
                if (item[1] == ruleValue) {
                    total++;
                }
            });
            break;
        case "name":
            items.forEach((item) => {
                if (item[2] == ruleValue) {
                    total++;
                }
            });
            break;
    }
  // return total
    return total
};
