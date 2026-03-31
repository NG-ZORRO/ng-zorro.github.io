---
category: Components
subtitle: 单选框
type: 数据录入
title: Radio
cover: 'https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg'
description: 用于在多个备选项中选中单个状态。
---

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## API

### [nz-radio] | [nz-radio-button]

| 参数              | 说明                                     | 类型                    | 默认值  |
| ----------------- | ---------------------------------------- | ----------------------- | ------- |
| `[nzAutoFocus]`   | 自动获取焦点                             | `boolean`               | `false` |
| `[nzDisabled]`    | 设定 disable 状态                        | `boolean`               | `false` |
| `[ngModel]`       | 指定当前是否选中，可双向绑定             | `boolean`               | `false` |
| `[nzValue]`       | 设置 value，与 `nz-radio-group` 配合使用 | `any`                   | -       |
| `(ngModelChange)` | 选中变化时回调                           | `EventEmitter<boolean>` | -       |

### nz-radio-group

单选框组合，用于包裹一组 `nz-radio`。

| 参数              | 说明                                                         | 类型                              | 默认值      |
| ----------------- | ------------------------------------------------------------ | --------------------------------- | ----------- |
| `[ngModel]`       | 指定选中的 `nz-radio` 的 value 值                            | `any`                             | -           |
| `[nzName]`        | `nz-radio-group` 下所有 `input[type="radio"]` 的 `name` 属性 | `string`                          | -           |
| `[nzDisabled]`    | 设定所有 `nz-radio` disable 状态                             | `boolean`                         | `false`     |
| `[nzSize]`        | 大小，只对按钮样式生效                                       | `'large' \| 'small' \| 'default'` | `'default'` |
| `(ngModelChange)` | 选中变化时回调                                               | `EventEmitter<boolean>`           | -           |
| `[nzButtonStyle]` | RadioButton 的风格样式，目前有描边和填色两种风格             | `'outline' \| 'solid'`            | `'outline'` |

## 方法

### [nz-radio]

可以通过 `ViewChild` 等其他方式获取 `NzRadioComponent` 使用以下方法

| 名称      | 描述     |
| --------- | -------- |
| `blur()`  | 移除焦点 |
| `focus()` | 获取焦点 |

---

## 代码示例

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-basic',
  imports: [FormsModule, NzRadioModule],
  template: `<label nz-radio ngModel>Radio</label>`
})
export class NzDemoRadioBasicComponent {}
```

### 不可用

`nz-radio` 不可用。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-disable',
  imports: [FormsModule, NzButtonModule, NzRadioModule],
  template: `
    <div>
      <label nz-radio [nzDisabled]="disabled">Disabled</label>
      <br />
      <label nz-radio [nzDisabled]="disabled" [ngModel]="true">Disabled</label>
      <br />
      <br />
      <button nz-button nzType="primary" (click)="disabled = !disabled">Toggle disabled</button>
    </div>
  `
})
export class NzDemoRadioDisableComponent {
  disabled = true;
}
```

### 按钮样式

按钮样式的单选组合。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiobutton',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B" nzDisabled>Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A" nzDisabled>Hangzhou</label>
      <label nz-radio-button nzValue="B" nzDisabled>Shanghai</label>
      <label nz-radio-button nzValue="C" nzDisabled>Beijing</label>
      <label nz-radio-button nzValue="D" nzDisabled>Chengdu</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiobuttonComponent {
  radioValue = 'A';
}
```

### RadioGroup 垂直

垂直的 `nz-radio-group`，配合更多输入框选项。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup-more',
  imports: [FormsModule, NzInputModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio nzValue="A">Option A</label>
      <label nz-radio nzValue="B">Option B</label>
      <label nz-radio nzValue="C">Option C</label>
      <label nz-radio nzValue="M">
        More...
        @if (radioValue === 'M') {
          <input type="text" nz-input />
        }
      </label>
    </nz-radio-group>
  `,
  styles: `
    [nz-radio] {
      display: block;
      height: 32px;
      line-height: 32px;
    }

    input {
      width: 100px;
      margin-left: 10px;
    }
  `
})
export class NzDemoRadioRadiogroupMoreComponent {
  radioValue = 'A';
}
```

### RadioGroup 组合 - 配置方式

通过配置 `options` 参数来渲染单选框。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup-options',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      @for (o of options; track o.value) {
        <label nz-radio [nzValue]="o.value">{{ o.label }}</label>
      }
    </nz-radio-group>
    <nz-radio-group [(ngModel)]="radioValue">
      @for (o of options; track o.value) {
        <label nz-radio [nzValue]="o.value">{{ o.label }}</label>
      }
    </nz-radio-group>
    <nz-radio-group [(ngModel)]="radioValue">
      @for (o of options; track o.value) {
        <label nz-radio [nzValue]="o.value">{{ o.label }}</label>
      }
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiogroupOptionsComponent {
  radioValue = 'Apple';
  options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
}
```

### 单选组合 - 配合 name 使用

可以为 `nz-radio-group` 配置 `nzName` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 `nz-radio-group` 下的 `nz-radio` 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup-with-name',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue" nzName="radiogroup">
      <label nz-radio nzValue="A">A</label>
      <label nz-radio nzValue="B">B</label>
      <label nz-radio nzValue="C">C</label>
      <label nz-radio nzValue="D">D</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiogroupWithNameComponent {
  radioValue = 'A';
}
```

### 单选组合

一组互斥的 `nz-radio` 配合使用。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-radiogroup',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio nzValue="A">A</label>
      <label nz-radio nzValue="B">B</label>
      <label nz-radio nzValue="C">C</label>
      <label nz-radio nzValue="D">D</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioRadiogroupComponent {
  radioValue = 'A';
}
```

### 大小

大中小三种组合，可以和表单输入框进行对应配合。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-size',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue" nzSize="large">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-radio-group [(ngModel)]="radioValue" nzSize="small">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioSizeComponent {
  radioValue = 'A';
}
```

### 填底的按钮样式

实色填底的单选按钮样式。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-radio-solid',
  imports: [FormsModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="radioValue" nzButtonStyle="solid">
      <label nz-radio-button nzValue="A">Hangzhou</label>
      <label nz-radio-button nzValue="B">Shanghai</label>
      <label nz-radio-button nzValue="C">Beijing</label>
      <label nz-radio-button nzValue="D">Chengdu</label>
    </nz-radio-group>
  `
})
export class NzDemoRadioSolidComponent {
  radioValue = 'A';
}
```
