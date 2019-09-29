const Node = require('./node');

class LinkedList {
    constructor() {
        this.dataStorage = [];
        this.length = 0;
        this._head = 0;
        this._tail = 0;
    }

    append(data) {
        this.dataStorage.push(data);
        this.length++;
        this._head = this.dataStorage[0];
        this._tail = this.dataStorage[this.length - 1];
    }

    head() {
        return this.dataStorage[0];
    }

    tail() {
        return this.dataStorage[this.length - 1];
    }

    at(index) {
        return this.dataStorage[index];
    }

    insertAt(index, data) {
        this.dataStorage.splice(index, 0, data);
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this.dataStorage.splice(0, this.length - 1);
        this.length = 0;
        this._tail = 0;
        this._head = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
