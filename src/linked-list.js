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
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this.dataStorage.splice(0, this.length - 1);
        this.length = 0;
        this._tail = 0;
        this._head = 0;
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
