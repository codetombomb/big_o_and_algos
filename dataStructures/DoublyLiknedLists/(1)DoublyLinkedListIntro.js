//                       THE NODE CLASS 
// Define a Node class. It is constructed with three attributes:

// value - The value of the node. Could be arr, int, str, hash, etc.
// next -  Reference to next node
// prev - Reference to the node before or null before head and after 
//tail

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
//                      THE DLL CLASS
//- Define a DoublyLinkedList class. It should be constructed with 
// a length, head, and tail attribute:

//- length - initialized at zero;

//- head - initialized at null. Is meant to keep track of the 
// begining or '0th element' in the SLL 

//- tail - initialized at null. Is meant to keep track of the 
// last element in the SLL

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
}

// Initialize a new node
let first = new Node(1)

// Set its next property to be a new node with the value of 2
first.next = new Node(2)

// Set the previous property of the next node to be equal to the first 
// node
first.next.prev = first;