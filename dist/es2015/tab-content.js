var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import { inject, bindable, customElement } from 'aurelia-framework';

export let TabContent = (_dec = customElement('tab-content'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = class TabContent {

    constructor(element) {
        _initDefineProp(this, 'tab', _descriptor, this);

        this.element = element;
    }

    attached() {
        let self = this;

        if (self.element.getAttribute('default-tab')) {
            self.element.querySelector('.tab-content').classList.add('tab-content-active');
        } else if (self.tab.defaultTab) {
            self.element.querySelector('.tab-content').classList.add('tab-content-active');
        }
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'tab', [bindable], {
    enumerable: true,
    initializer: function () {
        return null;
    }
})), _class2)) || _class) || _class);