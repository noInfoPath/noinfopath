module.exports = function(grunt) {

  	var DEBUG = !!grunt.option("debug");

  	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        copy: {
            test: {
                files: [
                    //{expand:true, flatten:false, src: [ 'lib/js/noinfopath/*.*'], dest: 'build/'},
                    {expand:true, flatten:true, src: [ 'dist/*.js'], dest: '../noinfopath-test-server-node/no/lib/js/noinfopath/'},
                ]
            }
        },
	    concat: {
		    noinfopath: {
		        src: [
		        	'src/global.js',
                    'src/progress.js'
		        ],
		        dest: 'dist/noinfopath.js'
		    }
	 	},
        bumpup: {
        	file: 'package.json'
    	},
    	version: {
    		options: {
        		prefix: '@version\\s*'
      		},
    		defaults: {
    			src: ['src/globals.js']
    		}
    	},
    	nodocs: {
    		"internal": {
    			options: {
    				src: 'dist/noinfopath.js',
    				dest: 'docs/noinfopath.md',
    				start: ['/*','/**']
    			}
    		},
    		"public": {
    			options: {
    				src: 'dist/noinfopath.js',
    				dest: 'docs/noinfopath.md',
    				start: ['/*']
    			}
    		}
    	},
        watch: {
            files: ['src/*.js', 'test/*.spec.js'],
            tasks: ['notest']
        }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-bumpup');
	grunt.loadNpmTasks('grunt-version');
 	grunt.loadNpmTasks('grunt-nodocs');
	//Default task(s).
	grunt.registerTask('build', ['karma:continuous', 'bumpup', 'version', 'concat:noinfopath','concat:dexie']);

    grunt.registerTask('compile', ['karma:continuous', 'concat:noinfopath', 'nodocs:internal']);

    grunt.registerTask('notest', ['concat:noinfopath', 'copy:test']);

};
