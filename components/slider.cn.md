---
category: Components
subtitle: 滑动输入条
type: 数据录入
title: Slider
cover: 'https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg'
description: 滑动型输入器，展示当前值和可选范围。
---

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## API

### nz-slider

| 参数                   | 说明                                                                                                                                               | 类型                                             | 默认值                                                                           |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| `[nzDisabled]`         | 值为 `true` 时，滑块为禁用状态                                                                                                                     | `boolean`                                        | `false`                                                                          |
| `[nzDots]`             | 是否只能拖拽到刻度上                                                                                                                               | `boolean`                                        | `false`                                                                          |
| `[nzIncluded]`         | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列                                                                             | `boolean`                                        | `true`                                                                           |
| `[nzMarks]`            | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 `[min, max]` 内，每个标签可以单独设置样式                                                       | `object`                                         | `{ number: string/HTML }` or `{ number: { style: object, label: string/HTML } }` |
| `[nzMax]`              | 最大值                                                                                                                                             | `number`                                         | `100`                                                                            |
| `[nzMin]`              | 最小值                                                                                                                                             | `number`                                         | `0`                                                                              |
| `[nzRange]`            | 双滑块模式                                                                                                                                         | `boolean`                                        | `false`                                                                          |
| `[nzStep]`             | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。 | `number \| null`                                 | `1`                                                                              |
| `[nzTipFormatter]`     | Slider 会把当前值传给 `nzTipFormatter`，并在 Tooltip 中显示 `nzTipFormatter` 的返回值，若为 null，则隐藏 Tooltip。                                 | `(value: number) => string \| TemplateRef<void>` | -                                                                                |
| `[ngModel]`            | 设置当前取值。当 `range` 为 `false` 时，使用 `number`，否则用 `[number, number]`                                                                   | `number \| number[]`                             | -                                                                                |
| `[nzVertical]`         | 值为 `true` 时，Slider 为垂直方向                                                                                                                  | `boolean`                                        | `false`                                                                          |
| `[nzReverse]`          | 反向坐标轴                                                                                                                                         | `boolean`                                        | `false`                                                                          |
| `[nzTooltipVisible]`   | 值为 `always` 时总是显示，值为 `never` 时在任何情况下都不显示                                                                                      | `'default' \| 'always' \| 'never'`               | `'default'`                                                                      |
| `[nzTooltipPlacement]` | 设置 Tooltip 的默认位置。                                                                                                                          | `string`                                         |                                                                                  |
| `(nzOnAfterChange)`    | 与 `onmouseup` 触发时机一致，把当前值作为参数传入。                                                                                                | `EventEmitter<number[] \| number>`               | -                                                                                |
| `(ngModelChange)`      | 当 Slider 的值发生改变时，会触发 ngModelChange 事件，并把改变后的值作为参数传入。                                                                  | `EventEmitter<number[] \| number>>`              | -                                                                                |

---

## 代码示例

### 基本

基本滑动条。当 `nzRange` 为 `true` 时，渲染为双滑块。当 `nzDisabled` 为 `true` 时，滑块处于不可用状态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-slider-basic',
  imports: [FormsModule, NzSliderModule, NzSwitchModule],
  template: `
    <nz-slider [(ngModel)]="value1" [nzDisabled]="disabled" />
    <nz-slider nzRange [(ngModel)]="value2" [nzDisabled]="disabled" />
    Disabled:
    <nz-switch nzSize="small" [(ngModel)]="disabled" />
  `
})
export class NzDemoSliderBasicComponent {
  disabled = false;
  value1 = 30;
  value2 = [20, 50];
}
```

### 事件

当 Slider 的值发生改变时，会触发 `nzOnChange` 事件，并把改变后的值作为参数传入。在 `onmouseup` 时，会触发 `nzOnAfterChange` 事件，并把当前值作为参数传入。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-event',
  imports: [FormsModule, NzSliderModule],
  template: `
    <nz-slider [(ngModel)]="singleValue" (ngModelChange)="onChange($event)" (nzOnAfterChange)="onAfterChange($event)" />
    <nz-slider
      nzRange
      [nzStep]="10"
      [(ngModel)]="rangeValue"
      (ngModelChange)="onChange($event)"
      (nzOnAfterChange)="onAfterChange($event)"
    />
  `
})
export class NzDemoSliderEventComponent {
  singleValue = 30;
  rangeValue = [20, 50];

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value: number[] | number): void {
    console.log(`onAfterChange: ${value}`);
  }
}
```

### 带 icon 的滑块

滑块左右可以设置图标来表达业务含义。

```typescript
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-icon-slider',
  imports: [FormsModule, NzIconModule, NzSliderModule],
  template: `
    <div class="icon-wrapper test-class">
      <nz-icon nzType="frown" [class.icon-highlight]="preHighLight" />
      <nz-slider [nzMin]="0" [nzMax]="20" [(ngModel)]="sliderValue" />
      <nz-icon nzType="smile" [class.icon-highlight]="nextHighLight" />
    </div>
  `,
  styles: `
    .icon-wrapper {
      position: relative;
      padding: 0 30px;
    }

    nz-icon {
      position: absolute;
      top: -2px;
      width: 16px;
      height: 16px;
      line-height: 1;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.25);
    }

    nz-icon:first-child {
      left: 0;
    }

    nz-icon:last-child {
      right: 0;
    }

    .icon-highlight {
      color: rgba(0, 0, 0, 0.45);
    }
  `
})
export class NzDemoSliderIconSliderComponent implements OnInit {
  min = 0;
  max = 20;
  mid = parseFloat(((this.max - this.min) / 2).toFixed(5));
  preHighLight = false;
  nextHighLight = false;
  _sliderValue = 0;

  set sliderValue(value: number) {
    this._sliderValue = value;
    this.highlightIcon();
  }

  get sliderValue(): number {
    return this._sliderValue;
  }

  ngOnInit(): void {
    this.sliderValue = 0;
  }

  highlightIcon(): void {
    const lower = this._sliderValue >= this.mid;
    this.preHighLight = !lower;
    this.nextHighLight = lower;
  }
}
```

