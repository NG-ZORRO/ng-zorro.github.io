---
category: Components
type: Feedback
title: Progress
cover: 'https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg'
description: Display the current progress of an operation.
---

## When To Use

If it will take a long time to complete an operation, you can use `Progress` to show the current progress and status.

- When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
- When you need to display the completion percentage of an operation.

## API

### nz-progress

| Property             | Description                                                          | Type                                                                                   | Default                    | Global Config |
| -------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `[nzType]`           | to set the type                                                      | `'line' \| 'circle' \| 'dashboard'`                                                    | `'line'`                   |               |
| `[nzFormat]`         | template function of the content                                     | `(percent: number) => string \| TemplateRef<{ $implicit: number }>`                    | `percent => percent + '%'` |               |
| `[nzPercent]`        | to set the completion percentage                                     | `number`                                                                               | `0`                        |               |
| `[nzShowInfo]`       | whether to display the progress value and the status icon            | `boolean`                                                                              | `true`                     | ✅            |
| `[nzStatus]`         | to set the status of the Progress                                    | `'success' \| 'exception' \| 'active' \| 'normal'`                                     | -                          |               |
| `[nzStrokeLinecap]`  | to set the style of the progress linecap                             | `'round' \| 'square'`                                                                  | `'round'`                  | ✅            |
| `[nzStrokeColor]`    | color of progress bar, render linear-gradient when passing an object | `string \| { from: string; to: string: direction: string; [percent: string]: string }` | -                          | ✅            |
| `[nzSuccessPercent]` | segmented success percent                                            | `number`                                                                               | 0                          |               |

### `nzType="line"`

| Property          | Description                                      | Type     | Default |
| ----------------- | ------------------------------------------------ | -------- | ------- |
| `[nzStrokeWidth]` | to set the width of the progress bar, unit: `px` | `number` | `8`     |
| `[nzSteps]`       | the total step count                             | `number` | -       |

### `nzType="circle"`

| Property          | Description                                                                         | Type     | Default | Global Config |
| ----------------- | ----------------------------------------------------------------------------------- | -------- | ------- | ------------- |
| `[nzWidth]`       | to set the canvas width of the circular progress bar, unit: `px`                    | `number` | `132`   |               |
| `[nzStrokeWidth]` | to set the width of the circular progress bar, unit: percentage of the canvas width | `number` | `6`     | ✅            |

### `nzType="dashboard"`

| Property          | Description                                                                          | Type                                     | Default | Global Config |
| ----------------- | ------------------------------------------------------------------------------------ | ---------------------------------------- | ------- | ------------- |
| `[nzWidth]`       | to set the canvas width of the dashboard progress bar, unit: `px`                    | `number`                                 | `132`   |               |
| `[nzStrokeWidth]` | to set the width of the dashboard progress bar, unit: percentage of the canvas width | `number`                                 | `6`     | ✅            |
| `[nzGapDegree]`   | the gap degree of half circle, 0 ~ 360                                               | `number`                                 | `0`     | ✅            |
| `[nzGapPosition]` | the gap position                                                                     | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | ✅            |

---

## Examples

### Mini size circular progress bar

A smaller circular progress bar.

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

### Circular progress bar

A circular progress bar.

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

### Dashboard Layout

Dashboard layout

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

### Dashboard

By setting `nzType="dashboard"`, you can get a dashboard style of progress easily.

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

### Dynamic

A dynamic progress bar is better.

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

### Custom text format

You can custom text format by setting `nzFormat`.

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

### Custom line gradient

A package of `linear-gradient`. It is recommended to only pass two colors.

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

### Mini size progress bar

Appropriate for a narrow area.

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

### Progress bar

A standard progress bar.

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

### Square linecaps

By setting `nzStrokeLinecap='square'`, you can change the linecaps from round to square.

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

### Progress bar with success segment

A standard progress bar.

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

### Progress bar with steps

A progress bar with steps.

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
