---
category: Components
subtitle: 多选框
type: 数据录入
title: Checkbox
cover: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg'
description: 收集用户的多项选择。
---

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## API

### [nz-checkbox]

| 参数                | 说明                                          | 类型                    | 默认值  |
| ------------------- | --------------------------------------------- | ----------------------- | ------- |
| `[nzId]`            | 组件内部 input 的 `id` 值                     | `string`                | -       |
| `[nzName]`          | 组件内部 input 的 `name` 值                   | `string`                | -       |
| `[nzAutoFocus]`     | 自动获取焦点                                  | `boolean`               | `false` |
| `[nzDisabled]`      | 设定 disable 状态                             | `boolean`               | `false` |
| `[ngModel]`         | 指定当前是否选中，可双向绑定                  | `boolean`               | `false` |
| `[nzIndeterminate]` | 设置 indeterminate 状态，只负责样式控制       | `boolean`               | `false` |
| `[nzValue]`         | 仅与 `nz-checkbox-wrapper` 的选中回调配合使用 | `any`                   | -       |
| `(ngModelChange)`   | 选中变化时回调                                | `EventEmitter<boolean>` | -       |

### nz-checkbox-group

| 参数              | 说明                                      | 类型                                         | 默认值  |
| ----------------- | ----------------------------------------- | -------------------------------------------- | ------- |
| `[ngModel]`       | 指定可选项，可双向绑定                    | `string[] \| number[]`                       | `[]`    |
| `[nzName]`        | CheckboxGroup 下所有 input 的 `name` 属性 | `string`                                     | -       |
| `[nzOptions]`     | 指定可选项                                | `string[] \| number[] \| NzCheckboxOption[]` | `[]`    |
| `[nzDisabled]`    | 设定全部 checkbox disable 状态            | `boolean`                                    | `false` |
| `(ngModelChange)` | 选中数据变化时的回调                      | `EventEmitter<string[] \| number[]>`         | -       |

## 方法

### [nz-checkbox]

| 名称      | 描述     |
| --------- | -------- |
| `focus()` | 获取焦点 |
| `blur()`  | 移除焦点 |

## Interfaces

### NzCheckboxOption

```ts
export interface NzCheckboxOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}
```

---

## 代码示例

### 基本用法

简单的 checkbox。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-basic',
  imports: [FormsModule, NzCheckboxModule],
  template: `<label nz-checkbox [(ngModel)]="checked">Checkbox</label>`
})
export class NzDemoCheckboxBasicComponent {
  checked = true;
}
```

### 全选

在实现全选效果时，你可能会用到 `nzIndeterminate` 属性。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'nz-demo-checkbox-check-all',
  imports: [FormsModule, NzCheckboxModule, NzDividerModule],
  template: `
    <label
      nz-checkbox
      [(ngModel)]="allChecked"
      (ngModelChange)="updateAllChecked()"
      [nzIndeterminate]="value.length > 0 && value.length !== options.length"
    >
      Check all
    </label>

    <nz-divider />

    <nz-checkbox-group [nzOptions]="options" [(ngModel)]="value" (ngModelChange)="updateSingleChecked()" />
  `
})
export class NzDemoCheckboxCheckAllComponent {
  isAllCheckedFirstChange = true;
  allChecked = false;
  value: Array<string | number> = ['Apple', 'Orange'];
  options: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];

  updateAllChecked(): void {
    if (!this.isAllCheckedFirstChange) {
      this.value = this.allChecked ? this.options.map(item => item.value) : [];
    }
    this.isAllCheckedFirstChange = false;
  }

  updateSingleChecked(): void {
    this.allChecked = this.value.length === this.options.length;
  }
}
```

### 受控的 Checkbox

联动 checkbox。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-controller',
  imports: [FormsModule, NzButtonModule, NzCheckboxModule],
  template: `
    <label nz-checkbox [(ngModel)]="isCheckedButton" [nzDisabled]="isDisabledButton">
      {{ isCheckedButton ? 'Checked' : 'Unchecked' }} - {{ isDisabledButton ? 'Disabled' : 'Enabled' }}
    </label>
    <br />
    <br />
    <button nz-button nzType="primary" (click)="checkButton()" nzSize="small">
      {{ !isCheckedButton ? 'Checked' : 'Unchecked' }}
    </button>
    <button nz-button nzType="primary" (click)="disableButton()" nzSize="small">
      {{ isDisabledButton ? 'Enabled' : 'Disabled' }}
    </button>
  `,
  styles: `
    button {
      margin-right: 8px;
    }
  `
})
export class NzDemoCheckboxControllerComponent {
  isCheckedButton = true;
  isDisabledButton = false;

  checkButton(): void {
    this.isCheckedButton = !this.isCheckedButton;
  }

  disableButton(): void {
    this.isDisabledButton = !this.isDisabledButton;
  }
}
```

### 不可用

checkbox 不可用。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-disabled',
  imports: [FormsModule, NzCheckboxModule],
  template: `
    <label nz-checkbox nzDisabled [ngModel]="false"></label>
    <br />
    <label nz-checkbox nzDisabled [ngModel]="true"></label>
  `
})
export class NzDemoCheckboxDisabledComponent {}
```

### Checkbox 组

方便的从数组生成 Checkbox 组。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'nz-demo-checkbox-group',
  imports: [FormsModule, NzCheckboxModule],
  template: `
    <nz-checkbox-group [nzOptions]="options1" [(ngModel)]="value" (ngModelChange)="log($event)" />
    <br />
    <br />
    <nz-checkbox-group [nzOptions]="options2" [(ngModel)]="value" (ngModelChange)="log($event)" />
    <br />
    <br />
    <nz-checkbox-group nzDisabled [nzOptions]="options3" [(ngModel)]="value" (ngModelChange)="log($event)" />
  `
})
export class NzDemoCheckboxGroupComponent {
  options1: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  options2: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true }
  ];
  options3: NzCheckboxOption[] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];

  value = ['Apple'];

  log(value: string[]): void {
    console.log(value);
  }
}
```

### 布局

`nz-checkbox-group` 内嵌 `nz-checkbox` 并与 Grid 组件一起使用，可以实现灵活的布局。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-checkbox-layout',
  imports: [FormsModule, NzCheckboxModule, NzGridModule],
  template: `
    <nz-checkbox-group [(ngModel)]="value" [style.width.%]="100" (ngModelChange)="log($event)">
      <nz-row>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="A">A</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="B">B</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="C">C</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="D">D</label>
        </nz-col>
        <nz-col nzSpan="8">
          <label nz-checkbox nzValue="E">E</label>
        </nz-col>
      </nz-row>
    </nz-checkbox-group>
  `
})
export class NzDemoCheckboxLayoutComponent {
  value = ['A'];

  log(value: string[]): void {
    console.log(value);
  }
}
```
