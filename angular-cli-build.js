/* global require, module */
"use strict";

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var _ = require('lodash');
var glob = require('glob');

module.exports = function(defaults) {

  return new Angular2App(defaults, {
    sassCompiler: {
      includePaths: [
        'src/**/*.scss'
      ]
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      '@angular2-material/**/*',
      'd3/d3.min.js'
    ]
  });

  //sass : any = mergeTrees(_.map(glob.sync('src/**/*.scss'), function(sassFile) {
  //  sassFile = sassFile.replace('src/', '');
  //  return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
  //}));
  //
  //return mergeTrees([appTree, sass], { overwrite: true });
};
