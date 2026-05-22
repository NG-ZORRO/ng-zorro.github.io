---
category: Components
subtitle: Cron Form
type: Data Entry
title: Cron Expression
cols: 1
experimental: true
description: Display and edit cron expression.
---

## When To Use

When you want to use cron expression in Angular.

## API

Install `cron-parser` in your project first:

```sh
npm install cron-parser@^5.5.0
```

### nz-cron-expression

| Parameter             | Description                          | Type                          | Default   |
| --------------------- | ------------------------------------ | ----------------------------- | --------- |
| `[nzType]`            | Cron rule type                       | `'linux'｜'spring'`           | `linux`   |
| `[nzDisabled]`        | Disable                              | `boolean`                     | `false`   |
| `[nzBorderless]`      | Whether to hide the border           | `boolean`                     | `false`   |
| `[nzSize]`            | The size of the input box.           | `'large'｜'small'｜'default'` | `default` |
| `[nzCollapseDisable]` | Hide collapse                        | `boolean`                     | `false`   |
| `[nzExtra]`           | Render the content on the right      | `TemplateRef<void>`           | -         |
| `[nzSemantic]`        | Custom rendering next execution time | `TemplateRef<void>`           | -         |

## Note

### Supported format

```text
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7, 1L - 7L) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31, L)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, optional)
```

---

## Examples

### Basic

The simplest usage.

```typescript
import { Component } from '@angular/core';

import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';

@Component({
  selector: 'nz-demo-cron-expression-basic',
  imports: [NzCronExpressionModule],
  template: `
    <nz-cron-expression />
    <br />
    <br />
    <nz-cron-expression nzDisabled />
  `
})
export class NzDemoCronExpressionBasicComponent {}
```

### Borderless

Borderless.

```typescript
import { Component } from '@angular/core';

import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';

@Component({
  selector: 'nz-demo-cron-expression-borderless',
  imports: [NzCronExpressionModule],
  template: `<nz-cron-expression nzBorderless />`
})
export class NzDemoCronExpressionBorderlessComponent {}
```

### Hide Collapse

Use `nzCollapseDisable` to hide collapse panel.

```typescript
import { Component } from '@angular/core';

import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';

@Component({
  selector: 'nz-demo-cron-expression-collapse',
  imports: [NzCronExpressionModule],
  template: `<nz-cron-expression [nzCollapseDisable]="true" />`
})
export class NzDemoCronExpressionCollapseComponent {}
```

### Form

`<nz-cron-expression formControlName="cron" />`

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-cron-expression-form',
  imports: [ReactiveFormsModule, NzButtonModule, NzCronExpressionModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form nzLayout="vertical" [formGroup]="form" (ngSubmit)="submit()">
      <nz-form-item>
        <nz-form-label [nzSpan]="6">name</nz-form-label>
        <nz-form-control [nzSpan]="14">
          <input nz-input formControlName="username" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="6">nz-cron-linux</nz-form-label>
        <nz-form-control [nzSpan]="14">
          <nz-cron-expression formControlName="cronLinux" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="6">nz-cron-spring</nz-form-label>
        <nz-form-control [nzSpan]="14">
          <nz-cron-expression formControlName="cronSpring" nzType="spring" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button nz-button nzType="primary" [disabled]="!form.valid">submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NzDemoCronExpressionFormComponent {
  private fb = inject(FormBuilder);
  form: FormGroup<{
    username: FormControl<string | null>;
    cronLinux: FormControl<string | null>;
    cronSpring: FormControl<string | null>;
  }> = this.fb.group({
    username: ['cron-expression', [Validators.required]],
    cronLinux: ['* 1 * * *', [Validators.required]],
    cronSpring: ['0 * 1 * * *', [Validators.required]]
  });

  submit(): void {
    console.log(this.form.value);
  }
}
```

### Custom rendering cron time

Custom rendering next execution time.

```typescript
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CronExpressionParser } from 'cron-parser';

import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';

@Component({
  selector: 'nz-demo-cron-expression-semantic',
  imports: [FormsModule, NzCronExpressionModule, DatePipe],
  template: `
    <nz-cron-expression [nzSemantic]="semanticTemplate" [ngModel]="value" (ngModelChange)="getValue($event)" />
    <ng-template #semanticTemplate>Next Time: {{ semantic | date: 'yyyy-MM-dd HH:mm:ss' }}</ng-template>
  `
})
export class NzDemoCronExpressionSemanticComponent {
  value: string = '10 * * * *';
  semantic?: Date;

  getValue(value: string): void {
    try {
      const interval = CronExpressionParser.parse(value);
      this.semantic = interval.next().toDate();
    } catch {
      return;
    }
  }
}
```

### Extra Node

Use nzExtra to specify the content on the right.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-demo-cron-expression-shortcuts',
  imports: [FormsModule, NzButtonModule, NzCronExpressionModule, NzDropdownModule, NzIconModule],
  template: `
    <nz-cron-expression [nzExtra]="shortcuts" [(ngModel)]="value" (ngModelChange)="getValue($event)" />
    <ng-template #shortcuts>
      <button nz-button nz-dropdown [nzDropdownMenu]="menu">
        Shortcuts
        <nz-icon nzType="down" />
      </button>
      <nz-dropdown-menu #menu="nzDropdownMenu">
        <ul nz-menu nzSelectable>
          @for (item of options; track item.value) {
            <li nz-menu-item [value]="item.value" (click)="setValue(item.value)">{{ item.label }}</li>
          }
        </ul>
      </nz-dropdown-menu>
    </ng-template>
    <p>cron: {{ cron }} </p>
  `
})
export class NzDemoCronExpressionShortcutsComponent {
  value: string = '1 1 * * *';
  cron: string = '';
  options = [
    {
      label: 'Every hour',
      value: '0 0-23/1 * * *'
    },
    {
      label: 'Every day at eight',
      value: '0 8 * * *'
    },
    {
      label: 'Every Friday',
      value: '0 0 * * 5'
    }
  ];

  setValue(value: string): void {
    this.value = value;
  }

  getValue(value: string): void {
    this.cron = value;
  }
}
```

### Three sizes

There are three sizes of an CronExpression box: `large` (40px)、`default` (32px) and `small` (24px).

```typescript
import { Component } from '@angular/core';

import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';

@Component({
  selector: 'nz-demo-cron-expression-size',
  imports: [NzCronExpressionModule],
  template: `
    <div class="example-cron-expression">
      <nz-cron-expression nzSize="small" />
      <nz-cron-expression nzSize="default" />
      <nz-cron-expression nzSize="large" />
    </div>
  `,
  styles: `
    .example-cron-expression nz-cron-expression {
      margin: 0 8px 8px 0;
    }
  `
})
export class NzDemoCronExpressionSizeComponent {}
```

### Two rule types

There are two rule types of an CronExpression box: `nzType="linux"` (five-segment) and`nzType="spring"` (six-segment).

```typescript
import { Component } from '@angular/core';

import { NzCronExpressionModule } from 'ng-zorro-antd/cron-expression';

@Component({
  selector: 'nz-demo-cron-expression-type',
  imports: [NzCronExpressionModule],
  template: `
    <div class="example-cron-expression">
      <nz-cron-expression nzType="linux" />
      <nz-cron-expression nzType="spring" />
    </div>
  `,
  styles: `
    .example-cron-expression nz-cron-expression {
      margin: 0 8px 8px 0;
    }
  `
})
export class NzDemoCronExpressionTypeComponent {}
```
