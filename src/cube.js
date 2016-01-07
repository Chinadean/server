var cube = function(database, name, dimensions, measures) {
	this.name = name;
	this.database = database;
	this.dimensions = dimensions;
	this.measures = measures;
	this.data = [];
	this.index = {};
	this.indexCount = 0;
	this.dataCount = 0;
};

cube.prototype.write = function(entry) {
	this.data.push(entry);

};

cube.prototype.append = function(points, values) {
	this.data.push([points, values]);
};

cube.prototype.read = function(points) {

};

module.exports = cube;