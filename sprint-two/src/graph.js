

// ###Graph Solution

// Instantiate a new graph
var Graph = function (){
  //var currentID = 0;
  this.nodes = [];
};

var Node = function(value) {
  this.value = value,
  this.connections = [];
  //this.id;
}
// var myGraph = new Graph();
// var kittens  = new Node('somevalue');
  // myNode should look like--
  /* 
  { value: 'somevalue',
    connections: [],
    id: 0,
  }
  */
// myGraph.addNode(myNode);

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var doesContain = false;
  _.each(this.nodes, function(item) {
    if ( item === node ) { // item.value?
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
    if ( item === node ) {
      removed = node 
      index = i;
    }
  })
  this.nodes.splice(index, 1)[0];

  return removed;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



