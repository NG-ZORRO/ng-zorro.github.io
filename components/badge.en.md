---
category: Components
type: Data Display
title: Badge
cover: 'https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg'
description: Small numerical value or status descriptor for UI elements.
---

## When To Use

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying
unread messages count.

## API

### nz-badge

| Property            | Description                                                                                | Type                                                             | Default     | Global Config |
| ------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ----------- | ------------- |
| `[nzStandalone]`    | Whether standalone mode                                                                    | `boolean`                                                        | -           | -             |
| `[nzColor]`         | Customize Badge dot color                                                                  | `string`                                                         | -           | ✅            |
| `[nzCount]`         | Number to show in badge                                                                    | `number \| TemplateRef<void>`                                    | -           |
| `[nzDot]`           | Whether to display a red dot instead of `count`                                            | `boolean`                                                        | `false`     |
| `[nzShowDot]`       | Whether to display the red dot                                                             | `boolean`                                                        | `true`      |
| `[nzOverflowCount]` | Max count to show                                                                          | `number`                                                         | `99`        | ✅            |
| `[nzShowZero]`      | Whether to show badge when `count` is zero                                                 | `boolean`                                                        | `false`     |
| `[nzSize]`          | If `nzCount` is set, `size` sets the size of badge                                         | `'default' \| 'small'`                                           | `'default'` |
| `[nzStatus]`        | Set `nz-badge` as a status dot                                                             | `'success' \| 'processing' \| 'default' \| 'error' \| 'warning'` | -           |
| `[nzText]`          | If `nzStatus` is set, `text` sets the display text of the status `dot`                     | `string \| TemplateRef<void>`                                    | -           |
| `[nzTitle]`         | Text to show when hovering over the badge（Only Non-standalone), hide when value is `null` | `string \| null`                                                 | `nzCount`   |
| `[nzOffset]`        | set offset of the badge dot, like `[x, y]` (Only Non-standalone)                           | `[number, number]`                                               | -           |

### nz-ribbon

| Property        | Description                 | Type                          | Default |
| --------------- | --------------------------- | ----------------------------- | ------- |
| `[nzColor]`     | Customize Ribbon color      | `string`                      | -       |
| `[nzPlacement]` | The placement of the Ribbon | `'start' \| 'end'`            | `'end'` |
| `[nzText]`      | Content inside the Ribbon   | `string \| TemplateRef<void>` | -       |

---

## Examples

### Basic

Simplest Usage. Badge will be hidden when `nzCount` is `0`, but we can use `nzShowZero` to show it.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-badge-basic',
  imports: [NzBadgeModule, NzIconModule],
  template: `
    <nz-badge [nzCount]="5">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="0" nzShowZero>
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="iconTemplate">
      <a class="head-example"></a>
    </nz-badge>
    <ng-template #iconTemplate>
      <nz-icon nzType="clock-circle" class="ant-scroll-number-custom-component" style="color: #f5222d" />
    </ng-template>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeBasicComponent {}
```

### Colorful Badge

We preset a series of colorful Badge style for different situation usage.
And you can always set it to a hex color string for custom color.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-badge-colorful',
  imports: [NzBadgeModule, NzDividerModule],
  template: `
    <nz-divider nzOrientation="left" nzText="Presets" />
    @for (color of presets; track color) {
      <div>
        <nz-badge [nzColor]="color" [nzText]="color" />
      </div>
    }

    <nz-divider nzOrientation="left" nzText="Custom" />
    @for (color of customColors; track color) {
      <div>
        <nz-badge [nzColor]="color" [nzText]="color" />
      </div>
    }
  `
})
export class NzDemoBadgeColorfulComponent {
  readonly presets = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
  ];
  readonly customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
}
```

### Red badge

This will simply display a red badge, without a specific count.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-badge-dot',
  imports: [NzBadgeModule, NzIconModule],
  template: `
    <nz-badge nzDot>
      <nz-icon nzType="notification" />
    </nz-badge>
    <nz-badge nzDot>
      <a>Link something</a>
    </nz-badge>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    nz-icon {
      font-size: 16px;
    }
  `
})
export class NzDemoBadgeDotComponent {}
```

### Dynamic

