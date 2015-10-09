var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var search = (function search(node) {
    if (node.value === target) {
      result = true;
      return;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        search(node.children[i]);
      }
    }
  })(this); //IIFE
  
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
