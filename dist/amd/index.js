define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    function configure(config) {
        config.globalResources('./tab-headers', './tabs-wrapper', './tab-content', './assets/tabs.css');
    }
});