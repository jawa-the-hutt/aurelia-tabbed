define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TabHeaders = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

    var TabHeaders = exports.TabHeaders = (_dec = (0, _aureliaFramework.customElement)('tab-headers'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = function () {
        function TabHeaders(element) {
            _classCallCheck(this, TabHeaders);

            _initDefineProp(this, 'tabs', _descriptor, this);

            this.element = element;
        }

        TabHeaders.prototype.tabClicked = function tabClicked(id) {
            var contentId = id;
            var el = document.getElementById(contentId);

            var content = document.getElementById('tab-content-' + contentId);

            if (content) {

                var selectedTabs = document.getElementsByClassName('tabs-li-selected');
                if (selectedTabs[0]) {
                    selectedTabs[0].classList.remove('tabs-li-selected');
                }
                el.classList.add('tabs-li-selected');

                document.getElementsByClassName('tab-content-active')[0].classList.remove('tab-content-active');
                content.classList.add('tab-content-active');
            }
        };

        return TabHeaders;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    })), _class2)) || _class) || _class);
});