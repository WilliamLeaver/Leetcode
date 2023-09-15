/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let answer = [];
    for (let i = 0; i < command.length; i++) {
        if (command[i] == 'G') {
            answer.push('G');
            continue;
        }
        if (command[i+1] == ')') {
            answer.push('o');
            i++;
            continue;
        }
        answer.push('al')
        i = i + 3;
    }
    return answer.join('');
};
