//node stores a piece of data that will keep data - val
// and has a reference to the next node - next
class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}



class SingleList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (value) => {
        
        var newNode = new Node(value);
        if (!this.head) {

            this.head = newNode;
            this.tail = this.head; 
        } else { 
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
    }

    pop = () => {
        if (!this.length) return undefined;
        let popTail = this.tail;
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let element = this.head;
          while (element.next) {
              element = element.next;
          }
          this.tail = element;
          element.next = null; 
        }
        this.length--;
        return popTail;
    }

    shift = () => {
      if (!this.length) return undefined;
      let shiftHead = this.head;
      this.head = this.head.next;
      this.length--;
      if(!this.length) this.tail = null;
      return shiftHead;
    }

    unshift = value => {
        if (!this.length) this.push(value);
        else {
          let newHead = new Node(value);
          let oldHead = this.head;  
          this.head = newHead; 
          this.head.next = oldHead;
        }
        this.length++;
        return this;
    }

    get_node = index => {
      if (index<0 || index>this.length-1) return null;
      if (index === this.length-1) return this.tail;
      let element = this.head;
      while(index > 0) {
        element = element.next;
        index--
      }
      return element
    }

    set_node = (index, newVal) => {
      let node = this.get(index);
      if(node) {node.val = newVal; return true};
      return false;
    }

    insert = (index, val) => {
      if (index>= this.length || index < 0) return false;
      if (index === 0) return !!this.unshift(val);
      if (index === this.length-1) return !!this.push(val);
      
      let previousNode = this.get(index-1);
      let newNode = new Node(val);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
      return true;
    }

    remove = index => {
      if (index>= this.length || index < 0) return undefined;
      if (index === 0) return this.shift(val);
      if (index === this.length-1) return this.pop(val);
      let previousNode = this.get(index-1);
      let current = previousNode.next;
      previousNode.next = current.next
      this.length--;
      return current.val;
    }

    reverse = () => {
      if (!this.length || this.length === 1) return this;
      let node = this.head;
      this.head = this.tail;
      this.tail = node; 
      let next; 
      var prev = null;

      for (let x =0; x< this.length; x++) {
          next = node.next;
          node.next = prev;
          prev = node; 
          node= next
      }


    }
}

let list = new SingleList()





