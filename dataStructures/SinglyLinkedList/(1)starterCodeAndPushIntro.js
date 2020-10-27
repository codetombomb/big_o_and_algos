//                       THE NODE CLASS 
// Define a Node class. It is constructed with two attributes:

// value - The value of the node. Could be arr, int, str, hash, etc.
// next -  Reference to next node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//                      THE SLL CLASS
//- Define a SinglyLinkedList class. It should be constructed with 
// a length, head, and tail attribute:

//- length - initialized at zero;

//- head - initialized at null. Is meant to keep track of the 
// begining or '0th element' in the SLL 

//- tail - initialized at null. Is meant to keep track of the 
// last element in the SLL

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //************************PUSH PSEUDO CODE************************

    // - This function should accept a value 
    // - Create a new node using the value passed to the function 
    // - If there is no head property on the list, set the head and 
    //tail to be the newly create node
    // - Otherwise, set the next property on the tail to be the new 
    //node and set the tail property on the list to be the newly
    //created node
    // - Increment the length by one

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