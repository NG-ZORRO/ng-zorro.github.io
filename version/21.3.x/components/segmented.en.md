---
category: Components
type: Data Display
title: Segmented
cover: 'https://gw.alipayobjects.com/zos/bmw-prod/a3ff040f-24ba-43e0-92e9-c845df1612ad.svg'
description: Display multiple options and allow users to select a single option.
---

## When To Use

- When displaying multiple options and user can select a single option;
- When switching the selected option, the content of the associated area changes.

## API

### nz-segmented

| Property          | Description                                               | Type                                                                                                          | Default   | Global Config | Version |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------- | ------------- | ------- |
| `[nzBlock]`       | Option to fit width to its parent\'s width                | `boolean`                                                                                                     | `false`   |               |
| `[nzDisabled]`    | Disable all segments                                      | `boolean`                                                                                                     | `false`   |               |
| `[nzOptions]`     | Set children optional                                     | `string[] \| number[] \| Array<{ label: string; value: string \| number; icon: string; disabled?: boolean }>` | -         |               |
| `[nzSize]`        | The size of the Segmented                                 | `large \| default \| small`                                                                                   | -         | ✅            |
| `[nzShape]`       | Shape of Segmented                                        | `default \| round`                                                                                            | `default` | -             | 20.3.0  |
| `[nzVertical]`    | Orientation                                               | `boolean`                                                                                                     | `false`   | -             | 20.2.0  |
| `[nzName]`        | The name property of all `input[type="radio"]` children   | `string`                                                                                                      | -         |               | 20.3.0  |
| `[ngModel]`       | Value of the currently selected option                    | `string \| number`                                                                                            | -         |               |
| `(nzValueChange)` | Emits when value of the currently selected option changes | `EventEmitter<string \| number>`                                                                              | -         |               |
| `(ngModelChange)` | Emits when value of the currently selected option changes | `EventEmitter<string \| number>`                                                                              | -         |               |

### label[nz-segmented-item]

| Property       | Description                | Type               | Default | Global Config |
| -------------- | -------------------------- | ------------------ | ------- | ------------- |
| `[nzIcon]`     | Icon in segmented item     | `string`           | -       |               |
| `[nzValue]`    | Value of segmented item    | `string \| number` | -       |               |
| `[nzDisabled]` | Disable the segmented item | `boolean`          | `false` |               |

---

## Examples

### Basic usage

Basic Usage.

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-basic',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" (nzValueChange)="handleValueChange($event)" />`
})
export class NzDemoSegmentedBasicComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleValueChange(e: string | number): void {
    console.log(e);
  }
}
```

### Block Segmented

`nzBlock` property will make the `Segmented` fit to its parent width.

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-block',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" [nzBlock]="true" />`
})
export class NzDemoSegmentedBlockComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
}
```

### Custom Render

Custom render each Segmented Item.

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-custom',
  imports: [NzAvatarModule, NzSegmentedModule],
  template: `
    <nz-segmented>
      <label nz-segmented-item nzValue="user1">
        <nz-avatar nzSrc="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <div>User 1</div>
      </label>
      <label nz-segmented-item nzValue="user2">
        <nz-avatar nzText="K" [style.background]="'#f56a00'" />
        <div>User 2</div>
      </label>
      <label nz-segmented-item nzValue="user3">
        <nz-avatar nzIcon="user" [style.background]="'#87d068'" />
        <div>User 3</div>
      </label>
    </nz-segmented>

    <br />
    <br />

    <nz-segmented>
      <label nz-segmented-item nzValue="spring">
        <div>Spring</div>
        <div>Jan-Mar</div>
      </label>
      <label nz-segmented-item nzValue="summer">
        <div>Summer</div>
        <div>Apr-Jun</div>
      </label>
      <label nz-segmented-item nzValue="autumn">
        <div>Autumn</div>
        <div>Jul-Sept</div>
      </label>
      <label nz-segmented-item nzValue="winter">
        <div>Winter</div>
        <div>Oct-Dec</div>
      </label>
    </nz-segmented>
  `,
  styles: `
    :host ::ng-deep .ant-segmented-item-label {
      margin: 4px;
    }
  `
})
export class NzDemoSegmentedCustomComponent {}
```

