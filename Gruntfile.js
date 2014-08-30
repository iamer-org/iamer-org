'use strict';

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    
    yeoman: {
      app: 'src',
      dist: 'dist'
    },

    watch: {
      less : {
        files : '<%= yeoman.app %>/css/**/*.less',
        tasks: ['less:server']
      },
      // bower : {
      //   files : '<%= yeoman.app %>/bower_components/*',
      //   tasks : ['bower:server']
      // },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/<%= js %>/**/*.js',
          '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
        ]
      }
    },

    less : {
      dist : {
        options : {
          cleancss : true
        },
        files : {
           '<%= yeoman.app %>/css/main.css' : '<%= yeoman.app %>/css/main.less'         
        }
      }
      , server : {
        files : {
           '<%= yeoman.app %>/css/main.css' : '<%= yeoman.app %>/css/main.less'         
        }
      }
    },

    requirejs : {
      dist : {
        options : {
          appDir : '<%= yeoman.app %>'
          , baseUrl : 'js/'
          , mainConfigFile : '<%= yeoman.app %>/js/config.js'
          , dir : '<%= yeoman.dist %>'
          , skipDirOptimize: true
          // less is doing this for us
          , optimizeCss: 'none'
          , modules : [
            {
              name: "main"
              , include: ['app']
            }
          ]
          , pragmas : {
            configExclude : true
          }    
        }
      }
    },

    bower : {
      dist : {

      },
      server : {
        rjsConfig : '<%= yeoman.app %>/js/config.js'
        , options : {
          exclude : ['lesshat', 'normalize-css', 'requirejs']
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
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '<%= yeoman.app %>'
          ]
        }
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      }

      // this should get used *after* the requirejs build
      , requirejs : [
        '<%= yeoman.dist %>/bower_components'
        , '<%= yeoman.dist %>/css/**/*.less'
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
