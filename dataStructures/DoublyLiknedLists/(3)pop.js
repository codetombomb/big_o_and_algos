//                          POP()

// - Removing a node from the end of the Doubly Linked List 

//************************ POP PSEUDO CODE ************************

// - If there is no head, return undefined 
// - Store the current tail in a variable to return later 
// - If the length is 1, set the head and tail to be null
// - Update the tail to be the previous node
// - Set the new tail's next property to null
// - Set the old tail's prev property to be null
// - Decrement the length
// - Return the value removed

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

    //POP
    pop() {
        if (!this.head) return undefined;
        let oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
}

let list = new DoublyLinkedList();
list.push('one');
list.push(2);
list.push('three');
list.push(4);
