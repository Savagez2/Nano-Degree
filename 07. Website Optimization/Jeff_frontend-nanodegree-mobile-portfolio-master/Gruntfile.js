module.exports = function(grunt) {

  grunt.initConfig({
    uglify : {
	     options : {
		       banner : "/*! javascript file */\n"
	     },
	     build : {
		       src : ["views/js/main.js"],
		       dest : "views/js/main.min.js"
	     }
    },

    htmlmin: {
      dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
      'index.html': 'index_nonmin.html'
      //'views/pizza.html': 'views/pizza_nonmin.html'
      }
      }
    },

    cssmin: {
      dist:{
        files: {
          'css/style.min.css':'css/style.css',
          'css/footer.min.css':'css/footer.css',
          'views/css/style.min.css':'views/css/style.css'
        }
      }
    }

  });

  //grunt.loadNpmTasks('grunt-responsive-images');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);

};
