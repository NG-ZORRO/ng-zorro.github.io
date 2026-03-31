---
category: Components
type: Data Entry
title: DatePicker
cover: 'https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg'
description: To select or input a date.
---

## When To Use

By clicking the input box, you can select a date from a popup calendar.

## API

**Note:** Some of nz-date-picker's locale are coming from [Angular i18n](https://angular.dev/guide/i18n), that should be
provided in the file `app.config.ts`.

For example:

```typescript
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
```

**Note:** All input and output date objects
are [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), you can manipulate it
with [date-fns](https://date-fns.org/).

### Common API

The following APIs are shared by nz-date-picker, nz-range-picker.

| Property                 | Description                                                                                                                        | Type                                                       | Default                                                                                                    | Global Config | Version |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| `[nzId]`                 | input id attribute inside the component                                                                                            | `string`                                                   | -                                                                                                          |
| `[nzAllowClear]`         | Whether to show clear button                                                                                                       | `boolean`                                                  | `true`                                                                                                     | -             |
| `[nzAutoFocus]`          | get focus when component mounted                                                                                                   | `boolean`                                                  | `false`                                                                                                    | -             |
| `[nzBackdrop]`           | whether or not the overlay should attach a backdrop                                                                                | `boolean`                                                  | `false`                                                                                                    |
| `[nzDefaultPickerValue]` | default picker date                                                                                                                | `Date \| Date[]`                                           | -                                                                                                          | -             |
| `[nzDisabled]`           | determine whether the nz-date-picker is disabled                                                                                   | `boolean`                                                  | `false`                                                                                                    | -             |
| `[nzDisabledDate]`       | specify the date that cannot be selected                                                                                           | `(current: Date) => boolean`                               | -                                                                                                          | -             |
| `[nzDropdownClassName]`  | to customize the className of the popup calendar                                                                                   | `string`                                                   | -                                                                                                          | -             |
| `[nzFormat]`             | to set the date format, see `nzFormat special instructions`                                                                        | `string`                                                   | -                                                                                                          |
| `[nzInputReadOnly]`      | set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)                                             | `boolean`                                                  | `false`                                                                                                    | -             |
| `[nzLocale]`             | localization configuration                                                                                                         | `object`                                                   | [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) | -             |
| `[nzMode]`               | Set picker mode                                                                                                                    | `'date' \| 'week' \| 'month' \| 'quarter'  \| 'year'`      | `'date'`                                                                                                   |
| `[nzPlaceHolder]`        | placeholder of date input                                                                                                          | `string \| string[]`                                       | -                                                                                                          |
| `[nzPopupStyle]`         | to customize the style of the popup calendar                                                                                       | `object`                                                   | `{}`                                                                                                       | -             |
| `[nzRenderExtraFooter]`  | render extra footer in panel                                                                                                       | `TemplateRef \| string \| (() => TemplateRef \| string)`   | -                                                                                                          |
| `[nzSize]`               | determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | `'large' \| 'small'`                                       | -                                                                                                          | -             |
| `[nzStatus]`             | Set validation status                                                                                                              | `'error' \| 'warning'`                                     | -                                                                                                          |
| `[nzPlacement]`          | The position where the selection box pops up                                                                                       | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | `'bottomLeft'`                                                                                             |               |
| `[nzSuffixIcon]`         | the custom suffix icon                                                                                                             | `string \| TemplateRef`                                    | -                                                                                                          | ✅            |
| `[nzVariant]`            | Variants of DatePicker                                                                                                             | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`   | `'outlined'`                                                                                               | ✅            | 20.0.0  |
| `[nzInline]`             | inline mode                                                                                                                        | `boolean`                                                  | `false`                                                                                                    | -             |
| `(nzOnOpenChange)`       | a callback emitter, can be executed whether the popup calendar is popped up or closed                                              | `EventEmitter<boolean>`                                    | -                                                                                                          | -             |
| `(nzOnPanelChange)`      | a callback emitter, can be executed when the panel changes                                                                         | `EventEmitter<NzPanelChangeType>`                          | -                                                                                                          | -             |

### Common Methods

| Name      | Description          |
| --------- | -------------------- |
| `open()`  | open calendar panel  |
| `close()` | close calendar panel |

### nz-date-picker

| Property      | Description | Type   | Default |
| ------------- | ----------- | ------ | ------- |
| `[(ngModel)]` | Date        | `Date` | -       |

### nz-date-picker[nzMode="date"]

| Property             | Description                                                                                                        | Type                                                                           | Default                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `[nzDateRender]`     | custom rendering function for date cells (Not support by month-picker/year-picker)                                 | -                                                                              | `TemplateRef<Date> \| string \| ((d: Date) => TemplateRef<Date> \| string)` |
| `[nzDisabledTime]`   | to specify the time that cannot be selected                                                                        | `(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | -                                                                           |
| `[nzShowTime]`       | to provide an additional time selection                                                                            | `object \| boolean`                                                            | [TimePicker Options](/components/time-picker/en#api)                        |
| `[nzShowToday]`      | whether to show 'Today' button                                                                                     | `boolean`                                                                      | `true`                                                                      |
| `[nzShowNow]`        | whether to show 'Now' button on panel when `nzShowTime` is set                                                     | `boolean`                                                                      | `true`                                                                      |
| `[nzShowWeekNumber]` | whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers) | `boolean`                                                                      | `false`                                                                     |
| `(nzOnOk)`           | callback when click ok button                                                                                      | `EventEmitter<Date>`                                                           | -                                                                           |

### nz-range-picker

| Property               | Description                                                 | Type                                                               | Default |
| ---------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| `[(ngModel)]`          | Date                                                        | `Date[]`                                                           | -       |
| `[nzRanges]`           | preseted ranges for quick selection                         | `{ [ key: string ]: Date[] } \| { [ key: string ]: () => Date[] }` | -       |
| `[nzSeparator]`        | separator                                                   | `string \| TemplateRef`                                            | `'~'`   |
| `(nzOnCalendarChange)` | The start time or the end time of the range change callback | `EventEmitter<Date[]>`                                             | -       |

### nz-range-picker[nzMode="date"]

| Property             | Description                                                                                                        | Type                                                                                                      | Default                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `[nzShowTime]`       | to provide an additional time selection                                                                            | `object \| boolean`                                                                                       | [TimePicker Options](/components/time-picker/en#api) |
| `[nzDisabledTime]`   | to specify the time that cannot be selected                                                                        | `(current: Date, partial: 'start' \| 'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | -                                                    |
| `[nzShowWeekNumber]` | whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers) | `boolean`                                                                                                 | `false`                                              |
| `(nzOnOk)`           | click ok callback                                                                                                  | `EventEmitter<Date[]>`                                                                                    | -                                                    |

> Currently, supported `nz-time-picker` parameters in `nzShowTime` are: `nzFormat`, `nzHourStep`, `nzMinuteStep`,
> `nzSecondStep`, `nzDisabledHours`, `nzDisabledMinutes`, `nzDisabledSeconds`, `nzHideDisabledOptions`,
> `nzDefaultOpenValue`, `nzAddOn`

## FAQ

### Why does manual input not take effect after setting `nzFormat="dd/MM/yyyy"`

You need to use `date-fns`. Date formatting currently supports two methods: `DatePipe` (
default, [syntax reference](https://angular.dev/api/common/DatePipe)) and `date-fns` (
see [`How to format a date using date-fns`](/docs/i18n/en#How%20to%20format%20a%20date%20using%20Date-fns)).NG-ZORRO
takes the function provided by `date-fns` to implement date deserialization after using it.

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Basic

Basic use case. Users can select or input a date in panel.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'nz-demo-date-picker-basic',
  imports: [FormsModule, NzButtonModule, NzDatePickerModule],
  template: `
    <nz-date-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <nz-date-picker nzMode="week" [(ngModel)]="date" (ngModelChange)="getWeek($event)" />
    <br />
    <nz-date-picker nzMode="month" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <nz-date-picker nzMode="quarter" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <nz-date-picker nzMode="year" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <button nz-button nzType="default" (click)="changeLanguage()">Switch language for all pickers</button>
  `,
  styles: `
    nz-date-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerBasicComponent {
  date = null;
  isEnglish = false;

  constructor(private i18n: NzI18nService) {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}
```

### Customized Date Rendering

We can customize the rendering of date cells in the calendar by providing a `nzDateRender` function to `DatePicker`.

```typescript
import { Component } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-date-render',
  imports: [NzDatePickerModule],
  template: `
    <nz-date-picker [nzDateRender]="tplRender" />
    <nz-range-picker [nzDateRender]="tplRender" />

    <ng-template #tplRender let-current>
      <div class="ant-picker-cell-inner" [class.border]="current.getDate() === 1"> {{ current.getDate() }} </div>
    </ng-template>

    <br />
    <nz-date-picker nzMode="quarter" nzFormat="yyyy年Q季度" [nzDateRender]="tplQuarterRender" />
    <ng-template #tplQuarterRender let-current>
      <div class="ant-picker-cell-inner">{{ getQuarter(current) }}</div>
    </ng-template>
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
    .border {
      border: 1px solid #1890ff;
      border-radius: 50%;
    }
  `
})
export class NzDemoDatePickerDateRenderComponent {
  getQuarter(date: Date): string {
    const quarter = Math.floor((date.getMonth() + 3) / 3);
    const quarterMapper: Record<string, string> = { 1: '一', 2: '二', 3: '三', 4: '四' };
    return `${quarterMapper[quarter]}季度`;
  }
}
```

### Disabled Date & Time

Disabled part of dates and time by `nzDisabledDate` and `nzDisabledTime` respectively.

```typescript
import { Component } from '@angular/core';

import { differenceInCalendarDays, setHours } from 'date-fns';

import { DisabledTimeFn, DisabledTimePartial, NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-disabled-date',
  imports: [NzDatePickerModule],
  template: `
    <nz-date-picker
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [nzDisabledDate]="disabledDate"
      [nzDisabledTime]="disabledDateTime"
      [nzShowTime]="{ nzDefaultOpenValue: timeDefaultValue }"
    />
    <br />
    <nz-date-picker nzMode="month" [nzDisabledDate]="disabledDate" />
    <br />
    <nz-date-picker nzMode="quarter" [nzDisabledDate]="disabledDate" />
    <br />
    <nz-date-picker nzMode="year" [nzDisabledDate]="disabledDate" />
    <br />
    <nz-range-picker
      [nzDisabledDate]="disabledDate"
      [nzDisabledTime]="disabledRangeTime"
      [nzShowTime]="{ nzHideDisabledOptions: true, nzDefaultOpenValue: timeDefaultValue }"
      nzFormat="yyyy-MM-dd HH:mm:ss"
    />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerDisabledDateComponent {
  today = new Date();
  timeDefaultValue = setHours(new Date(), 0);

  range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;

  disabledDateTime: DisabledTimeFn = () => ({
    nzDisabledHours: () => this.range(0, 24).splice(4, 20),
    nzDisabledMinutes: () => this.range(30, 60),
    nzDisabledSeconds: () => [55, 56]
  });

  disabledRangeTime: DisabledTimeFn = (_value, type?: DisabledTimePartial) => {
    if (type === 'start') {
      return {
        nzDisabledHours: () => this.range(0, 60).splice(4, 20),
        nzDisabledMinutes: () => this.range(30, 60),
        nzDisabledSeconds: () => [55, 56]
      };
    }
    return {
      nzDisabledHours: () => this.range(0, 60).splice(20, 4),
      nzDisabledMinutes: () => this.range(0, 31),
      nzDisabledSeconds: () => [55, 56]
    };
  };
}
```

### Disabled

A disabled state of the `DatePicker`.

```typescript
import { Component } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-disabled',
  imports: [NzDatePickerModule],
  template: `
    <nz-date-picker nzDisabled />
    <br />
    <nz-date-picker nzMode="month" nzDisabled />
    <br />
    <nz-range-picker nzDisabled />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerDisabledComponent {}
```

### Extra Footer

Render extra footer in panel for customized requirements.

```typescript
import { Component } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-extra-footer',
  imports: [NzDatePickerModule],
  template: `
    <nz-date-picker [nzRenderExtraFooter]="footerRender" />
    <br />
    <nz-date-picker [nzRenderExtraFooter]="plainFooter" nzShowTime />
    <nz-range-picker [nzRenderExtraFooter]="footerRender" />
    <nz-range-picker [nzRenderExtraFooter]="plainFooter" nzShowTime />
    <nz-date-picker nzMode="month" [nzRenderExtraFooter]="footerRender" />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerExtraFooterComponent {
  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
}
```

### Date Format

We can set the date format by `nzFormat`.

```typescript
import { Component } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-format',
  imports: [NzDatePickerModule],
  template: `
    <nz-date-picker [nzFormat]="dateFormat" />
    <br />
    <nz-date-picker nzMode="month" [nzFormat]="monthFormat" />
    <br />
    <nz-date-picker nzMode="quarter" [nzFormat]="quarterFormat" />
    <br />
    <nz-range-picker [nzFormat]="dateFormat" />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerFormatComponent {
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
  quarterFormat = 'yyyy/[Q]Q';
}
```

### Inline mode

We can set the inline mode by `nzInline`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'nz-demo-date-picker-inline',
  imports: [FormsModule, NzDatePickerModule, NzTabsModule],
  template: `
    <nz-tabs>
      <nz-tab nzTitle="Default">
        <nz-date-picker nzInline [(ngModel)]="date" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Week">
        <nz-date-picker nzInline nzMode="week" [(ngModel)]="date" (ngModelChange)="getWeek($event)" />
      </nz-tab>
      <nz-tab nzTitle="Month">
        <nz-date-picker nzInline nzMode="month" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Quarter">
        <nz-date-picker nzInline nzMode="quarter" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Year">
        <nz-date-picker nzInline nzMode="year" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Range">
        <nz-range-picker nzInline [(ngModel)]="rangeDate" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Range Time">
        <nz-range-picker nzInline nzShowTime [(ngModel)]="rangeDate" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Range Week">
        <nz-range-picker nzInline nzMode="week" [(ngModel)]="rangeDate" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Range Month">
        <nz-range-picker nzInline nzMode="month" [(ngModel)]="rangeDate" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Range Quarter">
        <nz-range-picker nzInline nzMode="quarter" [(ngModel)]="rangeDate" (ngModelChange)="onChange($event)" />
      </nz-tab>
      <nz-tab nzTitle="Range Year">
        <nz-range-picker nzInline nzMode="year" [(ngModel)]="rangeDate" (ngModelChange)="onChange($event)" />
      </nz-tab>
    </nz-tabs>
  `,
  styles: `
    :host ::ng-deep .ant-tabs-tabpane {
      padding: 24px;
      overflow: auto;
    }
  `
})
export class NzDemoDatePickerInlineComponent {
  date = null;
  rangeDate = null;

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }
}
```

### Placement

You can manually specify the position of the popup via `nzPlacement`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { NzPlacement } from 'ng-zorro-antd/core/types';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-date-picker-placement',
  imports: [FormsModule, NzDatePickerModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="placement">
      <label nz-radio-button nzValue="bottomLeft">bottomLeft</label>
      <label nz-radio-button nzValue="bottomRight">bottomRight</label>
      <label nz-radio-button nzValue="topLeft">topLeft</label>
      <label nz-radio-button nzValue="topRight">topRight</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-date-picker [nzPlacement]="placement" />
    <br />
    <nz-range-picker [nzPlacement]="placement" />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerPlacementComponent {
  placement: NzPlacement = 'bottomLeft';
}
```

### Presetted Ranges

We can set presetted ranges to RangePicker to improve user experience.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { endOfMonth } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-presetted-ranges',
  imports: [FormsModule, NzDatePickerModule],
  template: `
    <nz-range-picker [nzRanges]="ranges" ngModel (ngModelChange)="onChange($event)" />
    <br />
    <nz-range-picker
      [nzRanges]="ranges"
      nzShowTime
      nzFormat="yyyy/MM/dd HH:mm:ss"
      ngModel
      (ngModelChange)="onChange($event)"
    />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerPresettedRangesComponent {
  ranges = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }
}
```

### Range Picker

Set range picker type by `nzMode` prop.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-range-picker',
  imports: [FormsModule, NzDatePickerModule],
  template: `
    <nz-range-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <nz-range-picker [nzShowTime]="true" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <nz-range-picker nzMode="week" [(ngModel)]="date" (ngModelChange)="getWeek($event)" />
    <br />
    <nz-range-picker nzMode="month" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <nz-range-picker nzMode="quarter" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
    <br />
    <nz-range-picker nzMode="year" [(ngModel)]="date" (ngModelChange)="onChange($event)" />
  `,
  styles: `
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerRangePickerComponent {
  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}
```

### Three Sizes

The input box comes in three sizes. `default` will be used if `nzSize` is omitted.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule, NzDatePickerSizeType } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-date-picker-size',
  imports: [FormsModule, NzDatePickerModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large">large</label>
      <label nz-radio-button nzValue="default">default</label>
      <label nz-radio-button nzValue="small">small</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-date-picker [nzSize]="size" />
    <br />
    <nz-date-picker nzMode="week" [nzSize]="size" />
    <br />
    <nz-date-picker nzMode="month" [nzSize]="size" />
    <br />
    <nz-date-picker nzMode="quarter" [nzSize]="size" />
    <br />
    <nz-range-picker [nzSize]="size" />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerSizeComponent {
  size: NzDatePickerSizeType = 'default';
}
```

### Customized Range Picker

When `RangePicker` does not satisfied your requirements, try to implement similar functionality with two `DatePicker`.

> - Use the `nzDisabledDate` property to limit the start and end dates.
> - Improve user experience with `open()`.

```typescript
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerComponent, NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-start-end',
  imports: [FormsModule, NzDatePickerModule],
  template: `
    <nz-date-picker
      [nzDisabledDate]="disabledStartDate"
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="startValue"
      nzPlaceHolder="Start"
      (nzOnOpenChange)="handleStartOpenChange($event)"
    />
    <nz-date-picker
      #endDatePicker
      [nzDisabledDate]="disabledEndDate"
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="endValue"
      nzPlaceHolder="End"
      (nzOnOpenChange)="handleEndOpenChange($event)"
    />
  `,
  styles: `
    nz-date-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerStartEndComponent {
  startValue: Date | null = null;
  endValue: Date | null = null;
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  };

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
    console.log('handleStartOpenChange', open);
  }

  handleEndOpenChange(open: boolean): void {
    console.log('handleEndOpenChange', open);
  }
}
```

### Status

Add status to DatePicker with `nzStatus`, which could be `error` or `warning`.

```typescript
import { Component } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-date-picker-status',
  imports: [NzDatePickerModule, NzSpaceModule],
  template: `
    <nz-space nzDirection="vertical" style="width: 100%">
      <nz-date-picker *nzSpaceItem nzStatus="error" style="width: 100%" />
      <nz-date-picker *nzSpaceItem nzStatus="warning" style="width: 100%" />
      <nz-range-picker *nzSpaceItem nzStatus="error" style="width: 100%" />
      <nz-range-picker *nzSpaceItem nzStatus="warning" style="width: 100%" />
    </nz-space>
  `
})
export class NzDemoDatePickerStatusComponent {}
```

### Switchable picker

Switch in different types of pickers by Select.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-date-picker-switch',
  imports: [FormsModule, NzDatePickerModule, NzSelectModule, NzSpaceModule],
  template: `
    <nz-space>
      <nz-select *nzSpaceItem [(ngModel)]="mode">
        <nz-option nzValue="date" nzLabel="Date" />
        <nz-option nzValue="week" nzLabel="Week" />
        <nz-option nzValue="month" nzLabel="Month" />
        <nz-option nzValue="quarter" nzLabel="Quarter" />
        <nz-option nzValue="year" nzLabel="Year" />
      </nz-select>
      <nz-date-picker *nzSpaceItem [nzMode]="mode" />
    </nz-space>
  `
})
export class NzDemoDatePickerSwitchComponent {
  mode = 'date';
}
```

