# Aurelia Tabbed
A free tabs component for your Aurelia applications. Allows you to toggle between sections of content, with supports for dynamically composing views with optional data.  This project is based off of the [`aurelia-tabs`](https://github.com/Vheissu/aurelia-tabs) project so it relies pretty heavily on its basic structure.

## Installation
1. In your console type: ``npm install aurelia-tabbed --save`` or for Jspm: ``jspm install aurelia-tabbed``
2. During the bootstrapping phase, register the plugin:
```
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-tabbed')
    .developmentLogging();

  aurelia.start().then(a => a.setRoot());
}
```

## Usage
This plugin is comprised of multiple components to be used together.

### Tab-Header
The tab-headers component is where your clickable tabs are generated. It has one bindable value which is required ``tabs.bind``

#### Valid data
To pass through tabs to your object, they need to be defined in a standardised way. The plugin expects an array of one or more objects which contain at least an ``id`` property, a ``label`` property and a ``viewModel`` property. The ``id`` property is used to identify which tab-content this tab will open as defined in the tabs-wrapper element. The ``label`` property is the value displayed to the user. The ``viewModel`` property is the path to the view-model you wish to load in that tab. A fourth optional property ``icon`` allows you to set the class names associated with an icon you want displayed next to the Label.  A fifth optional property ``defaultTab``, allows us to specify if this tab is the default selected tab.

**In your ViewModel**:
```
export class ViewModel {
    constructor() {
        this.tabSchema = [
            {id: 'tab-one', label: 'My First Section', viewModel: '', icon: 'fa fa-gear' defaultTab: true},
            {id: 'tab-two', label: 'Users', viewModel: './tab-two-view-model', icon: '' },
            {id: 'tab-three', label: 'Browse Items' viewModel: './tab-three-view-model', icon: '' }}
        ];
    }
}
```

**In your View:**
``<tab-headers tabs.bind="tabSchema"></tab-headers>``

One optional item you can set here is an overall dark or light skin for the tabs by adding a class to the ``tab-headers`` element.  For the dark skin, set the class to ``tabs-dark`` and for the light colored skin, set it to ``tabs-light``.
For example: ``<tab-headers tabs.bind="tabSchema" class="tabs-dark"></tab-headers>``

### Tab Wrapper
Once you have your tabs setup, you will want to create tab wrappers which wrap tab-content items. We will use the example above and add in the wrapper related to each defined tab.

**In your ViewModel**:
```
export class ViewModel {
    constructor() {
        this.tabSchema = [
            {id: 'tab-one', label: 'My First Section', viewModel: '', icon: 'fa fa-gear' defaultTab: true},
            {id: 'tab-two', label: 'Users', viewModel: './tab-two-view-model', icon: '' },
            {id: 'tab-three', label: 'Browse Items' viewModel: './tab-three-view-model', model: this.modelData, icon: '' }}
        ];

		this.modelData = { first: 'first', second: 'second' }
    }
}
```

**In your View:**
```
<tabs tabs.bind="tabSchema" class="tabs-dark"></tabs>

<tabs-wrapper>

</tab-wrapper>
```

We have a basic skeleton tab application, but no tabs to switch between. Lets add some individual tab content areas now.

**In your View:**
```
<tabs tabs.bind="tabSchema" class="tabs-dark"></tabs>

<tab-wrapper>
    <tab-content tab.bind="tabSchema[0]" default-tab="true">
        <h1>Hello</h1>
        <p>This is some basic HTML content within a tab content area.</p>
    </tab-content>
    <tab-content tab.bind="tabSchema[1]"></tab-content>
    <tab-content tab.bind="tabSchema[2]"></tab-content>
</tab-sections>
```

The ``<tab-content>`` element is used in three different ways based on how the ``tabSchema`` object is setup. First, we just specified some content right between the opening and closing brackets and because we didn't specify a ``path`` in the ``tabSchema`` object, it will display the HTML. For the second, we populated the ``path`` property in the ``tabSchema`` object, which allows us to dynamically render a ViewModel using the ``<compose>`` element and finally, we do the same thing but pass through an object of data from the ``model`` property in the ``tabSchema`` object.