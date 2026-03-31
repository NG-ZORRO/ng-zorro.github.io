---
category: Components
type: Data Entry
title: InputNumber
cover: 'https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg'
tag: 19.0.0
description: Enter a number within certain range with the mouse or keyboard.
---

## When To Use

When a numeric value needs to be provided.

## API

### nz-input-number

| Property            | Description                                                                     | Type                                                     | Default                                                                                                                             | Version |
| ------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `[ngModel]`         | current value, two way binding                                                  | `number`                                                 | -                                                                                                                                   |
| `[nzId]`            | ID of the input box                                                             | `string`                                                 | -                                                                                                                                   |
| `[nzPlaceHolder]`   | placeholder                                                                     | `string`                                                 | -                                                                                                                                   |
| `[nzAutoFocus]`     | auto focus                                                                      | `boolean`                                                | `false`                                                                                                                             |
| `[nzVariant]`       | Variants of InputNumber                                                         | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'` | `'outlined'`                                                                                                                        | 20.0.0  |
| `[nzControls]`      | whether to show up and down buttons                                             | `boolean`                                                | `true`                                                                                                                              |
| `[nzDisabled]`      | whether to disable                                                              | `boolean`                                                | `false`                                                                                                                             |
| `[nzFormatter]`     | specify the format of the displayed value                                       | `(value: number) => string`                              | -                                                                                                                                   |
| `[nzKeyboard]`      | Whether to enable keyboard shortcuts                                            | `boolean`                                                | `true`                                                                                                                              |
| `[nzChangeOnWheel]` | Whether to enable mouse wheel control                                           | `boolean`                                                | `true`                                                                                                                              | 21.0.0  |
| `[nzMax]`           | maximum value                                                                   | `number`                                                 | [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) |
| `[nzMin]`           | minimum value                                                                   | `number`                                                 | [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) |
| `[nzParser]`        | specify how to convert back to a number from `formatter`, used with `formatter` | `(value: string) => number`                              | -                                                                                                                                   |
| `[nzPrecision]`     | numerical precision, the `formatter` configuration takes precedence             | `number`                                                 | -                                                                                                                                   |
| `[nzReadOnly]`      | whether to read only                                                            | `boolean`                                                | `false`                                                                                                                             |
| `[nzStatus]`        | status, optional `error` `warning`                                              | `'error' \| 'warning'`                                   | -                                                                                                                                   |
| `[nzSize]`          | input box size, optional `large` `default` `small`                              | `'large' \| 'small' \| 'default'`                        | `'default'`                                                                                                                         |
| `[nzStep]`          | step of each change, can be a decimal                                           | `number`                                                 | `1`                                                                                                                                 |
| `[nzAddonBefore]`   | The label text displayed before (on the left side of) the input-number          | `string`                                                 | -                                                                                                                                   |
| `[nzAddonAfter]`    | The label text displayed after (on the right side of) the input-number          | `string`                                                 | -                                                                                                                                   |
| `[nzPrefix]`        | The prefix icon for the input-number                                            | `string`                                                 | -                                                                                                                                   |
| `[nzSuffix]`        | The suffix icon for the input-number                                            | `string`                                                 | -                                                                                                                                   |
| `(nzOnStep)`        | callback when clicking the up and down arrows                                   | `EventEmitter<NzInputNumberStepEvent>`                   | -                                                                                                                                   |
| `(nzFocus)`         | callback when focus                                                             | `OutputRef<void>`                                        | -                                                                                                                                   |
| `(nzBlur)`          | callback when blur                                                              | `OutputRef<void>`                                        | -                                                                                                                                   |
| `(ngModelChange)`   | callback function when the value changes                                        | `EventEmitter<number>`                                   | -                                                                                                                                   |

#### NzInputNumberStepEvent

```ts
export type NzInputNumberStepEmitter = 'wheel' | 'handler' | 'keyboard';
export interface NzInputNumberStepEvent {
  value: number;
  offset: number;
  type: 'up' | 'down';
  emitter: NzInputNumberStepEmitter;
}
```

#### Methods

You can get instance by `ViewChild`

| Name           | Description  | Parameters                                                                   |
| -------------- | ------------ | ---------------------------------------------------------------------------- |
| focus(option?) | get focus    | `(option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' })` |
| blur()         | remove focus | -                                                                            |

## FAQ

### Why can the `value` exceed the `min` and `max` range in controlled mode?

In controlled mode, developers may store related data by themselves. If the component constrains the data back to the range, it will cause the displayed data to be inconsistent with the actual stored data. This leads to potential data problems in some scenarios such as form fields.

