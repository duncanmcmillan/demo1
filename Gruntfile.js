/**
 * Created by duncmcm on 11/06/2016.
 */
'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var scope;

  var gruntConfig = grunt.file.readYAML('_config.yaml');

  var config = path.join(process.cwd(), gruntConfig.grunt, 'config');
  var devel = path.join(process.cwd(), gruntConfig.grunt, 'devel');
  var configPath = [config, devel];

  require('load-grunt-tasks')(grunt, {scope: scope});

  require('load-grunt-config')(grunt, {

    init: true,

    // Make data object available in tasks
    data: {
      config: gruntConfig,
      site: gruntConfig,
      pkg: grunt.file.readJSON('package.json')
    },

    // Load grunt tasks and aliases
    configPath: configPath,
    overridePath: path.join(process.cwd(), gruntConfig.grunt),


  });
};
