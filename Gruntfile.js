module.exports = function(grunt) {

grunt.initConfig({
  config: grunt.config.init(),
  file: grunt.file.mkdir("dist"),
  exec: {
    pandoc: {
      cmd: "pandoc --css=<%= config.base %>/css/modest.css --to=html5 --output=<%= config.base %>dist/index.html src.md"
    }
  },
  assets_inline: {
    all: {
      options: {
        inlineImg: true
      },
      files: {
        '<%= config.base %>dist/index.html': '<%= config.base %>dist/index.html',
      },
    },
  }
});


  grunt.registerTask('build', ['exec:pandoc', 'assets_inline']);

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-assets-inline');
};
