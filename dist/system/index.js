'use strict';

System.register([], function (_export, _context) {
    "use strict";

    function configure(config) {
        config.globalResources('./tab-headers', './tabs-wrapper', './tab-content', './assets/tabs.css');
    }

    _export('configure', configure);

    return {
        setters: [],
        execute: function () {}
    };
});