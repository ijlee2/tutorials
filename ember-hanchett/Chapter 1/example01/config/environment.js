/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    // App name
    modulePrefix: 'pod-example',
    // The podModulePrefix sets the POD path to the following format: {appname}/{poddir}
    podModulePrefix: 'pod-example/pods',
    environment,
    // baseURL, which allowed an Ember app and assets to be deployed to a subdirectory
    // without requiring rewriting of asset URLs, and the accompanying <base> tag have
    // been deprecated in Ember 2.7. Instead, use rootURL, which identifies the path at
    // which the Ember app is served
    // For more information, visit https://www.emberjs.com/blog/2016/04/28/baseURL.html.
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
