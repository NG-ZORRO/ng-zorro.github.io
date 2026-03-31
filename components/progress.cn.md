---
category: Components
subtitle: 进度条
type: 反馈
title: Progress
cover: 'https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg'
description: 展示操作的当前进度。
---

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

## API

### nz-progress

各类型通用的属性。

| 属性                 | 说明                         | 类型                                                                                   | 默认值                     | 全局配置 |
| -------------------- | ---------------------------- | -------------------------------------------------------------------------------------- | -------------------------- | -------- |
| `[nzType]`           | 类型                         | `'line' \| 'circle' \| 'dashboard'`                                                    | `'line'`                   |          |
| `[nzFormat]`         | 内容的模板函数               | `(percent: number) => string \| TemplateRef<{ $implicit: number }>`                    | `percent => percent + '%'` |
| `[nzPercent]`        | 百分比                       | `number`                                                                               | `0`                        |          |
| `[nzShowInfo]`       | 是否显示进度数值或状态图标   | `boolean`                                                                              | `true`                     | ✅       |
| `[nzStatus]`         | 状态                         | `'success' \| 'exception' \| 'active' \| 'normal'`                                     | -                          |          |
| `[nzStrokeLinecap]`  | 进度条端点形状               | `'round' \| 'square'`                                                                  | `'round'`                  | ✅       |
| `[nzStrokeColor]`    | 进度条颜色，传入对象时为渐变 | `string \| { from: string; to: string: direction: string; [percent: string]: string }` | -                          | ✅       |
| `[nzSuccessPercent]` | 已完成的分段百分比           | `number`                                                                               | 0                          |          |

### `nzType="line"`

| 属性              | 说明                    | 类型     | 默认值 |
| ----------------- | ----------------------- | -------- | ------ |
| `[nzStrokeWidth]` | 进度条线的宽度，单位 px | `number` | `8`    |
| `[nzSteps]`       | 进度条总共步数          | `number` | -      |

### `nzType="circle"`

| 属性              | 说明                                             | 类型     | 默认值 | 全局配置 |
| ----------------- | ------------------------------------------------ | -------- | ------ | -------- |
| `[nzWidth]`       | 圆形进度条画布宽度，单位 px                      | `number` | `132`  |          |
| `[nzStrokeWidth]` | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | `number` | `6`    | ✅       |

### `nzType="dashboard"`

| 属性              | 说明                                               | 类型                                     | 默认值  | 全局配置 |
| ----------------- | -------------------------------------------------- | ---------------------------------------- | ------- | -------- |
| `[nzWidth]`       | 仪表盘进度条画布宽度，单位 px                      | `number`                                 | `132`   |          |
| `[nzStrokeWidth]` | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | `number`                                 | `6`     | ✅       |
| `[nzGapDegree]`   | 仪表盘进度条缺口角度，可取值 0 ~ 360               | `number`                                 | `0`     | ✅       |
| `[nzGapPosition]` | 仪表盘进度条缺口位置                               | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | ✅       |

---

## 代码示例

### 小型进度圈

小一号的圈形进度。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-circle-mini',
  imports: [NzProgressModule],
  template: `
    <nz-progress [nzPercent]="75" nzType="circle" [nzWidth]="80" />
    <nz-progress [nzPercent]="70" nzType="circle" [nzWidth]="80" nzStatus="exception" />
    <nz-progress [nzPercent]="100" nzType="circle" [nzWidth]="80" />
  `,
  styles: `
    nz-progress {
      margin-right: 8px;
      margin-bottom: 8px;
      display: inline-block;
    }
  `
})
export class NzDemoProgressCircleMiniComponent {}
```

### 进度圈

圈形的进度。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-circle',
  imports: [NzProgressModule],
  template: `
    <nz-progress [nzPercent]="75" nzType="circle" />
    <nz-progress [nzPercent]="70" nzType="circle" nzStatus="exception" />
    <nz-progress [nzPercent]="100" nzType="circle" />
  `,
  styles: `
    nz-progress {
      margin-right: 8px;
      margin-bottom: 8px;
      display: inline-block;
    }
  `
})
export class NzDemoProgressCircleComponent {}
```

### 仪表盘样式

仪表盘展示样式

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-dashboard-layout',
  imports: [NzProgressModule],
  template: `
    <nz-progress [nzPercent]="1" nzType="dashboard" [nzGapDegree]="90" />
    <nz-progress [nzPercent]="75" nzType="dashboard" [nzGapDegree]="180" />
    <nz-progress [nzPercent]="75" nzType="dashboard" [nzGapDegree]="295" />
    <nz-progress [nzPercent]="1" nzType="dashboard" [nzGapDegree]="340" />
  `
})
export class NzDemoProgressDashboardLayoutComponent {}
```

### 仪表盘

通过设置 `nzType="dashboard"`，可以很方便地实现仪表盘样式的进度条。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-dashboard',
  imports: [NzProgressModule],
  template: `<nz-progress [nzPercent]="75" nzType="dashboard" />`
})
export class NzDemoProgressDashboardComponent {}
```

### 动态展示

