// Try edit message
class Node {
    constructor (val) {
        this.val = val;
        this.next = null
    }
}


class Queue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    queue = val => {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
           
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


    enqueue = () => {

        if(!this.length) return null;
        let popped = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;        
        } else {
          this.head = this.head.next;  
        }
        
        this.length--;
        return popped;
        

    }
}


let queue = new Queue();
