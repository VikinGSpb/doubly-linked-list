const Node = require('./node');

class LinkedList {
    constructor() {
        this.dataStorage = [];
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if(this.isEmpty())
        {
            this.dataStorage[0] = new Node(data);
            this.length++;
            this._head = this.dataStorage[0];
        }
        else {
            this.dataStorage[this.length] = new Node(data, this.dataStorage[this.length - 1]);
            this.dataStorage[this.length - 1].next = this.dataStorage[this.length];
            this.length++;
        }
        this._tail = this.dataStorage[this.length - 1];
        return this;
    }

    head() {
        if(this.length == 0) return null;
        else return this._head.data;
    }

    tail() {
        if(this.length == 0) return null;
        else return this._tail.data;
    }

    at(index) {
        return this.dataStorage[index].data;
    }

    insertAt(index, data) {
        this.append(data);
        let spliceData = this.dataStorage[this.length - 1];
        this.dataStorage.splice(index, 0, spliceData);
        for(let i = index; i < this.length; i++)
        {
            if(i == 0)
            {
                this.dataStorage[i].next = this.dataStorage[i + 1];
                this.dataStorage[i].prev = null;
                continue;
            }
            if(this.dataStorage[i + 1])
            {
                this.dataStorage[i].next = this.dataStorage[i + 1];
                this.dataStorage[i].prev = this.dataStorage[i - 1];
            } else {
                this.dataStorage[i].next = null;
                this.dataStorage[i].prev = this.dataStorage[i - 1];
            }
        }
        this._tail = this.dataStorage[this.length - 1];
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        if (this.isEmpty()) return this;
        else {
            this.dataStorage.splice(0, this.length);
            this.length = 0;
            this._tail = null;
            this._head = null;
            return this;
        }
    }

    deleteAt(index) {
        this.dataStorage.splice(index, 1);
        this.length--;
        if(this.length == 0) 
        {
            this._tail = null;
            this._head = null;
        }
        else this._tail = this.dataStorage[this.length - 1];
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
            if(this.dataStorage[i].data == data) 
                return i;
        return -1;
    }
}

module.exports = LinkedList;
