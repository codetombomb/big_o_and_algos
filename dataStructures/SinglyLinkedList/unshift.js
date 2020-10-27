//                          UNSHIFT

//********************* PSEUDO CODE **********************


//- This function should accept a value

//- Create a new node using the value passed to the 
// function

//- If there is no head property on the list, set the 
// head and tail to be the newly created one

//- Otherwise, set the newly created node's next property 
// to be the current head property on the list

//- Set the head property on the list to be that newly 
// created node

//- Increment the length of the list by 1

//- Return the linked list





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

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return oldHead;
    }

    //  UNSHIFT
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

const list = new SinglyLinkedList();