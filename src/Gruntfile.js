module.exports = function(grunt) {



    var globalConfig = {
        dest: '../css',
        src: '.',
    };



    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        globalConfig: globalConfig,

        sass: {
            style: {
                files: {
                    '<%= globalConfig.src %>/css/gs_r.css' : '<%= globalConfig.src %>/gs_r.scss'
                }
            },
        },
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');

    // Main Tasks
    // =================================

    // task
    grunt.registerTask('default', ['sass']);

};