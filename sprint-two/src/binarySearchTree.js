var BinarySearchTree = function(value){
  var tree = Object.create(binaryTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var Leaf = function(value) {
  return {
    left: null,
    right: null,
    value: value
  }
};

var binaryTreeMethods = {
  insert: function(value) {
    var search = function(place){
      if ( value < place.value ) {
        if ( place.left === null ) {
          place.left = Leaf(value);
        } else {
          search(place.left)
        }
      }
      if ( value > place.value ) {
        if ( place.right === null ) {
          place.right = Leaf(value);
        } else {
          search(place.right);
        }
      }
    };
    search(this);
  },

  contains: function(value) {

    var search = function(place){
      if ( value === place.value ) {
        return true;
      }
      if ( value < place.value ) {
        if ( place.left === null ) {
          return false;
        } else {
          return search(place.left);
        }
      }
      if ( value > place.value ) {
        if ( place.right === null ) {
          return false;
        } else {
          return search(place.right);
        }
      }
    };
    
    return search(this);
  },

  depthFirstLog: function(fn) {

    var search = function(place){
      fn ( place.value );

      if ( place.left ) {
        search( place.left );
      }
      
      if ( place.right ) {
        search( place.right );
      } 
    };
    
    search(this);
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
