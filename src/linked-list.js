const Node = require('./node');

class LinkedList {
    constructor() {
        this.dataStorage = [];
        this.length = 0;
        this._head = this.dataStorage[0];
        this._tail = this.dataStorage[0];
    }

    append(data) {
        this.dataStorage.push(data);
        this.length++;
        this._tail = this.dataStorage[this.length - 1];
    }

    head() {
        return this.dataStorage[0];
    }

    tail() {
        return this.dataStorage[this.length - 1];
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
