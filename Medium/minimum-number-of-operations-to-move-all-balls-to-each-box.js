/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const answer = new Array();
    // 0 1 2 3 4 5 
    //11   2   4 5
    //   8 1   3 4
    //     5   2 3
    //     1 4 1 2
    //     2   3 1
    //     3   1 4
    for (let i = 0; i < boxes.length; i++) {
        let total = 0; 
       for (let j = 0; j < boxes.length; j++) {
           if (i == j) {
               continue;
           }
           if (boxes[j] == '1') {
               total += Math.abs(i - j)
           }
        } 
        answer.push(total);
    }
    return answer;
};
