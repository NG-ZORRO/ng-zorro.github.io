---
category: Components
subtitle: 布局
type: 布局
cols: 1
title: Layout
cover: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg'
description: 协助进行页面级整体布局。
---

## 设计规则

### 尺寸

一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。

- 顶部导航（大部分系统）：一级导航高度 `64px`，二级导航 `48px`。
- 顶部导航（展示类页面）：一级导航高度 `80px`，二级导航 `56px`。
- 顶部导航高度的范围计算公式为：`48+8n`。
- 侧边导航宽度的范围计算公式：`200+8n`。

### 交互

- 一级导航和末级的导航需要在可视化的层面被强调出来；
- 当前项应该在呈现上优先级最高；
- 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
- 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。

### 视觉

导航样式上需要根据信息层级合理的选择样式：

- **大色块强调**

  建议用于底色为深色系时，当前页面父级的导航项。

- **高亮火柴棍**

  当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

- **字体高亮变色**

  从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

- **字体放大**

  `12px`、`14px` 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

## 组件概述

- `nz-layout`：布局容器，其下可嵌套 `nz-header` `nz-sider` `nz-content` `nz-footer` 或 `nz-layout` 本身，可以放在任何父容器中。
- `nz-header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `nz-layout` 中。
- `nz-sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `nz-layout` 中。
- `nz-content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `nz-layout` 中。
- `nz-footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `nz-layout` 中。

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

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

侧边栏。

| 参数                  | 说明                                                | 类型                                                      | 默认值   | 版本         |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------- | -------- | ------------ |
| `[nzBreakpoint]`      | 触发响应式布局的断点                                | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl'` | -        | xxxl: 21.3.0 |
| `[nzCollapsedWidth]`  | 收缩宽度，设置为 0 会出现特殊 `trigger`             | `number`                                                  | `64`     |              |
| `[nzCollapsible]`     | 是否可收起                                          | `boolean`                                                 | `false`  |              |
| `[nzCollapsed]`       | 当前收起状态，可双向绑定                            | `boolean`                                                 | `false`  |              |
| `[nzReverseArrow]`    | 翻转折叠提示箭头的方向，当 `Sider` 在右边时可以使用 | `boolean`                                                 | `false`  |              |
| `[nzTrigger]`         | 自定义 `trigger`，设置为 `null` 时隐藏 `trigger`    | `TemplateRef<void>`                                       | -        |              |
| `[nzZeroTrigger]`     | 自定义 `nzCollapsedWidth` 为 0 时的 特殊`trigger`   | `TemplateRef<void>`                                       | -        |              |
| `[nzWidth]`           | 宽度                                                | `number \| string`                                        | `200`    |              |
| `[nzTheme]`           | 主题颜色                                            | `'light' \| 'dark'`                                       | `'dark'` |              |
| `(nzCollapsedChange)` | 展开-收起时的回调函数                               | `EventEmitter<boolean>`                                   | -        |              |

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

## 代码示例

### 基本结构

典型的页面布局。

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

### 自定义触发器

要使用自定义触发器，可以设置 `[nzTrigger]="null"` 来隐藏默认设定。

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

### 固定侧边栏

当内容较长时，使用固定侧边栏可以提供更好的体验。

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

### 固定头部

一般用于固定顶部导航，方便页面切换。

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

### 响应式布局

nz-sider 支持响应式布局。

> 说明：配置 `nzBreakpoint` 属性即生效，视窗宽度小于 `nzBreakpoint` 时 `nz-sider` 缩小为 `nzCollapsedWidth` 宽度，若将 `nzCollapsedWidth` 设置为零，会出现特殊 trigger。

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

### 侧边布局

侧边两列式布局。页面横向空间有限时，侧边导航可收起。

侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。

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

### 顶部-侧边布局-通栏

同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。

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

### 顶部-侧边布局

拥有顶部导航及侧边栏的页面，多用于展示类网站。

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

### 上中下布局

最基本的『上-中-下』布局。

一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。

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
