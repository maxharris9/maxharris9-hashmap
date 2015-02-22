Package.describe({
  summary: "Hashmap component",
  version: "1.0.1",
  git: "https://github.com/max-leportlabs/maxharris9-hashmap.git",
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');
  
  api.addFiles('hashmap.js');
  api.export(['HashMap1d', 'HashMap2d']);
});

Package.onTest(function(api) {
  api.use(['maxharris9:hashmap', 'tinytest', 'test-helpers']);
  api.addFiles('maxharris9:hashmap-tests.js', ['client', 'server']);
});
