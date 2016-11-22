module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: '*.js',
          dest: 'build/js',
          ext: '.min.js'
        },{
          expand: true,
          cwd: 'views/js/',
          src: '*.js',
          dest: 'build/views/js',
          ext: '.min.js'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: '*.css',
          dest: 'build/css',
          ext: '.min.css'
        },{
          expand: true,
          cwd: 'views/css/',
          src: '*.css',
          dest: 'build/views/css',
          ext: '.min.css'
        }]
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                               // Dictionary of files
          'build/index.html': 'index.html',   // 'destination': 'source'
          'build/project-2048.html': 'project-2048.html',
          'build/project-mobile.html': 'project-mobile.html',
          'build/project-webperf.html': 'project-webperf.html',
          'build/views/pizza.html': 'views/pizza.html'
        }
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/img/'                  // Destination path prefix
        },{
          expand: true,                  // Enable dynamic expansion
          cwd: 'views/images/',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/views/images/'
        }]
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['uglify','cssmin','htmlmin','imagemin']);
};
