var Stack = function() {
	var obj = Object.create( stackMethods );
	obj.count = 0;
	return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
	push: function( value ) {
		this.count++;
		this[this.count] = value;
	},

	pop: function() {
		var temp = this[this.count];
		delete this[this.count];
	

		this.count--;
		if ( this.count < 0 ) {
			this.count = 0;
			return 0;
		}

		return temp;

	},

	size: function() {
		return this.count;
	}
};


