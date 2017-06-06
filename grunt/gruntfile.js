module.exports = function( grunt ) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    watch: {
      files: '../app/styles/**/*.scss', // 1
      tasks: [ 'sass', 'cssmin' ]
    },
    sass: require( './custom_modules/sass' ).task, // 2
    cssmin: require( './custom_modules/cssmin' ).task // 3
  });
};
