var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //LimitedArray.storage = []
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === undefined) {
    this._storage[i] = [];
  }
  this._storage[i].push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // return this._storage[i][1];
  var val;
  _.each(this._storage[i], function(arr) {
    if (arr[0] === k) {
      val = arr[1];
    }
  });

  return val;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  _.each(this._storage[i], function(arr) {
    if (arr[0] === k) {
      arr[1] = null;
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
