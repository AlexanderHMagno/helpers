class Node {
  constructor (value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class  MaxBinaryHeap {
  constructor () {
    this.root = null;
  }

  add = val => {
    let current = this.root;
    let newNode = new Node (val);
    let crosser;
    if (!current) this.root = newNode;
    else {
      let queue = [current];
      
      while (queue.length) {
          current = queue.shift();
          if (current.val < newNode.val) {
            crosser= current.val;
            current.val = newNode.val;
            newNode.val = crosser;
          }
          if (!current.left) {
            current.left = newNode;
            break;
          } else {
            queue.push(current.left);
          }
          if (!current.right) {
            current.right = newNode;
            break;
          } else {
            queue.push(current.right);
          } 
      }
    }
    return this;
  }
}


let MBH = new MaxBinaryHeap();
MBH.add(41).add(39).add(33).add(18).add(27).add(12).add(55)
console.log(MBH)