---
category: Components
type: Navigation
cols: 1
title: Steps
cover: 'https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg'
description: A navigation bar that guides users through the steps of a task.
---

## When To Use

When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.

## API

```html
<nz-steps>
  <nz-step nzTitle="first step"></nz-step>
  <nz-step nzTitle="second step"></nz-step>
  <nz-step nzTitle="third step"></nz-step>
</nz-steps>
```

### nz-steps

The whole of the step bar.

| Property             | Description                                                                                                         | Type                                                                                      | Default        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------- |
| `[nzType]`           | type of steps, can be set to one of the following values: `default`, `navigation`                                   | `'default' \| 'navigation'`                                                               | `'default'`    |
| `[nzCurrent]`        | To set the current step, counting from 0. You can overwrite this state by using `nzStatus` of `nz-step`             | `number`                                                                                  | `0`            |
| `[nzDirection]`      | To specify the direction of the step bar, `horizontal` and `vertical` are currently supported                       | `'vertical' \| 'horizontal'`                                                              | `'horizontal'` |
| `[nzLabelPlacement]` | Support vertical title and description                                                                              | `'vertical' \| 'horizontal'`                                                              | `'horizontal'` |
| `[nzProgressDot]`    | Steps with progress dot style, customize the progress dot by setting it with TemplateRef                            | `boolean \| TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>` | `false`        |
| `[nzSize]`           | To specify the size of the step bar, `default` and `small` are currently supported                                  | `'small' \| 'default'`                                                                    | `'default'`    |
| `[nzStatus]`         | To specify the status of current step, can be set to one of the following values: `wait` `process` `finish` `error` | `'wait' \| 'process' \| 'finish' \| 'error'`                                              | `'process'`    |
| `[nzStartIndex]`     | To specify the starting number                                                                                      | `number`                                                                                  | `0`            |
| `(nzIndexChange)`    | Trigger event when step click                                                                                       | `number`                                                                                  | -              |

### nz-step

A single step in the step bar.

| Property          | Description                                                                                                                                                | Type                                                                                    | Default  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------- |
| `[nzDescription]` | description of the step, optional property                                                                                                                 | `string \| TemplateRef<void>`                                                           | -        |
| `[nzIcon]`        | icon of the step, optional property                                                                                                                        | `string \| string[] \| Set<string> \| { [klass: string]: any; }` \| `TemplateRef<void>` | -        |
| `[nzStatus]`      | to specify the status. It will be automatically set by `nzCurrent` of `nz-steps` if not configured. Optional values are: `wait` `process` `finish` `error` | `'wait' \| 'process' \| 'finish' \| 'error'`                                            | `'wait'` |
| `[nzTitle]`       | title of the step                                                                                                                                          | `string \| TemplateRef<void>`                                                           | -        |
| `[nzSubtitle]`    | subTitle of the step                                                                                                                                       | `string \| TemplateRef<void>`                                                           | -        |
| `[nzDisabled]`    | disable click                                                                                                                                              | `boolean`                                                                               | `false`  |
| `[nzPercentage]`  | Progress percentage of the step in `process` status (only works on basic Steps)                                                                            | `number`                                                                                | -        |

---

## Examples

### Clickable

subscribe `(nzIndexChange)` makes Steps clickable.

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

### Customized Dot Style

You can customize the display for Steps with progress dot style.

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

### Error status

By using `nzStatus` of `nz-steps`, you can specify the state for current step.

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

### With icon

You can use your own custom icons by setting the property `nzIcon` for `nz-step`. Old API is still compatible but we strongly suggest the new API.

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

### Navigation Steps

Navigation steps.

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

### Dot Style

Steps with progress dot style.

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

### Steps with progress

Asynchronous steps with circular progress bar.

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

### Basic

The most basic step bar.

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

### Mini version

By setting like this: `<nz-steps nzSize="small">`, you can get a mini version.

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

### Starting Index

By setting `nzStartIndex` to change starting index of a step component. Be sure to add an offset to `nzCurrent` as well.

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

### Switch Step

Cooperate with the content and buttons, to represent the progress of a process.

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

### Vertical mini version

A simple mini version step bar in the vertical direction.

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

### Vertical

A simple step bar in the vertical direction.

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
