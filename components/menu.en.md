---
category: Components
cols: 1
type: Navigation
title: Menu
cover: 'https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg'
description: A versatile menu for navigation.
---

## When To Use

Navigation menu is important for a website, it helps users jump from one site section to another quickly.
Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website.
Side navigation provides the multi-level structure of the website.

More layouts with navigation: [layout](/components/layout/en).

## API

```html
<ul nz-menu>
  <li nz-menu-item>Menu 1</li>
  <li nz-menu-item>Menu 2</li>
  <li nz-submenu nzTitle="SubMenu Title">
    <ul>
      <li nz-menu-item>SubMenu Item 1</li>
      <li nz-menu-item>SubMenu Item 2</li>
      <li nz-menu-item>SubMenu Item 3</li>
    </ul>
  </li>
</ul>
```

### [nz-menu]

| Param                 | Description                                                                   | Type                                     | Default value |
| --------------------- | ----------------------------------------------------------------------------- | ---------------------------------------- | ------------- |
| `[nzInlineCollapsed]` | specifies the collapsed status when menu is `inline` mode                     | `boolean`                                | -             |
| `[nzInlineIndent]`    | indent px of `inline` menu item on each level                                 | `number`                                 | `24`          |
| `[nzMode]`            | type of the menu; `vertical`、 `horizontal`, and `inline` modes are supported | `'vertical' \| 'horizontal' \| 'inline'` | `'vertical'`  |
| `[nzSelectable]`      | allow selecting menu items                                                    | `boolean`                                | `true`        |
| `[nzTheme]`           | color theme of the menu                                                       | `'light' \| 'dark'`                      | `'light'`     |
| `(nzClick)`           | the Output when click `nz-menu-item` inside nz-menu                           | `EventEmitter<NzMenuItemComponent>`      |               |

### [nz-menu-item]

