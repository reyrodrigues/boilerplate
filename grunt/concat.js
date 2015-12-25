module.exports = {
  html:{
    src:[
      'libs/jquery/jquery/dist/jquery.js',
      'libs/jquery/bootstrap/dist/js/bootstrap.js',
      'html/js/*.js'
    ],
    dest:'html/js/app.src.js'
  },
    angular:{
      src:[
       'src/js/**/*.js',
      ],
      dest:'src/js/modules.js'
    }
}
