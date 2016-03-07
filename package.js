Package.describe({
  name: 'superlumen:react-notification',
  version: '4.2.0_1',
  summary: 'Snackbar style notification component for React packaged for Meteor',
  git: 'https://github.com/superlumen/meteor-react-notification',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  api.use('react@0.14.0');
  api.use('cosmos:browserify@0.8.3', 'client');

  // Export on both client and server
  api.export('Notification');

  // Instantiate via browserify on the client
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');

  // Instantiate directly on the server
  api.addFiles('package.server.js', 'server');
});


Npm.depends({
  "react-notification": "4.2.0",
  "exposify": "0.5.0"
});
