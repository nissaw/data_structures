var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //LimitedArray.storage = []
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var found = false;

  if (bucket === undefined) {
    bucket = [];
  }

  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      found = true;
      break;
    }
  }

  if (!found) {
    bucket.push([k ,v]);
  }

  this._storage.set(i, bucket);
};


HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  
  for (var j = 0; j < bucket.length; j++) {
    if ( bucket[j][0] === k ) {
      return bucket[j][1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result;

  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      result = bucket[j][1];
      bucket.splice(j, 1);
      break;
    }
  }

  this._storage.set(i, bucket);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
