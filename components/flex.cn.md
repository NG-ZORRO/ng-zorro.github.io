---
category: Components
subtitle: 弹性布局
type: 布局
cols: 1
title: Flex
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SMzgSJZE_AwAAAAAAAAAAAAADrJ8AQ/original'
tag: 17.1.0
description: 用于对齐的弹性布局容器。
---

## 何时使用

- 适合设置元素之间的间距。
- 适合设置各种水平、垂直对齐方式。

### 与 Space 组件的区别

- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

## API

### [nz-flex]

| 参数           | 说明                                                                                                                     | 类型                                                 | 默认值     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ---------- |
| `[nzVertical]` | 使用 `flex-direction: column`描述flex的垂直方向                                                                          | `boolean`                                            | `false`    |
| `[nzJustify]`  | 设置元素在主轴方向上的对齐方式，参照 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | `NzJustify`                                          | `'normal'` |
| `[nzAlign]`    | 设置元素在交叉轴方向上的对齐方式，参照 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)       | `NzAlign`                                            | `'normal'` |
| `[nzGap]`      | 设置项目的间隙                                                                                                           | `'small' \| 'middle' \| 'large' \| number \| string` | `0`        |
| `[nzWrap]`     | 指定 flex 元素单行显示还是多行显示，参照 [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)         | `NzWrap`                                             | `'nowrap'` |
| `[nzFlex]`     | flex css简写属性，参照 [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)                                     | `NzFlex`                                             | `'unset'`  |

---

## 代码示例

### 对齐方式

设置对齐方式。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlign, NzFlexModule, NzJustify } from 'ng-zorro-antd/flex';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-flex-align',
  imports: [FormsModule, NzButtonModule, NzFlexModule, NzSegmentedModule],
  template: `
    <div class="segment-wrapper">
      <span>Select justify:</span>
      <nz-segmented [nzOptions]="justifySegment" [(ngModel)]="selectedJustification" />
    </div>

    <div class="segment-wrapper">
      <span>Select align:</span>
      <nz-segmented [nzOptions]="alignSegment" [(ngModel)]="selectedLAlignment" />
    </div>

    <div class="btn-wrappers" nz-flex [nzJustify]="selectedJustification" [nzAlign]="selectedLAlignment">
      <button nz-button nzType="primary">Primary</button>
      <button nz-button nzType="primary">Primary</button>
      <button nz-button nzType="primary">Primary</button>
      <button nz-button nzType="primary">Primary</button>
    </div>
  `,
  styles: `
    .segment-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      margin-block-end: 1rem;
    }

    .btn-wrappers {
      block-size: 10rem;
      border: 1px solid var(--ant-primary-6);
    }
  `
})
export class NzDemoFlexAlignComponent {
  public justifySegment: NzJustify[] = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly'
  ];
  public alignSegment: NzAlign[] = ['flex-start', 'center', 'flex-end'];
  public selectedJustification: NzJustify = 'flex-start';
  public selectedLAlignment: NzAlign = 'flex-start';
}
```

### 基本布局

最简单的用法。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nz-demo-flex-basic',
  imports: [FormsModule, NzFlexModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="isVertical">
      <label nz-radio [nzValue]="false">horizontal</label>
      <label nz-radio [nzValue]="true">vertical</label>
    </nz-radio-group>

    <div nz-flex [nzVertical]="isVertical">
      <div class="flex-item"></div>
      <div class="flex-item even"></div>
      <div class="flex-item"></div>
      <div class="flex-item even"></div>
    </div>
  `,
  styles: `
    nz-radio-group {
      margin-block-end: 1rem;
    }

    .flex-item {
      inline-size: 25%;
      block-size: 54px;
      background-color: var(--ant-primary-6);
    }

    .even {
      background-color: var(--ant-primary-5);
    }
  `
})
export class NzDemoFlexBasicComponent {
  isVertical = false;
}
```

### 组合使用

嵌套使用，可以实现更复杂的布局。

```typescript
import { Component } from '@angular/core';

import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'nz-demo-flex-combination',
  imports: [NzFlexModule],
  template: `
    <div class="combination-wrapper" nz-flex [nzGap]="80">
      <img
        alt="Angular"
        width="150"
        height="150"
        src="https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg"
      />

      <div nz-flex [nzVertical]="true" nzGap="large">
        <h2> Ant Design of Angular </h2>

        <h3>
          An enterprise-class Angular UI component library based on Ant Design, all components are open source and free
          to use under MIT license.
        </h3>
      </div>
    </div>
  `,
  styles: `
    .combination-wrapper {
      inline-size: 40rem;
      padding: 2rem;
      border: 1px solid #f0f0f0;
      border-radius: 2px;
    }
  `
})
export class NzDemoFlexCombinationComponent {}
```

### 设置间隙

使用 `gap` 设置元素之间的间距，预设了 `small`、`middle`、`large` 三种尺寸，也可以自定义间距。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-flex-gap',
  imports: [FormsModule, NzButtonModule, NzFlexModule, NzSegmentedModule, NzSliderModule],
  template: `
    <div class="segment-wrapper">
      <span>Select gap:</span>
      <nz-segmented [nzOptions]="gapSegment" [(ngModel)]="selectedGap" />
    </div>
    @if (selectedGap === 'custom') {
      <nz-slider [nzMin]="0" [nzMax]="100" [(ngModel)]="customGapValue" />
    }
    <div nz-flex [nzGap]="selectedGap === 'custom' ? customGapValue : selectedGap">
      <button nz-button nzType="primary">Primary</button>
      <button nz-button nzType="dashed">Dashed</button>
      <button nz-button nzType="default">Default</button>
      <button nz-button nzType="link">Link</button>
    </div>
  `,
  styles: `
    .segment-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      margin-block-end: 1rem;
    }
  `
})
export class NzDemoFlexGapComponent {
  public gapSegment: string[] = ['small', 'middle', 'large', 'custom'];
  public selectedGap = 'small';
  public customGapValue = 0;
}
```

### 自动换行

自动换行。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule, NzWrap } from 'ng-zorro-antd/flex';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-flex-wrap',
  imports: [FormsModule, NzButtonModule, NzFlexModule, NzSegmentedModule],
  template: `
    <div class="segment-wrapper">
      <span>Select wrap:</span>
      <nz-segmented [nzOptions]="wrapSegment" [(ngModel)]="selectedWrap" />
    </div>
    <div class="btn-wrapper" nz-flex nzGap="middle" [nzWrap]="selectedWrap">
      @for (_ of array; track _) {
        <button style="width: 100px" nz-button nzType="primary">Button {{ _ }}</button>
      }
    </div>
  `,
  styles: `
    .segment-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      margin-block-end: 1rem;
    }

    .btn-wrapper {
      overflow: auto;
      padding-block: 10px;
    }
  `
})
export class NzDemoFlexWrapComponent {
  wrapSegment: NzWrap[] = ['wrap', 'wrap-reverse', 'nowrap'];
  selectedWrap: NzWrap = 'wrap';
  array = Array.from({ length: 20 }, (_, index) => index + 1);
}
```
