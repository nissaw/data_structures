var Stack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count += 1;
    storage[count] = value;
  };


  someInstance.pop = function(){
    var temp = storage[count];
    delete storage[count];
    count -= 1;
    if (count < 0) {
      count = 0;
    }

    return temp;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
