---
category: Components
cols: 1
type: 导航
title: Menu
subtitle: 导航菜单
cover: 'https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg'
description: 为页面和功能提供导航的菜单列表。
---

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的使用可以参考：[通用布局](/components/layout/zh)。

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

| 参数                  | 说明                                         | 类型                                     | 默认值       |
| --------------------- | -------------------------------------------- | ---------------------------------------- | ------------ |
| `[nzInlineCollapsed]` | `inline` 时菜单是否收起状态                  | `boolean`                                | -            |
| `[nzInlineIndent]`    | `inline` 模式的菜单缩进宽度                  | `number`                                 | `24`         |
| `[nzMode]`            | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `'vertical' \| 'horizontal' \| 'inline'` | `'vertical'` |
| `[nzSelectable]`      | 是否允许选中                                 | `boolean`                                | `true`       |
| `[nzTheme]`           | 主题颜色                                     | `'light' \| 'dark'`                      | `'light'`    |
| `(nzClick)`           | 点击 `nz-menu-item` 输出属性                 | `EventEmitter<NzMenuItemComponent>`      |              |

### [nz-menu-item]

| 参数                   | 说明                                                                                                                         | 类型      | 默认值  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `[nzDisabled]`         | 是否禁用                                                                                                                     | `boolean` | `false` |
| `[nzSelected]`         | 是否被选中                                                                                                                   | `boolean` | `false` |
| `[nzMatchRouter]`      | 是否根据 [routerLink](https://www.angular.cn/api/router/RouterLink) 自动设定 `nzSelected`                                    | `boolean` | `false` |
| `[nzMatchRouterExact]` | 是否路由完整精确匹配, 详见 [routerLinkActiveOptions](https://angular.cn/api/router/RouterLinkActive#routerLinkActiveOptions) | `boolean` | `false` |
| `[nzDanger]`           | 展示错误状态样式                                                                                                             | `boolean` | `false` |

### [nz-submenu]

你可以使用以下三种方式来定义 `nz-submenu` 的标题

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

| 参数                       | 说明                        | 类型                                                                                        | 默认值         |
| -------------------------- | --------------------------- | ------------------------------------------------------------------------------------------- | -------------- |
| `[nzPlacement]`            | 菜单弹出位置                | `'bottomLeft' \| 'bottomCenter' \| 'bottomRight' \| 'topLeft' \| 'topCenter' \| 'topRight'` | `'bottomLeft'` |
| `[nzOpen]`                 | 是否展开，可双向绑定        | `boolean`                                                                                   | `false`        |
| `[nzDisabled]`             | 是否禁用                    | `boolean`                                                                                   | `false`        |
| `[nzTitle]`                | 标题内容                    | `string \| TemplateRef<void>`                                                               | -              |
| `[nzIcon]`                 | 标题中 `icon` 类型          | `string`                                                                                    | -              |
| `[nzMenuClassName]`        | 自定义子菜单容器类名        | `string`                                                                                    | -              |
| `[nzTriggerSubMenuAction]` | SubMenu 展开/关闭的触发行为 | `'hover' \| 'click'`                                                                        | `'hover'`      |
| `(nzOpenChange)`           | 展开回调                    | `EventEmitter<boolean>`                                                                     | -              |

### [nz-menu-group]

你可以使用以下三种方式来定义 `nz-menu-group` 的标题

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

| 参数        | 说明     | 类型                          | 默认值 |
| ----------- | -------- | ----------------------------- | ------ |
| `[nzTitle]` | 标题内容 | `string \| TemplateRef<void>` | -      |

### [nz-menu-divider]

菜单项分割线，只用在弹出菜单内。

---

## 代码示例

### 弹出位置

支持 6 个弹出位置。

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

### 顶部导航

水平的顶部导航菜单。

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

### 缩起内嵌菜单

内嵌菜单可以被缩起/展开。

你可以在 [Layout](/components/layout/zh/#components-layout-demo-side) 里查看侧边布局结合的完整示例。

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

### 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

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

### 递归生成菜单

递归生成菜单，需要手动指定 `nzPaddingLeft`，仅在 `nzMode` 为 `inline` 的模式，且 `nzInlineCollapsed` 为 `false` 的情况下有效。

> 追踪 Issue：[https://github.com/angular/angular/issues/14842](https://github.com/angular/angular/issues/14842)

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

### 配合路由使用

自动根据路由激活菜单项，需要结合 [RouterLink](https://angular.cn/api/router/RouterLink) 一起使用。

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

### 只展开当前父级菜单

点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

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

### 切换菜单类型

展示动态切换模式。

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

### 主题

内建了两套主题 `light|dark`，默认 `light`。

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

### 垂直菜单

子菜单是弹出的形式。

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
