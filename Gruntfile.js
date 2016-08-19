module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'assets/js/<%= pkg.name %>.js',
                dest: 'assets/js/<%= pkg.name %>.min.js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "assets/css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "assets/css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['assets/js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                },
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            },
        },
    });

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less']);
};
