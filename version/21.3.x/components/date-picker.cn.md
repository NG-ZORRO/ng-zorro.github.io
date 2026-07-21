---
category: Components
type: 数据录入
title: DatePicker
subtitle: 日期选择框
cover: 'https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg'
description: 输入或选择日期的控件。
---

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## API

**注意：** nz-date-picker 的部分 locale 来自于 Angular 自身的[国际化支持](https://angular.cn/guide/i18n)
，需要在 `app.config.ts` 文件中 引入相应的 Angular 语言包。
例如：

```typescript
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);
```

**注意：**
所有输入输出日期对象均为 [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
，你可以通过 [date-fns](https://date-fns.org/) 工具库获得你需要的数据。

### 共同的 API

以下 API 为 nz-date-picker、nz-range-picker 共享的 API。

| 参数                     | 说明                                                          | 类型                                                       | 默认值                                                                                                      | 全局配置 | 版本   |
| ------------------------ | ------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------ |
| `[nzId]`                 | 组件内部 input 的 id 值                                       | `string`                                                   | -                                                                                                           |
| `[nzAllowClear]`         | 是否显示清除按钮                                              | `boolean`                                                  | `true`                                                                                                      | -        |
| `[nzAutoFocus]`          | 自动获取焦点                                                  | `boolean`                                                  | `false`                                                                                                     | -        |
| `[nzBackdrop]`           | 浮层是否应带有背景板                                          | `boolean`                                                  | `false`                                                                                                     |
| `[nzDefaultPickerValue]` | 默认面板日期                                                  | `Date \| Date[]`                                           | -                                                                                                           | -        |
| `[nzDisabled]`           | 禁用                                                          | `boolean`                                                  | `false`                                                                                                     | -        |
| `[nzDisabledDate]`       | 不可选择的日期                                                | `(current: Date) => boolean`                               | -                                                                                                           | -        |
| `[nzDropdownClassName]`  | 额外的弹出日历 className                                      | `string`                                                   | -                                                                                                           | -        |
| `[nzFormat]`             | 展示的日期格式，见`nzFormat特别说明`                          | `string`                                                   | -                                                                                                           |
| `[nzInputReadOnly]`      | 为 input 标签设置只读属性（避免在移动设备上触发小键盘）       | `boolean`                                                  | `false`                                                                                                     | -        |
| `[nzLocale]`             | 国际化配置                                                    | `object`                                                   | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) | -        |
| `[nzMode]`               | 选择模式                                                      | `'date' \| 'week' \| 'month' \| 'quarter'  \| 'year'`      | `'date'`                                                                                                    |
| `[nzPlaceHolder]`        | 输入框提示文字                                                | `string \| string[]`                                       | -                                                                                                           | -        |
| `[nzPopupStyle]`         | 额外的弹出日历样式                                            | `object`                                                   | `{}`                                                                                                        | -        |
| `[nzRenderExtraFooter]`  | 在面板中添加额外的页脚                                        | `TemplateRef \| string \| (() => TemplateRef \| string)`   | -                                                                                                           |
| `[nzSize]`               | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `'large' \| 'small'`                                       | -                                                                                                           | -        |
| `[nzStatus]`             | 设置校验状态                                                  | `'error' \| 'warning'`                                     | -                                                                                                           |
| `[nzPlacement]`          | 选择框弹出的位置                                              | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | `'bottomLeft'`                                                                                              |          |
| `[nzSuffixIcon]`         | 自定义的后缀图标                                              | `string \| TemplateRef`                                    | -                                                                                                           | ✅       |
| `[nzVariant]`            | 形态变体                                                      | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`   | `'outlined'`                                                                                                | ✅       | 20.0.0 |
| `[nzInline]`             | 内联模式                                                      | `boolean`                                                  | `false`                                                                                                     | -        |
| `(nzOnOpenChange)`       | 弹出日历和关闭日历的回调                                      | `EventEmitter<boolean>`                                    | -                                                                                                           | -        |
| `(nzOnPanelChange)`      | 改变模式或日期的回调                                          | `EventEmitter<NzPanelChangeType>`                          | -                                                                                                           | -        |

### 共同的方法

| 名称      | 描述         |
| --------- | ------------ |
| `open()`  | 打开日历弹层 |
| `close()` | 关闭日历弹层 |

### nz-date-picker

| 参数          | 说明 | 类型   | 默认值 |
| ------------- | ---- | ------ | ------ |
| `[(ngModel)]` | 日期 | `Date` | -      |

### nz-date-picker[nzMode="date"]

| 参数                 | 说明                                                           | 类型                                                                           | 默认值                                               |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `[nzDateRender]`     | 自定义日期单元格的内容（month-picker/year-picker 不支持）      | `TemplateRef<Date> \| string \| ((d: Date) => TemplateRef<Date> \| string)`    | -                                                    |
| `[nzDisabledTime]`   | 不可选择的时间                                                 | `(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | -                                                    |
| `[nzShowTime]`       | 增加时间选择功能                                               | `object \| boolean`                                                            | [TimePicker Options](/components/time-picker/zh#api) |
| `[nzShowToday]`      | 是否展示“今天”按钮                                             | `boolean`                                                                      | `true`                                               |
| `[nzShowNow]`        | 当设定了`nzShowTime`的时候，面板是否显示“此刻”按钮             | `boolean`                                                                      | `true`                                               |
| `[nzShowWeekNumber]` | 是否在每一行显示周数（仅日期选择器支持。周选择器始终显示周数） | `boolean`                                                                      | `false`                                              |
| `(nzOnOk)`           | 点击确定按钮的回调                                             | `EventEmitter<Date>`                                                           | -                                                    |

### nz-range-picker

| 参数                   | 说明                   | 类型                                                               | 默认值 |
| ---------------------- | ---------------------- | ------------------------------------------------------------------ | ------ |
| `[(ngModel)]`          | 日期                   | `Date[]`                                                           | -      |
| `[nzRanges]`           | 预设时间范围快捷选择   | `{ [ key: string ]: Date[] } \| { [ key: string ]: () => Date[] }` | -      |
| `[nzSeparator]`        | 分隔符                 | `string \| TemplateRef`                                            | `'~'`  |
| `(nzOnCalendarChange)` | 待选日期发生变化的回调 | `EventEmitter<Date[]>`                                             | -      |

### nz-range-picker[nzMode="date"]

| 参数                 | 说明                                                           | 类型                                                                                                      | 默认值                                               |
| -------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `[nzShowTime]`       | 增加时间选择功能                                               | `object \| boolean`                                                                                       | [TimePicker Options](/components/time-picker/zh#api) |
| `[nzDisabledTime]`   | 不可选择的时间                                                 | `(current: Date, partial: 'start' \| 'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | -                                                    |
| `[nzShowWeekNumber]` | 是否在每一行显示周数（仅日期选择器支持。周选择器始终显示周数） | `boolean`                                                                                                 | `false`                                              |
| `(nzOnOk)`           | 点击确定按钮的回调                                             | `EventEmitter<Date[]>`                                                                                    | -                                                    |

> `nzShowTime` 中当前支持的 `nz-time-picker`
> 参数有：`nzFormat`, `nzHourStep`, `nzMinuteStep`, `nzSecondStep`, `nzDisabledHours`, `nzDisabledMinutes`, `nzDisabledSeconds`, `nzHideDisabledOptions`, `nzDefaultOpenValue`, `nzAddOn`

## FAQ

### 为何在设置 `nzFormat="dd/MM/yyyy"` 后手动输入不生效

需要引入 `date-fns` 。日期格式化目前同时支持两种方式：`DatePipe`（默认，[语法参考](https://angular.cn/api/common/DatePipe)）
和 `date-fns`（见[如何使用 `date-fns` 进行日期格式化](/docs/i18n/zh#如何使用Date-fns进行日期格式化)）。当你引入 `date-fns`
后，NG-ZORRO 会使用它提供的 API 来进行反序列化。

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 基本

最简单的用法，在浮层中可以选择或者输入日期。

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

### 定制日期单元格

使用 `nzDateRender` 可以自定义日期单元格的内容和样式。

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

### 不可选择日期和时间

可用 `nzDisabledDate` 和 `nzDisabledTime` 分别禁止选择部分日期和时间。

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

### 禁用

选择框的不可用状态。

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

### 额外的页脚

在浮层中加入额外的页脚，以满足某些定制信息的需求。

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

### 日期格式

使用 `nzFormat` 属性，可以自定义日期显示格式。

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

### 内联模式

使用 `nzInline` 属性，可以渲染为内联模式。

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

### 自定义位置

可以通过 `nzPlacement` 手动指定弹出的位置。

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

### 预设范围

RangePicker 可以设置常用的 预设范围 提高用户体验。

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

### 范围选择器

通过设置 `nzMode` 属性，指定范围选择器类型。

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

### 三种大小

三种大小的输入框，若不设置，则为 `default`。

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

### 自定义日期范围选择

当 `RangePicker` 无法满足业务需求时，可以使用两个 `DatePicker` 实现类似的功能。

> - 通过设置 `nzDisabledDate` 方法，来约束开始和结束日期。
> - 通过 `open()` 来优化交互。

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

### 自定义状态

使用 `nzStatus` 为 DatePicker 添加状态，可选 `error` 或者 `warning`。

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

### 切换不同的选择器

提供选择器，自由切换不同类型的日期选择器，常用于日期筛选场合。

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

### 日期时间选择

增加选择时间功能，当 `nzShowTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

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

### 形态变体

DatePicker 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

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

### 显示周数

使用 `nzShowWeekNumber` 显示周数

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
