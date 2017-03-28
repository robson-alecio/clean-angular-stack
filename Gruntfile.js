/*global module:false*/
module.exports = exports;

function exports(grunt) {

  // Project configuration.
  grunt.initConfig({
    wiredep: {
      target: {
        src: 'index.html' // point to your HTML file.
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['wiredep']);
  grunt.registerTask('sync', ['browserSync']);

}
