---
category: Components
type: Data Entry
title: TimePicker
cover: 'https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg'
description: To select/input a time.
---

## When To Use

By clicking the input box, you can select a time from a popup panel.

## API

### nz-time-picker

| Property                  | Description                                                                            | Type                                                       | Default           | Global Config | Version |
| ------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------- | ------------- | ------- |
| `[nzId]`                  | input id attribute inside the component                                                | `string`                                                   | -                 |
| `[ngModel]`               | to set time                                                                            | `Date`                                                     | -                 |
| `[nzAddOn]`               | called from timepicker panel to render some addon to its bottom                        | `TemplateRef<void>`                                        | -                 |
| `[nzAllowEmpty]`          | allow clearing text                                                                    | `boolean`                                                  | `true`            | ✅            |
| `[nzAutoFocus]`           | get focus when component mounted                                                       | `boolean`                                                  | `false`           |
| `[nzBackdrop]`            | whether or not the overlay should attach a backdrop                                    | `boolean`                                                  | `false`           |
| `[nzClearText]`           | clear tooltip of icon                                                                  | `string`                                                   | `'clear'`         | ✅            |
| `[nzNowText]`             | text of the Now button                                                                 | `string`                                                   | `'Now'`           | ✅            |
| `[nzOkText]`              | text of the Ok button                                                                  | `string`                                                   | `'Ok'`            | ✅            |
| `[nzDefaultOpenValue]`    | default open panel value if `[ngModel]` is null                                        | `Date`                                                     | `new Date()`      |
| `[nzDisabled]`            | determine whether the TimePicker is disabled                                           | `boolean`                                                  | `false`           |
| `[nzDisabledHours]`       | to specify the hours that cannot be selected                                           | `() => number[]`                                           | -                 |
| `[nzDisabledMinutes]`     | to specify the minutes that cannot be selected                                         | `(hour: number) => number[]`                               | -                 |
| `[nzDisabledSeconds]`     | to specify the seconds that cannot be selected                                         | `(hour: number, minute: number) => number[]`               | -                 |
| `[nzFormat]`              | to set the time format                                                                 | [DatePipe](https://angular.dev/api/common/DatePipe)        | `'HH:mm:ss'`      | ✅            |
| `[nzHideDisabledOptions]` | hide the options that can not be selected                                              | `boolean`                                                  | `false`           |
| `[nzHourStep]`            | interval between hours in picker                                                       | `number`                                                   | `1`               | ✅            |
| `[nzMinuteStep]`          | interval between minutes in picker                                                     | `number`                                                   | `1`               | ✅            |
| `[nzSecondStep]`          | interval between seconds in picker                                                     | `number`                                                   | `1`               | ✅            |
| `[nzSize]`                | width of time picker box                                                               | `'large' \| 'small' \| 'default'`                          | `'default'`       |
| `[nzStatus]`              | Set validation status                                                                  | `'error' \| 'warning'`                                     | -                 |
| `[nzVariant]`             | Variants of TimePicker                                                                 | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`   | `'outlined'`      | ✅            | 20.0.0  |
| `[nzInputReadOnly]`       | set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) | `boolean`                                                  | `false`           | -             |
| `[nzOpen]`                | whether to popup panel, double binding                                                 | `boolean`                                                  | `false`           |
| `[nzPlaceHolder]`         | display when there's no value                                                          | `string`                                                   | `'Select a time'` |
| `[nzPopupClassName]`      | className of panel                                                                     | `string`                                                   | `''`              | ✅            |
| `[nzUse12Hours]`          | display as 12 hours format, with default format `h:mm:ss a`                            | `boolean`                                                  | `false`           | ✅            |
| `[nzSuffixIcon]`          | the custom suffix icon                                                                 | `string \| TemplateRef`                                    | -                 | ✅            |
| `[nzPrefix]`              | the custom prefix                                                                      | `string \| TemplateRef`                                    | -                 |               | 21.1.0  |
| `[nzNeedConfirm]`         | Need click confirm button to trigger value change                                      | `boolean`                                                  | -                 |               | 21.1.0  |
| `[nzPlacement]`           | The position where the selection box pops up                                           | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | -                 |               | 21.1.0  |
| `(ngModelChange)`         | a callback function, can be executed when the selected time is changing                | `EventEmitter<Date>`                                       | -                 |
| `(nzOpenChange)`          | a callback function which will be called while panel opening/closing                   | `EventEmitter<boolean>`                                    | -                 |

#### Methods

| Name      | Description  |
| --------- | ------------ |
| `blur()`  | remove focus |
| `focus()` | get focus    |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Addon

Render addon contents to `nz-time-picker` panel's bottom.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-addon',
  imports: [FormsModule, NzButtonModule, NzTimePickerModule],
  template: `
    <nz-time-picker [(ngModel)]="time" [nzAddOn]="addOnTemplate" #timePicker />
    <ng-template #addOnTemplate>
      <button nz-button nzSize="small" nzType="primary" (click)="timePicker.close()">Ok</button>
    </ng-template>
  `
})
export class NzDemoTimePickerAddonComponent {
  time: Date | null = null;
}
```

### Basic

Click `nz-time-picker`, and then we could select or input a time in panel.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-basic',
  imports: [FormsModule, NzTimePickerModule],
  template: `<nz-time-picker [(ngModel)]="time" [nzDefaultOpenValue]="defaultOpenValue" />`
})
export class NzDemoTimePickerBasicComponent {
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
}
```

### Need Confirm

TimePicker will automatically determine whether to show a confirm button according to the `picker` property. You can also set the `nzNeedConfirm` property to determine whether to show a confirm button. When `nzNeedConfirm` is set, the user must click the confirm button to complete the selection. Otherwise, the selection will be submitted when the picker loses focus or select a time.

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-confirmation',
  imports: [NzTimePickerModule],
  template: ` <nz-time-picker nzNeedConfirm />`
})
export class NzDemoTimePickerConfirmationComponent {}
```

