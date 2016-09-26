module.exports = function(grunt) {

  	var DEBUG = !!grunt.option("debug");

  	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        copy: {
            test: {
                files: [
                    //{expand:true, flatten:false, src: [ 'lib/js/noinfopath/*.*'], dest: 'build/'},
                ]
            }
        },
	    concat: {
		    noinfopath: {
		        src: [
		        	'src/global.js'
		        ],
		        dest: 'dist/noinfopath.js'
		    },
            readme: {
		        src: [
		        	'docs/noinfopath.md'
		        ],
		        dest: 'readme.md'
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
    			src: ['src/global.js']
    		}
    	},
    	nodocs: {
    		"internal": {
    			options: {
    				src: 'dist/noinfopath.js',
    				dest: 'docs/noinfopath.md',
    				start: ['/*','/**']
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
	grunt.registerTask('build', ['bumpup', 'version', 'concat:noinfopath', "nodocs", "concat:readme"]);

    grunt.registerTask('compile', ['concat:noinfopath', 'nodocs:internal', 'concat:readme']);

    grunt.registerTask('notest', ['concat:noinfopath', 'copy:test']);

};
