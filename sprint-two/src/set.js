var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set._count = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage[this._count++] = item;
  }
};

setPrototype.contains = function(item){
  var result = false;
  _.each(this._storage, function(value) {
    if (value === item) {
      result = true;
    }
  });

  return result;
};

setPrototype.remove = function(item){
  var that = this; // saving the current value of this as that
  _.each(this._storage, function(value, key) {
    if (value === item) {
      delete that._storage[key];
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
