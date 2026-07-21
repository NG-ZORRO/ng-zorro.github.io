---
category: Components
type: Data Display
title: Statistic
cover: 'https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg'
description: Display statistic number.
---

## When To Use

- When want to highlight some data.
- When want to display statistic data with description.

## API

### nz-statistic

| Property            | Description                        | Type                                           | Default |
| ------------------- | ---------------------------------- | ---------------------------------------------- | ------- |
| `[nzPrefix]`        | Prefix of Value                    | `string \| TemplateRef<void>`                  | -       |
| `[nzSuffix]`        | Suffix of Value                    | `string \| TemplateRef<void>`                  | -       |
| `[nzTitle]`         | Title                              | `string \| TemplateRef<void>`                  | -       |
| `[nzValue]`         | Value                              | `string \| number`                             | -       |
| `[nzValueStyle]`    | Value CSS style                    | `Object`                                       | -       |
| `[nzValueTemplate]` | Custom template to render a number | `TemplateRef<{ $implicit: string \| number }>` | -       |
| `[nzLoading]`       | Loading status of Statistic        | `boolean`                                      | `false` |

### nz-countdown

| Property              | Description                      | Type                                 | Default      |
| --------------------- | -------------------------------- | ------------------------------------ | ------------ |
| `[nzFormat]`          | Format string                    | `string`                             | `'HH:mm:ss'` |
| `[nzPrefix]`          | Prefix of Value                  | `string \| TemplateRef<void>`        | -            |
| `[nzSuffix]`          | Suffix of Value                  | `string \| TemplateRef<void>`        | -            |
| `[nzTitle]`           | Title                            | `string \| TemplateRef<void>`        | -            |
| `[nzValue]`           | Target time in timestamp form    | `string \| number`                   | -            |
| `[nzValueTemplate]`   | Custom template to render a time | `TemplateRef<{ $implicit: number }>` | -            |
| `(nzCountdownFinish)` | Emit when countdown finishes     | `void`                               | -            |

### nzFormat

| Token | Description |
| ----- | ----------- |
| `Y`   | Year        |
| `M`   | Month       |
| `D`   | Date        |
| `H`   | Hour        |
| `m`   | Minute      |
| `s`   | Second      |
| `S`   | Millisecond |

---

## Examples

### Basic Usage

Simplest Usage.

```typescript
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@Component({
  selector: 'nz-demo-statistic-basic',
  imports: [DecimalPipe, NzButtonModule, NzGridModule, NzStatisticModule],
  template: `
    <nz-row [nzGutter]="16">
      <nz-col [nzSpan]="12">
        <nz-statistic [nzValue]="(1949101 | number)!" nzTitle="Active Users" />
      </nz-col>
      <nz-col [nzSpan]="12">
        <nz-statistic [nzValue]="(2019.111 | number: '1.0-2')!" nzTitle="Account Balance (CNY)" />
        <button nz-button nzType="primary" [style.margin-top.px]="16">Recharge</button>
      </nz-col>
      <nz-col [nzSpan]="12">
        <nz-statistic [nzValue]="(112893 | number: '1.0-2')!" nzTitle="Active Users" nzLoading />
      </nz-col>
    </nz-row>
  `
})
export class NzDemoStatisticBasicComponent {}
```

### In Card

Display statistic data in Card.

```typescript
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@Component({
  selector: 'nz-demo-statistic-card',
  imports: [DecimalPipe, NzCardModule, NzGridModule, NzIconModule, NzStatisticModule],
  template: `
    <div style="background: #ECECEC; padding: 30px;">
      <nz-row [nzGutter]="16">
        <nz-col [nzSpan]="12">
          <nz-card>
            <nz-statistic
              [nzValue]="(11.28 | number: '1.0-2')!"
              nzTitle="Active"
              [nzPrefix]="prefixTplOne"
              nzSuffix="%"
              [nzValueStyle]="{ color: '#3F8600' }"
            />
            <ng-template #prefixTplOne><nz-icon nzType="arrow-up" /></ng-template>
          </nz-card>
        </nz-col>
        <nz-col [nzSpan]="12">
          <nz-card>
            <nz-statistic
              [nzValue]="(9.3 | number: '1.0-2')!"
              nzTitle="Idle"
              [nzPrefix]="prefixTplTwo"
              nzSuffix="%"
              [nzValueStyle]="{ color: '#CF1322' }"
            />
            <ng-template #prefixTplTwo><nz-icon nzType="arrow-down" /></ng-template>
          </nz-card>
        </nz-col>
      </nz-row>
    </div>
  `
})
export class NzDemoStatisticCardComponent {}
```

### Countdown

Countdown component.

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@Component({
  selector: 'nz-demo-statistic-countdown',
  imports: [NzGridModule, NzStatisticModule],
  template: `
    <nz-row [nzGutter]="16">
      <nz-col [nzSpan]="12">
        <nz-countdown [nzValue]="deadline" nzTitle="Countdown" />
      </nz-col>
      <nz-col [nzSpan]="12">
        <nz-countdown [nzValue]="deadline" nzTitle="Million Seconds" nzFormat="HH:mm:ss:SSS" />
      </nz-col>
      <nz-col [nzSpan]="24" style="margin-top: 32px;">
        <nz-countdown [nzValue]="deadline" nzTitle="Day Level" nzFormat="D 天 H 时 m 分 s 秒" />
      </nz-col>
    </nz-row>
  `
})
export class NzDemoStatisticCountdownComponent {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}
```

### Unit

Add unit through `nzPrefix` and `nzSuffix`.

```typescript
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@Component({
  selector: 'nz-demo-statistic-unit',
  imports: [DecimalPipe, NzGridModule, NzIconModule, NzStatisticModule],
  template: `
    <nz-row [nzGutter]="16">
      <nz-col [nzSpan]="12">
        <nz-statistic [nzValue]="(1128 | number)!" nzTitle="Feedback" [nzPrefix]="prefixTpl" />
        <ng-template #prefixTpl><nz-icon nzType="like" /></ng-template>
      </nz-col>
      <nz-col [nzSpan]="12">
        <nz-statistic [nzValue]="93" nzTitle="Unmerged" nzSuffix="/ 100" />
      </nz-col>
    </nz-row>
  `
})
export class NzDemoStatisticUnitComponent {}
```
