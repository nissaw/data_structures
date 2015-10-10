

// ###Graph Solution

// Instantiate a new graph
var Graph = function (){
  this.nodes = [];
  };

var RickRoll = function(value) {
  this.value = value,
  this.connections = [];
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) { 
  this.nodes.push(new RickRoll(value));
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value){ 
  var doesContain = false;
  _.each(this.nodes, function(item) {
    if ( item.value === value ) { 
      doesContain = true;
    }
  });
  return doesContain;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var removed;
  var index;
  _.each(this.nodes, function(item, i) {
    if ( item.value === node ) {
      removed = node; 
      index = i;
    }
  })
  this.nodes.splice(index, 1)[0];

  return removed;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  _.each(this.nodes, function(item) {
    if ( item.value === fromNode ) {
      _.each(item.connections, function(node){
        if (node.value === toNode) {
          result = true;
        }
      })
    }
  })
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var fromIndex;
  var toIndex;
   _.each(this.nodes, function(item, i) {
    if ( item.value === fromNode ) { 
      fromIndex = i;  
    } 
    if ( item.value === toNode ) {
      toIndex = i;
    }
  })
   this.nodes[fromIndex].connections.push(this.nodes[toIndex]);
   this.nodes[toIndex].connections.push(this.nodes[fromIndex]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  _.each(this.nodes, function(item) {
    if (item.value === fromNode) {
      _.each(item.connections, function(node, index) {
        if (node.value === toNode) {
          item.connections.splice(index, 1);
        }
      });

    } else if (item.value === toNode) {
      _.each(item.connections, function(node, index) {
        if (node.value === fromNode) {
          item.connections.splice(index, 1);
        }
      });
    }
  });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(item) {
      cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



