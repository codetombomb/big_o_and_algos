//                          POPPING()
// - Removing a node from the end of the Linked List 

//**********************POPPING PSEUDO CODE **********************

// - If there are no nodes in the list, return undefined
// - Loop through the list until you reach the tail 
// - Set the next property of the 2nd to last node to be null
// - Set the tail to be the 2nd to last node 
// - Decrement the length of the list by 1
// - Return the value of the node removed

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;

        }
        this.length++;
        return this;
    }

    //POP METHOD (REMOVING A NODE FROM THE END OF THE LINKED LIST)

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

const list = new SinglyLinkedList()
