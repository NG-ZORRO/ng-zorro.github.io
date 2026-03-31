---
category: Components
title: Statistic
subtitle: 统计
type: 数据展示
cover: 'https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg'
description: 展示统计数字。
---

## 何时使用

- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。

## API

### nz-statistic

| 参数                | 说明           | 类型                                           | 默认值  |
| ------------------- | -------------- | ---------------------------------------------- | ------- |
| `[nzPrefix]`        | 设置数值的前缀 | `string \| TemplateRef<void>`                  | -       |
| `[nzSuffix]`        | 设置数值的后缀 | `string \| TemplateRef<void>`                  | -       |
| `[nzTitle]`         | 数值的标题     | `string \| TemplateRef<void>`                  | -       |
| `[nzValue]`         | 数值内容       | `string \| number`                             | -       |
| `[nzValueStyle]`    | 设置数值的样式 | `Object`                                       | -       |
| `[nzValueTemplate]` | 自定义数值展示 | `TemplateRef<{ $implicit: string \| number }>` | -       |
| `[nzLoading]`       | 数值是否加载中 | `boolean`                                      | `false` |

### nz-countdown

| 参数                  | 说明                   | 类型                                 | 默认值       |
| --------------------- | ---------------------- | ------------------------------------ | ------------ |
| `[nzFormat]`          | 格式化倒计时展示       | `string`                             | `'HH:mm:ss'` |
| `[nzPrefix]`          | 设置数值的前缀         | `string \| TemplateRef<void>`        | -            |
| `[nzSuffix]`          | 设置数值的后缀         | `string \| TemplateRef<void>`        | -            |
| `[nzTitle]`           | 数值的标题             | `string \| TemplateRef<void>`        | -            |
| `[nzValue]`           | 时间戳格式的目标时间   | `string \| number`                   | -            |
| `[nzValueTemplate]`   | 自定义时间展示         | `TemplateRef<{ $implicit: number }>` | -            |
| `(nzCountdownFinish)` | 当倒计时完成时发出事件 | `void`                               | -            |

### nzFormat

| 占位符 | 描述 |
| ------ | ---- |
| `Y`    | 年   |
| `M`    | 月   |
| `D`    | 日   |
| `H`    | 时   |
| `m`    | 分   |
| `s`    | 秒   |
| `S`    | 毫秒 |

---

## 代码示例

### 基本用法

简单的展示。

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

### 在卡片中使用

在卡片中展示统计数值。

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

### 倒计时

倒计时组件。

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

### 单位

通过前缀和后缀添加单位。

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