| Param                  | Description                                                                                                                                                  | Type      | Default value |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------- |
| `[nzDisabled]`         | whether menu item is disabled or not                                                                                                                         | `boolean` | `false`       |
| `[nzSelected]`         | whether menu item is selected or not                                                                                                                         | `boolean` | `false`       |
| `[nzMatchRouter]`      | whether auto set `nzSelected` according to [routerLink](https://www.angular.io/api/router/RouterLink)                                                        | `boolean` | `false`       |
| `[nzMatchRouterExact]` | only match when the url matches the link exactly, same as [routerLinkActiveOptions](https://angular.dev/api/router/RouterLinkActive#routerLinkActiveOptions) | `boolean` | `false`       |
| `[nzDanger]`           | display the danger style                                                                                                                                     | `boolean` | `false`       |

### [nz-submenu]

You can set the title of `[nz-submenu]` in the following ways.

```html
<li nz-submenu nzTitle="SubTitle" nzIcon="appstore"></li>

<li nz-submenu>
  <span title>
    <nz-icon nzType="appstore" />
    <span>SubTitle</span>
  </span>
</li>

<li nz-submenu [nzTitle]="titleTpl"></li>
<ng-template #titleTpl>
  <nz-icon nzType="appstore" />
  <span>SubTitle</span>
</ng-template>
```

| Param                      | Description                                     | Type                                                                                        | Default value  |
| -------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------- |
| `[nzPlacement]`            | placement of pop menu                           | `'bottomLeft' \| 'bottomCenter' \| 'bottomRight' \| 'topLeft' \| 'topCenter' \| 'topRight'` | `'bottomLeft'` |
| `[nzOpen]`                 | whether sub menu is open or not, double binding | `boolean`                                                                                   | `false`        |
| `[nzDisabled]`             | whether sub menu is disabled or not             | `boolean`                                                                                   | `false`        |
| `[nzTitle]`                | set submenu title                               | `string \| TemplateRef<void>`                                                               | -              |
| `[nzIcon]`                 | `icon` type in title                            | `string`                                                                                    | -              |
| `[nzMenuClassName]`        | Custom the submenu container's class name       | `string`                                                                                    | -              |
| `[nzTriggerSubMenuAction]` | Which action can trigger submenu open/close     | `'hover' \| 'click'`                                                                        | `'hover'`      |
| `(nzOpenChange)`           | nzOpen callback                                 | `EventEmitter<boolean>`                                                                     | -              |

### [nz-menu-group]

You can set the title of `[nz-menu-group]` in the following ways.

```html
<li nz-menu-group nzTitle="SubTitle" nzIcon="appstore"></li>

<li nz-menu-group>
  <span title>
    <nz-icon nzType="appstore" />
    <span>SubTitle</span>
  </span>
</li>

<li nz-menu-group [nzTitle]="titleTpl"></li>
<ng-template #titleTpl>
  <nz-icon nzType="appstore" />
  <span>SubTitle</span>
</ng-template>
```

| Param       | Description          | Type                          | Default value |
| ----------- | -------------------- | ----------------------------- | ------------- |
| `[nzTitle]` | set menu group title | `string \| TemplateRef<void>` | -             |

### [nz-menu-divider]

Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu.

---

## Examples

### Placement

Support 6 placements.

```typescript
import { Component } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-menu-horizontal-position',
  imports: [NzMenuModule],
  template: `
    <ul nz-menu nzMode="horizontal">
      <li nz-submenu nzPlacement="bottomLeft" nzTitle="bottomLeft">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzPlacement="bottomCenter" nzTitle="bottomCenter">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzPlacement="bottomRight" nzTitle="bottomRight">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzPlacement="topLeft" nzTitle="topLeft">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzPlacement="topCenter" nzTitle="topCenter">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzPlacement="topRight" nzTitle="topRight">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `
})
export class NzDemoMenuHorizontalPositionComponent {}
```

### Top Navigation

Horizontal top navigation menu.

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-menu-horizontal',
  imports: [NzIconModule, NzMenuModule],
  template: `
    <ul nz-menu nzMode="horizontal">
      <li nz-menu-item nzSelected>
        <nz-icon nzType="mail" />
        Navigation One
      </li>
      <li nz-menu-item nzDisabled>
        <nz-icon nzType="appstore" />
        Navigation Two
      </li>
      <li nz-submenu nzTitle="Navigation Three - Submenu" nzIcon="setting">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
              <li nz-submenu nzTitle="Sub Menu">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzTitle="Click me" nzTriggerSubMenuAction="click">
                <ul>
                  <li nz-menu-item nzDisabled>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
              <li nz-submenu nzDisabled nzTitle="Disabled Sub Menu">
                <ul>
                  <li nz-menu-item>Option 5</li>
                  <li nz-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-menu-item>
        <a href="https://ng.ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </li>
    </ul>
  `
})
export class NzDemoMenuHorizontalComponent {}
```

### Collapsed inline menu

Inline menu could be collapsed.

Here is [a complete demo](/components/layout/en/#components-layout-demo-side) with sider layout.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-menu-inline-collapsed',
  imports: [NzButtonModule, NzIconModule, NzMenuModule, NzTooltipModule],
  template: `
    <div class="wrapper">
      <button nz-button nzType="primary" (click)="toggleCollapsed()">
        <nz-icon [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'" />
      </button>
      <ul nz-menu nzMode="inline" nzTheme="dark" [nzInlineCollapsed]="isCollapsed">
        <li
          nz-menu-item
          nz-tooltip
          nzTooltipPlacement="right"
          [nzTooltipTitle]="isCollapsed ? 'Navigation One' : ''"
          nzSelected
        >
          <nz-icon nzType="mail" />
          <span>Navigation One</span>
        </li>
        <li nz-submenu nzTitle="Navigation Two" nzIcon="appstore">
          <ul>
            <li nz-menu-item>Option 5</li>
            <li nz-menu-item>Option 6</li>
            <li nz-menu-item>Option 7</li>
            <li nz-menu-item>Option 8</li>
          </ul>
        </li>
        <li nz-submenu nzTitle="Navigation Three" nzIcon="setting">
          <ul>
            <li nz-menu-item>Option 9</li>
            <li nz-menu-item>Option 10</li>
            <li nz-submenu nzTitle="Submenu">
              <ul>
                <li nz-menu-item>Option 11</li>
                <li nz-menu-item>Option 12</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styles: `
    .wrapper {
      width: 256px;
    }

    button {
      margin-bottom: 12px;
    }
  `
})
export class NzDemoMenuInlineCollapsedComponent {
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
```

### Inline menu

Vertical menu with inline submenus.

```typescript
import { Component } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-menu-inline',
  imports: [NzMenuModule],
  template: `
    <ul nz-menu nzMode="inline">
      <li nz-submenu nzTitle="Navigation One" nzIcon="mail" nzOpen>
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item nzSelected>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Navigation Two" nzIcon="appstore">
        <ul>
          <li nz-menu-item>Option 5</li>
          <li nz-menu-item>Option 6</li>
          <li nz-submenu nzTitle="Submenu">
            <ul>
              <li nz-menu-item>Option 7</li>
              <li nz-menu-item>Option 8</li>
              <li nz-submenu nzTitle="Submenu">
                <ul>
                  <li nz-menu-item>Option 9</li>
                  <li nz-menu-item>Option 10</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Navigation Three" nzIcon="setting">
        <ul>
          <li nz-menu-item>Option 11</li>
          <li nz-menu-item>Option 12</li>
          <li nz-menu-item>Option 13</li>
        </ul>
      </li>
    </ul>
  `,
  styles: `
    [nz-menu] {
      width: 240px;
    }
  `
})
export class NzDemoMenuInlineComponent {}
```

### Recursive

Recursive generation menu, you need to set `nzPaddingLeft` [manually](https://github.com/angular/angular/issues/14842), only works when `nzMode` is `inline` mode and `nzInlineCollapsed` is `false`;

> Track Issue：[https://github.com/angular/angular/issues/14842](https://github.com/angular/angular/issues/14842)

```typescript
import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-menu-recursive',
  imports: [NgTemplateOutlet, NzIconModule, NzMenuModule],
  template: `
    <ul nz-menu nzMode="inline" style="width: 240px;">
      <ng-container *ngTemplateOutlet="menuTpl; context: { $implicit: menus }" />
      <ng-template #menuTpl let-menus>
        @for (menu of menus; track menu) {
          @if (!menu.children) {
            <li
              nz-menu-item
              [nzPaddingLeft]="menu.level * 24"
              [nzDisabled]="menu.disabled"
              [nzSelected]="menu.selected"
            >
              @if (menu.icon) {
                <nz-icon [nzType]="menu.icon" />
              }
              <span>{{ menu.title }}</span>
            </li>
          } @else {
            <li
              nz-submenu
              [nzPaddingLeft]="menu.level * 24"
              [nzOpen]="menu.open"
              [nzTitle]="menu.title"
              [nzIcon]="menu.icon"
              [nzDisabled]="menu.disabled"
            >
              <ul>
                <ng-container *ngTemplateOutlet="menuTpl; context: { $implicit: menu.children }" />
              </ul>
            </li>
          }
        }
      </ng-template>
    </ul>
  `
})
export class NzDemoMenuRecursiveComponent {
  mode = false;
  dark = false;
  menus = [
    {
      level: 1,
      title: 'Mail Group',
      icon: 'mail',
      open: true,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Group 1',
          icon: 'bars',
          open: false,
          selected: false,
          disabled: false,
          children: [
            {
              level: 3,
              title: 'Option 1',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Option 2',
              selected: false,
              disabled: true
            }
          ]
        },
        {
          level: 2,
          title: 'Group 2',
          icon: 'bars',
          selected: true,
          disabled: false
        },
        {
          level: 2,
          title: 'Group 3',
          icon: 'bars',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Team Group',
      icon: 'team',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'User 1',
          icon: 'user',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'User 2',
          icon: 'user',
          selected: false,
          disabled: false
        }
      ]
    }
  ];
}
```

### Router

Automatically activate menu items based on routing, should work with [RouterLink](https://angular.dev/api/router/RouterLink).

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-menu-router',
  imports: [RouterLink, NzMenuModule],
  template: `
    <ul nz-menu nzMode="horizontal">
      <li nz-menu-item nzMatchRouter>
        <a [routerLink]="['/', 'components', 'menu', 'en']">English Menu Document</a>
      </li>
      <li nz-menu-item nzMatchRouter>
        <a [routerLink]="['/', 'components', 'menu', 'zh']">Chinese Menu Document</a>
      </li>
    </ul>
  `
})
export class NzDemoMenuRouterComponent {}
```

