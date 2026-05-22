---
category: Components
type: Layout
cols: 1
title: Layout
cover: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg'
description: Handling the overall layout of a page.
---

## Specification

### Size

The first level navigation is inclined left near a logo, and the secondary menu is inclined right.

- Top Navigation (almost systems): the height of the first level navigation `64px`, the second level navigation `48px`.
- Top Navigation(contents page): the height of the first level navigation `80px`, the second level navigation `56px`.
- Calculation formula of a top navigation: `48+8n`.
- Calculation formula of an aside navigation: `200+8n`.

### Interaction rules

- The first level navigation and the last level navigation should be distinguishable by visualization;
- The current item should have the highest priority of visualization;
- When the current navigation item is collapsed, the style of the current navigation item will be applied to its parent level;
- The left side navigation bar has support for both the accordion and expanding styles, you can choose the one that fits your case best.

## Visualization rules

Style of a navigation should conform to its level.

- **Emphasis by colorblock**

  When background color is a deep color, you can use this pattern for the parent level navigation item of current page.

- **The highlight match stick**

  When background color is a light color, you can use this pattern for the current page navigation item, we recommend using it for the last item of the navigation path.

- **Highlighted font**

  From the visualization aspect, highlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item.

- **Enlarge the size of the font**

  `12px`、`14px` is a standard font size of navigations，`14px` is used for the first and the second level of the navigation. You can choose an appropriate font size in terms of the level of your navigation.

## Component Overview

- `nz-layout`: The layout wrapper, in which `nz-header` `nz-sider` `nz-content` `nz-footer` or `nz-layout` itself can be nested, and can be placed in any parent container.
- `nz-header`: The top layout with default style, in which any element can be nested, and must be placed in `nz-layout`.
- `nz-sider`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in `nz-layout`.
- `nz-content`: The content layout with default style, in which any element can be nested, and must be placed in `nz-layout`.
- `nz-footer`: The bottom layout with default style, in which any element can be nested, and must be placed in `nz-layout`.

