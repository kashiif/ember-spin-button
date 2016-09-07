/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-spin-button',

  included: function(appOrAddon) {
    var app = appOrAddon.app || appOrAddon;

    if (app.__emberSpinButtonIncludedInvoked) {
      return;
    }

    app.__emberSpinButtonIncludedInvoked = true;
    this._super.included && this._super.included.apply(this, arguments);
    app.import(app.bowerDirectory + '/spin.js/spin.js');
    app.import('vendor/spinner.js', {
      exports: {
        spinner: ['default'],
      },
    });

  }
};
