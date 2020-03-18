class Stack {
    constructor () {
        this.stack = [];
        this.length = 0;
    }

    push = val => {
        this.stack.push(val);
        this.length = this.stack.length;
        return this.stack;
    }

    pop = () => {
        let popped = this.stack.pop();
        this.length = this.stack.length;
        return popped
    }
    
}

let new_stack = new Stack();
