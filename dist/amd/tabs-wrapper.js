define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TabsWrapper = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var TabsWrapper = exports.TabsWrapper = (_dec = (0, _aureliaFramework.customElement)('tab-wrapper'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
        function TabsWrapper(element) {
            _classCallCheck(this, TabsWrapper);

            this.element = element;
        }

        TabsWrapper.prototype.attached = function attached() {};

        return TabsWrapper;
    }()) || _class) || _class);
});