> Based on `flex layout`, please pay attention to the [compatibility](http://caniuse.com/#search=flex).

## API

```html
<nz-layout>
  <nz-header>header</nz-header>
  <nz-layout>
    <nz-sider>left sidebar</nz-sider>
    <nz-content>main content</nz-content>
    <nz-sider>right sidebar</nz-sider>
  </nz-layout>
  <nz-footer>footer</nz-footer>
</nz-layout>
```

### nz-sider

The sidebar.

| Property              | Description                                                                       | Type                                                      | Default  | Version      |
| --------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- | ------------ |
| `[nzBreakpoint]`      | breakpoints of the responsive layout                                              | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl'` | -        | xxxl: 21.3.0 |
| `[nzCollapsedWidth]`  | width of the collapsed sidebar, by setting to `0` a special `trigger` will appear | `number`                                                  | `64`     | -            |
| `[nzCollapsible]`     | whether can be collapsed                                                          | `boolean`                                                 | `false`  | -            |
| `[nzCollapsed]`       | the collapsed status can be double binding                                        | `boolean`                                                 | `false`  | -            |
| `[nzReverseArrow]`    | reverse direction of arrow, for a sider that expands from the right               | `boolean`                                                 | `false`  | -            |
| `[nzTrigger]`         | specify the customized `trigger`, set to `null` to hide the `trigger`             | `string \| TemplateRef<void>`                             | -        | -            |
| `[nzZeroTrigger]`     | specify the customized trigger when `nzCollapsedWidth` setting to `0`             | `TemplateRef<void>`                                       | -        | -            |
| `[nzWidth]`           | width of the sidebar                                                              | `number \| string`                                        | `200`    | -            |
| `[nzTheme]`           | color theme of the sidebar                                                        | `'light' \| 'dark'`                                       | `'dark'` | -            |
| `(nzCollapsedChange)` | the callback function                                                             | `EventEmitter<boolean>`                                   | -        | -            |

#### breakpoint width

```js
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
  xxxl: '1920px',
}
```

---

## Examples

### Basic Structure

Classic page layouts.

```typescript
import { Component } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'nz-demo-layout-basic',
  imports: [NzLayoutModule],
  template: `
    <nz-layout>
      <nz-header>Header</nz-header>
      <nz-content>Content</nz-content>
      <nz-footer>Footer</nz-footer>
    </nz-layout>

    <nz-layout>
      <nz-header>Header</nz-header>
      <nz-layout>
        <nz-sider>Sider</nz-sider>
        <nz-content>Content</nz-content>
      </nz-layout>
      <nz-footer>Footer</nz-footer>
    </nz-layout>

    <nz-layout>
      <nz-header>Header</nz-header>
      <nz-layout>
        <nz-content>Content</nz-content>
        <nz-sider>Sider</nz-sider>
      </nz-layout>
      <nz-footer>Footer</nz-footer>
    </nz-layout>

    <nz-layout>
      <nz-sider>Sider</nz-sider>
      <nz-layout>
        <nz-header>Header</nz-header>
        <nz-content>Content</nz-content>
        <nz-footer>Footer</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: `
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      text-align: center;
    }

    nz-header,
    nz-footer {
      text-align: center;
      background: #4096ff;
      color: #fff;
    }

    nz-header {
      height: 64px;
      padding-inline: 48px;
      line-height: 64px;
    }

    nz-sider {
      text-align: center;
      background: #1677ff;
      color: #fff;
      line-height: 120px;
    }

    nz-content {
      text-align: center;
      background: #0958d9;
      color: #fff;
      min-height: 120px;
      line-height: 120px;
    }

    :host > nz-layout {
      width: calc(50% - 8px);
      max-width: calc(50% - 8px);
      border-radius: 8px;
      overflow: hidden;
    }
  `
})
export class NzDemoLayoutBasicComponent {}
```

### Custom trigger

If you want to use a customized trigger, you can hide the default one by setting `[nzTrigger]="null"`.

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-custom-trigger',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="null">
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-submenu nzTitle="User" nzIcon="user">
            <ul>
              <li nz-menu-item>Tom</li>
              <li nz-menu-item>Bill</li>
              <li nz-menu-item>Alex</li>
            </ul>
          </li>
          <li nz-submenu nzTitle="Team" nzIcon="team">
            <ul>
              <li nz-menu-item>Team 1</li>
              <li nz-menu-item>Team 2</li>
            </ul>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="file" />
            <span>File</span>
          </li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header>
          <nz-icon
            class="trigger"
            [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"
            (click)="isCollapsed = !isCollapsed"
          />
        </nz-header>
        <nz-content>
          <nz-breadcrumb>
            <nz-breadcrumb-item>User</nz-breadcrumb-item>
            <nz-breadcrumb-item>Bill</nz-breadcrumb-item>
          </nz-breadcrumb>
          <div class="inner-content">Bill is a cat.</div>
        </nz-content>
        <nz-footer>Ant Design ©{{ date.getFullYear() }} Implement By Angular</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: `
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
    }

    .trigger:hover {
      color: #1890ff;
    }

    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }

    nz-header {
      background: #fff;
      padding: 0;
    }

    nz-content {
      margin: 0 16px;
    }

    nz-breadcrumb {
      margin: 16px 0;
    }

    .inner-content {
      padding: 24px;
      background: #fff;
      min-height: 360px;
    }

    nz-footer {
      text-align: center;
    }
  `
})
export class NzDemoLayoutCustomTriggerComponent {
  isCollapsed = false;
  protected readonly date = new Date();
}
```

### Fixed Sider

