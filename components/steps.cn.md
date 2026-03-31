---
category: Components
subtitle: 步骤条
type: 导航
cols: 1
title: Steps
cover: 'https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg'
description: 引导用户按照流程完成任务的导航条。
---

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## API

```html
<nz-steps>
  <nz-step nzTitle="第一步"></nz-step>
  <nz-step nzTitle="第二步"></nz-step>
  <nz-step nzTitle="第三步"></nz-step>
</nz-steps>
```

### nz-steps

整体步骤条。

| 参数                 | 说明                                                                                 | 类型                                                                                      | 默认值         |
| -------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------- |
| `[nzType]`           | 步骤条类型，有 `default` 和 `navigation` 两种                                        | `'default' \| 'navigation'`                                                               | `'default'`    |
| `[nzCurrent]`        | 指定当前步骤，从 0 开始记数。在子 `nz-step` 元素中，可以通过 `nzStatus` 属性覆盖状态 | `number`                                                                                  | `0`            |
| `[nzDirection]`      | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向             | `'vertical' \| 'horizontal'`                                                              | `'horizontal'` |
| `[nzLabelPlacement]` | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方                     | `'vertical' \| 'horizontal'`                                                              | `'horizontal'` |
| `[nzProgressDot]`    | 点状步骤条，可以设置为一个 TemplateRef                                               | `boolean \| TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>` | `false`        |
| `[nzSize]`           | 指定大小，目前支持普通（`default`）和迷你（`small`）                                 | `'small' \| 'default'`                                                                    | `'default'`    |
| `[nzStatus]`         | 指定当前步骤的状态，可选 `wait` `process` `finish` `error`                           | `'wait' \| 'process' \| 'finish' \| 'error'`                                              | `'process'`    |
| `[nzStartIndex]`     | 指定起始位置的序号                                                                   | `number`                                                                                  | `0`            |
| `(nzIndexChange)`    | 点击单个步骤时触发的事件                                                             | `number`                                                                                  | -              |

### nz-step

步骤条内的每一个步骤。

| 参数              | 说明                                                                                                                 | 类型                                                                                    | 默认值   |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------- |
| `[nzDescription]` | 步骤的详情描述，可选                                                                                                 | `string \| TemplateRef<void>`                                                           | -        |
| `[nzIcon]`        | 步骤图标的类型，可选                                                                                                 | `string \| string[] \| Set<string> \| { [klass: string]: any; }` \| `TemplateRef<void>` | -        |
| `[nzStatus]`      | 指定状态。当不配置该属性时，会使用 `nz-steps` 的 `nzCurrent` 来自动指定状态。可选：`wait` `process` `finish` `error` | `'wait' \| 'process' \| 'finish' \| 'error'`                                            | `'wait'` |
| `[nzTitle]`       | 标题                                                                                                                 | `string \| TemplateRef<void>`                                                           | -        |
| `[nzSubtitle]`    | 子标题                                                                                                               | `string \| TemplateRef<void>`                                                           | -        |
| `[nzDisabled]`    | 禁用点击                                                                                                             | `boolean`                                                                               | `false`  |
| `[nzPercentage]`  | 当前状态为 `process` 的步骤所显示的进度条进度（只对基本类型的 `nz-steps` 生效）                                      | `number`                                                                                | -        |

---

## 代码示例

### 可点击

订阅 `(nzIndexChange)` 后，Steps 变为可点击状态。

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-clickable',
  imports: [NzDividerModule, NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Finished" [nzDisabled]="disable" nzDescription="This is a description." />
      <nz-step nzTitle="In Progress" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
    <nz-divider />
    <nz-steps nzDirection="vertical" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Finished" nzDescription="This is a description." />
      <nz-step nzTitle="In Progress" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
  `
})
export class NzDemoStepsClickableComponent {
  index = 0;
  disable = false;
  onIndexChange(index: number): void {
    this.index = index;
  }
}
```

### 自定义点状步骤条

为点状步骤条增加自定义展示。

```typescript
import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-customized-progress-dot',
  imports: [NgTemplateOutlet, NzStepsModule, NzPopoverModule],
  template: `
    <nz-steps [nzCurrent]="1" [nzProgressDot]="progressTemplate">
      <nz-step nzTitle="Finished" nzDescription="You can hover on the dot." />
      <nz-step nzTitle="In Progress" nzDescription="You can hover on the dot." />
      <nz-step nzTitle="Waiting" nzDescription="You can hover on the dot." />
      <nz-step nzTitle="Waiting" nzDescription="You can hover on the dot." />
    </nz-steps>
    <ng-template #progressTemplate let-dot let-status="status" let-index="index">
      <span nz-popover nzPopoverContent="steps {{ index }} status: {{ status }}" style="margin-left: -100%;">
        <ng-template [ngTemplateOutlet]="dot" />
      </span>
    </ng-template>
  `
})
export class NzDemoStepsCustomizedProgressDotComponent {}
```

### 步骤运行错误

使用 `nz-steps` 的 `nzStatus` 属性来指定当前步骤的状态。

```typescript
import { Component } from '@angular/core';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-error',
  imports: [NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="1" nzStatus="error">
      <nz-step nzTitle="Finished" nzDescription="This is a description." />
      <nz-step nzTitle="In Progress" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
  `
})
export class NzDemoStepsErrorComponent {}
```

### 带图标的步骤条

通过设置 `nz-step` 的 `nzIcon` 属性，可以启用自定义图标。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-icon',
  imports: [NzIconModule, NzStepsModule],
  template: `
    <nz-steps>
      <nz-step nzTitle="Login" nzStatus="finish" nzIcon="user" />
      <nz-step nzTitle="Verification" nzStatus="finish" nzIcon="solution" />
      <nz-step nzTitle="Pay" nzStatus="process" nzIcon="loading" />
      <nz-step nzTitle="Done" nzStatus="wait" [nzIcon]="iconTemplate" />
      <ng-template #iconTemplate><nz-icon nzType="smile" /></ng-template>
    </nz-steps>
  `
})
export class NzDemoStepsIconComponent {}
```

