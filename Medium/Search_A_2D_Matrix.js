/**
 * @param {number[][]} matrix
 * @param {number} target
 * @param {number} endCol
 * @param {number} startCol
 * @param {number} currentRow
 * @return {boolean}
 */
// This function will be used to search a suspect row for target
var searchRow = function(matrix, target, endCol, startCol, currentRow) {
    // Go back one col because final entry is not target
    endCol--;
    // Start loop for checking Cols
    while (startCol<=endCol) {
        // find the mid Col
        let currentCol=Math.floor((startCol + endCol)/2);
        console.log(matrix[currentRow][currentCol]);
        // If target, return True
        if (matrix[currentRow][currentCol]===target) { 
            return true;
        }
        // if currentPosition < target -> move startCol right
        else if (matrix[currentRow][currentCol] < target) {
            startCol = currentCol + 1;
        }
            // Move endCol left
        else {
            endCol = currentCol - 1;
        }
    }
    return false;
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Variables
    let startRow=0, endRow=matrix.length-1;
    let startCol=0, endCol=matrix[0].length-1;
    // Start loop for checking rows
    while (startRow<=endRow){
        // Find the mid for Row
        let currentRow=Math.floor((startRow + endRow)/2);
        console.log(currentRow);
        console.log(matrix[currentRow][endCol]);
        // If target, return True
        if (matrix[currentRow][endCol]===target) {
            return true;
        }
        // Else if currentRow < target -> Move start down a row
        else if (matrix[currentRow][endCol] < target) {
             startRow = currentRow + 1;
        }
        // Else if currentRow is the last row OR currentRow > target AND the previousRow < target -> begin searching row for target and return findings
        else if ((currentRow-1 < 0) || matrix[currentRow][endCol] > target && matrix[currentRow-1][endCol] < target) {
            return searchRow(matrix, target, endCol, startCol, currentRow);
        }
        // Move endRow up
        else {
             endRow = currentRow - 1;
        }
    }
    return false;
};
