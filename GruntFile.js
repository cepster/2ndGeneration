module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'app/*.js']
    },
    'ftp-deploy': {
      build: {
        auth: {
          host: 'upload.comcast.net',
          port: 21,
          authKey: 'key1'
        },
        src: './',
        dest: './',
        exclusions: ['node_modules', '.git']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('deploy', ['jshint', 'ftp-deploy']);

};