When dealing with long content, a fixed sider can provide a better user experience.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-fixed-sider',
  imports: [NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout class="layout">
      <nz-sider>
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item>
            <nz-icon nzType="file" />
            <span>nav 1</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="video-camera" />
            <span>nav 2</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="upload" />
            <span>nav 3</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="bar-chart" />
            <span>nav 4</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="cloud-o" />
            <span>nav 5</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="appstore-o" />
            <span>nav 6</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="team" />
            <span>nav 7</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="shop" />
            <span>nav 8</span>
          </li>
        </ul>
      </nz-sider>
      <nz-layout class="right-layout">
        <nz-header />
        <nz-content>
          <div class="inner-content">
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
          </div>
        </nz-content>
        <nz-footer>Ant Design ©{{ date.getFullYear() }} Implement By Angular</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: `
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }

    .layout {
      min-height: 100vh;
    }

    nz-sider {
      overflow: auto;
      height: 100%;
      position: fixed;
      left: 0;
    }

    .right-layout {
      margin-left: 200px;
    }

    nz-header {
      background: #fff;
      padding: 0;
    }

    nz-content {
      margin: 24px 16px 0;
      overflow: initial;
    }

    .inner-content {
      padding: 24px;
      background: #fff;
      text-align: center;
    }

    nz-footer {
      text-align: center;
    }
  `
})
export class NzDemoLayoutFixedSiderComponent {
  protected readonly date = new Date();
}
```

### Fixed Header

Fixed Header is generally used to fix the top navigation to facilitate page switching.

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-fixed',
  imports: [NzBreadCrumbModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout class="layout">
      <nz-header>
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal">
          <li nz-menu-item>nav 1</li>
          <li nz-menu-item>nav 2</li>
          <li nz-menu-item>nav 3</li>
        </ul>
      </nz-header>
      <nz-content>
        <nz-breadcrumb>
          <nz-breadcrumb-item>Home</nz-breadcrumb-item>
          <nz-breadcrumb-item>List</nz-breadcrumb-item>
          <nz-breadcrumb-item>App</nz-breadcrumb-item>
        </nz-breadcrumb>
        <div class="inner-content">Content</div>
      </nz-content>
      <nz-footer>Ant Design ©{{ date.getFullYear() }} Implement By Angular</nz-footer>
    </nz-layout>
  `,
  styles: `
    .layout {
      min-height: 100vh;
    }

    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 24px 16px 0;
      float: left;
    }

    nz-header {
      position: fixed;
      width: 100%;
    }

    [nz-menu] {
      line-height: 64px;
    }

    nz-content {
      padding: 0 50px;
      margin-top: 64px;
    }

    nz-breadcrumb {
      margin: 16px 0;
    }

    .inner-content {
      background: #fff;
      padding: 24px;
      min-height: 380px;
    }

    nz-footer {
      text-align: center;
    }
  `
})
export class NzDemoLayoutFixedComponent {
  protected readonly date = new Date();
}
```

### Responsive

Layout.Sider supports responsive layout.

> Note: You can get a responsive layout by setting `nzBreakpoint`, the `nz-sider` will collapse to the width of `nzCollapsedWidth` when window width is below the `nzBreakpoint`. And a special trigger will appear if the `nzCollapsedWidth` is set to `0`.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-responsive',
  imports: [NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout>
      <nz-sider nzCollapsible nzBreakpoint="lg" [nzCollapsedWidth]="0">
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item>
            <nz-icon nzType="user" />
            <span>nav 1</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="video-camera" />
            <span>nav 2</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="upload" />
            <span>nav 3</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="user" />
            <span>nav 4</span>
          </li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header />
        <nz-content>
          <div class="inner-content">Content</div>
        </nz-content>
        <nz-footer>Ant Design ©{{ date.getFullYear() }} Implement By Angular</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: `
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }

    nz-header {
      background: #fff;
      padding: 0;
    }

    nz-content {
      margin: 24px 16px 0;
    }

    .inner-content {
      padding: 24px;
      background: #fff;
      min-height: 360px;
    }

    nz-footer {
      text-align: center;
    }
  `
})
export class NzDemoLayoutResponsiveComponent {
  protected readonly date = new Date();
}
```

### Sider

Two-columns layout. The sider menu can be collapsed when horizontal space is limited.

Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable.

