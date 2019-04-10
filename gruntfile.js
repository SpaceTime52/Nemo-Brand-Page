module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    sourceMap: false,
                    debugInfo: true,
                    trace: true,
                    outputStyle: "compressed"
                },
                files: [{
                    expand: true,
                    cwd: "assets/scss",
                    src: ["**/*.scss"],
                    dest: "assets/css/themes",
                    rename: function (dest, src) {
                        return dest + "/" + src.replace('.scss', '.min.css')
                    }
                }]
            },
            switcher: {
                options: {
                    sourceMap: false,
                    debugInfo: true,
                    trace: true,
                    outputStyle: "compressed"
                },
                files: [{
                    expand: true,
                    cwd: "styleswitcher",
                    src: ["**/*.scss"],
                    dest: "styleswitcher",
                    rename: function (dest, src) {
                        return dest + "/" + src.replace('.scss', '.css')
                    }
                }]
            },
            prod: {
                options: {
                    sourceMap: false,
                    debugInfo: true,
                    trace: true,
                    outputStyle: "expanded"
                },
                files: [{
                    expand: true,
                    cwd: "assets/scss",
                    src: ["**/*.scss"],
                    dest: "assets/css/themes",
                    rename: function (dest, src) {
                        return dest + "/" + src.replace('.scss', '.css')
                    }
                }]
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    spawn: false
                },
            },
            js: {
                files: ['assets/js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                },
            },
        },
        validation: {
            options: {
                doctype: 'HTML5'
            },
            files: {
                src: ['*.html']
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true, 
                        cwd: 'assets/plugins/node_modules', 
                        src: ['**'], 
                        dest: 'assets/plugins/'
                    }
                ]
            }
        },
        remove: {
            options: {
                trace: false
            },
            main: {
                dirList: ['assets/plugins/node_modules']
            }
        },
        cssmin: {
            target: {
                files: {
                    'assets/css/plugins-bundle.css': 
                    [
                        'assets/plugins/bootstrap/dist/css/bootstrap.min.css',
                        'assets/plugins/slick-carousel/slick/slick.css',
                        'assets/plugins/animate.css/animate.min.css'
                    ],
                    'assets/css/icons-bundle.css': 
                    [
                        'assets/css/fpslineicons.css',
                        'assets/css/themify-icons.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            my_target: {
                files: {
                    'assets/js/core.min.js':
                    [
                        'assets/js/core.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-w3c-html-validation');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-remove');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
}