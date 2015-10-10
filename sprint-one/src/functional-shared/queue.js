var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = { count: 0, 
  						queueSize: 0,
              storage: {}
            };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.queueSize++;
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function() {
  this.queueSize--;
  if (this.queueSize < 0 ) {
    this.queueSize = 0;
    return 0;
  }
  var firstIndex = _.reduce(Object.keys(this.storage), function(prev, next) {
    if (prev < next) { 
      return prev;
    } else {
      return next;
    }
  })
  var temp = this.storage[firstIndex];
  delete this.storage[firstIndex];
  return temp;
};

queueMethods.size = function() {
	return this.queueSize;
};
