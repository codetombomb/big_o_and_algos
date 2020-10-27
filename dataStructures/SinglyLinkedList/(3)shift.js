//                          SHIFT()

//- Removing a node from the beginning of the Linked List

//-*-*-*-*-*-*-*-*-*-*-* PSEUDO CODE -*-*-*-*-*-*-*-*-*-

// - If there are no nodes, return undefined
// - Store the current head property in a variable 
// - Set the head property to be the current head's next
//property
// - Decrement the length by 1 
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

    //SHIFT
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return oldHead;
    }
}

const list = new SinglyLinkedList();