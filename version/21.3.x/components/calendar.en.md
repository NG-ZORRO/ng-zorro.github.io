---
category: Components
type: Data Display
cols: 1
title: Calendar
cover: 'https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg'
description: Container for displaying data in calendar form.
---

## When To Use

When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.

## API

**Note:** Some of Calendar's locale are coming from [Angular i18n](https://angular.dev/guide/i18n), that should be provided in the file `app.config.ts`.

For example:

```typescript
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
```

```html
<nz-calendar
  [nzDateCell]="dateCellTpl"
  [(ngModel)]="selectedDate"
  [(nzMode)]="mode"
  (nzPanelChange)="panelChange($event)"
  (nzSelectChange)="selectChange($event)"
>
  <!-- Another method for cell definition -->
  <div *nzDateCell>Foo</div>
</nz-calendar>
<!-- Passing TemplateRef -->
<ng-template #dateCellTpl let-date><span>{{ date | date:'d'}}</span></ng-template>
```

### nz-calendar

| Property            | Description                                                                                              | Type                                                    | Default      |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------ |
| `[(ngModel)]`       | (Two-way bindable) The current selected date                                                             | `Date`                                                  | current date |
| `[(nzMode)]`        | The display mode of the calendar (two-way bindable)                                                      | `'month' \| 'year'`                                     | `'month'`    |
| `[nzFullscreen]`    | Whether to display in full-screen                                                                        | `boolean`                                               | `true`       |
| `[nzDateCell]`      | (Contentable) Customize the display of the date cell, the template content will be appended to the cell  | `TemplateRef<Date>`                                     | -            |
| `[nzDateFullCell]`  | (Contentable) Customize the display of the date cell, the template content will override the cell        | `TemplateRef<Date>`                                     | -            |
| `[nzMonthCell]`     | (Contentable) Customize the display of the month cell, the template content will be appended to the cell | `TemplateRef<Date>`                                     | -            |
| `[nzMonthFullCell]` | (Contentable) Customize the display of the month cell, the template content will override the cell       | `TemplateRef<Date>`                                     | -            |
| `[nzCustomHeader]`  | Render custom header in panel                                                                            | `string \| TemplateRef<void>`                           | -            |
| `[nzDisabledDate]`  | specify the date that cannot be selected                                                                 | `(current: Date) => boolean`                            | -            |
| `(nzPanelChange)`   | Callback for when panel changes                                                                          | `EventEmitter<{ date: Date, mode: 'month' \| 'year' }>` | -            |
| `(nzSelectChange)`  | A callback function of selected item                                                                     | `EventEmitter<Date>`                                    | -            |

---

## Examples

### Basic

A basic calendar component with Year/Month switch.

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

### Card

Nested inside a container element for rendering in limited space.

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

### Customize Header

Customize Calendar header content.

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

### Notice Calendar

This component can be rendered by using `nzDateCell` and `nzMonthCell` with the data you need.

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

### Selectable Calendar

A basic calendar component with Year/Month switch.

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
