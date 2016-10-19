import {inject, bindable, customElement} from 'aurelia-framework';

@customElement('tab-headers')
@inject(Element)
export class TabHeaders {

    @bindable tabs = null;

    constructor(element, ea) {
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
}