// Piece if data - val
// Reference to next node - next

//************************PUSH PSEUDO CODE************************

// - This function should accept a value 
// - Create a new node using the value passed to the function 
// - If there is no head property on the list, set the head and 
//tail to be the newly create node
// - Otherwise, set the next property on the tail to be the new 
//node and set the tail property on the list to be the newly
//created node
// - Increment the length by one

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

    // PUSH METHOD
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
}