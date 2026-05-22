---
category: Components
subtitle: 悬浮按钮
type: 通用
title: FloatButton
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HS-wTIIwu0kAAAAAAAAAAAAADrJ8AQ/original'
tag: 19.0.0
description: 悬浮于页面上方的按钮。
---

## 何时使用

- 用于网站上的全局功能；
- 无论浏览到何处都可以看见的按钮。

## API

### 共同的 API

| 参数              | 说明                                                  | 类型                                  | 默认值      | 版本   |
| ----------------- | ----------------------------------------------------- | ------------------------------------- | ----------- | ------ |
| `[nzIcon]`        | 自定义图标                                            | `string \| TemplateRef<void> \| null` | -           |
| `[nzDescription]` | 文字及其它内容                                        | `string \| TemplateRef<void> \| null` | -           |
| `[nzType]`        | 按钮类型                                              | `'default' \| 'primary'`              | `'default'` |
| `[nzShape]`       | 按钮形状                                              | `'circle' \| 'square'`                | `'circle'`  |
| `[nzHref]`        | 点击跳转的地址，指定此参数 button 的行为和 a 链接一致 | `string`                              | -           |
| `[nzTarget]`      | 相当于 a 标签的 target 属性，`nzHref` 存在时生效      | `string`                              | -           |
| `[nzBadge]`       | 徽标数                                                | `NzFloatButtonBadge`                  | -           | 20.4.0 |
| `(nzOnClick)`     | 点击按钮时的回调                                      | `EventEmitter<boolean>`               | -           |

### nz-float-button-group

