export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // .feature('resources')
    .plugin('aurelia-animator-css')
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 5;
      config.settings.keyboard = true;
    })
    .plugin('aurelia-validation');

  aurelia.start().then(a => a.setRoot());
}
