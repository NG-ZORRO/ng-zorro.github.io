---
category: Components
type: Layout
cols: 1
title: Grid
tag: updated
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mfJeS6cqZrEAAAAAAAAAAAAADrJ8AQ/original
description: 24 Grids System。
---

## Design concept

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

In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections.

We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.

## Outline

In the grid system, we define the frame outside the information area based on `row` and `column`, to ensure that every area can have stable arrangement.

Following is a brief look at how it works:

- Establish a set of `column` in the horizontal space defined by `row` (abbreviated col)
- Your content elements should be placed directly in the `col`, and only `col` should be placed directly in `row`
- The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by `<div nz-col [nzSpan]="8" />`.
- If the sum of `col` spans in a `row` are more than 24, then the overflowing `col` as a whole will start a new line arrangement.

Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using `order`.

Layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.

## API

### [nz-row]

| Property      | Description                                                                                                                                                                                                                                                                          | Type                                                                                            | Default | Version                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ------- | ------------------------- |
| `[nzAlign]`   | The vertical alignment                                                                                                                                                                                                                                                               | `'top' \| 'middle' \| 'bottom' \| 'stretch' \| object`                                          | -       | responsive object: 21.3.0 |
| `[nzGutter]`  | Spacing between grids, could be a [string CSS units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units) or a object like `{ xs: 8, sm: 16, md: 24}`. Or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]` | `string \| number \| object \| array`                                                           | `0`     | string CSS units: 21.3.0  |
| `[nzJustify]` | Horizontal arrangement                                                                                                                                                                                                                                                               | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly' \| object` | -       | responsive object: 21.3.0 |
| `[nzWrap]`    | Auto wrap line                                                                                                                                                                                                                                                                       | `boolean`                                                                                       | `true`  | 21.3.0                    |

### [nz-col]

| Property     | Description                                                                                            | Type               | Default | Version |
| ------------ | ------------------------------------------------------------------------------------------------------ | ------------------ | ------- | ------- |
| `[nzFlex]`   | Flex layout style                                                                                      | `string \| number` | -       |         |
| `[nzOffset]` | The number of cells to offset Col from the left                                                        | `number`           | `0`     |         |
| `[nzOrder]`  | Raster order                                                                                           | `number`           | `0`     |         |
| `[nzPull]`   | The number of cells that raster is moved to the left                                                   | `number`           | `0`     |         |
| `[nzPush]`   | The number of cells that raster is moved to the right                                                  | `number`           | `0`     |         |
| `[nzSpan]`   | Raster number of cells to occupy, 0 corresponds to `display: none`                                     | `number`           | -       |         |
| `[nzXs]`     | `screen < 576px` and also default setting, could be a `span` value or an object containing above props | `number \| object` | -       |         |
| `[nzSm]`     | `screen ≥ 576px`, could be a `span` value or an object containing above props                          | `number \| object` | -       |         |
| `[nzMd]`     | `screen ≥ 768px`, could be a `span` value or an object containing above props                          | `number \| object` | -       |         |
| `[nzLg]`     | `screen ≥ 992px`, could be a `span` value or an object containing above props                          | `number \| object` | -       |         |
| `[nzXl]`     | `screen ≥ 1200px`, could be a `span` value or an object containing above props                         | `number \| object` | -       |         |
| `[nzXXl]`    | `screen ≥ 1600px`, could be a `span` value or an object containing above props                         | `number \| object` | -       |         |
| `[nzXXXl]`   | `screen ≥ 1920px`, could be a `span` value or an object containing above props                         | `number \| object` | -       | 21.3.0  |

The breakpoints of responsive grid follow [BootStrap 4 media queries rules](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)(not including `occasionally part`).

---

## Examples

### Basic Grid

From the stack to the horizontal arrangement.

You can create a basic grid system by using a single set of `nz-row` and `nz-col` grid assembly, all of the columns (`nz-col`) must be placed in `nz-row`.

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

### Alignment

Child elements vertically aligned.

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

### Order

To change the element sort by `nzOrder`.

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

### Flex Stretch

`nz-col` provides `nzFlex` prop to support fill rest.

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

### Typesetting

Child elements depending on the value of the `start`,` center`, `end`,` space-between`, `space-around`, `space-evenly`, which are defined in its parent node layout mode.

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

### Grid Gutter

You can use the `nzGutter` property of `nzRow` as grid spacing, we recommend set it to `(16 + 8n) px`. (`n` stands for natural number.)

You can set it to a object like `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 }` for responsive design.

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

### Column offset

`nzOffset` can set the column to the right side. For example, using `nzOffset = "4"` can set the element shifted to the right four columns width.

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

### Playground

A simple playground for column count and gutter.

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

### More responsive

`span` `pull` `push` `offset` `order` property can be embedded into `nzXs` `nzSm` `nzMd` `nzLg` `nzXl` `nzXXl` properties to use,
where `nzXs="6"` is equivalent to `[nzXs]="{ span: 6 }"`.

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

### Responsive

Referring to the Bootstrap [responsive design](http://getbootstrap.com/css/#grid-media-queries), here preset seven dimensions: `xs` `sm` `md` `lg` `xl` `xxl` `xxxl`.

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

### Grid sort

By using `nzPush` and `nzPull` class you can easily change column order.

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
