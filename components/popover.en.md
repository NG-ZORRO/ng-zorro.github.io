---
category: Components
type: Data Display
title: Popover
cover: 'https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg'
description: The floating card popped by clicking or hovering.
---

## When To Use

A simple popup menu to provide extra information or operations.

Comparing with `Tooltip`, besides information `Popover` card can also provide action elements like links and buttons.

## API

### [nz-popover]

| Param                           | Description                                                                        | Type                                                                                                                                                                              | Default value |
| ------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `[nzPopoverArrowPointAtCenter]` | Arrow point at center of the origin                                                | `boolean`                                                                                                                                                                         | `false`       |
| `[nzPopoverTitle]`              | Title of the popover                                                               | `string \| TemplateRef<void>`                                                                                                                                                     | -             |
| `[nzPopoverTitleContext]`       | The context of Title                                                               | `object`                                                                                                                                                                          | -             |
| `[nzPopoverContent]`            | Content of the popover                                                             | `string \| TemplateRef<void>`                                                                                                                                                     | -             |
| `[nzPopoverContentContext]`     | The context of Content                                                             | `object`                                                                                                                                                                          | -             |
| `[nzPopoverTrigger]`            | Popover trigger mode. If set to `null` it would not be triggered                   | `'click' \| 'focus' \| 'hover' \| null`                                                                                                                                           | `'hover'`     |
| `[nzPopoverPlacement]`          | The position of the popover relative to the target                                 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom' \| Array<string>` | `'top'`       |
| `[nzPopoverOrigin]`             | Origin of the tooltip                                                              | `ElementRef`                                                                                                                                                                      | -             |
| `[nzPopoverVisible]`            | Show or hide popover                                                               | `boolean`                                                                                                                                                                         | `false`       |
| `(nzPopoverVisibleChange)`      | Callback of hide or show                                                           | `EventEmitter<boolean>`                                                                                                                                                           | -             |
| `[nzPopoverMouseEnterDelay]`    | Delay in seconds, before popover is shown on mouse enter                           | `number`                                                                                                                                                                          | `0.15`        |
| `[nzPopoverMouseLeaveDelay]`    | Delay in seconds, before popover is hidden on mouse leave                          | `number`                                                                                                                                                                          | `0.1`         |
| `[nzPopoverOverlayClassName]`   | Class name of the popover card                                                     | `string`                                                                                                                                                                          | -             |
| `[nzPopoverOverlayStyle]`       | Style of the popover card                                                          | `object`                                                                                                                                                                          | -             |
| `[nzPopoverOverlayClickable]`   | Click the mask to close the bubble box. Only the `click` trigger behavior is valid | `boolean`                                                                                                                                                                         | `true`        |

Consult [Tooltip's documentation](/components/tooltip/en#api) to find more APIs.
| `[nzPopoverBackdrop]` | whether or not the overlay should attach a backdrop | `boolean` | `false` |

## Note

Please ensure that the node of `[nz-popover]` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Arrow pointing at the center

By specifying `nzPopoverPlacement` prop, the arrow can be point to the center of the target element.

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

### Basic

The most basic example. The size of the floating layer depends on the contents region.

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

### Controlling the close of the dialog

Use `nzPopoverVisible` prop to control the display of the card.

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

### Disable closing popover through mask

Set `nzPopoverOverlayClickable` to be `false` to disable closing popover by clicking the mask when `nzPopoverTrigger` is `'click'`.

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

### Placement

There are 12 `placement` options available.

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

### Template

`nzPopoverContent` and `nzPopoverTitle` accept the type of `TemplateRef<void>`

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

### Three ways to trigger

Mouse to click, focus and move in.

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
