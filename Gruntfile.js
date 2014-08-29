module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            dev: {
                options: {
                    baseUrl: 'src/',
                    name: '../node_modules/almond/almond',
                    include: ['main'],
                    out: 'dist/physdom.js',
                    wrap: {
                        startFile: 'src/start.frag',
                        endFile: 'src/end.frag'
                    },
                    paths: {
                        cannon: '../node_modules/cannon/build/cannon.min'
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['requirejs:dev']);
};