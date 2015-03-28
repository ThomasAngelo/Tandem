module.exports = function(grunt) {

grunt.registerTask('speak', function() {
  console.log("I'm Speaking");
});

grunt.config.init({
    
    //https://github.com/gruntjs/grunt-contrib-connect
    connect: {
        server: {
          options: {
            port: 3000,
            base: '<%= build_dir %>\src',
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: true,
            open: true
          }
        }
    },

    //https://github.com/gruntjs/grunt-contrib-sass
    sass: {
        dist: {
            files: {
                'src/assets/css/foundation.css': 'src/vendor/foundation/scss/foundation.scss'
            }
        }
    },
    
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
        all: {
                files: ['src/*.html', 'src/app/**/*.html', 'src/**/*.js', 'src/**/*.css', 'src/**/*.scss', 'src/vendor/foundation/scss/*.scss','src/vendor/foundation/scss/foundation/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
            }
        }
    }

    });

};