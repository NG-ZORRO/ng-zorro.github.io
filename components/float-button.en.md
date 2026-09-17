---
category: Components
type: General
title: FloatButton
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HS-wTIIwu0kAAAAAAAAAAAAADrJ8AQ/original'
tag: 19.0.0
description: A button that floats at the top of the page.
---

## When To Use

- For global functionality on the site.
- Buttons that can be seen wherever you browse.

## API

### Common API

| Property          | Description                               | Type                                  | Default     | Version |
| ----------------- | ----------------------------------------- | ------------------------------------- | ----------- | ------- |
| `[nzIcon]`        | Set the icon component of button          | `string \| TemplateRef<void> \| null` | -           |
| `[nzDescription]` | Text and other content                    | `string \| TemplateRef<void> \| null` | -           |
| `[nzType]`        | Button type                               | `'default' \| 'primary'`              | `'default'` |
| `[nzShape]`       | Button shape                              | `'circle' \| 'square'`                | `'circle'`  |
| `[nzHref]`        | The target of hyperlink                   | `string`                              | -           |
| `[nzTarget]`      | Specifies where to display the linked URL | `string`                              | -           |
| `[nzBadge]`       | badge                                     | `NzFloatButtonBadge`                  | -           | 20.4.0  |
| `(nzOnClick)`     | Callback of `click` event                 | `EventEmitter<boolean>`               | -           |

### nz-float-button-group

| Property               | Description                                                                                    | Type                                     | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------- | ------- |
| `[nzTrigger]`          | Which action can trigger menu open/close                                                       | `'click' \| 'hover'`                     | -       |
| `[nzPlacement]`        | Customize menu animation placement                                                             | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` |
| `[nzOpen]`             | Whether the menu is visible or not                                                             | `boolean`                                | -       |
| `(nzOpenChange)`       | Callback executed when active menu is changed                                                  | `EventEmitter<boolean>`                  | -       |
| ~~`(nzOnOpenChange)`~~ | Callback executed when active menu is changed, deprecated, please use `(nzOpenChange)` instead | `EventEmitter<boolean>`                  | -       |

### nz-float-button-top

| Property               | Description                                                                               | Type                | Default  | Global Config |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------------------- | -------- | ------------- |
| `[nzVisibilityHeight]` | The `nz-float-button-top` button will not show until the scroll height reaches this value | `number`            | `400`    | ✅            |
| `[nzTarget]`           | Specifies the scrollable area dom node                                                    | `string \| Element` | `window` | -             |
| `[nzDuration]`         | Duration of scrolling to top (ms)                                                         | `number`            | `450`    | -             |

### Interfaces

#### NzFloatButtonBadge

```ts
// omit nzShowDot, nzTitle, nzStatus, nzText from the props of NzBadge
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

## Examples

### Badge

FloatButton with Badge.

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

### Basic

The most basic usage.

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

### Description

Setting `nzDescription` prop to show FloatButton with description.

> supported only when `shape` is `square`. Due to narrow space for text, short sentence is recommended.

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-description',
  imports: [NzFloatButtonModule],
  template: `
    <div class="description">
      <nz-float-button nzIcon="file-text" nzDescription="HELP" nzShape="square" style="inset-inline-end: 24px" />
      <nz-float-button nzDescription="HELP" nzShape="square" style="inset-inline-end: 94px" />
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

### Menu mode

Open menu mode with `nzTrigger`, which could be `hover` or `click`.

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
        style="inset-inline-end: 24px"
        (nzOnOpenChange)="openChange($event)"
      >
        <nz-float-button />
        <nz-float-button nzIcon="comment" />
      </nz-float-button-group>
      <nz-float-button-group
        nzIcon="customer-service"
        nzType="primary"
        nzTrigger="hover"
        style="inset-inline-end: 94px"
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

### Placement

Customize animation placement, providing four preset placement: `top`, `right`, `bottom`, `left`, the `top` position by default.

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-group-placement',
  imports: [NzFloatButtonModule],
  template: `
    <div class="container">
      <div class="box">
        @for (placement of placements; track placement) {
          <nz-float-button-group
            [class]="placement"
            [nzIcon]="icons[$index]"
            nzType="primary"
            nzTrigger="click"
            [nzPlacement]="placement"
          >
            <nz-float-button />
            <nz-float-button nzIcon="comment" />
          </nz-float-button-group>
        }
      </div>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      height: 300px;
      justify-content: space-evenly;
      align-items: center;

      .box {
        height: 100px;
        width: 100px;
        position: relative;

        .top {
          inset-inline-end: 30px;
          bottom: 80px;
        }
        .bottom {
          inset-inline-end: 30px;
          bottom: -20px;
        }
        .left {
          right: 80px;
          bottom: 30px;
        }
        .right {
          left: 80px;
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
  readonly placements = ['top', 'bottom', 'left', 'right'] as const;
  readonly icons = ['up', 'down', 'left', 'right'];
}
```

### FloatButton Group

When multiple buttons are used together, `nz-float-button-group` is recommended. By setting `nzShape` of FloatButtonGroup, you can change the shape of group.

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-group',
  imports: [NzFloatButtonModule],
  template: `
    <div class="group">
      <nz-float-button-group nzShape="circle" style="inset-inline-end: 24px">
        <nz-float-button nzIcon="question-circle" />
        <nz-float-button />
        <nz-float-button-top [nzVisibilityHeight]="600" />
        <nz-float-button nzIcon="customer-service" />
      </nz-float-button-group>
      <nz-float-button-group nzShape="square" style="inset-inline-end: 94px">
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

### Controlled mode

Set the `nzOpen` property to control whether `nz-float-button-group` is expanded.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-float-button-open',
  imports: [FormsModule, NzFloatButtonModule, NzSwitchModule],
  template: `
    <div class="container">
      <nz-float-button-group
        nzIcon="customer-service"
        [nzOpen]="isOpen()"
        nzType="primary"
        nzTrigger="click"
        style="inset-inline-end: 24px"
        (nzOpenChange)="onOpenChange($event)"
      >
        <nz-float-button />
        <nz-float-button nzIcon="comment" />
      </nz-float-button-group>
      <nz-switch [(ngModel)]="isOpen" />
    </div>
  `,
  styles: `
    .container {
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
  readonly isOpen = signal(true);

  onOpenChange(open: boolean): void {
    console.log(open);
  }
}
```

### Shape

Change the shape of the FloatButton with `nsShape`.

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-shape',
  imports: [NzFloatButtonModule],
  template: `
    <div class="shape">
      <nz-float-button nzShape="circle" style="inset-inline-end: 94px" nzType="primary" nzIcon="customer-service" />
      <nz-float-button nzShape="square" style="inset-inline-end: 24px" nzType="primary" nzIcon="customer-service" />
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

### FloatButton with tooltip

Adding the `tooltip` directive shows the FloatButton with a tooltip.

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

### Back Top

Set the `nzOpen` property to control whether `nz-float-button-group` is expanded.

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

### Type

Change the type of the FloatButton with `nzType`.

```typescript
import { Component } from '@angular/core';

import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  selector: 'nz-demo-float-button-type',
  imports: [NzFloatButtonModule],
  template: `
    <div class="type">
      <nz-float-button nzType="primary" style="inset-inline-end: 24px" nzIcon="question-circle" />
      <nz-float-button nzType="default" style="inset-inline-end: 94px" nzIcon="question-circle" />
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
