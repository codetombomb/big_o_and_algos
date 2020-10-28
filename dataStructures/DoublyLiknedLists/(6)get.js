//                          GET()

// - Access a node in a Doubly Linked List by its position

//************************ GET PSEUDO CODE ************************

// - Check for a valid index first. If the index passed in is less 
// than 0 or greater/equal to the length, return null. (It cannot 
// be equal to the length because there is nothing at that index)

// - If the index is less that or equal to half the length of the list:
'   '//- Loop through the list starting from the head and loop toward 
'   '//the middle
'   '//- Return the node once it is found

// - If the index is greater than half the length of the list:
'   '//- Loop through the list starting from the tail and loop 
'   '//towards the middle
'   '//- Return the node once it is found





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

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //GET 
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let middle = Math.floor(this.length / 2);
        let counter = 0;
        let current;
        if (idx <= middle) {
            console.log("WORING FROM START")
            current = this.head;
            while (counter !== idx) {
                current = current.next;
                counter++;
            }
            return current;
        } else {
            console.log("WORING FROM END")
            current = this.tail;
            counter = this.length;
            while (counter !== idx) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }
}

let list = new DoublyLinkedList();
list.push('one');
list.push(2);
list.push('three');
list.push(4);
