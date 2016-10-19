'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inject, bindable, customElement, _dec, _dec2, _class, TabsWrapper;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            customElement = _aureliaFramework.customElement;
        }],
        execute: function () {
            _export('TabsWrapper', TabsWrapper = (_dec = customElement('tab-wrapper'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
                function TabsWrapper(element) {
                    _classCallCheck(this, TabsWrapper);

                    this.element = element;
                }

                TabsWrapper.prototype.attached = function attached() {};

                return TabsWrapper;
            }()) || _class) || _class));

            _export('TabsWrapper', TabsWrapper);
        }
    };
});