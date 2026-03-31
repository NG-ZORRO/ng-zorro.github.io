---
category: Components
subtitle: 数字输入框
type: 数据录入
title: InputNumber
cover: 'https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg'
tag: 19.0.0
description: 通过鼠标或键盘，输入范围内的数值。
---

## 何时使用

当需要获取标准数值时。

## API

### nz-input-number

| 参数                | 说明                                                           | 类型                                                     | 默认值                                                                                                                              | 版本   |
| ------------------- | -------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `[ngModel]`         | 当前值，可双向绑定                                             | `number`                                                 | -                                                                                                                                   |
| `[nzId]`            | 输入框的 ID                                                    | `string`                                                 | -                                                                                                                                   |
| `[nzPlaceHolder]`   | 占位符                                                         | `string`                                                 | -                                                                                                                                   |
| `[nzAutoFocus]`     | 自动获取焦点                                                   | `boolean`                                                | `false`                                                                                                                             |
| `[nzVariant]`       | 形态变体                                                       | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'` | `'outlined'`                                                                                                                        | 20.0.0 |
| `[nzControls]`      | 是否显示增减按钮                                               | `boolean`                                                | `true`                                                                                                                              |
| `[nzDisabled]`      | 是否禁用                                                       | `boolean`                                                | `false`                                                                                                                             |
| `[nzFormatter]`     | 指定输入框展示值的格式                                         | `(value: number) => string`                              | -                                                                                                                                   |
| `[nzKeyboard]`      | 是否启用键盘快捷行为                                           | `boolean`                                                | `true`                                                                                                                              |
| `[nzChangeOnWheel]` | 是否启用鼠标滚轮控制                                           | `boolean`                                                | `true`                                                                                                                              | 21.0.0 |
| `[nzMax]`           | 最大值                                                         | `number`                                                 | [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) |
| `[nzMin]`           | 最小值                                                         | `number`                                                 | [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) |
| `[nzParser]`        | 指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用 | `(value: string) => number`                              | -                                                                                                                                   |
| `[nzPrecision]`     | 数值精度，配置 `formatter` 时会以 `formatter` 为准             | `number`                                                 | -                                                                                                                                   |
| `[nzReadOnly]`      | 是否只读                                                       | `boolean`                                                | `false`                                                                                                                             |
| `[nzStatus]`        | 状态，可选 `error` `warning`                                   | `'error' \| 'warning'`                                   | -                                                                                                                                   |
| `[nzSize]`          | 输入框大小，可选 `large` `default` `small`                     | `'large' \| 'small' \| 'default'`                        | `'default'`                                                                                                                         |
| `[nzStep]`          | 每次改变步数，可以是小数                                       | `number`                                                 | `1`                                                                                                                                 |
| `[nzAddonBefore]`   | 带标签的 input-number，设置前置标签                            | `string`                                                 | -                                                                                                                                   |
| `[nzAddonAfter]`    | 带标签的 input-number，设置后置标签                            | `string`                                                 | -                                                                                                                                   |
| `[nzPrefix]`        | 带有前缀图标的 input-number                                    | `string`                                                 | -                                                                                                                                   |
| `[nzSuffix]`        | 带有后缀图标的 input-number                                    | `string`                                                 | -                                                                                                                                   |
| `(nzOnStep)`        | 点击上下箭头的回调                                             | `EventEmitter<NzInputNumberStepEvent>`                   | -                                                                                                                                   |
| `(nzFocus)`         | focus 时回调                                                   | `OutputRef<void>`                                        | -                                                                                                                                   |
| `(nzBlur)`          | blur 时回调                                                    | `OutputRef<void>`                                        | -                                                                                                                                   |
| `(ngModelChange)`   | 值变化时的回调函数                                             | `EventEmitter<number>`                                   | -                                                                                                                                   |

#### NzInputNumberStepEvent

```ts
export type NzInputNumberStepEmitter = 'wheel' | 'handler' | 'keyboard';
export interface NzInputNumberStepEvent {
  value: number;
  offset: number;
  type: 'up' | 'down';
  emitter: NzInputNumberStepEmitter;
}
```

#### 方法

通过 `ViewChild` 等方法获得实例后调用

| 名称           | 描述     | 参数                                                                         |
| -------------- | -------- | ---------------------------------------------------------------------------- |
| focus(option?) | 获取焦点 | `(option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' })` |
| blur()         | 移除焦点 | -                                                                            |

## FAQ

### 为何受控模式下，`value` 可以超出 `min` 和 `max` 范围？

在受控模式下，开发者可能自行存储相关数据。如果组件将数据约束回范围内，会导致展示数据与实际存储数据不一致的情况。这使得一些如表单场景存在潜在的数据问题。

