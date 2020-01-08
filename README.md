![image](https://user-images.githubusercontent.com/5319267/28922057-f0d471fa-7858-11e7-8478-010657fd0e60.png)

[![Greenkeeper badge](https://badges.greenkeeper.io/biig-io/ngx-tabset.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/biig-io/ngx-tabset.svg?branch=master)](https://travis-ci.org/biig-io/ngx-tabset) [![npm version](https://badge.fury.io/js/ngx-tabset.svg)](https://badge.fury.io/js/ngx-tabset) [![npm downloads](https://img.shields.io/npm/dm/ngx-tabset.svg)](https://npmjs.org/ngx-tabset) [![codecov](https://codecov.io/gh/biig-io/ngx-tabset/branch/master/graph/badge.svg)](https://codecov.io/gh/biig-io/ngx-tabset)

`ngx-tabset` is a very simple library to let you create some tabs. It uses flex-box and is compatible with Angular >=2.0.0.

## Demo
http://biig-io.github.io/ngx-tabset/

**This library doesn't use any framework (no CSS library, no JQuery...)**

## Setup
To use `ngx-tabset` in your project install it via [npm](https://www.npmjs.com/package/ngx-tabset) / [yarn](https://yarnpkg.com/fr/package/ngx-tabset):
```
npm i ngx-tabset --save
```
or
```
yarn add ngx-tabset
```

If you are using system.js you may want to add this into your config:

```json
System.config({
    "map": {
        "ngx-tabset": "node_modules/ngx-tabset/bundles/ngx-tabset.umd.js"
    }
});
```

## Usage

Import `TabsModule` in your app module and start using it in any component:
```typescript
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsModule} from 'ngx-tabset';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

And import `ngx-tabset.scss` or `ngx-tabset.css` in a global style file (e.g. `styles.scss` or `styles.css` in classic Angular projects or any other scss/css file it imports):
Example with **styles.scss**:
```
/* You can add global styles to this file, and also import other style files */
@import "~ngx-tabset/ngx-tabset";
@import "app/app.component";
...
```
[Demo example here](https://github.com/biig-io/ngx-tabset/blob/master/src/styles.scss)

### Basic example
```html
<ngx-tabset customNavClass="nav-test-class" customTabsClass="container">
  <ngx-tab tabTitle="About me" tabSubTitle="a little subtitle">
    Its all about me.
  </ngx-tab>
  <ngx-tab tabTitle="Contacts" tabSubTitle="my contacts" [bypassDOM]="true">
    <ng-template>
      This is content of the contacts tab
    </ng-template>
  </ngx-tab>
  <ngx-tab tabTitle="Map" tabSubTitle="i'm disabled" [disabled]="true">
    Content of the Map Tab
  </ngx-tab>
</ngx-tabset>
```

### Content projection example
```html
<ngx-tabset [disableStyle]="true" (onSelect)="doSomethingOnTabSelect($event)">
    <ngx-tab tabTitle="Tab title" [active]="true" [bypassDOM]="true">
        <ng-template>
          <app-my-component></app-my-component>
        </ng-template>
    </ngx-tab>
    ...
</ngx-tabset>
```

* `<ngx-tabset>` is a container for all tabs
    * `[disableStyle]="true|false"` Disables/enables the built-in style. It allows you to style the entire tab yourself
    * `(onSelect)="doSomethingOnTabSelect($event)"` Callback to be called when tab is being selected. It returns the index of the selected tab into tabset collection.
* `<ngx-tab>` is a single tab item
    * `tabTitle` The tab title
    * `tabSubTitle` The tab subtitle
    * `[disabled]="true|false` Indicates if current tab is enabled or disabled
    * `[active]="true|false"` Specifies which tab should be active on init. By default the first tab will be active.


## Style
⚠️ **For `ngx-tabset` >= 2.0.0 only!**
`ngx-tabset` provides built-in [SCSS variables](https://sass-lang.com/guide#topic-2) that you can override easily like it (assuming you imported `ngx-tabset.scss` as explained above):
```
/* You can add global styles to this file, and also import other style files */
/* NgxTabset variables override */
$active-tab-color: rgba(0, 0, 0, .7);
$nav-tab-padding: 20px;

@import "~ngx-tabset/ngx-tabset";
...
```

### Available SCSS variables
The below documentation will use the following pattern:
> `parameter/option name` (type) | default value | _description_

- `$active-tab-color` (hex / rgb / rgba) | `red` ― _Modifies the border color of the active tab_

- `$default-tab-border` ([border](https://developer.mozilla.org/fr/docs/Web/CSS/border)) | `solid 1px transparent` ― _Modifies tab's default border style_

- `$nav-tab-padding` (px / % / ...) | `10px` ― _Defines the nav tabs padding_

- `$disabled-tab-opacity` (0 - 1) | `.5` ― _The nav tab opacity of disabled tabs_

- `$tab-cursor` ([cursor](https://developer.mozilla.org/fr/docs/Web/CSS/cursor)) | `pointer` ― _Defines the cursor type for tabs that aren't disabled or active._

- `$tab-border-transition-duration` (duration) | `200ms` ― _The animation duration. You can use any duration unit you want_

- `$tab-border-transition-timing-function` (transition-timing-function Property) | `ease-in-out` ― _Specifies the speed curve of the transition effect ([available speed curves here](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp))_


## Customization options
`ngx-tabset` comes with several options in order to facilitate integration (with CSS frameworks, custom style, etc.).

The below documentation will use the following pattern:
> `parameter/option name` (type) | default value | required? ― _description_

- `disableStyle` (boolean) | `false` ― _Enable / disable default tabset style. E.g.: it's useful if you want to keep the provided style on some tabs and disable it on others_

- `bypassDOM` (boolean) | `false` ― _Option to allow the tab to trigger lifecycle events to the wrapped content, e.g. for wrapped components. You need to surround tab content with `<ng-template>...</ng-template>` in order to make it work. Please check the [above example](https://github.com/biig-io/ngx-tabset#more-complete-example) for full implementation_

- `customNavClass` (string) | `''` ― _All the additionnal classes you want to add to the tabset **header / nav**. You can add several classes by giving a string with space-separated classnames_

- `customTabsClass` (string) | `''` ― _All the additionnal classes you want to add to the tabset **container**. You can add several classes by giving a string with space-separated classnames_

- `customPaneClass` (string) | `''` ― _All the additionnal classes you want to add to **each** tab pane. You can add several classes by giving a string with space-separated classnames_

## Issues
If you wish to submit an issue, please use the available template to facilitate reading and comprehension of all issues encountered. You can find this template in `./github/issue_template.md`.