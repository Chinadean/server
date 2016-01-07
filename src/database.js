
var dimension = require('./dimension');
var cube = require('./cube');

var database = function(server, name) {
	this.server = server;
	this.name = name;
	this.dimensions = {};
	this.cubes = {};
};

database.prototype.dimension = function(name) {
	var idx = name.toLowerCase();
	if (!this.dimensions.hasOwnProperty(idx)) {
		this.dimensions[idx] = new dimension(this, name);
	}
	return this.dimensions[idx];
};

database.prototype.cube = function(name) {
	var idx = name.toLowerCase();
	if (!this.cubes.hasOwnProperty(name)) {
		this.cubes[idx] = new cube(this, name);
	}
	return this.cubes[idx];
};

database.prototype.is = function(name) {
	return name === '*';
};

module.exports = database;