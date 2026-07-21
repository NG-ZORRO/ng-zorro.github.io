---
category: Components
type: Data Entry
title: Checkbox
cover: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg'
description: Collect user's choices.
---

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## API

### [nz-checkbox]

| Property            | Description                                                     | Type                    | Default |
| ------------------- | --------------------------------------------------------------- | ----------------------- | ------- |
| `[nzId]`            | input id attribute inside the component                         | `string`                | -       |
| `[nzName]`          | input name attribute inside the component                       | `string`                | -       |
| `[nzAutoFocus]`     | get focus when component mounted                                | `boolean`               | `false` |
| `[nzDisabled]`      | Disable checkbox                                                | `boolean`               | `false` |
| `[ngModel]`         | Specifies whether the checkbox is selected, double binding      | `boolean`               | `false` |
| `[nzIndeterminate]` | set the status of indeterminate，only affect the style          | `boolean`               | `false` |
| `[nzValue]`         | use for the callback of `nz-checkbox-wrapper`                   | `any`                   | -       |
| `(ngModelChange)`   | The callback function that is triggered when the state changes. | `EventEmitter<boolean>` | -       |

### nz-checkbox-group

| Property          | Description                                                     | Type                                         | Default |
| ----------------- | --------------------------------------------------------------- | -------------------------------------------- | ------- |
| `[ngModel]`       | Specifies options, double binding                               | `string[] \| number[]`                       | `[]`    |
| `[nzName]`        | The `name` property of all input children                       | `string`                                     | -       |
| `[nzOptions]`     | Specifies options                                               | `string[] \| number[] \| NzCheckboxOption[]` | `[]`    |
| `[nzDisabled]`    | Disable all checkboxes                                          | `boolean`                                    | `false` |
| `(ngModelChange)` | The callback function that is triggered when the state changes. | `EventEmitter<string[] \| number[]>`         | -       |

## Methods

### [nz-checkbox]

| Name      | Description  |
| --------- | ------------ |
| `focus()` | get focus    |
| `blur()`  | remove focus |

## Interfaces

### NzCheckboxOption

```ts
export interface NzCheckboxOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}
```

---

## Examples

### Basic

Basic usage of checkbox.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-basic',
  imports: [FormsModule, NzCheckboxModule],
  template: `<label nz-checkbox [(ngModel)]="checked">Checkbox</label>`
})
export class NzDemoCheckboxBasicComponent {
  readonly checked = signal(true);
}
```

### Check all

The `nzIndeterminate` property can help you to achieve a 'check all' effect.

```typescript
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-checkbox-check-all',
  imports: [FormsModule, NzCheckboxModule, NzDividerModule],
  template: `
    <label
      nz-checkbox
      [ngModel]="allChecked()"
      (ngModelChange)="onAllCheckedChange($event)"
      [nzIndeterminate]="indeterminate()"
    >
      Check all
    </label>

    <nz-divider />

    <nz-checkbox-group [nzOptions]="options" [(ngModel)]="value" />
  `
})
export class NzDemoCheckboxCheckAllComponent {
  readonly value = signal<Array<NzCheckboxOption['value']>>(['Apple', 'Orange']);
  readonly options: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  readonly allChecked = computed(() => this.value().length === this.options.length);
  readonly indeterminate = computed(() => this.value().length > 0 && !this.allChecked());

  onAllCheckedChange(checked: boolean): void {
    this.value.set(checked ? this.options.map(item => item.value) : []);
  }
}
```

### Controlled Checkbox

Communicated with other components.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-controller',
  imports: [FormsModule, NzButtonModule, NzCheckboxModule],
  template: `
    <label nz-checkbox [(ngModel)]="checked" [nzDisabled]="disabled()">
      {{ checked() ? 'Checked' : 'Unchecked' }} - {{ disabled() ? 'Disabled' : 'Enabled' }}
    </label>
    <br />
    <br />
    <button nz-button nzType="primary" (click)="toggleChecked()" nzSize="small">
      {{ checked() ? 'Uncheck' : 'Check' }}
    </button>
    <button nz-button nzType="primary" (click)="toggleDisabled()" nzSize="small">
      {{ disabled() ? 'Enable' : 'Disable' }}
    </button>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoCheckboxControllerComponent {
  readonly checked = signal(true);
  readonly disabled = signal(false);

  toggleChecked(): void {
    this.checked.update(checked => !checked);
  }

  toggleDisabled(): void {
    this.disabled.update(disabled => !disabled);
  }
}
```

### Disabled

Disabled checkbox.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-disabled',
  imports: [FormsModule, NzCheckboxModule],
  template: `
    <label nz-checkbox nzDisabled [ngModel]="false"></label>
    <br />
    <label nz-checkbox nzDisabled [ngModel]="true"></label>
  `
})
export class NzDemoCheckboxDisabledComponent {}
```

### Checkbox Group

Generate a group of checkboxes from an array.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-group',
  imports: [FormsModule, NzCheckboxModule],
  template: `
    <nz-checkbox-group [nzOptions]="options1" [(ngModel)]="value" (ngModelChange)="log($event)" />
    <br />
    <br />
    <nz-checkbox-group [nzOptions]="options2" [(ngModel)]="value" (ngModelChange)="log($event)" />
    <br />
    <br />
    <nz-checkbox-group nzDisabled [nzOptions]="options3" [(ngModel)]="value" (ngModelChange)="log($event)" />
  `
})
export class NzDemoCheckboxGroupComponent {
  readonly options1: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  readonly options2: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true }
  ];
  readonly options3: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];

  readonly value = signal(['Apple']);

  log(value: string[]): void {
    console.log(value);
  }
}
```

### Use with Grid

We can use `nz-checkbox` and Grid in `nz-checkbox-group`, to implement complex layout.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-checkbox-layout',
  imports: [FormsModule, NzCheckboxModule, NzGridModule],
  template: `
    <nz-checkbox-group ngModel="A" [style.width.%]="100">
      <nz-row>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="A">A</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="B">B</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="C">C</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="D">D</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="E">E</label>
        </nz-col>
      </nz-row>
    </nz-checkbox-group>
  `
})
export class NzDemoCheckboxLayoutComponent {}
```
