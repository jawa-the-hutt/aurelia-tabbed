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

        // if the default-tab attribute is present we are dealing with a manually generated tab content structure
        // if the default-tab attribute is NOT present, we are dealing with a tab content structure that is being
        // generated dynamically through a repeat.for
        if (self.element.getAttribute('default-tab')) {
            self.element.querySelector('.tab-content').classList.add('tab-content-active');
        } else if (self.tab.defaultTab) {
            self.element.querySelector('.tab-content').classList.add('tab-content-active');
        }
    }
}