### Disabled

Disabled Segmented.

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-disabled',
  imports: [NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="['Map', 'Transit', 'Satellite']" nzDisabled />
    <br />
    <nz-segmented [nzOptions]="options" />
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedDisabledComponent {
  options = [
    'Daily',
    { label: 'Weekly', value: 'Weekly', disabled: true },
    'Monthly',
    { label: 'Quarterly', value: 'Quarterly', disabled: true },
    'Yearly'
  ];
}
```

### Dynamic

Load `options` dynamically.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

const defaultOptions = ['Daily', 'Weekly', 'Monthly'];

@Component({
  selector: 'nz-demo-segmented-dynamic',
  imports: [NzButtonModule, NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="options" />
    <br />
    <button nz-button nzType="primary" [disabled]="moreLoaded" (click)="handleLoadMore()"> Load more options </button>
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedDynamicComponent {
  options = [...defaultOptions];

  moreLoaded = false;

  handleLoadMore(): void {
    this.moreLoaded = true;
    this.options = [...defaultOptions, 'Quarterly', 'Yearly'];
  }
}
```

### With Icon

Set `icon` for Segmented Item.

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-icon',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" />`
})
export class NzDemoSegmentedIconComponent {
  options = [
    { label: 'List', value: 'List', icon: 'bars' },
    { label: 'Kanban', value: 'Kanban', icon: 'appstore' }
  ];
}
```

### Round Shape

Round shape of Segmented.

```typescript
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-shape',
  imports: [NzSegmentedModule, FormsModule],
  template: `
    <nz-segmented [nzOptions]="optionsSize" [(ngModel)]="currentSize" />
    <nz-segmented [nzOptions]="options" nzShape="round" [nzSize]="currentSize()" />
  `,
  styles: `
    nz-segmented:first-child {
      display: block;
      width: fit-content;
      margin-bottom: 16px;
    }
  `
})
export class NzDemoSegmentedShapeComponent {
  currentSize = model<NzSizeLDSType>('default');

  optionsSize = [
    { value: 'small', label: 'Small' },
    { value: 'default', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];
  options = [
    { value: 'List', icon: 'bars' },
    { value: 'Kanban', icon: 'appstore' }
  ];
}
```

### Three sizes of Segmented

There are three sizes of an Segmented: `large` (40px), `default` (32px) and `small` (24px).

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-size',
  imports: [NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="options" nzSize="small" />
    <br />
    <nz-segmented [nzOptions]="options" />
    <br />
    <nz-segmented [nzOptions]="options" nzSize="large" />
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedSizeComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
}
```

### Controlled mode

Set selected option via ngModel.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-value',
  imports: [FormsModule, NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="options" [(ngModel)]="selectedValue" (ngModelChange)="handleModelChange($event)" />
    <br />
    Selected value: {{ selectedValue }}
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedValueComponent {
  selectedValue = 'Weekly';
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleModelChange(value: string): void {
    console.log(value);
  }
}
```

### Vertical direction

Make it vertical.

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-vertical',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" nzVertical />`
})
export class NzDemoSegmentedVerticalComponent {
  options = [
    { value: 'List', icon: 'bars' },
    { value: 'Kanban', icon: 'appstore' }
  ];
}
```

### With Icon only

Set `icon` without `label` for Segmented Item.

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule, NzSegmentedOptions } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-with-icon-only',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" />`
})
export class NzDemoSegmentedWithIconOnlyComponent {
  options: NzSegmentedOptions = [
    { value: 'List', icon: 'bars' },
    { value: 'Kanban', icon: 'appstore' }
  ];
}
```

### With name

Passing the `nzName` property to all `input[type="radio"]` that are in the same nz-segmented. It is usually used to let the browser see your nz-segmented as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Segmented.

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-with-name',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" (nzValueChange)="handleValueChange($event)" nzName="group" />`
})
export class NzDemoSegmentedWithNameComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleValueChange(e: string | number): void {
    console.log(e);
  }
}
```