### 导航步骤

导航类型的步骤条。

```typescript
import { Component } from '@angular/core';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-nav',
  imports: [NzStepsModule],
  template: `
    <nz-steps nzType="navigation" nzSize="small" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Step 1" nzSubtitle="00:00:05" nzStatus="finish" nzDescription="This is a description." />
      <nz-step nzTitle="Step 2" nzSubtitle="00:01:02" nzStatus="process" nzDescription="This is a description." />
      <nz-step
        nzTitle="Step 3"
        nzSubtitle="waiting for long long time"
        nzStatus="wait"
        nzDescription="This is a description."
      />
    </nz-steps>
    <nz-steps nzType="navigation" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Step 1" nzStatus="finish" />
      <nz-step nzTitle="Step 2" nzStatus="process" />
      <nz-step nzTitle="Step 3" nzStatus="wait" />
      <nz-step nzTitle="Step 4" nzStatus="wait" />
    </nz-steps>
    <nz-steps nzType="navigation" nzSize="small" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="finish 1" nzStatus="finish" />
      <nz-step nzTitle="finish 2" nzStatus="finish" />
      <nz-step nzTitle="current process" nzStatus="process" />
      <nz-step nzTitle="wait" nzStatus="wait" nzDisabled />
    </nz-steps>
  `,
  styles: `
    nz-steps {
      margin-bottom: 60px;
      box-shadow: rgb(232, 232, 232) 0 -1px 0 0 inset;
    }
  `
})
export class NzDemoStepsNavComponent {
  index = 0;

  onIndexChange(event: number): void {
    this.index = event;
  }
}
```

### 点状步骤条

