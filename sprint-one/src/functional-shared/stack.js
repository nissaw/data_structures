var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = { count: 0 };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
	push: function(value) {
    this.count += 1;
    this[this.count] = value;
  },

  pop: function() {
    var result = this[this.count];
    delete this[this.count];
    this.count -=1;
    if (this.count < 0) {
      this.count = 0;
    }
    return result;
  },

  size: function() {
    return this.count;
  }
};
