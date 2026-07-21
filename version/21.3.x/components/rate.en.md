---
category: Components
type: Data Entry
title: Rate
cover: 'https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg'
description: Used for rating operation on something.
---

## When To Use

- Show evaluation.
- A quick rating operation on something.

## API

### nz-rate

| Property            | Description                             | type                          | Default                     | Global Config |
| ------------------- | --------------------------------------- | ----------------------------- | --------------------------- | ------------- |
| `[nzAllowClear]`    | whether to allow clear when click again | `boolean`                     | `true`                      | ✅            |
| `[nzAllowHalf]`     | whether to allow semi selection         | `boolean`                     | `false`                     | ✅            |
| `[nzAutoFocus]`     | get focus when component mounted        | `boolean`                     | `false`                     |
| `[nzCharacter]`     | custom character of rate                | `TemplateRef<void>`           | `<nz-icon nzType="star" />` |
| `[nzCount]`         | star count                              | `number`                      | `5`                         |
| `[nzDisabled]`      | read only, unable to interact           | `boolean`                     | `false`                     |
| `[nzTooltips]`      | Customize tooltip by each character     | `string[]`                    | `[]`                        |
| `[ngModel]`         | current value , double binding          | `number`                      | -                           |
| `(ngModelChange)`   | callback when select value              | `EventEmitter<number>`        | -                           |
| `(nzOnBlur)`        | callback when component lose focus      | `EventEmitter<FocusEvent>`    | -                           |
| `(nzOnFocus)`       | callback when component get focus       | `EventEmitter<FocusEvent>`    | -                           |
| `(nzOnHoverChange)` | callback when hover / leave item        | `EventEmitter<number>`        | -                           |
| `(nzOnKeyDown)`     | callback when keydown on component      | `EventEmitter<KeyboardEvent>` | -                           |

#### Methods

| Name      | Description  |
| --------- | ------------ |
| `blur()`  | remove focus |
| `focus()` | get focus    |

---

## Examples

### Basic

The simplest usage.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-basic',
  imports: [FormsModule, NzRateModule],
  template: `<nz-rate [ngModel]="0" />`
})
export class NzDemoRateBasicComponent {}
```

### Other Character

Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-character',
  imports: [FormsModule, NzIconModule, NzRateModule],
  template: `
    <nz-rate [ngModel]="0" nzAllowHalf [nzCharacter]="characterIcon" />
    <br />
    <nz-rate [ngModel]="0" nzAllowHalf class="large" [nzCharacter]="characterEnLetter" />
    <br />
    <nz-rate [ngModel]="0" nzAllowHalf [nzCharacter]="characterZhLetter" />
    <ng-template #characterIcon><nz-icon nzType="heart" /></ng-template>
    <ng-template #characterZhLetter>好</ng-template>
    <ng-template #characterEnLetter>A</ng-template>
  `,
  styles: `
    .large ::ng-deep .ant-rate-star {
      font-size: 36px;
    }
  `
})
export class NzDemoRateCharacterComponent {}
```

### Clear star

Support set allow to clear star when click again.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-clear',
  imports: [FormsModule, NzRateModule],
  template: `
    <nz-rate [(ngModel)]="value" nzAllowHalf />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <nz-rate [(ngModel)]="value" nzAllowHalf [nzAllowClear]="false" />
    <span class="ant-rate-text">allowClear: false</span>
  `
})
export class NzDemoRateClearComponent {
  value = 0;
}
```

### Customize Character

Each character can be customized by index.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-customize',
  imports: [FormsModule, NzIconModule, NzRateModule],
  template: `
    <nz-rate [ngModel]="2" [nzCharacter]="characterNumber" />
    <br />
    <nz-rate [ngModel]="3" [nzCharacter]="characterIcon" />
    <br />
    <ng-template #characterNumber let-index>
      {{ index + 1 }}
    </ng-template>
    <ng-template #characterIcon let-index>
      @switch (index) {
        @case (0) {
          <nz-icon nzType="frown" />
        }
        @case (1) {
          <nz-icon nzType="frown" />
        }
        @case (2) {
          <nz-icon nzType="meh" />
        }
        @case (3) {
          <nz-icon nzType="smile" />
        }
        @case (4) {
          <nz-icon nzType="smile" />
        }
      }
    </ng-template>
  `,
  styles: `
    .large ::ng-deep .ant-rate-star {
      font-size: 36px;
    }
  `
})
export class NzDemoRateCustomizeComponent {}
```

### Read only

Read only, can't use mouse to interact.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-disabled',
  imports: [FormsModule, NzRateModule],
  template: `<nz-rate [ngModel]="2" nzDisabled />`
})
export class NzDemoRateDisabledComponent {}
```

### Half star

Support select half star.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-half',
  imports: [FormsModule, NzRateModule],
  template: `<nz-rate [ngModel]="2.5" nzAllowHalf />`
})
export class NzDemoRateHalfComponent {}
```

### Show copywriting

Add copywriting in rate components.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-text',
  imports: [FormsModule, NzRateModule],
  template: `
    <nz-rate [(ngModel)]="value" [nzTooltips]="tooltips" />
    @if (value) {
      <span class="ant-rate-text">{{ value ? tooltips[value - 1] : '' }}</span>
    }
  `
})
export class NzDemoRateTextComponent {
  readonly tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
}
```
