import {inject, bindable, customElement} from 'aurelia-framework';

@customElement('tab-content')
@inject(Element)
export class TabContent {
    @bindable tab = null;

    constructor(element) {
        this.element = element;
    }

    attached() {
        let self = this;
        if (self.element.getAttribute('default-tab')) {
            self.element.querySelector('.tab-content').classList.add('tab-content-active');
        }
    }
}