The level of the aisde navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-side',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout>
      <nz-sider nzCollapsible nzWidth="200px">
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item>
            <nz-icon nzType="pie-chart" />
            <span>Option 1</span>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="desktop" />
            <span>Option 2</span>
          </li>
          <li nz-submenu nzTitle="User" nzIcon="user">
            <ul>
              <li nz-menu-item>Tom</li>
              <li nz-menu-item>Bill</li>
              <li nz-menu-item>Alex</li>
            </ul>
          </li>
          <li nz-submenu nzTitle="Team" nzIcon="team">
            <ul>
              <li nz-menu-item>Team 1</li>
              <li nz-menu-item>Team 2</li>
            </ul>
          </li>
          <li nz-menu-item>
            <nz-icon nzType="file" />
            <span>File</span>
          </li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header />
        <nz-content>
          <nz-breadcrumb>
            <nz-breadcrumb-item>User</nz-breadcrumb-item>
            <nz-breadcrumb-item>Bill</nz-breadcrumb-item>
          </nz-breadcrumb>
          <div class="inner-content">Bill is a cat.</div>
        </nz-content>
        <nz-footer>Ant Design ©{{ date.getFullYear() }} Implement By Angular</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: `
    .logo {
      height: 32px;
      margin: 16px;
      background: rgba(255, 255, 255, 0.3);
    }

    nz-header {
      background: #fff;
      padding: 0;
    }

    nz-content {
      margin: 0 16px;
    }

    nz-breadcrumb {
      margin: 16px 0;
    }

    .inner-content {
      padding: 24px;
      background: #fff;
      min-height: 360px;
      border-radius: 8px;
    }

    nz-footer {
      text-align: center;
    }

    :host > nz-layout {
      min-height: 100vh;
    }
  `
})
export class NzDemoLayoutSideComponent {
  protected readonly date = new Date();
}
```

### Header Sider 2

Both the top navigation and the sidebar, commonly used in application site.

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-top-side-2',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal" class="header-menu">
          <li nz-menu-item nzSelected>nav 1</li>
          <li nz-menu-item>nav 2</li>
          <li nz-menu-item>nav 3</li>
        </ul>
      </nz-header>
      <nz-layout>
        <nz-sider nzWidth="200px" nzTheme="light">
          <ul nz-menu nzMode="inline" class="sider-menu">
            <li nz-submenu nzOpen nzIcon="user" nzTitle="subnav 1">
              <ul>
                <li nz-menu-item nzSelected>option1</li>
                <li nz-menu-item>option2</li>
                <li nz-menu-item>option3</li>
                <li nz-menu-item>option4</li>
              </ul>
            </li>
            <li nz-submenu nzTitle="subnav 2" nzIcon="laptop">
              <ul>
                <li nz-menu-item>option5</li>
                <li nz-menu-item>option6</li>
                <li nz-menu-item>option7</li>
                <li nz-menu-item>option8</li>
              </ul>
            </li>
            <li nz-submenu nzTitle="subnav 3" nzIcon="notification">
              <ul>
                <li nz-menu-item>option9</li>
                <li nz-menu-item>option10</li>
                <li nz-menu-item>option11</li>
                <li nz-menu-item>option12</li>
              </ul>
            </li>
          </ul>
        </nz-sider>
        <nz-layout class="inner-layout">
          <nz-breadcrumb>
            <nz-breadcrumb-item>Home</nz-breadcrumb-item>
            <nz-breadcrumb-item>List</nz-breadcrumb-item>
            <nz-breadcrumb-item>App</nz-breadcrumb-item>
          </nz-breadcrumb>
          <nz-content>Content</nz-content>
        </nz-layout>
      </nz-layout>
    </nz-layout>
  `,
  styles: `
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 30px 16px 0;
      float: left;
    }

    .header-menu {
      line-height: 64px;
    }

    .sider-menu {
      height: 100%;
      border-right: 0;
    }

    .inner-layout {
      padding: 0 24px 24px;
    }

    nz-breadcrumb {
      margin: 16px 0;
    }

    nz-content {
      background: #fff;
      padding: 24px;
      min-height: 280px;
    }
  `
})
export class NzDemoLayoutTopSide2Component {}
```

### Header-Sider

Both the top navigation and the sidebar, commonly used in documentation site.

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-top-side',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal" class="header-menu">
          <li nz-menu-item>nav 1</li>
          <li nz-menu-item nzSelected>nav 2</li>
          <li nz-menu-item>nav 3</li>
        </ul>
      </nz-header>
      <nz-content class="outer-content">
        <nz-breadcrumb>
          <nz-breadcrumb-item>Home</nz-breadcrumb-item>
          <nz-breadcrumb-item>List</nz-breadcrumb-item>
          <nz-breadcrumb-item>App</nz-breadcrumb-item>
        </nz-breadcrumb>
        <nz-layout class="inner-layout">
          <nz-sider nzWidth="200px" nzTheme="light">
            <ul nz-menu nzMode="inline" class="sider-menu">
              <li nz-submenu nzOpen nzTitle="subnav 1" nzIcon="user">
                <ul>
                  <li nz-menu-item nzSelected>option1</li>
                  <li nz-menu-item>option2</li>
                  <li nz-menu-item>option3</li>
                  <li nz-menu-item>option4</li>
                </ul>
              </li>
              <li nz-submenu nzTitle="subnav 2" nzIcon="laptop">
                <ul>
                  <li nz-menu-item>option5</li>
                  <li nz-menu-item>option6</li>
                  <li nz-menu-item>option7</li>
                  <li nz-menu-item>option8</li>
                </ul>
              </li>
              <li nz-submenu nzTitle="subnav 3" nzIcon="notification">
                <ul>
                  <li nz-menu-item>option9</li>
                  <li nz-menu-item>option10</li>
                  <li nz-menu-item>option11</li>
                  <li nz-menu-item>option12</li>
                </ul>
              </li>
            </ul>
          </nz-sider>
          <nz-content class="inner-content">Content</nz-content>
        </nz-layout>
        <nz-footer>Ant Design ©{{ date.getFullYear() }} Implement By Angular</nz-footer>
      </nz-content>
    </nz-layout>
  `,
  styles: `
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 28px 16px 0;
      float: left;
    }

    .header-menu {
      line-height: 64px;
    }

    .outer-content {
      padding: 0 50px;
    }

    nz-breadcrumb {
      margin: 16px 0;
    }

    .inner-layout {
      padding: 24px 0;
      background: #fff;
    }

    .sider-menu {
      height: 100%;
    }

    .inner-content {
      padding: 0 24px;
      min-height: 280px;
    }

    nz-footer {
      text-align: center;
    }
  `
})
export class NzDemoLayoutTopSideComponent {
  protected readonly date = new Date();
}
```

### Header-Content-Footer

The most basic "header-content-footer" layout.

Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it.
We always put contents in a fixed size navigation (eg: `1200px`), the layout of the whole page is stable, it's not affected by viewing area.

Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links

```typescript
import { Component } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-layout-top',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal">
          <li nz-menu-item>nav 1</li>
          <li nz-menu-item>nav 2</li>
          <li nz-menu-item>nav 3</li>
        </ul>
      </nz-header>
      <nz-content>
        <nz-breadcrumb>
          <nz-breadcrumb-item>Home</nz-breadcrumb-item>
          <nz-breadcrumb-item>List</nz-breadcrumb-item>
          <nz-breadcrumb-item>App</nz-breadcrumb-item>
        </nz-breadcrumb>
        <div class="inner-content">Content</div>
      </nz-content>
      <nz-footer>Ant Design ©{{ date.getFullYear() }} Implement By Angular</nz-footer>
    </nz-layout>
  `,
  styles: `
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 24px 16px 0;
      float: left;
    }

    [nz-menu] {
      line-height: 64px;
    }

    nz-breadcrumb {
      margin: 16px 0;
    }

    nz-content {
      padding: 0 50px;
    }

    nz-footer {
      text-align: center;
    }

    .inner-content {
      background: #fff;
      padding: 24px;
      min-height: 280px;
    }
  `
})
export class NzDemoLayoutTopComponent {
  protected readonly date = new Date();
}
```
