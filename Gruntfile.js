'use strict';

module.exports = function(grunt) {

	// Time how long task take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Automatically load required Grunt tasks
	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin'
	});
	// Define the configuration for all the tasks
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				ignores: ['app/js/jQuery.js'],
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
					'Gruntfile.js',
					'app/js/{,*/}*.js'
				]
			}
		},
		useminPrepare: {
			html: './app/**/*.html',
			options: {
				dest: 'dist'
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			// dist configuration is provided by useminPrepare
			dist: {}
		},
		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			app: {
				files: {
				'app/js/app.js' : ['app/js/app.js']
				}
			}
		},
		uglify: {
			// dist configuration is provided by useminPrepare
			dist: {}
		},
		cssmin: {
			dist: {}
		},
		filerev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 20
			},
			release: {
				// filerev: release hashes(md5) all assets (images,js and css)

				// in dist directory
				files: [{
					src: [
						'dist/js/*.js',
						'dist/styles/*.css',
					]
				}]
			}
		},
		// useminPrepare replace all assets with their revved version in html and css files.
		// options.assetDirs contains the directories for finding the assets according to their relative paths
		usemin: {
			html: 'dist/*.html',
			css: ['dist/styles/*.css'],
			options: {
				assetsDirs: ['dist', 'dist/styles']
			}
		},
		copy: {
			dist: {
				cwd: 'app',
				src: ['**', '!styles/**/*.css', '!js/**/*.js'],
				dest: 'dist',
				expand: true
			},
			fonts: {
				files: [
					{
						// For boostrap fonts
						expand: true,
						dot: true,
						cwd: 'bower_components/bootstrap/dist',
						src: ['fonts/*.*'],
						dest: 'dist'
					}
				]
			}
		},
		watch: {
	        copy: {
	            files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
	            tasks: [ 'build' ]
	        },
	        scripts: {
	            files: ['app/{,*/}*.js'],
	            tasks:[ 'build']
	        },
	        styles: {
	            files: ['app/styles/styles.css'],
	            tasks:['build']
	        },
	        livereload: {
	            options: {
	                livereload: '<%= connect.options.livereload %>'
	            },
	            files: [
	                'app/{,*/}*.html',
	                '.tmp/styles/{,*/}*.css',
	                'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
	            ]
	      }
	    },
	    connect: {
	      options: {
	        port: 9000,
	        // Change this to '0.0.0.0' to access the server from outside.
	        hostname: 'localhost',
	        livereload: 35729
	      },
	      dist: {
	        options: {
	          open: true,
	          base:{
	               path: 'dist/',
	            options: {
	                index: 'index.html',
	                maxAge: 300000
	            }
	          }
	        }
	      }
	    },
		clean: {
			build: {
				src: ['dist/']
			}
		}

	});

	grunt.registerTask('build', [
		'clean',
		'jshint',
		'useminPrepare',
		'concat',
		'cssmin',
		'ngAnnotate',
		'uglify',
		'copy',
		'filerev',
		'usemin'
	]);

	grunt.registerTask('serve', ['build', 'connect:dist', 'watch']);
	grunt.registerTask('default', ['build', 'connect:dist', 'watch']);
};