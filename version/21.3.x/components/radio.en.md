---
category: Components
type: Data Entry
title: Radio
cover: 'https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg'
description: Used to select a single state from multiple options.
---

## When To Use

- Used to select a single state in multiple options.
- The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.

## API

### [nz-radio] | [nz-radio-button]

| Property          | Description                                                     | Type                    | Default |
| ----------------- | --------------------------------------------------------------- | ----------------------- | ------- |
| `[nzAutoFocus]`   | get focus when component mounted                                | `boolean`               | `false` |
| `[nzDisabled]`    | Disable radio                                                   | `boolean`               | `false` |
| `[ngModel]`       | Specifies whether the radio is selected, double binding         | `boolean`               | `false` |
| `[nzValue]`       | use with `nz-radio-group`                                       | `any`                   | -       |
| `(ngModelChange)` | The callback function that is triggered when the state changes. | `EventEmitter<boolean>` | -       |

### nz-radio-group

radio group，wrap a group of `nz-radio`。

| Property          | Description                                                         | Type                              | Default     |
| ----------------- | ------------------------------------------------------------------- | --------------------------------- | ----------- |
| `[ngModel]`       | current selected `nz-radio` value, double binding                   | `any`                             | -           |
| `[nzName]`        | The `name` property of all `input[type="radio"]` children           | `string`                          | -           |
| `[nzDisabled]`    | Disable all radio buttons                                           | `boolean`                         | `false`     |
| `[nzSize]`        | Size, only on radio style                                           | `'large' \| 'small' \| 'default'` | `'default'` |
| `(ngModelChange)` | the callback function when current selected `nz-radio` value change | `EventEmitter<string>`            | -           |
| `[nzButtonStyle]` | style type of radio button                                          | `'outline' \| 'solid'`            | `'outline'` |

## Methods

### [nz-radio]

you can get `NzRadioComponent` via `ViewChild`

| Name      | Description  |
| --------- | ------------ |
| `blur()`  | remove focus |
| `focus()` | get focus    |

---

## Examples

### Basic

The simplest use.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-basic',
  imports: [FormsModule, NzRadioModule],
  template: `<label nz-radio ngModel>Radio</label>`
})
export class NzDemoRadioBasicComponent {}
```

### Disabled

`nz-radio` unavailable.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-disable',
  imports: [FormsModule, NzButtonModule, NzRadioModule],
  template: `
    <div>
      <label nz-radio [nzDisabled]="disabled">Disabled</label>
      <br />
      <label nz-radio [nzDisabled]="disabled" [ngModel]="true">Disabled</label>
      <br />
      <br />
      <button nz-button nzType="primary" (click)="disabled = !disabled">Toggle disabled</button>
    </div>
  `
})
export class NzDemoRadioDisableComponent {
  disabled = true;
}
```

### Radio Style

The combination of radio button style.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiobutton',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B" nzDisabled>Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A" nzDisabled>Hangzhou</label>
      <label nz-radio-button nzValue="B" nzDisabled>Shanghai</label>
      <label nz-radio-button nzValue="C" nzDisabled>Beijing</label>
      <label nz-radio-button nzValue="D" nzDisabled>Chengdu</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiobuttonComponent {
  radioValue = 'A';
}
```

### Vertical RadioGroup

Vertical `nz-radio-group`, with more radios.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup-more',
  imports: [FormsModule, NzInputModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio nzValue="A">Option A</label>
      <label nz-radio nzValue="B">Option B</label>
      <label nz-radio nzValue="C">Option C</label>
      <label nz-radio nzValue="M">
        More...
        @if (radioValue === 'M') {
          <input type="text" nz-input />
        }
      </label>
    </nz-radio-group>
  `,
  styles: `
    [nz-radio] {
      display: block;
      height: 32px;
      line-height: 32px;
    }

    input {
      width: 100px;
      margin-left: 10px;
    }
  `
})
export class NzDemoRadioRadiogroupMoreComponent {
  radioValue = 'A';
}
```

### RadioGroup group - optional

Render radios by configuring `options`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup-options',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      @for (o of options; track o.value) {
        <label nz-radio [nzValue]="o.value">{{ o.label }}</label>
      }
    </nz-radio-group>
    <nz-radio-group [(ngModel)]="radioValue">
      @for (o of options; track o.value) {
        <label nz-radio [nzValue]="o.value">{{ o.label }}</label>
      }
    </nz-radio-group>
    <nz-radio-group [(ngModel)]="radioValue">
      @for (o of options; track o.value) {
        <label nz-radio [nzValue]="o.value">{{ o.label }}</label>
      }
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiogroupOptionsComponent {
  radioValue = 'Apple';
  options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
}
```

### RadioGroup with name

Passing the `nzName` property to all `input[type="radio"]` that are in the same RadioGroup. It is usually used to let the browser see your `nz-radio-group` as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same `nz-radio-group`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup-with-name',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue" nzName="radiogroup">
      <label nz-radio nzValue="A">A</label>
      <label nz-radio nzValue="B">B</label>
      <label nz-radio nzValue="C">C</label>
      <label nz-radio nzValue="D">D</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiogroupWithNameComponent {
  radioValue = 'A';
}
```

### Radio Group

A group of `nz-radio` components.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio nzValue="A">A</label>
      <label nz-radio nzValue="B">B</label>
      <label nz-radio nzValue="C">C</label>
      <label nz-radio nzValue="D">D</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiogroupComponent {
  radioValue = 'A';
}
```

### Size

There are three sizes available: large, medium, and small. It can coordinate with input box.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-size',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue" nzSize="large">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue" nzSize="small">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioSizeComponent {
  radioValue = 'A';
}
```

### Solid radio button

Solid radio button style.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-solid',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue" nzButtonStyle="solid">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioSolidComponent {
  radioValue = 'A';
}
```
