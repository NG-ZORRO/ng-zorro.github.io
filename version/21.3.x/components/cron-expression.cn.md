---
category: Components
subtitle: Cron 表单
type: 数据录入
title: Cron Expression
cols: 1
experimental: true
description: 显示和编辑 cron 表达式。
---

## 何时使用

需要在表单中使用 cron 格式验证时使用。

## API

别忘记先安装 cron-parser：

```sh
npm install cron-parser@^5.5.0
```

### nz-cron-expression

| 参数                  | 说明                   | 类型                          | 默认值    |
| --------------------- | ---------------------- | ----------------------------- | --------- |
| `[nzType]`            | cron 规则类型          | `'linux'｜'spring'`           | `linux`   |
| `[nzSize]`            | 设置输入框大小         | `'large'｜'small'｜'default'` | `default` |
| `[nzDisabled]`        | 禁用                   | `boolean`                     | `false`   |
| `[nzBorderless]`      | 是否隐藏边框           | `boolean`                     | `false`   |
| `[nzCollapseDisable]` | 隐藏折叠面板           | `boolean`                     | `false`   |
| `[nzExtra]`           | 自定义渲染右侧的内容   | `TemplateRef<void>`           | -         |
| `[nzSemantic]`        | 自定义渲染下次执行时间 | `TemplateRef<void>`           | -         |

## 注意

### 支持格式

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

## 代码示例

### 基本

最简单的用法。

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

### 无边框

没有边框。

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

### 隐藏折叠面板

可以通过 `nzCollapseDisable` 隐藏折叠面板。

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

### 结合表单使用

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

### 自定义渲染 cron 时间

自定义渲染下次执行时间

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

### 额外节点

可以通过 `nzExtra` 来指定右侧的内容。

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

### 三种大小

输入框支持 `large` (40px)、`default` (32px) 和 `small` (24px) 三种尺寸。

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

### 两种规则类型

输入框支持五段式和六段式两种规则类型，分别为: `nzType="linux"`、`nzType="spring"`。

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
