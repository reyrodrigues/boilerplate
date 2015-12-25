module.exports = {
  angular: {
    files: ['src/**/*'],
    tasks: ['build:angular']
  },
  less: {
	  files: ['src/css/less/*.less'],
	  tasks: ['recess'],
  }
}
