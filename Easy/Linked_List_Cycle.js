/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    // Variables
    let nodeArray = [];
    // head check
    if (!head) {
        return false;
    }
    // While there are still nodes to check
    while (head.next !== null) {
        // push the pointer onto an Array
        nodeArray.push(head.next);
        // Move to next pointer
        head = head.next;
        // if nodeArray has a pointer already -> Cycle must be happening Return True
        if (nodeArray.includes(head.next)) {
            return true;
        }   
    }
    // if you made it here there are no more nodes to check and no cycles Return False
    return false;
};
