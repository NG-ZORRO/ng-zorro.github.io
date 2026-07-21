---
category: Components
subtitle: 栅格
type: 布局
cols: 1
title: Grid
tag: updated
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mfJeS6cqZrEAAAAAAAAAAAAADrJ8AQ/original
description: 24 栅格系统。
---

## 设计理念

<div class="grid-demo">
  <div class="ant-row demo-row">
    <div class="ant-col-24 demo-col demo-col-1">
      100%
    </div>
  </div>
  <div class="ant-row demo-row">
    <div class="ant-col-6 demo-col demo-col-2">
      25%
    </div>
    <div class="ant-col-6 demo-col demo-col-3">
      25%
    </div>
    <div class="ant-col-6 demo-col demo-col-2">
      25%
    </div>
    <div class="ant-col-6 demo-col demo-col-3">
      25%
    </div>
  </div>
  <div class="ant-row demo-row">
    <div class="ant-col-8 demo-col demo-col-4">
      33.33%
    </div>
    <div class="ant-col-8 demo-col demo-col-5">
      33.33%
    </div>
    <div class="ant-col-8 demo-col demo-col-4">
      33.33%
    </div>
  </div>
  <div class="ant-row demo-row">
    <div class="ant-col-12 demo-col demo-col-1">
      50%
    </div>
    <div class="ant-col-12 demo-col demo-col-3">
      50%
    </div>
  </div>
  <div class="ant-row demo-row">
    <div class="ant-col-16 demo-col demo-col-4">
      66.66%
    </div>
    <div class="ant-col-8 demo-col demo-col-5">
      33.33%
    </div>
  </div>
</div>

在多数业务情况下，Ant Design 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

- 通过 `row` 在水平方向建立一组 `column`（简写 col）
- 你的内容应当放置于 `col` 内，并且，只有 `col` 可以作为 `row` 的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<div nz-col [nzSpan]="8" />` 来创建
- 如果一个 `row` 中的 `col` 总和超过 24，那么多余的 `col` 会作为一个整体另起一行排列

我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## API

### [nz-row]

| 成员          | 说明                                                                                                                                                                                                         | 类型                                                                                            | 默认值 | 版本                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ------ | --------------------- |
| `[nzAlign]`   | 垂直对齐方式                                                                                                                                                                                                 | `'top' \| 'middle' \| 'bottom' \| 'stretch' \| object`                                          | -      | 响应式对象: 21.3.0    |
| `[nzGutter]`  | 可以写成[字符串CSS单位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Values_and_Units)或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | `string \| number \| object \| array`                                                           | `0`    | 字符串CSS单位: 21.3.0 |
| `[nzJustify]` | 水平排列方式                                                                                                                                                                                                 | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly' \| object` | -      | 响应式对象: 21.3.0    |
| `[nzWrap]`    | 是否自动换行                                                                                                                                                                                                 | `boolean`                                                                                       | `true` | 21.3.0                |

### [nz-col]

| 成员         | 说明                                                             | 类型               | 默认值 | 版本   |
| ------------ | ---------------------------------------------------------------- | ------------------ | ------ | ------ |
| `[nzFlex]`   | flex 布局属性                                                    | `string \| number` | -      |        |
| `[nzOffset]` | 栅格左侧的间隔格数，间隔内不可以有栅格                           | `number`           | `0`    |        |
| `[nzOrder]`  | 栅格顺序                                                         | `number`           | `0`    |        |
| `[nzPull]`   | 栅格向左移动格数                                                 | `number`           | `0`    |        |
| `[nzPush]`   | 栅格向右移动格数                                                 | `number`           | `0`    |        |
| `[nzSpan]`   | 栅格占位格数，为 0 时相当于 `display: none`                      | `number`           | -      |        |
| `[nzXs]`     | `screen < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |        |
| `[nzSm]`     | `screen ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |        |
| `[nzMd]`     | `screen ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |        |
| `[nzLg]`     | `screen ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |        |
| `[nzXl]`     | `screen ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | -      |        |
| `[nzXXl]`    | `screen ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | -      |        |
| `[nzXXXl]`   | `screen ≥ 1920px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | -      | 21.3.0 |

响应式栅格的断点扩展自 [BootStrap 4 的规则](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)（不包含链接里 `occasionally` 的部分)。

---

## 代码示例

### 基础栅格

从堆叠到水平排列。

使用单一的一组 `nz-row` 和 `nz-col` 栅格组件，就可以创建一个基本的栅格系统，所有列（`nz-col`）必须放在 `nz-row` 内。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-basic',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col nzSpan="12">col-12</div>
      <div nz-col nzSpan="12">col-12</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8">col-8</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
    </div>
  `
})
export class NzDemoGridBasicComponent {}
```

### 对齐

子元素垂直对齐。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-flex-align',
  imports: [NzGridModule],
  template: `
    <div>
      <p>Align Top</p>
      <div nz-row nzJustify="center" nzAlign="top">
        <div nz-col nzSpan="4"><p class="height-100">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-50">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-120">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-80">col-4</p></div>
      </div>
      <p>Align Center</p>
      <div nz-row nzJustify="space-around" nzAlign="middle">
        <div nz-col nzSpan="4"><p class="height-100">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-50">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-120">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-80">col-4</p></div>
      </div>
      <p>Align Bottom</p>
      <div nz-row nzJustify="space-between" nzAlign="bottom">
        <div nz-col nzSpan="4"><p class="height-100">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-50">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-120">col-4</p></div>
        <div nz-col nzSpan="4"><p class="height-80">col-4</p></div>
      </div>
    </div>
  `,
  styles: `
    [nz-row] {
      background-color: rgba(128, 128, 128, 0.08);
    }
  `
})
export class NzDemoGridFlexAlignComponent {}
```

