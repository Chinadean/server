var database = require('./database');

var server = function() {
	this.config = {
		lang: 'en'
	};
	this.databases = {};
};


server.prototype.database = function(name) {
	var idx = name.toLowerCase();
	if (!this.databases.hasOwnProperty(idx)) {
		this.databases[idx] = new database(this, name);
	}
	return this.databases[idx];
};


module.exports = server;