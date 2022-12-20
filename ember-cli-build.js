'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
let GitRepoInfo = require('git-repo-info');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');

const environment = process.env.EMBER_ENV;
const IS_PROD = environment === 'production';
const IS_DEV = environment === 'development';

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassVariables: 'app/styles/_customisations/_variables.scss',
    sassOptions: {
      includePaths: ['app/'],
      extension: 'scss'
    },
    autoImport: {
      // to reintroduce if needed
      //insertScriptsAt: 'auto-import-scripts',
      webpack: {
        node: {
          global: true
        },
        plugins: [
          new Dotenv({
            path: IS_PROD ? './.env.production' : './.env',
            systemvars: false,
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
          })
        ],
      },
      externals: { jQuery: 'jQuery' },
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('node_modules/corejs-typeahead/dist/typeahead.jquery.js');
  
  // aupac style
  app.import('public/css/aupac-typeahead.css');

  return app.toTree();
};
