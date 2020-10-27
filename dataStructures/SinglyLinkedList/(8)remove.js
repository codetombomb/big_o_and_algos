//                          REMOVE()

//- Removing a node from the Linked List at a specific postion

//********************* PSEUDO CODE **********************

//- If the index is less than zero or greater than the length.
//  return undefined

//- If the index is the same as the length minus 1, pop()

//- If the index is 0, shift()

//- Otherwise, using the get(), access the node at the index
//  minus 1

//- Set the next property on that node to be the next of the
//  next node

//- Decrement the length

//- Return the value of the node removed

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

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (!node) {
            return false;
        } else {
            node.value = val;
        }
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(idx - 1);
        let newNext = prev.next;
        prev.next = newNode;
        newNode.next = newNext;
        this.length++;
        return true;
    }

    //REMOVE

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        let prev = this.get(idx - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }


}

const list = new SinglyLinkedList();
list.push(100)
list.push(201)
list.push(250)
list.push(350)