### disabled part

To specify the hours|minutes|seconds that cannot be selected

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-disabled-part',
  imports: [NzTimePickerModule],
  template: `
    <nz-time-picker
      [nzDisabledHours]="disabledHours"
      [nzDisabledMinutes]="disabledMinutes"
      [nzDisabledSeconds]="disabledSeconds"
    />
  `
})
export class NzDemoTimePickerDisabledPartComponent {
  disabledHours(): number[] {
    return [1, 2, 3];
  }

  disabledMinutes(hour: number): number[] {
    if (hour === 4) {
      return [20, 21, 22, 23, 24, 25];
    } else {
      return [];
    }
  }

  disabledSeconds(hour: number, minute: number): number[] {
    if (hour === 5 && minute === 1) {
      return [20, 21, 22, 23, 24, 25];
    } else {
      return [];
    }
  }
}
```

### disabled

A disabled state of the `nz-time-picker`.

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-disabled',
  imports: [NzTimePickerModule],
  template: `<nz-time-picker nzDisabled />`
})
export class NzDemoTimePickerDisabledComponent {}
```

### Hour and minute

While part of `nzFormat` is omitted, the corresponding column in panel will disappear, too.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-hide-column',
  imports: [FormsModule, NzTimePickerModule],
  template: `<nz-time-picker [(ngModel)]="time" nzFormat="HH:mm" />`
})
export class NzDemoTimePickerHideColumnComponent {
  time = new Date();
}
```

### interval option

Show stepped options by `nzHourStep` `nzMinuteStep` `nzSecondStep`.

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-interval-options',
  imports: [NzTimePickerModule],
  template: `<nz-time-picker [nzMinuteStep]="15" [nzSecondStep]="10" />`
})
export class NzDemoTimePickerIntervalOptionsComponent {}
```

### Placement

You can manually specify the position of the popup via `nzPlacement`.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { NzPlacement } from 'ng-zorro-antd/core/types';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-placement',
  imports: [FormsModule, NzTimePickerModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="placement">
      <label nz-radio-button nzValue="bottomLeft">bottomLeft</label>
      <label nz-radio-button nzValue="bottomRight">bottomRight</label>
      <label nz-radio-button nzValue="topLeft">topLeft</label>
      <label nz-radio-button nzValue="topRight">topRight</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-time-picker [nzPlacement]="placement()" />
    <br />
  `,
  styles: `
    nz-time-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoTimePickerPlacementComponent {
  readonly placement = signal<NzPlacement>('bottomLeft');
}
```

### Prefix and Suffix

Custom `nzPrefix` and `nzSuffixIcon`.

```typescript
import { Component } from '@angular/core';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-prefix-suffix',
  imports: [NzTimePickerModule, NzIconModule, NzFlexModule],
  template: `
    <nz-flex nzVertical nzGap="small">
      <nz-time-picker nzPrefix="smile" />
      <nz-time-picker [nzPrefix]="smile" />
      <nz-time-picker nzSuffixIcon="smile" />
      <nz-time-picker [nzSuffixIcon]="smile" />
      <ng-template #smile><nz-icon nzType="smile" /></ng-template>
    </nz-flex>
  `
})
export class NzDemoTimePickerPrefixSuffixComponent {}
```

### Three Sizes

The input box comes in three sizes. large is used in the form, while the medium size is the default.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-size',
  imports: [FormsModule, NzTimePickerModule],
  template: `
    <nz-time-picker [(ngModel)]="time" nzSize="large" />
    <nz-time-picker [(ngModel)]="time" />
    <nz-time-picker [(ngModel)]="time" nzSize="small" />
  `,
  styles: `
    nz-time-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoTimePickerSizeComponent {
  time = new Date();
}
```

### Status

Add status to TimePicker with `nzStatus`, which could be `error` or `warning`.

```typescript
import { Component } from '@angular/core';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-status',
  imports: [NzTimePickerModule],
  template: `
    <nz-time-picker nzStatus="error" />
    <br />
    <br />
    <nz-time-picker nzStatus="warning">></nz-time-picker>
  `
})
export class NzDemoTimePickerStatusComponent {}
```

### 12 hours

TimePicker of 12 hours with default format `h:mm:ss a`

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-use12-hours',
  imports: [FormsModule, NzTimePickerModule],
  template: `
    <nz-time-picker [(ngModel)]="time" nzUse12Hours />
    <br />
    <br />
    <nz-time-picker [(ngModel)]="time" nzUse12Hours nzFormat="h:mm a" />
  `
})
export class NzDemoTimePickerUse12HoursComponent {
  time: Date | null = null;
}
```

### Data binding

Work with two-way binding.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-value',
  imports: [FormsModule, NzTimePickerModule],
  template: `<nz-time-picker [(ngModel)]="time" />`
})
export class NzDemoTimePickerValueComponent {
  time: Date | null = null;
}
```

### Variants

Variants of TimePicker, there are four variants: `outlined`, `filled`, `borderless` and `underlined`.

```typescript
import { Component } from '@angular/core';

import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'nz-demo-time-picker-variant',
  imports: [NzTimePickerModule, NzSpaceModule],
  template: ` <nz-space nzDirection="vertical" style="width: 100%">
    <nz-time-picker *nzSpaceItem nzVariant="outlined" />
    <nz-time-picker *nzSpaceItem nzVariant="filled" />
    <nz-time-picker *nzSpaceItem nzVariant="borderless" />
    <nz-time-picker *nzSpaceItem nzVariant="underlined" />
  </nz-space>`
})
export class NzDemoTimePickerVariantComponent {}
```