包含步骤点的进度条。

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-progress-dot',
  imports: [NzDividerModule, NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="1" nzProgressDot>
      <nz-step nzTitle="Finished" nzDescription="This is a description." />
      <nz-step nzTitle="In Progress" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
    <nz-divider />
    <nz-steps [nzCurrent]="1" nzProgressDot nzDirection="vertical">
      <nz-step nzTitle="Finished" nzDescription="This is a description. This is a description." />
      <nz-step nzTitle="Finished" nzDescription="This is a description. This is a description." />
      <nz-step nzTitle="In Progress" nzDescription="This is a description. This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
  `
})
export class NzDemoStepsProgressDotComponent {}
```

### 带有进度的步骤

异步执行的步骤带有圆形进度条。

```typescript
import { Component } from '@angular/core';
import { merge, Observable, timer } from 'rxjs';
import { delay, finalize, map, scan } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';

interface SyncStep {
  id: number;
  title: string;
  description: string;
  async: false;
  percentage: null;
}

interface AsyncStep {
  id: number;
  title: string;
  description: string;
  async: true;
  percentage: number;
}

type Step = SyncStep | AsyncStep;

function mockAsyncStep(): Observable<number> {
  const subStep1 = timer(600).pipe(map(() => 25));
  const subStep2 = subStep1.pipe(delay(600));
  const subStep3 = subStep2.pipe(delay(600));
  const subStep4 = subStep3.pipe(delay(600));
  return merge(subStep1, subStep2, subStep3, subStep4).pipe(scan((a, b) => a + b));
}

@Component({
  selector: 'nz-demo-steps-progress',
  imports: [NzButtonModule, NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="current">
      @for (step of this.steps; track step.id) {
        <nz-step
          [nzTitle]="step.title"
          [nzDescription]="step.description"
          [nzPercentage]="step.async ? step.percentage : null"
        />
      }
    </nz-steps>
    <div class="steps-action">
      @if (current > 0) {
        <button nz-button nzType="default" (click)="pre()">
          <span>Previous</span>
        </button>
      }
      @if (current < 2) {
        <button nz-button nzType="default" (click)="next()" [nzLoading]="processing">
          <span>Next</span>
        </button>
      }
      @if (current === 2) {
        <button nz-button nzType="primary" (click)="done()" [nzLoading]="processing">
          <span>Done</span>
        </button>
      }
    </div>
  `,
  styles: `
    .steps-action {
      margin-top: 36px;
    }

    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoStepsProgressComponent {
  steps: Step[] = [
    {
      id: 1,
      title: `Step 1`,
      description: `This step is synchronous.`,
      async: false,
      percentage: null
    },
    {
      id: 2,
      title: `Step 2`,
      description: `This step is asynchronous.`,
      async: true,
      percentage: 0
    },
    {
      id: 3,
      title: `Step 3`,
      description: `This step is asynchronous.`,
      async: true,
      percentage: 0
    }
  ];
  current = 0;
  processing = false;

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.loadingAndStep();
  }

  done(): void {
    this.loadingAndStep();
    console.log('done');
  }

  loadingAndStep(): void {
    if (this.current < this.steps.length) {
      const step = this.steps[this.current];
      if (step.async) {
        this.processing = true;
        mockAsyncStep()
          .pipe(
            finalize(() => {
              step.percentage = 0;
              this.processing = false;
              this.current += 1;
            })
          )
          .subscribe(p => {
            step.percentage = p;
          });
      } else {
        this.current += 1;
      }
    }
  }
}
```

### 基本用法

简单的步骤条。

```typescript
import { Component } from '@angular/core';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-simple',
  imports: [NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="1">
      <nz-step nzTitle="Finished" nzDescription="This is a description." />
      <nz-step nzTitle="In Progress" nzSubtitle="Left 00:00:08" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
  `
})
export class NzDemoStepsSimpleComponent {}
```

### 迷你版

迷你版的步骤条，通过设置 `<nz-steps nzSize="small">` 启用.

```typescript
import { Component } from '@angular/core';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-small-size',
  imports: [NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="current" nzSize="small">
      <nz-step nzTitle="Finished" />
      <nz-step nzTitle="In Progress" />
      <nz-step nzTitle="Waiting" />
    </nz-steps>
  `
})
export class NzDemoStepsSmallSizeComponent {
  current = 1;
}
```

### 起始序号

通过 `nzStartIndex` 来设置步骤条的起始序号. 请注意 `nzCurrent` 也应该有对应的偏移.

```typescript
import { Component } from '@angular/core';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-start-index',
  imports: [NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="current" [nzStartIndex]="3" nzSize="small">
      <nz-step nzTitle="Finished" />
      <nz-step nzTitle="In Progress" />
      <nz-step nzTitle="Waiting" />
    </nz-steps>
  `
})
export class NzDemoStepsStartIndexComponent {
  current = 3;
}
```

### 步骤切换

通常配合内容及按钮使用，表示一个流程的处理进度。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-step-next',
  imports: [NzButtonModule, NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="current">
      <nz-step nzTitle="Finished" />
      <nz-step nzTitle="In Progress" />
      <nz-step nzTitle="Waiting" />
    </nz-steps>

    <div class="steps-content">{{ index }}</div>
    <div class="steps-action">
      @if (current > 0) {
        <button nz-button nzType="default" (click)="pre()">
          <span>Previous</span>
        </button>
      }
      @if (current < 2) {
        <button nz-button nzType="default" (click)="next()">
          <span>Next</span>
        </button>
      }
      @if (current === 2) {
        <button nz-button nzType="primary" (click)="done()">
          <span>Done</span>
        </button>
      }
    </div>
  `,
  styles: `
    .steps-content {
      margin-top: 16px;
      border: 1px dashed #e9e9e9;
      border-radius: 6px;
      background-color: #fafafa;
      min-height: 200px;
      text-align: center;
      padding-top: 80px;
    }

    .steps-action {
      margin-top: 24px;
    }

    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoStepsStepNextComponent {
  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
}
```

### 竖直方向的小型步骤条

简单的竖直方向的小型步骤条。

```typescript
import { Component } from '@angular/core';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-vertical-small',
  imports: [NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="1" nzDirection="vertical" nzSize="small">
      <nz-step nzTitle="Finished" nzDescription="This is a description." />
      <nz-step nzTitle="In Progress" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
  `
})
export class NzDemoStepsVerticalSmallComponent {}
```

### 竖直方向的步骤条

简单的竖直方向的步骤条。

```typescript
import { Component } from '@angular/core';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'nz-demo-steps-vertical',
  imports: [NzStepsModule],
  template: `
    <nz-steps [nzCurrent]="1" nzDirection="vertical">
      <nz-step nzTitle="Finished" nzDescription="This is a description." />
      <nz-step nzTitle="In Progress" nzDescription="This is a description." />
      <nz-step nzTitle="Waiting" nzDescription="This is a description." />
    </nz-steps>
  `
})
export class NzDemoStepsVerticalComponent {}
```
