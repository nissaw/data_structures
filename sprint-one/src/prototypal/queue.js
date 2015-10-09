var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.queueSize = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
	enqueue: function(value) {
    this.count += 1;
    this.queueSize += 1;
    this.storage[this.count] = value;
  },

  dequeue: function() {
    this.queueSize -= 1;
    if (this.queueSize < 0) {
      this.queueSize = 0;
      return 0;
    }
    var firstIndex = _.reduce(Object.keys(this.storage), function(prev, next) {
      if (prev < next) {
        return prev;
      } else {
        return next;
      }
    });

    var temp = this.storage[firstIndex];
    delete this.storage[firstIndex];
    return temp;
  },

  size: function() {
    return this.queueSize;
  }
};


