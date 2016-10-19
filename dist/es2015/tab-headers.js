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

export let TabHeaders = (_dec = customElement('tab-headers'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = class TabHeaders {

    constructor(element, ea) {
        _initDefineProp(this, 'tabs', _descriptor, this);

        this.element = element;
    }

    tabClicked(id) {
        let contentId = id;
        let el = document.getElementById(contentId);

        let content = document.getElementById('tab-content-' + contentId);

        if (content) {

            let selectedTabs = document.getElementsByClassName('tabs-li-selected');
            if (selectedTabs[0]) {
                selectedTabs[0].classList.remove('tabs-li-selected');
            }
            el.classList.add('tabs-li-selected');

            document.getElementsByClassName('tab-content-active')[0].classList.remove('tab-content-active');
            content.classList.add('tab-content-active');
        }
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [bindable], {
    enumerable: true,
    initializer: function () {
        return null;
    }
})), _class2)) || _class) || _class);