---

## Examples

### Pre / Post tab

Using pre & post tabs example.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-input-number-addon',
  imports: [FormsModule, NzSelectModule, NzCascaderModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number nzAddonBefore="+" nzAddonAfter="$" [(ngModel)]="value" />

    <nz-input-number [(ngModel)]="value">
      <span nzInputAddonBefore>+</span>
      <span nzInputAddonAfter>$</span>
    </nz-input-number>

    <nz-input-number [(ngModel)]="value">
      <nz-select nzInputAddonBefore ngModel="add" [style.width.px]="60">
        <nz-option nzLabel="+" nzValue="add" />
        <nz-option nzLabel="-" nzValue="minus" />
      </nz-select>
      <nz-select nzInputAddonAfter ngModel="USD" [style.width.px]="60">
        <nz-option nzValue="USD" nzLabel="$" />
        <nz-option nzValue="EUR" nzLabel="€" />
        <nz-option nzValue="GBP" nzLabel="£" />
        <nz-option nzValue="CNY" nzLabel="¥" />
      </nz-select>
    </nz-input-number>

    <nz-input-number [(ngModel)]="value">
      <nz-icon nzInputAddonAfter nzType="setting" />
    </nz-input-number>

    <nz-input-number [(ngModel)]="value">
      <nz-cascader nzInputAddonBefore [nzOptions]="[]" nzPlaceHolder="cascader" [style.width.px]="150" />
    </nz-input-number>
  `,
  styles: `
    nz-input-number {
      display: block;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoInputNumberAddonComponent {
  value = 100;
}
```

### Basic

Numeric-only input box.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-basic',
  imports: [FormsModule, NzInputNumberModule],
  template: `<nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" />`
})
export class NzDemoInputNumberBasicComponent {
  value = 3;
}
```

### Mouse wheel behavior

Use the `nzChangeOnWheel` property to control with the mouse wheel.
`

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule, NzInputNumberStepEvent } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-change-on-wheel',
  imports: [FormsModule, NzInputNumberModule, NzButtonModule],
  template: `
    <nz-input-number
      nzChangeOnWheel
      [(ngModel)]="value"
      (ngModelChange)="onChange($event)"
      (nzOnStep)="onStep($event)"
    />
  `
})
export class NzDemoInputNumberChangeOnWheelComponent {
  value = 3;

  onChange(value: number): void {
    console.log(value);
  }

  onStep(event: NzInputNumberStepEvent): void {
    console.log(event);
  }
}
```

### Decimals

A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the `nzStep` prop.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-digit',
  imports: [FormsModule, NzInputNumberModule],
  template: `<nz-input-number [(ngModel)]="value" nzMin="0" nzMax="10" nzStep="0.1" nzPlaceHolder="Digital" />`
})
export class NzDemoInputNumberDigitComponent {
  value = 0.1;
}
```

### Disabled

Click the button to toggle between available and disabled states.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-disabled',
  imports: [FormsModule, NzButtonModule, NzInputNumberModule],
  template: `
    <nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" [nzDisabled]="isDisabled" />
    <br />
    <br />
    <button nz-button nzType="primary" (click)="isDisabled = !isDisabled">Toggle Disabled</button>
  `
})
export class NzDemoInputNumberDisabledComponent {
  value = 3;
  isDisabled = false;
}
```

### Focus with additional option

Focus with additional option.
`

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-focus',
  imports: [FormsModule, NzInputNumberModule, NzButtonModule],
  template: `
    <button nz-button (click)="inputNumber.focus({ cursor: 'start' })">Focus at first</button>
    <button nz-button (click)="inputNumber.focus({ cursor: 'end' })">Focus at last</button>
    <button nz-button (click)="inputNumber.focus({ cursor: 'all' })">Focus to select all</button>
    <button nz-button (click)="inputNumber.focus({ preventScroll: true })"> Focus prevent scroll </button>

    <br />
    <br />

    <nz-input-number #inputNumber [(ngModel)]="value" [style.width.%]="100" />
  `
})
export class NzDemoInputNumberFocusComponent {
  value = 9999;
}
```

### Formatter

Display value within it's situation with `nzFormatter`, and we usually use `nzParser` at the same time.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-formatter',
  imports: [FormsModule, NzInputNumberModule],
  template: `
    <nz-input-number [(ngModel)]="dollarValue" [nzFormatter]="formatterDollar" [nzParser]="parserDollar" />
    <nz-input-number
      [(ngModel)]="percentValue"
      nzMin="1"
      nzMax="100"
      [nzFormatter]="formatterPercent"
      [nzParser]="parserPercent"
    />
  `,
  styles: `
    nz-input-number {
      margin-right: 8px;
    }
  `
})
export class NzDemoInputNumberFormatterComponent {
  dollarValue = 1000;
  percentValue = 100;
  formatterDollar = (value: number): string => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  parserDollar = (value: string): number => +value?.replace(/\$\s?|(,*)/g, '');
  formatterPercent = (value: number): string => `${value}%`;
  parserPercent = (value: string): number => +value?.replace('%', '');
}
```

