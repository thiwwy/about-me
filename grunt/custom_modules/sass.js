exports.task = {
  dist: {
    options: {
      style: 'expanded',
      lineNumbers: true, // 1
      sourcemap: 'none'
    },
    files: [{
      expand: true, // 2
      cwd: '../app/styles/',
      src: [ '**/*.scss' ],
      //src: [ 'main.scss' ],
      dest: '../app/styles/css',
      ext: '.css'
    }]
  }
};
