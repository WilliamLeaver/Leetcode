/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const answer = new Array();
    const fix = new Map();
    for (let i = 0; i < key.length; i++) {
        if (key[i] != ' ' && !(fix.has(key[i]))) {
            fix.set(key[i], String.fromCharCode(97+fix.size));
        }
    }
    for (let i = 0; i < message.length; i++) { 
        if (message[i] != ' ') {
            answer.push(fix.get(message[i]));
        }
        else {
            answer.push(' ');
        }
    }
    return answer.join('');
};
