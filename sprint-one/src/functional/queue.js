var Queue = function(){
  var someInstance = {};
  var count = 0;
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    count += 1;
    size += 1;
    storage[count] = value;
  };

  someInstance.dequeue = function(){
    size -= 1;
    if ( size < 0 ) {
      size = 0;
      return count;
    }

    var firstIndex = 
      _.reduce(Object.keys(storage), function(prev, next) {
        if (prev < next) {
          return prev;
        } else {
          return next;
        }
      });

    var result = storage[firstIndex]; 
    delete storage[firstIndex];
    return result;
  };


  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
