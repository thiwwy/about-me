exports.task = {
  my_target: {
    files: [{
      expand: true,
      cwd: '../app/styles/',
      src: [ '*.css', '!*.min.css' ], // 1
      dest: '../app/styles/',
      ext: '.min.css'
    }]
  }
};