The count will be animated as it changes.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-badge-dynamic',
  imports: [FormsModule, NzBadgeModule, NzButtonModule, NzFlexModule, NzIconModule, NzSwitchModule, NzSpaceModule],
  template: `
    <div nz-flex nzVertical nzGap="middle">
      <div nz-flex nzGap="large" nzAlign="center">
        <nz-badge [nzCount]="count">
          <a class="head-example"></a>
        </nz-badge>
        <nz-space-compact>
          <button nz-button (click)="minusCount()"><nz-icon nzType="minus" /></button>
          <button nz-button (click)="addCount()"><nz-icon nzType="plus" /></button>
          <button nz-button (click)="random()"><nz-icon nzType="question" /></button>
        </nz-space-compact>
      </div>
      <div nz-flex nzGap="large" nzAlign="center">
        <nz-badge [nzDot]="dot">
          <a class="head-example"></a>
        </nz-badge>
        <nz-switch [(ngModel)]="dot" />
      </div>
    </div>
  `,
  styles: `
    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeDynamicComponent {
  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minusCount(): void {
    this.count = Math.max(0, this.count - 1);
  }

  random(): void {
    this.count = Math.floor(Math.random() * 100);
  }
}
```

### Clickable

The badge can be wrapped with `a` tag to make it linkable.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-link',
  imports: [NzBadgeModule],
  template: `
    <a>
      <nz-badge [nzCount]="5">
        <a class="head-example"></a>
      </nz-badge>
    </a>
  `,
  styles: `
    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeLinkComponent {}
```

### Standalone

Add `nzStandalone` when there are no children.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-badge-no-wrapper',
  imports: [FormsModule, NzBadgeModule, NzFlexModule, NzIconModule, NzSwitchModule],
  template: `
    <nz-flex nzGap="small" nzAlign="center">
      <nz-switch [(ngModel)]="show" />
      <nz-badge nzStandalone nzShowZero [nzCount]="show ? 11 : 0" [nzStyle]="{ backgroundColor: '#faad14' }" />
      <nz-badge nzStandalone [nzCount]="show ? 25 : 0" />
      <nz-badge nzStandalone [nzCount]="show ? iconTemplate : 0" />
      <nz-badge nzStandalone [nzCount]="show ? 109 : 0" [nzStyle]="{ backgroundColor: '#52c41a' }" />
    </nz-flex>

    <ng-template #iconTemplate>
      <nz-icon nzType="clock-circle" class="ant-scroll-number-custom-component" style="color: #f5222d" />
    </ng-template>
  `
})
export class NzDemoBadgeNoWrapperComponent {
  show = true;
}
```

### Offset

Set offset of the badge dot, the format is `[left, top]`, which represents the offset of the status dot from the left and top of the default position.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-offset',
  imports: [NzBadgeModule],
  template: `
    <a>
      <nz-badge [nzCount]="5" [nzOffset]="[10, 10]">
        <a class="head-example"></a>
      </nz-badge>
    </a>
  `,
  styles: `
    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeOffsetComponent {}
```

### Overflow Count

`nzOverflowCount+` is displayed when count is larger than `nzOverflowCount`. The default value of `nzOverflowCount` is `99`.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-overflow',
  imports: [NzBadgeModule],
  template: `
    <nz-badge [nzCount]="99">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="200">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="200" [nzOverflowCount]="10">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="10000" [nzOverflowCount]="999">
      <a class="head-example"></a>
    </nz-badge>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeOverflowComponent {}
```

### Ribbon

Use ribbon badge.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'nz-demo-badge-ribbon',
  imports: [NzBadgeModule, NzCardModule],
  template: `
    <nz-ribbon nzText="Hippies">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="pink">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="red">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="cyan">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="green">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="purple">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="volcano">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
    <br />
    <nz-ribbon nzText="Hippies" nzColor="magenta">
      <nz-card nzTitle="Pushes open the window" nzSize="small"> And raises the spyglass. </nz-card>
    </nz-ribbon>
  `
})
export class NzDemoBadgeRibbonComponent {}
```

### Size

Set size of numeral Badge.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-size',
  imports: [NzBadgeModule],
  template: `
    <nz-badge nzSize="default" [nzCount]="5">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge nzSize="small" [nzCount]="5">
      <a class="head-example"></a>
    </nz-badge>
  `,
  styles: `
    nz-badge {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
      vertical-align: middle;
    }
  `
})
export class NzDemoBadgeSizeComponent {}
```

### Status

Standalone badge with status.

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'nz-demo-badge-status',
  imports: [NzBadgeModule],
  template: `
    <nz-badge nzStatus="success" />
    <nz-badge nzStatus="error" />
    <nz-badge nzStatus="default" />
    <nz-badge nzStatus="processing" />
    <nz-badge nzStatus="warning" />
    <br />
    <nz-badge nzStatus="success" nzText="Success" />
    <br />
    <nz-badge nzStatus="error" nzText="Error" />
    <br />
    <nz-badge nzStatus="default" nzText="Default" />
    <br />
    <nz-badge nzStatus="processing" nzText="Processing" />
    <br />
    <nz-badge nzStatus="warning" nzText="Warning" />
    <br />
  `
})
export class NzDemoBadgeStatusComponent {}
```