### 排序

通过 `nzOrder` 来改变元素的排序。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-flex-order',
  imports: [NzGridModule],
  template: `
    <div>
      <div nz-row>
        <div nz-col nzSpan="6" nzOrder="4">1 col-order-4</div>
        <div nz-col nzSpan="6" nzOrder="3">2 col-order-3</div>
        <div nz-col nzSpan="6" nzOrder="2">3 col-order-2</div>
        <div nz-col nzSpan="6" nzOrder="1">4 col-order-1</div>
      </div>
    </div>
  `,
  styles: `
    [nz-row] {
      background-color: rgba(128, 128, 128, 0.08);
    }
  `
})
export class NzDemoGridFlexOrderComponent {}
```

### Flex 填充

`nz-col` 提供 `nzFlex` 属性以支持填充。

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-flex-stretch',
  imports: [NzDividerModule, NzGridModule],
  template: `
    <nz-divider nzText="Percentage columns" nzOrientation="left" />
    <div nz-row>
      <div nz-col nzFlex="2">2 / 5</div>
      <div nz-col nzFlex="3">3 / 5</div>
    </div>
    <nz-divider nzText="Fill rest" nzOrientation="left" />
    <div nz-row>
      <div nz-col nzFlex="100px">100px</div>
      <div nz-col nzFlex="auto">Fill Rest</div>
    </div>
    <nz-divider nzText="Raw flex style" nzOrientation="left" />
    <div nz-row>
      <div nz-col nzFlex="1 1 200px">1 1 200px</div>
      <div nz-col nzFlex="0 1 300px">0 1 300px</div>
    </div>

    <div nz-row [nzWrap]="false">
      <div nz-col nzFlex="none">
        <div [style.padding-inline.px]="16">none</div>
      </div>
      <div nz-col nzFlex="auto">auto with no-wrap</div>
    </div>
  `,
  styles: `
    [nz-row] {
      background-color: rgba(128, 128, 128, 0.08);
    }
  `
})
export class NzDemoGridFlexStretchComponent {}
```

### 排版

布局基础。

子元素根据不同的值 `start`、`center`、`end`、`space-between`、`space-around` 和 `space-evenly`，分别定义其在父节点里面的排版方式。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-flex',
  imports: [NzGridModule],
  template: `
    <div>
      <p>sub-element align left</p>
      <div nz-row nzJustify="start">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <p>sub-element align center</p>
      <div nz-row nzJustify="center">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <p>sub-element align right</p>
      <div nz-row nzJustify="end">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <p>sub-element monospaced arrangement</p>
      <div nz-row nzJustify="space-between">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <p>sub-element align full</p>
      <div nz-row nzJustify="space-around">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
      <p>sub-element align evenly</p>
      <div nz-row nzJustify="space-evenly">
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
        <div nz-col nzSpan="4">col-4</div>
      </div>
    </div>
  `,
  styles: `
    [nz-row] {
      background-color: rgba(128, 128, 128, 0.08);
    }
  `
})
export class NzDemoGridFlexComponent {}
```

### 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `nz-row` 的 `nzGutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。(n 是自然数)

如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 }`。

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-gutter',
  imports: [NzDividerModule, NzGridModule],
  template: `
    <nz-divider nzOrientation="left" nzText="Horizontal" />
    <div nz-row [nzGutter]="16">
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
    </div>
    <nz-divider nzOrientation="left" nzText="Responsive" />
    <div nz-row [nzGutter]="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
    </div>
    <nz-divider nzOrientation="left" nzText="Vertical" />
    <div nz-row [nzGutter]="[16, 24]">
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
      <div nz-col class="gutter-row" [nzSpan]="6"><div class="inner-box">col-6</div></div>
    </div>
  `,
  styles: `
    nz-divider {
      color: #333;
      font-weight: normal;
    }
    .inner-box {
      background: #0092ff;
      padding: 8px 0;
    }
  `
})
export class NzDemoGridGutterComponent {}
```

### 左右偏移

列偏移。

