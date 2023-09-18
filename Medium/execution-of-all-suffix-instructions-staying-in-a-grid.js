/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    let answer = [];
  // for each string length reset position move the instructions window and reset counter
    for (let i = 0; i < s.length; i++) {
        let instructions = s.slice(i, s.length)
        let posX = startPos[1];
        let posY = startPos[0];
        let counter = 0
      // for each instruction test what direction you are moving and make the change to position
        for (const instruction of instructions) {
            switch (instruction) {
                case 'R':
                    posX++;
                    break;
                case 'L':
                    posX--;
                    break;
                case 'U':
                    posY--;
                    break;               
                case 'D':
                    posY++;
                    break;
            }
          // if the position is on the board add one to the counter otherwise you fell off the board 
            if ((posX >= 0 && posX < n) && (posY >= 0 && posY < n)) {
                counter++;
            }
            else {
                break;
            }
        }
      // push the counter total onto answer
        answer.push(counter)
    }
  // return answer
    return answer
};
