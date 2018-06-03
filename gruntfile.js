module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    gitinfo: {
    },
    ngconstant: {
      options: {
        space: ' ',
        wrap: true,
        deps: ['ngRoute', 'ngStorage', 'ngResource', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'templates-main'],
        dest: "src/module/medd/10index.js",
        name: 'angularApp'
      },
      dist: {
        constants: {
          'ENV': '<%= gitinfo.local.branch.current %>'
        }
      }
    },
    php_constants: {
      static_option: {
        options: [
        {constName: 'envSHA', constValue: '<%= gitinfo.local.branch.current.SHA %>'},
        {constName: 'envShortSHA', constValue: '<%= gitinfo.local.branch.current.shortSHA %>'},
        {constName: 'envAuthor', constValue: '<%= gitinfo.local.branch.current.lastCommitAuthor %>'},
        {constName: 'envLastCommitTime', constValue: '<%= gitinfo.local.branch.current.lastCommitTime %>'},
        {constName: 'envBranch', constValue: '<%= gitinfo.local.branch.current.name %>'}
        ],
        src: 'server/enviroment.php',
        dest: 'server/enviroment.php'
      },
    },
    html2js: {
      options: {
        base: "",
      },
      main: {
        src: ['src/**/*.html'],
        dest: 'src/vendor/90templates.js'
      },
    },
    concat: {
      options: {
        separator: '\n',
      },
      js: {
        src: ['src/vendor/*.js', 'src/module/medd/*.js', 'src/directive/**/*.js', 'src/factory/**/*.js', 'src/filter/**/*.js',  'src/module/medd/modal/**/*.js', 'src/module/medd/route/**/*.js'],
        dest: 'dist/<%= gitinfo.local.branch.current.SHA %>.js',
      },
      css:{
        src: ['css/*.css'],
        dest: 'dist/<%= gitinfo.local.branch.current.SHA %>.css',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= gitinfo.local.branch.current.SHA %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/<%= gitinfo.local.branch.current.SHA %>.min.css': ['css/*.css']
        }
      }
    },
    obfuscator: {
      options: {
      },
      task1: {
        options: {
        },
        files: {
          'dist/<%= gitinfo.local.branch.current.SHA %>.min.obs.js': ['dist/<%= gitinfo.local.branch.current.SHA %>.min.js']
        }
      }
    },
    clean: {
      options: {
        'no-write': false
      },
      src_folder: ['src/'],
      tmp_folder: ['tmp/'],
      css_folder: ['css/'],
      final_cleanup: ['dist/*.css', 'dist/*.js', '!dist/*.min.css', '!dist/*.min.obs.js'],
    }
  });

  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-php-constants');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('default', ['gitinfo', 'ngconstant', 'php_constants', 'html2js', 'concat', 'uglify', 'cssmin', 'obfuscator', 'clean']);
  grunt.registerTask('dev', ['gitinfo', 'ngconstant', 'php_constants']);
};