使用 `nzOffset` 可以将列向右侧偏。例如，`nzOffset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-offset',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8" nzOffset="8">col-8</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="6" nzOffset="6">col-6 col-offset-6</div>
      <div nz-col nzSpan="6" nzOffset="6">col-6 col-offset-6</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="12" nzOffset="6">col-12 col-offset-6</div>
    </div>
  `
})
export class NzDemoGridOffsetComponent {}
```

### 栅格配置器

可以简单配置几种等分栅格和间距。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMarks, NzSliderModule } from 'ng-zorro-antd/slider';

@Component({
  selector: 'nz-demo-grid-playground',
  imports: [FormsModule, NzGridModule, NzSliderModule],
  template: `
    <div class="slider-container">
      <span>Horizontal Gutter (px):</span>
      <div class="slider">
        <nz-slider [nzMarks]="marksHGutter" [nzStep]="null" [nzMin]="8" [nzMax]="48" [(ngModel)]="hGutter" />
      </div>
      <span>Vertical Gutter (px):</span>
      <div class="slider">
        <nz-slider [nzMarks]="marksVGutter" [nzStep]="null" [nzMin]="8" [nzMax]="48" [(ngModel)]="vGutter" />
      </div>
      <span>Column Count:</span>
      <div class="slider">
        <nz-slider
          [nzMarks]="marksCount"
          [nzStep]="null"
          [nzMin]="2"
          [nzMax]="12"
          [(ngModel)]="count"
          (ngModelChange)="reGenerateArray($event)"
        />
      </div>
    </div>

    <br />

    <div class="gutter-example">
      <div nz-row [nzGutter]="[hGutter, vGutter]">
        @for (i of array; track $index) {
          <div nz-col class="gutter-row" [nzSpan]="24 / count">
            <div class="grid-config">Column</div>
          </div>
        }

        @for (i of array; track $index) {
          <div nz-col class="gutter-row" [nzSpan]="24 / count">
            <div class="grid-config">Column</div>
          </div>
        }
      </div>

      Another Row:
      <div nz-row [nzGutter]="[hGutter, vGutter]">
        @for (i of array; track $index) {
          <div nz-col class="gutter-row" [nzSpan]="24 / count">
            <div class="grid-config">Column</div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .slider {
      width: 50%;
    }
    .slider-container {
      margin-bottom: 16px;
    }
    .grid-config {
      height: 120px;
      font-size: 14px;
      line-height: 120px;
      background: #0092ff;
      border-radius: 4px;
    }
  `
})
export class NzDemoGridPlaygroundComponent {
  hGutter = 16;
  vGutter = 16;
  count = 4;
  array = new Array(this.count);
  marksHGutter: NzMarks = {
    8: '8',
    16: '16',
    24: '24',
    32: '32',
    40: '40',
    48: '48'
  };
  marksVGutter: NzMarks = {
    8: '8',
    16: '16',
    24: '24',
    32: '32',
    40: '40',
    48: '48'
  };
  marksCount: NzMarks = {
    2: '2',
    3: '3',
    4: '4',
    6: '6',
    8: '8',
    12: '12'
  };
  reGenerateArray(count: number): void {
    this.array = new Array(count);
  }
}
```

### 其他属性的响应式

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `nzXs` `nzSm` `nzMd` `nzLg` `nzXl` `nzXXl` 属性中来使用。

其中 `nzXs="6"` 相当于 `[nzXs]="{ span: 6 }"`。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-responsive-more',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col [nzXs]="{ span: 5, offset: 1 }" [nzLg]="{ span: 6, offset: 2 }">Col</div>
      <div nz-col [nzXs]="{ span: 11, offset: 1 }" [nzLg]="{ span: 6, offset: 2 }">Col</div>
      <div nz-col [nzXs]="{ span: 5, offset: 1 }" [nzLg]="{ span: 6, offset: 2 }">Col</div>
    </div>
  `
})
export class NzDemoGridResponsiveMoreComponent {}
```

### 响应式布局

参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设七个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl` `xxxl`。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-responsive',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col nzXs="2" nzSm="4" nzMd="6" nzLg="8" nzXl="10">Col</div>
      <div nz-col nzXs="20" nzSm="16" nzMd="12" nzLg="8" nzXl="4">Col</div>
      <div nz-col nzXs="2" nzSm="4" nzMd="6" nzLg="8" nzXl="10">Col</div>
    </div>
  `
})
export class NzDemoGridResponsiveComponent {}
```

### 栅格排序

列排序。

通过使用 `nzPush` 和 `nzPull` 类就可以很容易的改变列（column）的顺序。

```typescript
import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-sort',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col [nzSpan]="18" [nzPush]="6">col-18 col-push-6</div>
      <div nz-col [nzSpan]="6" [nzPull]="18">col-6 col-pull-18</div>
    </div>
  `
})
export class NzDemoGridSortComponent {}
```
