//************************ PUSH PSEUDO CODE ************************

// - Create a new node with the value passed to the function

// - If the head property is null set the head and tail to bo the 
// newly created node

// - If not, set the next property in the tail to be that node

// - Set the previous property on the newly created node to be the 
// tail

// - Set the tail to be the newly created node

// - Increment the length

// - Return the Doubly Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // PUSH
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}



