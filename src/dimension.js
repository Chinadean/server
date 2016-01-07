
var dimension = function(parent, name) {
	this.parent = parent;
	this.name = name;
	this.idx = name.toLowerCase();
	this.childs = {};
	this.attributes = {};
};

dimension.prototype.node = function(name) {
	var idx = name.toLowerCase();
	if (!this.childs.hasOwnProperty(idx)) {
		this.childs[idx] = new dimension(this, name);
	}
	return this.childs[idx];
};

dimension.prototype.attr = function(name, value) {
	if (typeof value !== 'undefined') {
		this.attributes[name] = value;
	}
	return this.attributes[name];
};

dimension.prototype.name = function(session) {
	if (typeof session !== 'undefined' && this.attributes.hasOwnProperty('name_' + session.lang)) {
		return this.attributes['name_' + session.lang];
	}
	if (this.attributes.hasOwnProperty('name')) {
		return this.attributes['name'];
	}
	return this.name;
};

dimension.prototype.is = function(name) {
	return this.idx === name || this.parent.is(name);
};

dimension.prototype.hasChild = function(name) {
	return this.childs.hasOwnProperty(name.toLowerCase());
};

dimension.prototype.findChilds = function(name) {
	var results = []; 
	// @todo
	return results;
};



module.exports = dimension;