### Open current submenu only

Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.

```typescript
import { Component } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-menu-sider-current',
  imports: [NzMenuModule],
  template: `
    <ul nz-menu nzMode="inline" style="width: 240px;">
      <li
        nz-submenu
        [(nzOpen)]="openMap.sub1"
        (nzOpenChange)="openHandler('sub1')"
        nzTitle="Navigation One"
        nzIcon="mail"
      >
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li
        nz-submenu
        [(nzOpen)]="openMap.sub2"
        (nzOpenChange)="openHandler('sub2')"
        nzTitle="Navigation Two"
        nzIcon="appstore"
      >
        <ul>
          <li nz-menu-item>Option 5</li>
          <li nz-menu-item>Option 6</li>
          <li nz-submenu nzTitle="Submenu">
            <ul>
              <li nz-menu-item>Option 7</li>
              <li nz-menu-item>Option 8</li>
            </ul>
          </li>
        </ul>
      </li>
      <li
        nz-submenu
        [(nzOpen)]="openMap.sub3"
        (nzOpenChange)="openHandler('sub3')"
        nzTitle="Navigation Three"
        nzIcon="setting"
      >
        <ul>
          <li nz-menu-item>Option 9</li>
          <li nz-menu-item>Option 10</li>
          <li nz-menu-item>Option 11</li>
        </ul>
      </li>
    </ul>
  `
})
export class NzDemoMenuSiderCurrentComponent {
  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
```