会动的进度条才是好进度条。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-progress-dynamic',
  imports: [NzButtonModule, NzIconModule, NzFlexModule, NzProgressModule, NzSpaceModule],
  template: `
    <div nz-flex nzVertical nzGap="small">
      <nz-progress [nzPercent]="percent" />
      <nz-progress [nzPercent]="percent" nzType="circle" />
      <nz-space-compact>
        <button nz-button (click)="decline()"><nz-icon nzType="minus" /></button>
        <button nz-button (click)="increase()"><nz-icon nzType="plus" /></button>
      </nz-space-compact>
    </div>
  `
})
export class NzDemoProgressDynamicComponent {
  percent = 0;

  increase(): void {
    this.percent = Math.min(this.percent + 10, 100);
  }

  decline(): void {
    this.percent = Math.max(this.percent - 10, 0);
  }
}
```

### 自定义文字格式

`nzFormat` 属性指定格式。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-format',
  imports: [NzProgressModule],
  template: `
    <nz-progress [nzPercent]="75" nzType="circle" [nzFormat]="formatOne" />
    <nz-progress [nzPercent]="100" nzType="circle" [nzFormat]="formatTwo" />
  `,
  styles: `
    nz-progress {
      margin-right: 8px;
      margin-bottom: 8px;
      display: inline-block;
    }
  `
})
export class NzDemoProgressFormatComponent {
  formatOne = (percent: number): string => `${percent} Days`;
  formatTwo = (): string => `Done`;
}
```

### 自定义进度条渐变色

`linear-gradient` 的封装。推荐只传两种颜色。

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-gradient',
  imports: [NzProgressModule],
  template: `
    <nz-progress [nzPercent]="99.9" [nzStrokeColor]="{ '0%': '#108ee9', '100%': '#87d068' }" />
    <nz-progress [nzPercent]="99.9" [nzStrokeColor]="{ '0%': '#108ee9', '100%': '#87d068' }" nzStatus="active" />
    <nz-progress
      nzType="circle"
      [nzPercent]="90"
      [nzStrokeColor]="{ '0%': '#108ee9', '50%': '#2db7f5', '100%': '#87d068' }"
    />
    <nz-progress nzType="dashboard" [nzPercent]="100" [nzStrokeColor]="{ '0%': '#108ee9', '100%': '#87d068' }" />
  `,
  styles: `
    .ant-progress {
      margin-right: 8px;
      margin-bottom: 8px;
      display: inline-block;
    }
  `,
  encapsulation: ViewEncapsulation.None
})
export class NzDemoProgressGradientComponent {}
```

### 小型进度条

适合放在较狭窄的区域内。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-line-mini',
  imports: [NzProgressModule],
  template: `
    <div style="width: 170px;">
      <nz-progress [nzPercent]="30" nzSize="small" />
      <nz-progress [nzPercent]="50" nzSize="small" nzStatus="active" />
      <nz-progress [nzPercent]="70" nzSize="small" nzStatus="exception" />
      <nz-progress [nzPercent]="100" nzSize="small" />
      <nz-progress [nzPercent]="50" nzSize="small" [nzShowInfo]="false" />
    </div>
  `
})
export class NzDemoProgressLineMiniComponent {}
```

### 进度条

标准的进度条。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-line',
  imports: [NzProgressModule],
  template: `
    <nz-progress [nzPercent]="30" />
    <nz-progress [nzPercent]="50" nzStatus="active" />
    <nz-progress [nzPercent]="70" nzStatus="exception" />
    <nz-progress [nzPercent]="100" />
    <nz-progress [nzPercent]="50" [nzShowInfo]="false" />
  `
})
export class NzDemoProgressLineComponent {}
```

### 圆角/方角边缘

通过设定 `nzStrokeLinecap='square|round'` 可以调整进度条边缘的形状。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-round',
  imports: [NzProgressModule],
  template: `
    <nz-progress nzStrokeLinecap="round" nzPercent="75" />
    <nz-progress nzStrokeLinecap="round" nzType="circle" nzPercent="75" />
    <nz-progress nzStrokeLinecap="square" nzType="dashboard" nzPercent="75" />
  `
})
export class NzDemoProgressRoundComponent {}
```

### 分段进度条

标准的进度条。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-progress-segment',
  imports: [NzProgressModule, NzTooltipModule],
  template: `
    <nz-progress
      nz-tooltip
      nzTooltipTitle="3 done / 3 in progress / 4 to do"
      [nzPercent]="60"
      [nzSuccessPercent]="30"
    />
    <nz-progress
      nz-tooltip
      nzTooltipTitle="3 done / 3 in progress / 4 to do"
      nzType="circle"
      [nzPercent]="60"
      [nzSuccessPercent]="30"
    />
    <nz-progress
      nz-tooltip
      nzTooltipTitle="3 done / 3 in progress / 4 to do"
      nzType="dashboard"
      [nzPercent]="60"
      [nzSuccessPercent]="30"
    />
  `
})
export class NzDemoProgressSegmentComponent {}
```

### 步骤进度条

带步骤的进度条。

```typescript
import { Component } from '@angular/core';

import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nz-demo-progress-step',
  imports: [NzProgressModule],
  template: `
    <nz-progress [nzPercent]="50" [nzSteps]="3" nzStrokeColor="#1890ff" />
    <nz-progress [nzPercent]="30" [nzSteps]="5" nzStrokeColor="#1890ff" />
    <nz-progress [nzPercent]="100" [nzSteps]="5" nzStrokeColor="#1890ff" nzSize="small" />
  `
})
export class NzDemoProgressStepComponent {}
```
