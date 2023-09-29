module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.initConfig({
        ts: {
            main:{
                src:['typescript/*.ts'],
                outFile:'javascript/main.js'
            }
        }
    });
    grunt.registerTask('default', ['ts'])
}