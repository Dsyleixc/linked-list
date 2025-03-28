'use strict';

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);

        // base cases

        // if linkedlist head is null set head to that node
        if (this.head === null) {
            this.head = node;
            return;
            // if there already is a head then see if .nextNode of node exists
        } else if (!this.head.nextNode) {
            // if .nextNode is null then set node to nextNode
            this.head.nextNode = node;
            return;
        }

        // loop through to get to last one

        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = node;
    }

    prepend(value) {
        const node = new Node(value);
        node.nextNode = this.head;
        this.head = node;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        if (!this.head) return;
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (!this.head) return;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current.nextNode === null) return 'index does not exist';
            current = current.nextNode;
        }
        return current;
    }

    // instructions didn't say to return popped item so I didn't
    pop() {
        if (!this.head) return;
        if (!this.head.nextNode) {
            this.head = null;
        }

        let current = this.head;
        let previous;

        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
    }

    contains(value) {
        if (!this.head) return false;

        let current = this.head;

        while (current) {
            if (current.value === value) return true;
            else {
                current = current.nextNode;
            }
        }
        return false;
    }

    find(value) {
        if (!this.head) return null;

        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return null;
    }

    toString() {
        if (!this.head) return 'null';

        let string = '';

        let current = this.head;

        while (current) {
            string += `( ${current.value} ) -> `;
            if (current.nextNode === null) {
                string += `null`;
            }
            current = current.nextNode;
        }

        return string;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
console.log(list.toString());