| 参数                   | 说明                                                   | 类型                                     | 默认值  |
| ---------------------- | ------------------------------------------------------ | ---------------------------------------- | ------- |
| `[nzTrigger]`          | 触发方式（有触发方式为菜单模式）                       | `'click' \| 'hover'`                     | -       |
| `[nzPlacement]`        | 自定义菜单弹出位置                                     | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` |
| `[nzOpen]`             | 受控展开                                               | `boolean`                                | -       |
| `(nzOpenChange)`       | 展开收起时的回调                                       | `EventEmitter<boolean>`                  | -       |
| ~~`(nzOnOpenChange)`~~ | 展开收起时的回调，已废弃，请使用 `(nzOpenChange)` 代替 | `EventEmitter<boolean>`                  | -       |

### nz-float-button-top

| 参数                   | 说明                                                          | 类型                | 默认值   | 全局配置 |
| ---------------------- | ------------------------------------------------------------- | ------------------- | -------- | -------- |
| `[nzVisibilityHeight]` | 滚动高度达到此值时才出现 `nz-float-button-top`                | `number`            | `400`    | ✅       |
| `[nzTarget]`           | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | `string \| Element` | `window` | -        |
| `[nzDuration]`         | 回到顶部所需时间（毫秒）                                      | `number`            | `450`    | -        |

### Interfaces

#### NzFloatButtonBadge

```ts
// NzBadge 组件属性中移除 nzShowDot, nzTitle, nzStatus, nzText
export interface NzFloatButtonBadge {
  nzDot?: boolean;
  nzCount?: number | TemplateRef<void>;
  nzShowZero?: boolean;
  nzOverflowCount?: number;
  nzColor?: string;
  nzOffset?: [number, number];
  nzSize?: 'default' | 'small';
}
```

---

## 代码示例

### 徽标数

右上角附带圆形徽标数字的悬浮按钮。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-badge',
  imports: [NzFloatButtonModule],
  template: `
    <div class="group">
      <nz-float-button nzShape="circle" [nzBadge]="{ nzDot: true }" style="inset-inline-end: 164px" />
      <nz-float-button-group nzShape="circle" style="inset-inline-end: 94px">
        <nz-float-button [nzBadge]="{ nzCount: 5, nzColor: 'blue' }" />
        <nz-float-button [nzBadge]="{ nzCount: 5 }" />
      </nz-float-button-group>
      <nz-float-button-group nzShape="circle">
        <nz-float-button [nzBadge]="{ nzCount: 12 }" nzIcon="question-circle" />
        <nz-float-button [nzBadge]="{ nzCount: 123, nzOverflowCount: 999 }" />
        <nz-float-button-top [nzVisibilityHeight]="0" [nzBadge]="{ nzDot: true }" />
      </nz-float-button-group>
    </div>
  `,
  styles: `
    .group {
      height: 300px;
      position: relative;
    }
    nz-float-button-group {
      position: absolute;
    }
    nz-float-button {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonBadgeComponent {}
```

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-basic',
  imports: [NzFloatButtonModule],
  template: `
    <div class="basic">
      <nz-float-button />
    </div>
  `,
  styles: `
    .basic {
      height: 300px;
      position: relative;
    }
    nz-float-button {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonBasicComponent {}
```

### 描述

可以通过 `nzDescription` 设置文字内容。

> 仅当 `shape` 属性为 `square` 时支持。由于空间较小，推荐使用比较精简的双数文字。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-description',
  imports: [NzFloatButtonModule],
  template: `
    <div class="description">
      <nz-float-button nzIcon="file-text" nzDescription="HELP" nzShape="square" style="right: 24px" />
      <nz-float-button nzDescription="HELP" nzShape="square" style="right: 94px" />
    </div>
  `,
  styles: `
    .description {
      height: 300px;
      position: relative;
    }
    nz-float-button {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonDescriptionComponent {}
```

### 菜单模式

设置 `nzTrigger` 属性即可开启菜单模式。提供 `hover` 和 `click` 两种触发方式。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-float-button-group-menu',
  imports: [NzFloatButtonModule, NzIconModule],
  template: `
    <div class="menu">
      <nz-float-button-group
        nzIcon="customer-service"
        nzType="primary"
        nzTrigger="click"
        style="right: 24px"
        (nzOnOpenChange)="openChange($event)"
      >
        <nz-float-button />
        <nz-float-button nzIcon="comment" />
      </nz-float-button-group>
      <nz-float-button-group
        nzIcon="customer-service"
        nzType="primary"
        nzTrigger="hover"
        style="right: 94px"
        (nzOnOpenChange)="openChange($event)"
      >
        <nz-float-button />
        <nz-float-button nzIcon="comment" />
      </nz-float-button-group>
    </div>
  `,
  styles: `
    .menu {
      height: 300px;
      position: relative;
    }
    nz-float-button-group {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonGroupMenuComponent {
  openChange(status: boolean): void {
    console.log(status);
  }
}
```

### 弹出方向

自定义弹出位置，提供了四个预设值：`top`、`right`、`bottom`、`left`，默认值为 `top`。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-group-placement',
  imports: [NzFloatButtonModule],
  template: `
    <div class="container">
      <div class="anchor">
        <nz-float-button-group
          class="up"
          nzIcon="up"
          nzType="primary"
          nzTrigger="click"
          (nzOnOpenChange)="openChange($event)"
          nzPlacement="top"
        >
          <nz-float-button />
          <nz-float-button nzIcon="comment" />
        </nz-float-button-group>
        <nz-float-button-group
          class="down"
          nzIcon="down"
          nzType="primary"
          nzTrigger="click"
          (nzOnOpenChange)="openChange($event)"
          nzPlacement="bottom"
        >
          <nz-float-button />
          <nz-float-button nzIcon="comment" />
        </nz-float-button-group>
        <nz-float-button-group
          class="left"
          nzIcon="left"
          nzType="primary"
          nzTrigger="click"
          (nzOnOpenChange)="openChange($event)"
          nzPlacement="left"
        >
          <nz-float-button />
          <nz-float-button nzIcon="comment" />
        </nz-float-button-group>
        <nz-float-button-group
          class="right"
          nzIcon="right"
          nzType="primary"
          nzTrigger="click"
          (nzOnOpenChange)="openChange($event)"
          nzPlacement="right"
        >
          <nz-float-button />
          <nz-float-button nzIcon="comment" />
        </nz-float-button-group>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      height: 300px;
      justify-content: center;
      align-items: center;

      .anchor {
        height: 100px;
        width: 100px;
        position: relative;

        .up {
          inset-inline-end: 30px;
          bottom: 80px;
        }
        .down {
          inset-inline-end: 30px;
          bottom: -20px;
        }
        .left {
          inset-inline-end: 80px;
          bottom: 30px;
        }
        .right {
          inset-inline-end: -20px;
          bottom: 30px;
        }
      }
      nz-float-button-group {
        position: absolute;
      }
    }
  `
})
export class NzDemoFloatButtonGroupPlacementComponent {
  openChange(status: boolean): void {
    console.log(status);
  }
}
```

### 浮动按钮组

按钮组合使用时，推荐使用 `nz-float-button-group`，并通过设置 `nzShape` 属性改变悬浮按钮组的形状。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-group',
  imports: [NzFloatButtonModule],
  template: `
    <div class="group">
      <nz-float-button-group nzShape="circle" style="right: 24px">
        <nz-float-button nzIcon="question-circle" />
        <nz-float-button />
        <nz-float-button-top [nzVisibilityHeight]="600" />
        <nz-float-button nzIcon="customer-service" />
      </nz-float-button-group>
      <nz-float-button-group nzShape="square" style="right: 94px">
        <nz-float-button nzIcon="question-circle" />
        <nz-float-button />
        <nz-float-button-top [nzVisibilityHeight]="600" />
        <nz-float-button nzIcon="customer-service" />
      </nz-float-button-group>
    </div>
  `,
  styles: `
    .group {
      height: 300px;
      position: relative;
    }
    nz-float-button-group {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonGroupComponent {}
```

### 受控模式

设置 `nzOpen` 属性控制 `nz-float-button-group` 是否展开

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-float-button-open',
  imports: [FormsModule, NzFloatButtonModule, NzSwitchModule],
  template: `
    <div class="open">
      <nz-float-button-group
        nzIcon="customer-service"
        [nzOpen]="isOpen"
        nzType="primary"
        nzTrigger="click"
        style="right: 24px"
        (nzOpenChange)="onOpenChange($event)"
      >
        <nz-float-button />
        <nz-float-button nzIcon="comment" />
      </nz-float-button-group>
      <nz-switch [(ngModel)]="isOpen" />
    </div>
  `,
  styles: `
    .open {
      height: 300px;
      position: relative;
    }
    nz-float-button-group,
    nz-float-button {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonOpenComponent {
  isOpen: boolean = true;

  onOpenChange(open: boolean): void {
    console.log(open);
    // You can set the `isOpen` variable in `(nzOpenChange)` to control the open state.
    // this.isOpen = open;
  }
}
```

### 形状

通过 `nsShape` 设置不同的形状。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-shape',
  imports: [NzFloatButtonModule],
  template: `
    <div class="shape">
      <nz-float-button nzShape="circle" style="right: 94px" nzType="primary" nzIcon="customer-service" />
      <nz-float-button nzShape="square" style="right: 24px" nzType="primary" nzIcon="customer-service" />
    </div>
  `,
  styles: `
    .shape {
      height: 300px;
      position: relative;
    }
    nz-float-button {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonShapeComponent {}
```

### 含有气泡卡片的悬浮按钮

添加 `nz-tooltip` 指令，即可开启气泡卡片。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-float-button-tooltip',
  imports: [NzFloatButtonModule, NzTooltipDirective],
  template: `
    <div class="tooltip">
      <nz-float-button
        style="bottom: 108px"
        nz-tooltip
        nzTooltipTitle="Documents"
        nzTooltipPlacement="top"
        nzTooltipColor="blue"
      />
      <nz-float-button nz-tooltip [nzTooltipTitle]="titleTemplate" />
      <ng-template #titleTemplate>
        <div>Documents</div>
      </ng-template>
    </div>
  `,
  styles: `
    .tooltip {
      height: 300px;
      position: relative;
    }
    nz-float-button {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonTooltipComponent {}
```

### 返回顶部

返回页面顶部的操作按钮。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-top',
  imports: [NzFloatButtonModule],
  template: `
    <nz-float-button-top />
    Scroll down to see the back to top button on the bottom right
  `
})
export class NzDemoFloatButtonTopComponent {}
```

### 类型

通过 `nzType` 改变悬浮按钮的类型。

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-type',
  imports: [NzFloatButtonModule],
  template: `
    <div class="type">
      <nz-float-button nzType="primary" style="right: 24px" nzIcon="question-circle" />
      <nz-float-button nzType="default" style="right: 94px" nzIcon="question-circle" />
    </div>
  `,
  styles: `
    .type {
      height: 300px;
      position: relative;
    }
    nz-float-button {
      position: absolute;
    }
  `
})
export class NzDemoFloatButtonTypeComponent {}
```
