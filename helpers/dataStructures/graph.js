//Graphs in js

class Graph {
  constructor () {
    this.adjacencyList = {};
  }

  addVertex = vertex => {
      if (this.adjacencyList[vertex]) return undefined;
      this.adjacencyList[vertex] = []
      return this;
  }

  addEdge = (vertex1, vertex2) => {
    
      if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
      if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
      let ver1 = this.adjacencyList[vertex1];
      let ver2 = this.adjacencyList[vertex2];
 
      if (ver1.indexOf(vertex2) === -1 && ver2.indexOf(vertex1) === -1) {
          ver1.push(vertex2);
          ver2.push(vertex1);
      }

      return this;
  }

  removeEdge = (vertex1, vertex2) => {
      let ver1 = this.adjacencyList[vertex1];
      let ver2 = this.adjacencyList[vertex2];
      if (!ver1) return 'Please provide a valid vertex1';
      if (!ver2) return 'Please provide a valid vertex2';
      if (-1 == ver1.indexOf(vertex2) || -1 == ver2.indexOf(vertex1)) {
        return 'Please provide a valid Edge';
      } else {
        ver1.splice(ver1.indexOf(vertex2),1);
        ver2.splice(ver2.indexOf(vertex1),1);
      }
  }

  removeVertex = (vertex) => {
      if (!this.adjacencyList[vertex]) return undefined;
      let edgeList = [...this.adjacencyList[vertex]];

      for (let e = 0; e<edgeList.length;e++) {
        this.removeEdge(vertex, edgeList[e]);
      }
      if (this.adjacencyList[vertex].length === 0) {
        delete this.adjacencyList[vertex];
        return vertex; 
      }
      return false;
  }

  DFSrecursive = (start) => {
    
      let root = this.adjacencyList[start];
      let data = [];
      let visited = {}
      const traverse = (vertex) => {
        for (let x = 0; x < vertex.length; x ++) {
          if (visited[vertex[x]]) continue;
          visited[vertex[x]] = vertex[x];
          data.push(vertex[x]);
          traverse(this.adjacencyList[vertex[x]]);
        }
      }
      traverse(root);
      return data;
  }

  BFS = vertex => {
      if (!this.adjacencyList[vertex]) return 'Add a valid vertex';
      let queue = [vertex];
      let data = [];
      let visited = {};
      visited[vertex] = true;
      while (queue.length) {
         let dequeue = queue.shift();
         data.push(dequeue);
         this.adjacencyList[dequeue].forEach(neighbor => {
           
           if (!visited[neighbor]){
             visited[neighbor] = true;
              queue.push(neighbor);
           } ;
         })
      }
      return data;
  }
}

let grafica = new Graph();
grafica.addVertex('CANADA').addVertex('USA').addVertex('ma');
grafica.addEdge('CANADA','USA');
grafica.addEdge('CANADA','COLOMBIA');
grafica.addEdge('CANADA','MEXICO');
grafica.addEdge('MEXICO','COLOMBIA');
grafica.addEdge('COLOMBIA','FRANCIA');
console.log(grafica);
console.log(grafica.DFSrecursive('CANADA'));
console.log(grafica.BFS('CANADA'))