### Switch the menu type

Show the dynamic switching mode (between 'inline' and 'vertical').

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-menu-switch-mode',
  imports: [FormsModule, NzDividerModule, NzMenuModule, NzSwitchModule],
  template: `
    <nz-switch [(ngModel)]="mode" />
    Change Mode
    <nz-divider nzType="vertical" />
    <nz-switch [(ngModel)]="dark" />
    Change Theme
    <br />
    <br />
    <ul nz-menu [nzMode]="mode ? 'vertical' : 'inline'" [nzTheme]="dark ? 'dark' : 'light'">
      <li nz-submenu nzTitle="Navigation One" nzIcon="mail">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Navigation Two" nzIcon="appstore">
        <ul>
          <li nz-menu-item>Option 5</li>
          <li nz-menu-item>Option 6</li>
          <li nz-submenu nzTitle="Submenu">
            <ul>
              <li nz-menu-item>Option 7</li>
              <li nz-menu-item>Option 8</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Navigation Three" nzIcon="setting">
        <ul>
          <li nz-menu-item>Option 9</li>
          <li nz-menu-item>Option 10</li>
          <li nz-menu-item>Option 11</li>
        </ul>
      </li>
    </ul>
  `,
  styles: `
    [nz-menu] {
      width: 240px;
    }
  `
})
export class NzDemoMenuSwitchModeComponent {
  mode = false;
  dark = false;
}
```

### Menu Themes

There are two built-in themes: 'light' and 'dark'. The default value is 'light'.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-menu-theme',
  imports: [FormsModule, NzMenuModule, NzSwitchModule],
  template: `
    <nz-switch [(ngModel)]="theme">
      <span checked>Dark</span>
      <span unchecked>Light</span>
    </nz-switch>
    <br />
    <br />
    <ul nz-menu nzMode="inline" style="width: 240px;" [nzTheme]="theme ? 'dark' : 'light'">
      <li nz-submenu nzOpen nzTitle="Navigation One" nzIcon="mail">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item nzSelected>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Navigation Two" nzIcon="appstore">
        <ul>
          <li nz-menu-item>Option 5</li>
          <li nz-menu-item>Option 6</li>
          <li nz-submenu nzTitle="Submenu">
            <ul>
              <li nz-menu-item>Option 7</li>
              <li nz-menu-item>Option 8</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Navigation Three" nzIcon="setting">
        <ul>
          <li nz-menu-item>Option 9</li>
          <li nz-menu-item>Option 10</li>
          <li nz-menu-item>Option 11</li>
        </ul>
      </li>
    </ul>
  `
})
export class NzDemoMenuThemeComponent {
  theme = true;
}
```

### Vertical menu

Submenus open as pop-ups.

```typescript
import { Component } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'nz-demo-menu-vertical',
  imports: [NzMenuModule],
  template: `
    <ul nz-menu nzMode="vertical">
      <li nz-submenu nzTitle="Navigation One" nzIcon="mail">
        <ul>
          <li nz-menu-group nzTitle="Item 1">
            <ul>
              <li nz-menu-item>Option 1</li>
              <li nz-menu-item>Option 2</li>
            </ul>
          </li>
          <li nz-menu-group nzTitle="Item 2">
            <ul>
              <li nz-menu-item>Option 3</li>
              <li nz-menu-item>Option 4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu (nzOpenChange)="change($event)" nzTitle="Navigation Two" nzIcon="appstore">
        <ul>
          <li nz-menu-item>Option 5</li>
          <li nz-menu-item>Option 6</li>
          <li nz-submenu nzTitle="Submenu">
            <ul>
              <li nz-menu-item>Option 7</li>
              <li nz-menu-item>Option 8</li>
            </ul>
          </li>
        </ul>
      </li>
      <li nz-submenu nzTitle="Navigation Three" nzIcon="setting">
        <ul>
          <li nz-menu-item>Option 9</li>
          <li nz-menu-item>Option 10</li>
          <li nz-menu-item>Option 11</li>
        </ul>
      </li>
    </ul>
  `,
  styles: `
    [nz-menu] {
      width: 240px;
    }
  `
})
export class NzDemoMenuVerticalComponent {
  change(value: boolean): void {
    console.log(value);
  }
}
```
