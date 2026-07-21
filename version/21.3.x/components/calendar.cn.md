---
category: Components
type: 数据展示
subtitle: 日历
cols: 1
title: Calendar
cover: 'https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg'
description: 按照日历形式展示数据的容器。
---

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## API

**注意：**Calendar 的部分 locale 来自于 Angular 自身的国际化支持，需要在 `app.config.ts` 文件中 引入相应的 Angular 语言包。

例如：

```typescript
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
```

```html
<nz-calendar
  [nzDateCell]="dateCellTpl"
  [(ngModel)]="selectedDate"
  [(nzMode)]="mode"
  (nzPanelChange)="panelChange($event)"
  (nzSelectChange)="selectChange($event)"
>
  <!-- 定义 Cell 的另一种方式 -->
  <div *dateCell>Foo</div>
</nz-calendar>
<!-- 传入 TemplateRef 的方式 -->
<ng-template #dateCellTpl let-date><span>{{ date | date:'d'}}</span></ng-template>
```

### nz-calendar

| 参数                | 说明                                                         | 类型                                                    | 默认值    |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------- | --------- |
| `[(ngModel)]`       | （可双向绑定）展示日期                                       | `Date`                                                  | 当前日期  |
| `[(nzMode)]`        | （可双向绑定）显示模式                                       | `'month' \| 'year'`                                     | `'month'` |
| `[nzFullscreen]`    | 是否全屏显示                                                 | `boolean`                                               | `true`    |
| `[nzDateCell]`      | （可作为内容）自定义渲染日期单元格，模版内容会被追加到单元格 | `TemplateRef<Date>`                                     | -         |
| `[nzDateFullCell]`  | （可作为内容）自定义渲染日期单元格，模版内容覆盖单元格       | `TemplateRef<Date>`                                     | -         |
| `[nzMonthCell]`     | （可作为内容）自定义渲染月单元格，模版内容会被追加到单元格   | `TemplateRef<Date>`                                     | -         |
| `[nzMonthFullCell]` | （可作为内容）自定义渲染月单元格，模版内容覆盖单元格         | `TemplateRef<Date>`                                     | -         |
| `[nzCustomHeader]`  | 自定义头部内容                                               | `string \| TemplateRef<void>`                           | -         |
| `[nzDisabledDate]`  | 不可选择的日期                                               | `(current: Date) => boolean`                            | -         |
| `(nzPanelChange)`   | 面板变化的回调                                               | `EventEmitter<{ date: Date, mode: 'month' \| 'year' }>` | -         |
| `(nzSelectChange)`  | 选择日期的回调                                               | `EventEmitter<Date>`                                    | -         |

---

## 代码示例

### 基本

一个通用的日历面板，支持年/月切换。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCalendarMode, NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'nz-demo-calendar-basic',
  imports: [FormsModule, NzCalendarModule],
  template: `<nz-calendar [(ngModel)]="date" [(nzMode)]="mode" (nzPanelChange)="panelChange($event)" />`
})
export class NzDemoCalendarBasicComponent {
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
}
```

### 卡片模式

用于嵌套在空间有限的容器中。

```typescript
import { Component } from '@angular/core';

import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'nz-demo-calendar-card',
  imports: [NzCalendarModule],
  template: `
    <div class="card">
      <nz-calendar
        [nzFullscreen]="false"
        (nzSelectChange)="onValueChange($event)"
        (nzPanelChange)="onPanelChange($event)"
      />
    </div>
  `,
  styles: `
    .card {
      width: 300px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
  `
})
export class NzDemoCalendarCardComponent {
  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }
}
```

### 自定义头部

自定义日历头部内容。

```typescript
import { Component } from '@angular/core';

import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'nz-demo-calendar-customize-header',
  imports: [NzCalendarModule],
  template: `
    <div class="card">
      <nz-calendar [nzFullscreen]="false" [nzCustomHeader]="customHeader" />
    </div>

    <ng-template #customHeader>
      <div style="padding: 8px">
        <h4>Custom header</h4>
      </div>
    </ng-template>
  `,
  styles: `
    .card {
      width: 300px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
  `
})
export class NzDemoCalendarCustomizeHeaderComponent {}
```

### 通知事项日历

一个复杂的应用示例，用 `nzDateCell` 和 `nzMonthCell` 模版来自定义需要渲染的数据。

```typescript
import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'nz-demo-calendar-notice-calendar',
  imports: [NzBadgeModule, NzCalendarModule],
  template: `
    <nz-calendar>
      <ul *nzDateCell="let date" class="events">
        @switch (date.getDate()) {
          @case (8) {
            @for (item of listDataMap.eight; track $index) {
              <li>
                <nz-badge [nzStatus]="item.type" [nzText]="item.content" />
              </li>
            }
          }
          @case (10) {
            @for (item of listDataMap.ten; track $index) {
              <li>
                <nz-badge [nzStatus]="item.type" [nzText]="item.content" />
              </li>
            }
          }
          @case (11) {
            @for (item of listDataMap.eleven; track $index) {
              <li>
                <nz-badge [nzStatus]="item.type" [nzText]="item.content" />
              </li>
            }
          }
        }
      </ul>
      <ng-container *nzMonthCell="let month">
        @if (getMonthData(month); as monthData) {
          <div class="notes-month">
            <section>{{ monthData }}</section>
            <span>Backlog number</span>
          </div>
        }
      </ng-container>
    </nz-calendar>
  `,
  styles: `
    .events {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .events .ant-badge-status {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      text-overflow: ellipsis;
      font-size: 12px;
    }
  `
})
export class NzDemoCalendarNoticeCalendarComponent {
  readonly listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
}
```

### 选择功能

一个通用的日历面板，支持年/月切换。

```typescript
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'nz-demo-calendar-select',
  imports: [DatePipe, FormsModule, NzAlertModule, NzCalendarModule],
  template: `
    <nz-alert nzMessage="Your selected date: {{ selectedValue | date: 'yyyy-MM-dd' }}" />
    <nz-calendar [(ngModel)]="selectedValue" (nzSelectChange)="selectChange($event)" />
  `
})
export class NzDemoCalendarSelectComponent {
  selectedValue = new Date('2017-01-25');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
}
```