### Choose Time

This property provide an additional time selection. When `nzShowTime` is an Object, its properties will be passed on to built-in `TimePicker`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'nz-demo-date-picker-time',
  imports: [FormsModule, NzDatePickerModule],
  template: `
    <nz-date-picker
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      ngModel
      (ngModelChange)="onChange($event)"
      (nzOnOk)="onOk($event)"
    />
    <br />
    <nz-range-picker
      [nzShowTime]="{ nzFormat: 'HH:mm' }"
      nzFormat="yyyy-MM-dd HH:mm"
      ngModel
      (ngModelChange)="onChange($event)"
      (nzOnCalendarChange)="onCalendarChange($event)"
      (nzOnOk)="onOk($event)"
    />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerTimeComponent {
  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
  }
}
```

### Variants

Variants of DatePicker, there are four variants: `outlined` `filled` `borderless` and `underlined`.

```typescript
import { Component } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-date-picker-variant',
  imports: [NzDatePickerModule, NzSpaceModule],
  template: `
    <nz-space nzDirection="vertical" style="width: 100%">
      <nz-date-picker *nzSpaceItem nzVariant="outlined" />
      <nz-date-picker *nzSpaceItem nzVariant="filled" />
      <nz-date-picker *nzSpaceItem nzVariant="borderless" />
      <nz-date-picker *nzSpaceItem nzVariant="underlined" />
    </nz-space>
  `,
  styles: `
    nz-date-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerVariantComponent {}
```

### Week Number

Display week numbers with `nzShowWeekNumber`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-date-picker-week-number',
  imports: [FormsModule, NzDatePickerModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="showWeekNumber">
      <label nz-radio-button [nzValue]="true">true</label>
      <label nz-radio-button [nzValue]="false">false</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-date-picker [nzShowWeekNumber]="showWeekNumber" />
    <br />
    <nz-range-picker [nzShowWeekNumber]="showWeekNumber" />
  `,
  styles: `
    nz-date-picker,
    nz-range-picker {
      margin: 0 8px 12px 0;
    }
  `
})
export class NzDemoDatePickerWeekNumberComponent {
  showWeekNumber: boolean = false;
}
```
