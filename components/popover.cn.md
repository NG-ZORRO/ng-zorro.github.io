---
category: Components
subtitle: 气泡卡片
type: 数据展示
title: Popover
cover: 'https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg'
description: 点击/鼠标移入元素，弹出气泡式的卡片浮层。
---

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## API

### [nz-popover]

| 参数                            | 说明                                      | 类型                                                                                                                                                                              | 默认值    |
| ------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `[nzPopoverArrowPointAtCenter]` | 箭头指向锚点的中心                        | `boolean`                                                                                                                                                                         | `false`   |
| `[nzPopoverTitle]`              | 标题                                      | `string \| TemplateRef<void>`                                                                                                                                                     | -         |
| `[nzPopoverTitleContext]`       | 标题的上下文                              | `object`                                                                                                                                                                          | -         |
| `[nzPopoverContent]`            | 用于定义内容                              | `string \| TemplateRef<void>`                                                                                                                                                     | -         |
| `[nzPopoverContentContext]`     | 内容的上下文                              | `object`                                                                                                                                                                          | -         |
| `[nzPopoverTrigger]`            | 触发行为，为 `null` 时不响应光标事件      | `'click' \| 'focus' \| 'hover' \| null`                                                                                                                                           | `'hover'` |
| `[nzPopoverPlacement]`          | 气泡框位置                                | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom' \| Array<string>` | `'top'`   |
| `[nzPopoverOrigin]`             | 气泡框定位元素                            | `ElementRef`                                                                                                                                                                      | -         |
| `[nzPopoverVisible]`            | 显示隐藏气泡框                            | `boolean`                                                                                                                                                                         | `false`   |
| `(nzPopoverVisibleChange)`      | 显示隐藏的事件                            | `EventEmitter<boolean>`                                                                                                                                                           | -         |
| `[nzPopoverMouseEnterDelay]`    | 鼠标移入后延时多少才显示气泡框，单位：秒  | `number`                                                                                                                                                                          | `0.15`    |
| `[nzPopoverMouseLeaveDelay]`    | 鼠标移出后延时多少才隐藏气泡框，单位：秒  | `number`                                                                                                                                                                          | `0.1`     |
| `[nzPopoverOverlayClassName]`   | 卡片类名                                  | `string`                                                                                                                                                                          | -         |
| `[nzPopoverOverlayStyle]`       | 卡片样式                                  | `object`                                                                                                                                                                          | -         |
| `[nzPopoverBackdrop]`           | 浮层是否应带有背景板                      | `boolean`                                                                                                                                                                         | `false`   |
| `[nzPopoverOverlayClickable]`   | 点击蒙层关闭气泡框，仅`click`触发行为有效 | `boolean`                                                                                                                                                                         | `true`    |

更多属性请参考 [Tooltip](/components/tooltip/zh#api)。

## 注意

请确保 `[nz-popover]` 元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 箭头指向

通过设置 `nzPopoverPlacement` ，可以箭头将指向目标元素的中心。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/animation';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'nz-demo-popover-arrow-point-at-center',
  imports: [NzButtonModule, NzPopoverModule, NzNoAnimationDirective],
  template: `
    <button nz-button nzPopoverTitle="Title" nzPopoverContent="Content" nzPopoverPlacement="topLeft" nz-popover>
      Align edge / 边缘对齐
    </button>
    <button
      nz-button
      nz-popover
      nzPopoverTitle="Title"
      nzPopoverContent="Content"
      nzPopoverPlacement="topLeft"
      [nzPopoverArrowPointAtCenter]="true"
      nzNoAnimation
    >
      Arrow points to center / 箭头指向中心
    </button>
  `,
  styles: `
    button {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoPopoverArrowPointAtCenterComponent {}
```

### 基本

最简单的用法，浮层的大小由内容区域决定。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'nz-demo-popover-basic',
  imports: [NzButtonModule, NzPopoverModule],
  template: `
    <button nz-button nz-popover nzType="primary" nzPopoverTitle="Title" nzPopoverContent="Content">Hover me</button>
  `
})
export class NzDemoPopoverBasicComponent {}
```

### 从浮层内关闭

使用 `nzPopoverVisible` 属性控制浮层显示。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'nz-demo-popover-control',
  imports: [NzButtonModule, NzPopoverModule],
  template: `
    <button
      nz-button
      nzType="primary"
      nz-popover
      nzPopoverTitle="Title"
      [(nzPopoverVisible)]="visible"
      (nzPopoverVisibleChange)="change($event)"
      nzPopoverTrigger="click"
      [nzPopoverContent]="contentTemplate"
    >
      Click me
    </button>
    <ng-template #contentTemplate>
      <a (click)="clickMe()">Close</a>
    </ng-template>
  `
})
export class NzDemoPopoverControlComponent {
  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
}
```