---

## 代码示例

### 前置/后置标签

用于配置一些固定组合。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-input-number-addon',
  imports: [FormsModule, NzSelectModule, NzCascaderModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number nzAddonBefore="+" nzAddonAfter="$" [(ngModel)]="value" />

    <nz-input-number [(ngModel)]="value">
      <span nzInputAddonBefore>+</span>
      <span nzInputAddonAfter>$</span>
    </nz-input-number>

    <nz-input-number [(ngModel)]="value">
      <nz-select nzInputAddonBefore ngModel="add" [style.width.px]="60">
        <nz-option nzLabel="+" nzValue="add" />
        <nz-option nzLabel="-" nzValue="minus" />
      </nz-select>
      <nz-select nzInputAddonAfter ngModel="USD" [style.width.px]="60">
        <nz-option nzValue="USD" nzLabel="$" />
        <nz-option nzValue="EUR" nzLabel="€" />
        <nz-option nzValue="GBP" nzLabel="£" />
        <nz-option nzValue="CNY" nzLabel="¥" />
      </nz-select>
    </nz-input-number>

    <nz-input-number [(ngModel)]="value">
      <nz-icon nzInputAddonAfter nzType="setting" />
    </nz-input-number>

    <nz-input-number [(ngModel)]="value">
      <nz-cascader nzInputAddonBefore [nzOptions]="[]" nzPlaceHolder="cascader" [style.width.px]="150" />
    </nz-input-number>
  `,
  styles: `
    nz-input-number {
      display: block;
      margin-bottom: 8px;
    }
  `
})
export class NzDemoInputNumberAddonComponent {
  value = 100;
}
```

### 基本

数字输入框。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-basic',
  imports: [FormsModule, NzInputNumberModule],
  template: `<nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" />`
})
export class NzDemoInputNumberBasicComponent {
  value = 3;
}
```

### 鼠标滚轮控制

使用 `nzChangeOnWheel` 启用鼠标滚轮控制。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule, NzInputNumberStepEvent } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-change-on-wheel',
  imports: [FormsModule, NzInputNumberModule, NzButtonModule],
  template: `
    <nz-input-number
      nzChangeOnWheel
      [(ngModel)]="value"
      (ngModelChange)="onChange($event)"
      (nzOnStep)="onStep($event)"
    />
  `
})
export class NzDemoInputNumberChangeOnWheelComponent {
  value = 3;

  onChange(value: number): void {
    console.log(value);
  }

  onStep(event: NzInputNumberStepEvent): void {
    console.log(event);
  }
}
```

### 小数

和原生的数字输入框一样，value 的精度由 `nzStep` 的小数位数决定。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-digit',
  imports: [FormsModule, NzInputNumberModule],
  template: `<nz-input-number [(ngModel)]="value" nzMin="0" nzMax="10" nzStep="0.1" nzPlaceHolder="Digital" />`
})
export class NzDemoInputNumberDigitComponent {
  value = 0.1;
}
```

### 不可用

点击按钮切换可用状态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-disabled',
  imports: [FormsModule, NzButtonModule, NzInputNumberModule],
  template: `
    <nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" [nzDisabled]="isDisabled" />
    <br />
    <br />
    <button nz-button nzType="primary" (click)="isDisabled = !isDisabled">Toggle Disabled</button>
  `
})
export class NzDemoInputNumberDisabledComponent {
  value = 3;
  isDisabled = false;
}
```

### Focus 额外配置属性

