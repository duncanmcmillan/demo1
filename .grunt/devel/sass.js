/**
 * Created by duncmcm on 11/06/2016.
 */
module.exports = {
  sass: {
    options: {
      sourceMap: true,
      outputStyle: 'expanded'
    },
    dist: {
      files: {
        'app/css/app.css': 'app/scss/app.scss'
      }
    }
  }
};


