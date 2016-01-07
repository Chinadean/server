var measure = function() {
	this.sum = 0;
	this.min = false;
	this.max = false;
	this.count = 0;
};

measure.prototype.set = function(value) {
	this.sum += value;
	this.count ++;
	if (value < this.min || this.min === false) {
		this.min = value;
	}
	if (value > this.max || this.max === false) {
		this.max = value;
	}
};

module.exports = measure;