Focus 提供额外配置属性

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-focus',
  imports: [FormsModule, NzInputNumberModule, NzButtonModule],
  template: `
    <button nz-button (click)="inputNumber.focus({ cursor: 'start' })">Focus at first</button>
    <button nz-button (click)="inputNumber.focus({ cursor: 'end' })">Focus at last</button>
    <button nz-button (click)="inputNumber.focus({ cursor: 'all' })">Focus to select all</button>
    <button nz-button (click)="inputNumber.focus({ preventScroll: true })"> Focus prevent scroll </button>

    <br />
    <br />

    <nz-input-number #inputNumber [(ngModel)]="value" [style.width.%]="100" />
  `
})
export class NzDemoInputNumberFocusComponent {
  value = 9999;
}
```

### 格式化展示

通过 `nzFormatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `nzParser` 一起使用。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-formatter',
  imports: [FormsModule, NzInputNumberModule],
  template: `
    <nz-input-number [(ngModel)]="dollarValue" [nzFormatter]="formatterDollar" [nzParser]="parserDollar" />
    <nz-input-number
      [(ngModel)]="percentValue"
      nzMin="1"
      nzMax="100"
      [nzFormatter]="formatterPercent"
      [nzParser]="parserPercent"
    />
  `,
  styles: `
    nz-input-number {
      margin-right: 8px;
    }
  `
})
export class NzDemoInputNumberFormatterComponent {
  dollarValue = 1000;
  percentValue = 100;
  formatterDollar = (value: number): string => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  parserDollar = (value: string): number => +value?.replace(/\$\s?|(,*)/g, '');
  formatterPercent = (value: number): string => `${value}%`;
  parserPercent = (value: string): number => +value?.replace('%', '');
}
```

### 自定义图标

自定义箭头图标。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-handler-icon',
  imports: [FormsModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number [(ngModel)]="value">
      <nz-icon nzInputNumberUpIcon nzType="arrow-up" />
      <nz-icon nzInputNumberDownIcon nzType="arrow-down" />
    </nz-input-number>
  `
})
export class NzDemoInputNumberHandlerIconComponent {
  value = 3;
}
```

### 键盘行为

使用 `nzKeyboard` 属性可以控制键盘行为。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-keyboard',
  imports: [FormsModule, NzInputNumberModule, NzCheckboxModule],
  template: `
    <nz-input-number [(ngModel)]="value" [nzKeyboard]="keyboard" nzMin="1" nzMax="10" />
    <label nz-checkbox [(ngModel)]="keyboard">Toggle Keyboard</label>
  `,
  styles: `
    nz-input-number {
      margin-right: 8px;
    }
  `
})
export class NzDemoInputNumberKeyboardComponent {
  keyboard = true;
  value = 3;
}
```

### 超出边界

当通过受控将 `value` 超出边界时，提供警告样式。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-out-of-range',
  imports: [FormsModule, NzInputNumberModule],
  template: `<nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" />`
})
export class NzDemoInputNumberOutOfRangeComponent {
  value = 99;
}
```

### 前缀

在数字输入框上添加前缀图标。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-prefix',
  imports: [FormsModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number nzPrefix="￥" [style.width.%]="100" />

    <nz-input-number [style.width.%]="100">
      <span nzInputPrefix>￥</span>
    </nz-input-number>

    <nz-input-number [style.width.%]="100">
      <nz-icon nzInputAddonBefore nzType="user" />
      <span nzInputPrefix>￥</span>
    </nz-input-number>

    <nz-input-number nzPrefix="￥" nzDisabled [style.width.%]="100" />
  `,
  styles: `
    nz-input-number {
      margin-bottom: 8px;
    }
  `
})
export class NzDemoInputNumberPrefixComponent {}
```

### 三种大小

三种大小的数字输入框，当 `nzSize` 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-size',
  imports: [FormsModule, NzInputNumberModule],
  template: `
    <nz-input-number [(ngModel)]="value" nzSize="large" nzMin="1" nzMax="10" />
    <nz-input-number [(ngModel)]="value" nzMin="1" nzMax="10" />
    <nz-input-number [(ngModel)]="value" nzSize="small" nzMin="1" nzMax="10" />
  `,
  styles: `
    nz-input-number {
      margin-right: 8px;
    }
  `
})
export class NzDemoInputNumberSizeComponent {
  value = 3;
}
```

### 自定义状态

使用 `nzStatus` 为 InputNumber 添加状态，可选 `error` 或者 `warning`。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'nz-demo-input-number-status',
  imports: [FormsModule, NzInputNumberModule, NzIconModule],
  template: `
    <nz-input-number nzStatus="error" [style.width.%]="100" />
    <nz-input-number nzStatus="warning" [style.width.%]="100" />
    <nz-input-number nzStatus="error" [style.width.%]="100">
      <nz-icon nzInputPrefix nzType="clock-circle" />
    </nz-input-number>
    <nz-input-number nzStatus="warning" [style.width.%]="100">
      <nz-icon nzInputPrefix nzType="clock-circle" />
    </nz-input-number>
  `,
  styles: `
    nz-input-number {
      margin-bottom: 8px;
    }
  `
})
export class NzDemoInputNumberStatusComponent {}
```

### 形态变体

InputNumber 形态变体，可选 `outlined`、`filled`、`borderless`、`underlined` 四种形态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-input-number-variant',
  imports: [FormsModule, NzInputNumberModule, NzSpaceModule],
  template: ` <nz-space nzDirection="vertical" style="width: 100%">
    <nz-input-number *nzSpaceItem [ngModel]="3" />
    <nz-input-number *nzSpaceItem nzVariant="filled" [ngModel]="3" />
    <nz-input-number *nzSpaceItem nzVariant="borderless" [ngModel]="3" />
    <nz-input-number *nzSpaceItem nzVariant="underlined" [ngModel]="3" />
  </nz-space>`
})
export class NzDemoInputNumberVariantComponent {}
```
