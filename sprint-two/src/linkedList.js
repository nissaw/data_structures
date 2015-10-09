var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // first pass check if head is null 
    if ( list.head === null ) {
       //if yes add value to head
      list.head = Node(value);
      list.tail = list.head;
    } else if ( list.tail === list.head ) {
      // if yes alter head and add tail
      var newNode = Node( value )
      list.tail = newNode;
      list.head.next = newNode;
    } else {
       // third pass alter tail only
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
    // take the current list.tail and change it's .next to point to new value
    // update list.tail as new value
  };

  list.removeHead = function(){
    // find current list.head's .next value and assign it the position of list.head
    // return the value of the former list.head
    // delete
    var currentVal = list.head.value;
    var futureHead = list.head.next;
    delete list.head;
    list.head = futureHead;
    return currentVal;
  };

  list.contains = function(target){
    // start at head check node.value if true return
    // if not go to node.next and repeat

    var search = function(node) {
   
      if ( node.value === target ) {
        return true; 
      } else {
        if ( node.next ) {
          return search( node.next )
        }
      }
    };

    return search(list.head) || false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