### 禁止通过蒙层关闭面板

在 `nzPopoverTrigger` 为 `'click'` 时，通过设置 `nzPopoverOverlayClickable` 为 `false` 禁止通过点击蒙层关闭面板。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'nz-demo-popover-overlay',
  imports: [NzButtonModule, NzPopoverModule],
  template: `
    <button
      nz-button
      nz-popover
      nzType="primary"
      nzPopoverTitle="Title"
      nzPopoverTrigger="click"
      [nzPopoverContent]="contentTemplate"
      [nzPopoverOverlayClickable]="false"
      [nzPopoverVisible]="visible"
      (nzPopoverVisibleChange)="visibleChange($event)"
      >Click me</button
    >
    <ng-template #contentTemplate>
      <button nz-button nzSize="small" nzType="primary" (click)="visibleChange(false)"> Close me </button>
    </ng-template>
  `
})
export class NzDemoPopoverOverlayComponent {
  visible = false;

  visibleChange(value: boolean): void {
    this.visible = value;
  }
}
```

### 位置

位置有十二个方向。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'nz-demo-popover-placement',
  imports: [NzButtonModule, NzPopoverModule],
  template: `
    <div style="margin-left: 60px">
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="topLeft"
      >
        TL
      </button>
      <button nz-button nz-popover nzPopoverTitle="Title" [nzPopoverContent]="contentTemplate" nzPopoverPlacement="top">
        Top
      </button>
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="topRight"
      >
        TR
      </button>
    </div>
    <div style="width: 60px; float: left;">
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="leftTop"
      >
        LT
      </button>
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="left"
      >
        Left
      </button>
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="leftBottom"
      >
        LB
      </button>
    </div>
    <div style="width: 60px; margin-left: 252px;">
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="rightTop"
      >
        RT
      </button>
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="right"
      >
        Right
      </button>
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="rightBottom"
      >
        RB
      </button>
    </div>
    <div style="margin-left: 60px; clear: both;">
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="bottomLeft"
      >
        BL
      </button>
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="bottom"
      >
        Bottom
      </button>
      <button
        nz-button
        nz-popover
        nzPopoverTitle="Title"
        [nzPopoverContent]="contentTemplate"
        nzPopoverPlacement="bottomRight"
      >
        BR
      </button>
    </div>
    <ng-template #contentTemplate>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </ng-template>
  `,
  styles: `
    button {
      margin-right: 8px;
      margin-bottom: 8px;
      width: 70px;
      text-align: center;
      padding: 0;
    }
  `
})
export class NzDemoPopoverPlacementComponent {}
```

### 模板渲染

`nzPopoverContent` 与 `nzPopoverTitle` 可以传入 `TemplateRef<void>` 模板渲染。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'nz-demo-popover-template',
  imports: [NzButtonModule, NzIconModule, NzPopoverModule],
  template: `
    <button nz-button nz-popover [nzPopoverTitle]="titleTemplate" [nzPopoverContent]="contentTemplate">
      Render Template
    </button>
    <ng-template #titleTemplate>
      <nz-icon nzType="close" />
      Title
    </ng-template>
    <ng-template #contentTemplate>
      <nz-icon nzType="check" />
      Content
    </ng-template>
  `
})
export class NzDemoPopoverTemplateComponent {}
```

### 三种触发方式

鼠标移入、聚集、点击。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'nz-demo-popover-trigger-type',
  imports: [NzButtonModule, NzPopoverModule],
  template: `
    <ng-template #contentTemplate>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </ng-template>
    <button nz-button nz-popover nzPopoverTitle="Title" [nzPopoverContent]="contentTemplate" nzPopoverTrigger="click">
      Click me
    </button>
    <button nz-button nz-popover nzPopoverTitle="Title" [nzPopoverContent]="contentTemplate" nzPopoverTrigger="hover">
      Hover me
    </button>
    <button nz-button nz-popover nzPopoverTitle="Title" [nzPopoverContent]="contentTemplate" nzPopoverTrigger="focus">
      Focus me
    </button>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoPopoverTriggerTypeComponent {}
```