### 带输入框的滑块

和 [数字输入框](/components/input-number/) 组件保持同步。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-input-number',
  imports: [FormsModule, NzGridModule, NzInputNumberModule, NzSliderModule],
  template: `
    <nz-row nzGutter="8">
      <nz-col nzSpan="12">
        <nz-slider [nzMin]="1" [nzMax]="20" [(ngModel)]="value1" />
      </nz-col>
      <div nz-col nzSpan="4">
        <nz-input-number [nzMin]="1" [nzMax]="20" [(ngModel)]="value1" />
      </div>
    </nz-row>

    <nz-row nzGutter="8">
      <nz-col nzSpan="12">
        <nz-slider [nzMin]="0" [nzMax]="1" [nzStep]="0.01" [(ngModel)]="value2" />
      </nz-col>
      <nz-col nzSpan="4">
        <nz-input-number [nzMin]="0" [nzMax]="1" [nzStep]="0.01" [(ngModel)]="value2" />
      </nz-col>
    </nz-row>
  `
})
export class NzDemoSliderInputNumberComponent {
  value1 = 1;
  value2 = 0;
}
```

### 带标签的滑块

使用 `nzMarks` 属性标注分段式滑块，使用 `ngModel` 指定滑块位置。当 `nzIncluded = false` 时，表明不同标记间为并列关系。当 `nzStep = null` 时，Slider 的可选值仅有 `nzMarks` 标出来的部分。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMarks, NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-mark',
  imports: [FormsModule, NzButtonModule, NzSliderModule],
  template: `
    <h4>included=true</h4>
    <nz-slider [nzMarks]="marks" [ngModel]="37" />
    <nz-slider [nzMarks]="marks" nzIncluded nzRange [ngModel]="[26, 37]" />
    <h4>included=false</h4>
    <nz-slider [nzMarks]="marks" [nzIncluded]="false" [ngModel]="37" />
    <h4>marks & step</h4>
    <nz-slider [nzMarks]="marks" [nzStep]="10" [ngModel]="37" />
    <h4>step=null || dots=true</h4>
    <nz-slider [nzMarks]="marks" [nzStep]="null" [ngModel]="37" />
    <nz-slider [nzMarks]="marks" nzDots [ngModel]="37" />
    Change nzMarks dynamically:
    <button nz-button (click)="changeMarks()">Change nzMarks</button>
  `,
  styles: `
    h4 {
      margin: 0 0 16px;
    }

    .ant-slider-with-marks {
      margin-bottom: 44px;
    }
  `
})
export class NzDemoSliderMarkComponent {
  marks: NzMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };

  changeMarks(): void {
    this.marks = {
      20: '20%',
      99: '99%'
    };
  }
}
```

### 反向

设置 `nzReverse` 可以将滑动条置反。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzMarks, NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'nz-demo-slider-reverse',
  imports: [FormsModule, NzSliderModule, NzSwitchModule],
  template: `
    <nz-slider [ngModel]="30" [nzReverse]="reverse" />
    <nz-slider nzRange [ngModel]="[20, 50]" [nzReverse]="reverse" />
    <nz-slider [nzMarks]="marks" [ngModel]="30" [nzReverse]="reverse" />
    Reversed:
    <nz-switch nzSize="small" [(ngModel)]="reverse" />
  `,
  styles: `
    .ant-slider-with-marks {
      margin-bottom: 44px;
    }
  `
})
export class NzDemoSliderReverseComponent {
  reverse = true;

  marks: NzMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };
}
```

### 自定义提示

使用 `nzTipFormatter` 可以格式化 `Tooltip` 的内容，设置 `nzTipFormatter = null`，则隐藏 `Tooltip`。

```typescript
import { Component } from '@angular/core';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-tip-formatter',
  imports: [NzSliderModule],
  template: `
    <nz-slider [nzTipFormatter]="formatter" />
    <nz-slider [nzTipFormatter]="null" />
    <nz-slider [nzTipFormatter]="titleTemplate" />
    <ng-template #titleTemplate let-value>
      <span>Slider value: {{ value }}</span>
    </ng-template>
  `
})
export class NzDemoSliderTipFormatterComponent {
  formatter(value: number): string {
    return `${value}%`;
  }
}
```

### 控制 Tooltip 的显示

当 `nzTooltipVisible` 为 `always` 时，将始终显示 Tooltip，为 `never` 时反之则始终不显示，即使在拖动、移入时也是如此。

```typescript
import { Component } from '@angular/core';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-tooltip',
  imports: [NzSliderModule],
  template: `
    <nz-slider nzTooltipVisible="always" />
    <nz-slider nzTooltipVisible="never" />
  `
})
export class NzDemoSliderTooltipComponent {}
```

### 垂直

垂直方向的 Slider。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-slider-vertical',
  imports: [FormsModule, NzSliderModule],
  template: `
    <div [style]="{ height: '300px' }">
      <div [style]="style">
        <nz-slider nzVertical [ngModel]="30" />
      </div>
      <div [style]="style">
        <nz-slider nzVertical nzRange [nzStep]="10" [ngModel]="[20, 50]" />
      </div>
      <div [style]="style">
        <nz-slider nzVertical nzRange [nzMarks]="marks" [ngModel]="[26, 37]" />
      </div>
    </div>
  `
})
export class NzDemoSliderVerticalComponent {
  style = {
    float: 'left',
    height: '300px',
    marginLeft: '70px'
  };

  marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };
}
```
