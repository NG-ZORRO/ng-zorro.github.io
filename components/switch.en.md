---
category: Components
type: Data Entry
title: Switch
cover: 'https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg'
description: Used to toggle between two states.
---

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## API

### nz-switch

| Property                | Description                                                             | Type                          | Default     | Global Config |
| ----------------------- | ----------------------------------------------------------------------- | ----------------------------- | ----------- | ------------- |
| `[nzId]`                | button id attribute inside the component                                | `string`                      | -           |
| `[ngModel]`             | determine whether the `nz-switch` is checked, double binding            | `boolean`                     | `false`     |
| `[nzCheckedChildren]`   | content to be shown when the state is checked                           | `string \| TemplateRef<void>` | -           |
| `[nzUnCheckedChildren]` | content to be shown when the state is unchecked                         | `string \| TemplateRef<void>` | -           |
| `[nzDisabled]`          | Disable switch                                                          | `boolean`                     | `false`     |
| `[nzSize]`              | the size of the `nz-switch`, options: `default` `small`                 | `'small' \| 'default'`        | `'default'` | ✅            |
| `[nzLoading]`           | loading state of switch                                                 | `boolean`                     | `false`     |
| `[nzControl]`           | determine whether fully control state by user                           | `boolean`                     | `false`     |
| `(ngModelChange)`       | a callback function, can be executed when the checked state is changing | `EventEmitter<boolean>`       | -           |

#### Methods

| Name    | Description  |
| ------- | ------------ |
| focus() | get focus    |
| blur()  | remove focus |

---

## Examples

### Basic

The most basic usage.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-basic',
  imports: [FormsModule, NzSwitchModule],
  template: `<nz-switch [(ngModel)]="switchValue" />`
})
export class NzDemoSwitchBasicComponent {
  switchValue = false;
}
```

### Control

The status of `Switch` is completely up to the user and no longer automatically changes the data based on the click event.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-control',
  imports: [FormsModule, NzSwitchModule],
  template: ` <nz-switch [(ngModel)]="switchValue" [nzControl]="true" (click)="clickSwitch()" [nzLoading]="loading" /> `
})
export class NzDemoSwitchControlComponent {
  switchValue = false;
  loading = false;

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 3000);
    }
  }
}
```

### Disabled

Disabled state of `Switch`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-disabled',
  imports: [FormsModule, NzButtonModule, NzSwitchModule],
  template: `
    <nz-switch [(ngModel)]="switchValue" [nzDisabled]="isDisabled" />
    <br />
    <br />
    <button nz-button nzType="primary" (click)="isDisabled = !isDisabled">Toggle disabled</button>
  `
})
export class NzDemoSwitchDisabledComponent {
  switchValue = false;
  isDisabled = true;
}
```

### Loading

Mark a pending state of switch.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-loading',
  imports: [FormsModule, NzSwitchModule],
  template: `
    <nz-switch [ngModel]="true" nzLoading />
    <br />
    <br />
    <nz-switch nzSize="small" [ngModel]="false" nzLoading />
  `
})
export class NzDemoSwitchLoadingComponent {}
```

### Two sizes

`nzSize="small"` represents a small sized switch.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-size',
  imports: [FormsModule, NzSwitchModule],
  template: `
    <nz-switch [ngModel]="true" />
    <br />
    <br />
    <nz-switch nzSize="small" [ngModel]="true" />
  `
})
export class NzDemoSwitchSizeComponent {}
```

### Text & icon

With text and icon.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-switch-text',
  imports: [FormsModule, NzIconModule, NzSwitchModule],
  template: `
    <nz-switch [ngModel]="true" nzCheckedChildren="开" nzUnCheckedChildren="关" />
    <br />
    <br />
    <nz-switch [ngModel]="false" nzCheckedChildren="1" nzUnCheckedChildren="0" />
    <br />
    <br />
    <nz-switch [ngModel]="true" [nzCheckedChildren]="checkedTemplate" [nzUnCheckedChildren]="unCheckedTemplate" />
    <ng-template #checkedTemplate><nz-icon nzType="check" /></ng-template>
    <ng-template #unCheckedTemplate><nz-icon nzType="close" /></ng-template>
  `
})
export class NzDemoSwitchTextComponent {}
```
