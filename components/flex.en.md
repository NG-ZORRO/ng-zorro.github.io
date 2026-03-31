---
category: Components
type: Layout
cols: 1
title: Flex
cover: 'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SMzgSJZE_AwAAAAAAAAAAAAADrJ8AQ/original'
tag: 17.1.0
description: A flex layout container for alignment.
---

## When To Use

- Good for setting spacing between elements.
- Suitable for setting various horizontal and vertical alignments.

### Difference with Space component

- Space is used to set the spacing between inline elements. It will add a wrapper element for each child element for
  inline alignment. Suitable for equidistant arrangement of multiple child elements in rows and columns.
- Flex is used to set the layout of block-level elements. It does not add a wrapper element. Suitable for layout of
  child elements in vertical or horizontal direction, and provides more flexibility and control.

## API

### [nz-flex]

| Property       | Description                                                                | Type                                                                                          | Default    |
| -------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| `[nzVertical]` | Is direction of the flex vertical, use `flex-direction: column`            | `boolean`                                                                                     | `false`    |
| `[nzJustify]`  | Sets the alignment of elements in the direction of the main axis           | reference [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | `'normal'` |
| `[nzAlign]`    | Sets the alignment of elements in the direction of the cross axis          | reference [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)         | `'normal'` |
| `[nzGap]`      | Sets the gap between items                                                 | `'small' \| 'middle' \| 'large' \| number \| string`                                          | `0`        |
| `[nzWrap]`     | Set whether the element is displayed in a single line or in multiple lines | reference [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)             | `'nowrap'` |
| `[nzFlex]`     | Flex CSS shorthand properties                                              | reference [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)                       | `'unset'`  |

---

## Examples

### Align

Set align.

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

### Basic

The basic usage.

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

### Combination

Nesting can achieve more complex layouts.

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

### Gap

Set the `gap` between elements, which has three preset sizes: `small`, `middle`, `large`, You can also customize the gap size.

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

### Wrap

Wrap line.

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
