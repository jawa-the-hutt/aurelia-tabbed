import {inject, bindable, customElement} from 'aurelia-framework';

@customElement('tab-wrapper')
@inject(Element)
export class TabsWrapper {

    constructor(element) {
        this.element = element;
    }

    attached() {

    }
}