### Custom handler icon

Custom arrow icon.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-handler-icon',
  imports: [FormsModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number [(ngModel)]="value">
      <nz-icon nzInputNumberUpIcon nzType="arrow-up" />
      <nz-icon nzInputNumberDownIcon nzType="arrow-down" />
    </nz-input-number>
  `
})
export class NzDemoInputNumberHandlerIconComponent {
  value = 3;
}
```

### Keyboard behavior

Use the `nzKeyboard` property to control keyboard behavior.
`

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-keyboard',
  imports: [FormsModule, NzInputNumberModule, NzCheckboxModule],
  template: `
    <nz-input-number [(ngModel)]="value" [nzKeyboard]="keyboard" nzMin="1" nzMax="10" />
    <label nz-checkbox [(ngModel)]="keyboard">Toggle Keyboard</label>
  `,
  styles: `
    nz-input-number {
      margin-right: 8px;
    }
  `
})
export class NzDemoInputNumberKeyboardComponent {
  keyboard = true;
  value = 3;
}
```

### Out of range

When the `value` is out of range in controlled mode, a warning style is provided.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-out-of-range',
  imports: [FormsModule, NzInputNumberModule],
  template: `<nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" />`
})
export class NzDemoInputNumberOutOfRangeComponent {
  value = 99;
}
```

### Prefix

Add a prefix inside input.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-prefix',
  imports: [FormsModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number nzPrefix="￥" [style.width.%]="100" />

    <nz-input-number [style.width.%]="100">
      <span nzInputPrefix>￥</span>
    </nz-input-number>

    <nz-input-number [style.width.%]="100">
      <nz-icon nzInputAddonBefore nzType="user" />
      <span nzInputPrefix>￥</span>
    </nz-input-number>

    <nz-input-number nzPrefix="￥" nzDisabled [style.width.%]="100" />
  `,
  styles: `
    nz-input-number {
      margin-bottom: 8px;
    }
  `
})
export class NzDemoInputNumberPrefixComponent {}
```

### Sizes

There are three sizes available to a numeric input box. By default, the `nzSize` is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-size',
  imports: [FormsModule, NzInputNumberModule],
  template: `
    <nz-input-number [(ngModel)]="value" nzSize="large" nzMin="1" nzMax="10" />
    <nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" />
    <nz-input-number [(ngModel)]="value" nzSize="small" nzMin="1" nzMax="10" />
  `,
  styles: `
    nz-input-number {
      margin-right: 8px;
    }
  `
})
export class NzDemoInputNumberSizeComponent {
  value = 3;
}
```

### Status

Add status to InputNumber with `nzStatus`, which could be `error` or `warning`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-status',
  imports: [FormsModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number nzStatus="error" [style.width.%]="100" />
    <nz-input-number nzStatus="warning" [style.width.%]="100" />
    <nz-input-number nzStatus="error" [style.width.%]="100">
      <nz-icon nzInputPrefix nzType="clock-circle" />
    </nz-input-number>
    <nz-input-number nzStatus="warning" [style.width.%]="100">
      <nz-icon nzInputPrefix nzType="clock-circle" />
    </nz-input-number>
  `,
  styles: `
    nz-input-number {
      margin-bottom: 8px;
    }
  `
})
export class NzDemoInputNumberStatusComponent {}
```

### Variants

Variants of InputNumber, there are four variants: `outlined`, `filled`, `borderless` and `underlined`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-input-number-variant',
  imports: [FormsModule, NzInputNumberModule, NzSpaceModule],
  template: ` <nz-space nzDirection="vertical" style="width: 100%">
    <nz-input-number *nzSpaceItem [ngModel]="3" />
    <nz-input-number *nzSpaceItem nzVariant="filled" [ngModel]="3" />
    <nz-input-number *nzSpaceItem nzVariant="borderless" [ngModel]="3" />
    <nz-input-number *nzSpaceItem nzVariant="underlined" [ngModel]="3" />
  </nz-space>`
})
export class NzDemoInputNumberVariantComponent {}
```
