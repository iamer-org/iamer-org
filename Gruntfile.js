'use strict';

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    
    project: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      less : {
        files : '<%= project.src %>/css/**/*.less',
        tasks: ['less:server']
      },
      // bower : {
      //   files : '<%= project.src %>/bower_components/*',
      //   tasks : ['bower:server']
      // },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= project.src %>/**/*.html',
          '<%= project.src %>/css/**/*.css',
          '<%= project.src %>/<%= js %>/**/*.js',
          '<%= project.src %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
        ]
      }
    },

    less : {
      dist : {
        options : {
          cleancss : true
        },
        files : {
           '<%= project.src %>/css/main.css' : '<%= project.src %>/css/main.less'         
        }
      }
      , server : {
        files : {
           '<%= project.src %>/css/main.css' : '<%= project.src %>/css/main.less'         
        }
      }
    },

    requirejs : {
      dist : {
        options : {
          appDir : '<%= project.src %>'
          , baseUrl : 'js/'
          , mainConfigFile : '<%= project.src %>/js/config.js'
          , dir : '<%= project.dist %>'
          , skipDirOptimize: true
          // less is doing this for us
          , optimizeCss: 'none'
          , include: "main",
          , name: "../bower_components/almond/almond",
          , out: "dist.js"         
        }
      }
    },

    bower : {
      dist : {

      },
      server : {
        rjsConfig : '<%= project.src %>/js/config.js'
        , options : {
          exclude : ['lesshat', 'normalize-css']
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= project.src %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= project.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '<%= project.src %>'
          ]
        }
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= project.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= project.dist %>/.git*'
          ]
        }]
      }

      // this should get used *after* the requirejs build
      , requirejs : [
        '<%= project.dist %>/bower_components'
        , '<%= project.dist %>/css/**/*.less'
      ]


      , server: [
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'clean:server',
      'connect:livereload',
      'watch'
    ]);
  });


  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('build', [
    'clean',
    'less:dist',
    'requirejs:dist',
    'clean:requirejs'
  ]);


  grunt.registerTask('default', [
    'serve'
  ]);
};
