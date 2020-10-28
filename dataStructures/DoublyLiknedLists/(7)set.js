//                          SET()

// - Replacing the value of a node in a Doubly Linked List 

//************************ SET PSEUDO CODE ************************

// - Create a variable which is the result of the get() at the index
// passed to the function

'   '//- If the get() returns a valid node, set the value of that node to
// be the value passed to the function

'   '//- Return true

// - Otherwise, return false


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

    //SET
    set(idx, value) {
        let node = get(idx);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }
}

let list = new DoublyLinkedList();
list.push('one');
list.push(2);
list.push('three');
list.push(4);
list.push('five');
list.push(6);
