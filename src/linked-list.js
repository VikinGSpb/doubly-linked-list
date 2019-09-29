const Node = require('./node');

class LinkedList {
    constructor() {
        this.dataStorage = [];
        this.length = 0;
    }

    append(data) {
        this.dataStorage.push(data);
        this.length++;
        this._head = this.dataStorage[0];
        this._tail = this.dataStorage[this.length - 1];
        return this;
    }

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    at(index) {
        return this.dataStorage[index];
    }

    insertAt(index, data) {
        this.dataStorage.splice(index, 0, data);
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this.dataStorage.splice(0, this.length);
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {
        this.dataStorage.splice(index, 1);
        this.length--;
        this._tail = this.dataStorage[this.length - 1];
        return this;
    }

    reverse() {
        this.dataStorage.reverse();
        this._head = this.dataStorage[0];
        this._tail = this.dataStorage[this.length - 1];
        return this;
    }

    indexOf(data) {
        for(let i = 0; i < this.length; i++) 
            if(this.dataStorage[i] == data) 
                return i;
        return -1;
    }
}

module.exports = LinkedList;
