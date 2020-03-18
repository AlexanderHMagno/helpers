//node stores a piece of data that will keep data - val
// and has a reference to the next node - next
class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null; 
    }
}



class DoubleList {
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
            newNode.prev = this.tail;
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
          this.tail.prev.next = null;
          this.tail = this.tail.prev;
        }
        this.length--;
        return popTail;
    }

    shift = () => {
      if (!this.length) return undefined;
      let shiftHead = this.head;
      this.head = this.head.next;
      this.head.prev = null; 
      this.length--;
      return shiftHead;
    }

    unshift = value => {
        if (!this.length) return this.push(value);
        else {
          let newHead = new Node(value);
          newHead.next = this.head;
          this.head.prev = newHead;
          this.head = newHead;
        }
        this.length++;
        return true;
    }

    get_node = index => {
      if (index<0 || index>this.length-1) return null;
      if (index === this.length-1) return this.tail;
      let element = this.head;
      if (index > Math.floor((this.length-1)/2)) {
          while(index > 0) {
          element = element.next;
          index--
        }
      } else {
        element = this.tail;
        let final = this.length-1;
        while(index !== final) {
          element = element.prev;
          final--;
        }
      }
      return element
    }

    set_node = (index, newVal) => {
      let node = this.get(index);
      if(node) {node.val = newVal; return true};
      return false;
    }

    insert = (index, val) => {
      if (index < 0) return false;
      if (index === 0) return !!this.unshift(val);
      if (index >= this.length-1) return !!this.push(val);
      
      let previousNode = this.get(index-1);
      let newNode = new Node(val);
      
      newNode.next = previousNode.next;
      newNode.prev = previousNode;
      previousNode.next.prev = newNode; 
      previousNode.next = newNode; 

      this.length++;
      return true;
    }

    remove = index => {
      if (index>= this.length || index < 0) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length-1) return this.pop();
      let previousNode = this.get(index-1);
      let current = previousNode.next;
      previousNode.next = current.next;
      previousNode.next.prev = previousNode;
      this.length--;
      return current;
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

let list = new DoubleList()

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(7);
list.push(8);
list.push(9);

console.log(list.remove(5))
