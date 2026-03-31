---
category: Components
subtitle: 评分
type: 数据录入
title: Rate
cover: 'https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg'
description: 用于对事物进行评分操作。
---

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## API

### nz-rate

| 属性                | 说明                     | 类型                          | 默认值                      | 支持全局配置 |
| ------------------- | ------------------------ | ----------------------------- | --------------------------- | ------------ |
| `[nzAllowClear]`    | 是否允许再次点击后清除   | `boolean`                     | `true`                      | ✅           |
| `[nzAllowHalf]`     | 是否允许半选             | `boolean`                     | `false`                     | ✅           |
| `[nzAutoFocus]`     | 自动获取焦点             | `boolean`                     | `false`                     |
| `[nzCharacter]`     | 自定义字符               | `TemplateRef<void>`           | `<nz-icon nzType="star" />` |
| `[nzCount]`         | star 总数                | `number`                      | `5`                         |
| `[nzDisabled]`      | 只读，无法进行交互       | `boolean`                     | `false`                     |
| `[nzTooltips]`      | 自定义每项的提示信息     | `string[]`                    | `[]`                        |
| `[ngModel]`         | 当前数，可以双向绑定     | `number`                      | `0`                         |
| `(ngModelChange)`   | 当前数改变时的回调       | `EventEmitter<number>`        | -                           |
| `(nzOnBlur)`        | 失去焦点时的回调         | `EventEmitter<FocusEvent>`    | -                           |
| `(nzOnFocus)`       | 获取焦点时的回调         | `EventEmitter<FocusEvent>`    | -                           |
| `(nzOnHoverChange)` | 鼠标经过时数值变化的回调 | `EventEmitter<number>`        | -                           |
| `(nzOnKeyDown)`     | 按键回调                 | `EventEmitter<KeyboardEvent>` | -                           |

#### 方法

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

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-basic',
  imports: [FormsModule, NzRateModule],
  template: `<nz-rate [ngModel]="0" />`
})
export class NzDemoRateBasicComponent {}
```

### 其他字符

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-character',
  imports: [FormsModule, NzIconModule, NzRateModule],
  template: `
    <nz-rate [ngModel]="0" nzAllowHalf [nzCharacter]="characterIcon" />
    <br />
    <nz-rate [ngModel]="0" nzAllowHalf class="large" [nzCharacter]="characterEnLetter" />
    <br />
    <nz-rate [ngModel]="0" nzAllowHalf [nzCharacter]="characterZhLetter" />
    <ng-template #characterIcon><nz-icon nzType="heart" /></ng-template>
    <ng-template #characterZhLetter>好</ng-template>
    <ng-template #characterEnLetter>A</ng-template>
  `,
  styles: `
    .large ::ng-deep .ant-rate-star {
      font-size: 36px;
    }
  `
})
export class NzDemoRateCharacterComponent {}
```

### 清除

支持允许或者禁用清除。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-clear',
  imports: [FormsModule, NzRateModule],
  template: `
    <nz-rate [(ngModel)]="value" nzAllowHalf />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <nz-rate [(ngModel)]="value" nzAllowHalf [nzAllowClear]="false" />
    <span class="ant-rate-text">allowClear: false</span>
  `
})
export class NzDemoRateClearComponent {
  value = 0;
}
```

### 自定义字符

可以通过索引自定义每一个字符。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-customize',
  imports: [FormsModule, NzIconModule, NzRateModule],
  template: `
    <nz-rate [ngModel]="2" [nzCharacter]="characterNumber" />
    <br />
    <nz-rate [ngModel]="3" [nzCharacter]="characterIcon" />
    <br />
    <ng-template #characterNumber let-index>
      {{ index + 1 }}
    </ng-template>
    <ng-template #characterIcon let-index>
      @switch (index) {
        @case (0) {
          <nz-icon nzType="frown" />
        }
        @case (1) {
          <nz-icon nzType="frown" />
        }
        @case (2) {
          <nz-icon nzType="meh" />
        }
        @case (3) {
          <nz-icon nzType="smile" />
        }
        @case (4) {
          <nz-icon nzType="smile" />
        }
      }
    </ng-template>
  `,
  styles: `
    .large ::ng-deep .ant-rate-star {
      font-size: 36px;
    }
  `
})
export class NzDemoRateCustomizeComponent {}
```

### 只读

只读，无法进行鼠标交互。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-disabled',
  imports: [FormsModule, NzRateModule],
  template: `<nz-rate [ngModel]="2" nzDisabled />`
})
export class NzDemoRateDisabledComponent {}
```

### 半星

支持选中半星。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-half',
  imports: [FormsModule, NzRateModule],
  template: `<nz-rate [ngModel]="2.5" nzAllowHalf />`
})
export class NzDemoRateHalfComponent {}
```

### 文案展现

给评分组件加上文案展示。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'nz-demo-rate-text',
  imports: [FormsModule, NzRateModule],
  template: `
    <nz-rate [(ngModel)]="value" [nzTooltips]="tooltips" />
    @if (value) {
      <span class="ant-rate-text">{{ value ? tooltips[value - 1] : '' }}</span>
    }
  `
})
export class NzDemoRateTextComponent {
  readonly tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
}
```
