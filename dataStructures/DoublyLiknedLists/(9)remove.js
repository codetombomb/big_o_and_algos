//                          REMOVE()

// - Removing a node in a Doubly Linked List by a certain position

//************************ REMOVE PSEUDO CODE ************************

// - If hte index is less that zero or greater than or equal to the
// length return undefined

// - If the index is 0, shift()

// - If the index is the same as the length-1, pop()

// - Use the get method to retrieve the item to be removed 

// - Update the next and prev properties to remove the found node from 
// the list

// - Set the next and prev to null on the found node

// - Decrement the length

// - Return the removed node

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

    set(idx, value) {
        let node = get(idx);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);
        let newNode = new Node(val)
        let prevNode = this.get(idx - 1);
        let aftNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = aftNode;
        aftNode.prev = newNode
        this.length++;
        return true;
    }
    //REMOVE
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let node = this.get(idx);
        node.next.prev = node.prev;
        node.prev.next = node.next;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
}

let list = new DoublyLinkedList();
list.push('one');
list.push(2);
list.push('three');
list.push(4);
list.push('five');
list.push(6);
