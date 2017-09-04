const Path = require('path');
const Git = require('nodegit')

class Project {
	constructor(path) {
		this.path = path;
		Git.Repository.open(path)
		.then((repo) => {
			this.repo = repo;
		})
	}
	
	get name() {
		return Path.basename(this.path);
	}
}

module.exports = {
	Project: Project
}