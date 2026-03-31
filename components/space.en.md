---
category: Components
type: Layout
cols: 1
title: Space
cover: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg'
description: Set components spacing.
---

## When To Use

- Avoid components clinging together and set a unified space.
- Use `<nz-space-compact>` when child form components are compactly connected and the border is collapsed.

The difference with Flex component is:

- Space is used to set the spacing between inline elements. It will add a wrapper element for each child element for inline alignment. Suitable for equidistant arrangement of multiple child elements in rows and columns.
- Flex is used to set the layout of block-level elements. It does not add a wrapper element. Suitable for layout of child elements in vertical or horizontal direction, and provides more flexibility and control.

## API

### nz-space

| Property        | Description                                 | Type                                         | Default        | Global Config |
| --------------- | ------------------------------------------- | -------------------------------------------- | -------------- | ------------- |
| `[nzSize]`      | The space size                              | `NzSpaceSize \| NzSpaceSize[]`               | `'small'`      | ✅            |
| `[nzDirection]` | The space direction                         | `'vertical' \| 'horizontal'`                 | `'horizontal'` |               |
| `[nzAlign]`     | Align items                                 | `'start' \| 'end' \| 'baseline' \| 'center'` | -              |               |
| `[nzWrap]`      | Auto wrap line, when `horizontal` effective | `boolean`                                    | `false`        |               |
| `[nzSplit]`     | Set split                                   | `TemplateRef \| string`                      | -              |               |

#### Interfaces

```ts
type NzSpaceSize = 'small' | 'middle' | 'large' | number;
```

### nz-space-compact

Use `<nz-space-compact>` when child form components are compactly connected and the border is collapsed. The supported components are:

- Button
- Cascader
- DatePicker
- Input
- Select
- TimePicker
- TreeSelect

| Property        | Description                                | Type                              | Default        | Global Config |
| --------------- | ------------------------------------------ | --------------------------------- | -------------- | ------------- |
| `[nzBlock]`     | Option to fit width to its parent\'s width | `boolean`                         | `false`        |               |
| `[nzDirection]` | Set direction of layout                    | `'vertical' \| 'horizontal'`      | `'horizontal'` |               |
| `[nzSize]`      | Set child component size                   | `'large' \| 'small' \| 'default'` | `'default'`    |               |

---

## Examples

### Align

Config item align.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-space-align',
  imports: [NzButtonModule, NzSpaceModule],
  template: `
    <div class="space-align-container">
      <div nz-space nzAlign="center" class="space-align-block">
        <ng-container *nzSpaceItem>center</ng-container>
        <button *nzSpaceItem nz-button nzType="primary">Button</button>
        <span *nzSpaceItem class="mock-block">Block</span>
      </div>

      <div nz-space nzAlign="start" class="space-align-block">
        <ng-container *nzSpaceItem>start</ng-container>
        <button *nzSpaceItem nz-button nzType="primary">Button</button>
        <span *nzSpaceItem class="mock-block">Block</span>
      </div>

      <div nz-space nzAlign="end" class="space-align-block">
        <ng-container *nzSpaceItem>end</ng-container>
        <button *nzSpaceItem nz-button nzType="primary">Button</button>
        <span *nzSpaceItem class="mock-block">Block</span>
      </div>

      <div nz-space nzAlign="baseline" class="space-align-block">
        <ng-container *nzSpaceItem>baseline</ng-container>
        <button *nzSpaceItem nz-button nzType="primary">Button</button>
        <span *nzSpaceItem class="mock-block">Block</span>
      </div>
    </div>
  `,
  styles: `
    .space-align-container {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .space-align-block {
      margin: 8px 4px;
      border: 1px solid #40a9ff;
      padding: 4px;
      flex: none;
    }
    .space-align-block .mock-block {
      display: inline-block;
      padding: 32px 8px 16px;
      background: rgba(150, 150, 150, 0.2);
    }
  `
})
export class NzDemoSpaceAlignComponent {}
```

### Basic Usage

Crowded components horizontal spacing.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'nz-demo-space-basic',
  imports: [NzButtonModule, NzIconModule, NzSpaceModule, NzPopconfirmModule, NzUploadModule],
  template: `
    <nz-space>
      <button *nzSpaceItem nz-button nzType="primary">Button</button>
      <nz-upload *nzSpaceItem nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76">
        <button nz-button>
          <nz-icon nzType="upload" />
          Click to Upload
        </button>
      </nz-upload>
      <button
        *nzSpaceItem
        nz-button
        nz-popconfirm
        nzOkText="Yes"
        nzCancelText="No"
        nzPopconfirmTitle="Are you sure delete this task?"
      >
        Confirm
      </button>
    </nz-space>
  `
})
export class NzDemoSpaceBasicComponent {}
```

### Vertical Compact Mode

Vertical Mode for Space.Compact, support Button only.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-space-compact-button-vertical',
  imports: [NzSpaceModule, NzButtonModule],
  template: `
    <nz-space>
      <nz-space-compact *nzSpaceItem nzDirection="vertical">
        <button nz-button>Button 1</button>
        <button nz-button>Button 2</button>
        <button nz-button>Button 3</button>
      </nz-space-compact>
      <nz-space-compact *nzSpaceItem nzDirection="vertical">
        <button nz-button nzType="dashed">Button 1</button>
        <button nz-button nzType="dashed">Button 2</button>
        <button nz-button nzType="dashed">Button 3</button>
      </nz-space-compact>
      <nz-space-compact *nzSpaceItem nzDirection="vertical">
        <button nz-button nzType="primary">Button 1</button>
        <button nz-button nzType="primary">Button 2</button>
        <button nz-button nzType="primary">Button 3</button>
      </nz-space-compact>
    </nz-space>
  `
})
export class NzDemoSpaceCompactButtonVerticalComponent {}
```

### Button Compact Mode

Button component compact example.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-demo-space-compact-buttons',
  imports: [NzSpaceModule, NzButtonModule, NzIconModule, NzDropdownModule, NzTooltipModule],
  template: `
    <nz-space-compact nzBlock>
      <button nz-button nz-tooltip nzTooltipTitle="Like">
        <nz-icon nzType="like" />
      </button>
      <button nz-button nz-tooltip nzTooltipTitle="Comment">
        <nz-icon nzType="comment" />
      </button>
      <button nz-button nz-tooltip nzTooltipTitle="Star">
        <nz-icon nzType="star" />
      </button>
      <button nz-button nz-tooltip nzTooltipTitle="Heart">
        <nz-icon nzType="heart" />
      </button>
      <button nz-button nz-tooltip nzTooltipTitle="Share">
        <nz-icon nzType="share-alt" />
      </button>
      <button nz-button nz-tooltip nzTooltipTitle="Download">
        <nz-icon nzType="download" />
      </button>
      <nz-dropdown-menu #menu>
        <ul nz-menu>
          <li nz-menu-item>
            <a>1st item</a>
          </li>
          <li nz-menu-item>
            <a>2nd item</a>
          </li>
          <li nz-menu-item>
            <a>3rd item</a>
          </li>
        </ul>
      </nz-dropdown-menu>
      <button nz-button nz-dropdown [nzDropdownMenu]="menu">
        <nz-icon nzType="ellipsis" />
      </button>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <button nz-button nzType="primary">Button 1</button>
      <button nz-button nzType="primary">Button 2</button>
      <button nz-button nzType="primary">Button 3</button>
      <button nz-button nzType="primary">Button 4</button>
      <button nz-button nzType="primary" disabled nz-tooltip nzTooltipTitle="Tooltip">
        <nz-icon nzType="download" />
      </button>
      <button nz-button nzType="primary" nz-tooltip nzTooltipTitle="Tooltip">
        <nz-icon nzType="download" />
      </button>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <button nz-button>Button 1</button>
      <button nz-button>Button 2</button>
      <button nz-button>Button 3</button>
      <button nz-button disabled nz-tooltip nzTooltipTitle="Tooltip">
        <nz-icon nzType="download" />
      </button>
      <button nz-button nz-tooltip nzTooltipTitle="Tooltip">
        <nz-icon nzType="download" />
      </button>
      <button nz-button nzType="primary">Button 4</button>
      <nz-dropdown-menu #menu>
        <ul nz-menu>
          <li nz-menu-item>
            <a>1st item</a>
          </li>
          <li nz-menu-item>
            <a>2nd item</a>
          </li>
          <li nz-menu-item>
            <a>3rd item</a>
          </li>
        </ul>
      </nz-dropdown-menu>
      <button nz-button nzType="primary" nz-dropdown [nzDropdownMenu]="menu">
        <nz-icon nzType="ellipsis" />
      </button>
    </nz-space-compact>
  `
})
export class NzDemoSpaceCompactButtonsComponent {}
```

### Compact Mode

Compact Mode for form component.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'nz-demo-space-compact',
  imports: [
    NzSpaceModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzCascaderModule,
    NzTreeSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzAutocompleteModule,
    NzTooltipModule,
    FormsModule
  ],
  template: `
    <nz-space-compact nzBlock>
      <input nz-input value="0571" [style.width.%]="20" />
      <input nz-input value="26888888" [style.width.%]="30" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock nzSize="small">
      <input nz-input value="https://ng.ant.design" [style.width]="'calc(100% - 200px)'" />
      <button nz-button nzType="primary">Submit</button>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <input nz-input value="https://ng.ant.design" [style.width]="'calc(100% - 200px)'" />
      <button nz-button nzType="primary">Submit</button>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <input nz-input value="git@github.com:NG-ZORRO/ng-zorro-antd.git" [style.width]="'calc(100% - 200px)'" />
      <button nz-button nz-tooltip nzTooltipTitle="copy git url">
        <nz-icon nzType="copy" />
      </button>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-select ngModel="Zhejianggggg">
        <nz-option nzLabel="Zhejianggggg" nzValue="Zhejianggggg" />
        <nz-option nzLabel="Jiangsu" nzValue="Jiangsu" />
      </nz-select>
      <input nz-input value="Xihu District, Hangzhou" [style.width.%]="50" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-input-search [style.width.%]="30">
        <input nz-input value="0571" />
      </nz-input-search>
      <nz-input-search [style.width.%]="50">
        <input nz-input value="26888888" />
      </nz-input-search>
      <nz-input-search [style.width.%]="20">
        <input nz-input value="+1" />
      </nz-input-search>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-select nzMode="multiple" [ngModel]="['Zhejianggggg']" [style.width.%]="50">
        <nz-option nzLabel="Zhejianggggg" nzValue="Zhejianggggg" />
        <nz-option nzLabel="Jiangsu" nzValue="Jiangsu" />
      </nz-select>
      <input nz-input value="Xihu District, Hangzhou" [style.width.%]="50" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-select ngModel="Option1">
        <nz-option nzLabel="Option1" nzValue="Option1" />
        <nz-option nzLabel="Option2" nzValue="Option2" />
      </nz-select>
      <input nz-input value="input content" [style.width.%]="50" />
      <nz-input-number [ngModel]="12" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <input nz-input value="input content" [style.width.%]="50" />
      <nz-date-picker [style.width.%]="50" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-range-picker [style.width.%]="70" />
      <input nz-input value="input content" [style.width.%]="30" />
      <button nz-button nzType="primary">查询</button>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <input nz-input value="input content" [style.width.%]="30" />
      <nz-range-picker [style.width.%]="70" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-select ngModel="Option1-1">
        <nz-option nzLabel="Option1-1" nzValue="Option1-1" />
        <nz-option nzLabel="Option2-1" nzValue="Option2-1" />
      </nz-select>
      <nz-select ngModel="Option1-2">
        <nz-option nzLabel="Option1-2" nzValue="Option1-2" />
        <nz-option nzLabel="Option2-2" nzValue="Option2-2" />
      </nz-select>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-select ngModel="1">
        <nz-option nzLabel="Between" nzValue="1" />
        <nz-option nzLabel="Except" nzValue="2" />
      </nz-select>
      <input nz-input placeholder="Minimum" style="width: 100px; text-align: center" />
      <input
        nz-input
        class="site-input-split"
        style="
          width: 30px;
          border-left: 0;
          border-right: 0;
          pointer-events: none
        "
        placeholder="~"
        disabled
      />
      <input nz-input class="site-input-right" style="width: 100px; text-align: center" placeholder="Maximum" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-select ngModel="Sign Up" [style.width.%]="30">
        <nz-option nzLabel="Sign Up" nzValue="Sign Up" />
        <nz-option nzLabel="Sign In" nzValue="Sign In" />
      </nz-select>
      <nz-autocomplete #auto [nzDataSource]="['text 1', 'text 2']" />
      <input nz-input placeholder="Email" [nzAutocomplete]="auto" [style.width.%]="70" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-time-picker [style.width.%]="70" />
      <nz-cascader [nzOptions]="cascaderOptions" nzPlaceholder="Select Address" [style.width.%]="70" />
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-tree-select
        [nzNodes]="nodes"
        nzShowSearch
        nzPlaceHolder="Please select"
        ngModel="10010"
        nzDefaultExpandAll
        [style.width.%]="60"
      />
      <button nz-button nzType="primary">Submit</button>
    </nz-space-compact>
    <br />
    <nz-space-compact nzBlock>
      <nz-input-wrapper nzAddOnBefore="Http://" nzAddOnAfter=".com" [style.width.%]="50">
        <input nz-input placeholder="input here" />
      </nz-input-wrapper>
      <nz-input-number>
        <span nzInputPrefix>$</span>
      </nz-input-number>
      <nz-input-number>
        <span nzInputAddonBefore>$</span>
      </nz-input-number>
    </nz-space-compact>
  `,
  styles: `
    .site-input-split {
      background-color: #fff;
    }

    .site-input-right:not(.ant-input-rtl) {
      border-left-width: 0;
    }

    .site-input-right:not(.ant-input-rtl):hover,
    .site-input-right:not(.ant-input-rtl):focus {
      border-left-width: 1px;
    }

    .site-input-right.ant-input-rtl {
      border-right-width: 0;
    }

    .site-input-right.ant-input-rtl:hover,
    .site-input-right.ant-input-rtl:focus {
      border-right-width: 1px;
    }
  `
})
export class NzDemoSpaceCompactComponent {
  cascaderOptions: NzCascaderOption[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
}
```

### Customize Size

Custom spacing size.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-space-customize',
  imports: [FormsModule, NzButtonModule, NzSpaceModule, NzSliderModule],
  template: `
    <nz-slider [(ngModel)]="size" />
    <nz-space [nzSize]="size">
      <button *nzSpaceItem nz-button nzType="primary">Button</button>
      <button *nzSpaceItem nz-button nzType="default">Default</button>
      <button *nzSpaceItem nz-button nzType="dashed">Dashed</button>
      <a *nzSpaceItem nz-button nzType="link">Link</a>
    </nz-space>
  `
})
export class NzDemoSpaceCustomizeComponent {
  size = 8;
}
```

### Space Size

`large`, `middle` and `small` preset sizes.

Set the `nzSize` to `large` and `middle` by setting size to large and middle respectively. If `size` is not set, the spacing is `small`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule, NzSpaceSize } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-space-size',
  imports: [FormsModule, NzButtonModule, NzRadioModule, NzSpaceModule],
  template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio nzValue="small">Small</label>
      <label nz-radio nzValue="middle">Middle</label>
      <label nz-radio nzValue="large">Large</label>
    </nz-radio-group>
    <nz-space [nzSize]="size">
      <button *nzSpaceItem nz-button nzType="primary">Button</button>
      <button *nzSpaceItem nz-button nzType="default">Default</button>
      <button *nzSpaceItem nz-button nzType="dashed">Dashed</button>
      <a *nzSpaceItem nz-button nzType="link">Link</a>
    </nz-space>
  `
})
export class NzDemoSpaceSizeComponent {
  size: NzSpaceSize = 'small';
}
```

### Split

Crowded components split.

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-space-split',
  imports: [NzDividerModule, NzSpaceModule],
  template: `
    <nz-space [nzSplit]="spaceSplit">
      <ng-template #spaceSplit>
        <nz-divider nzType="vertical" />
      </ng-template>

      <a *nzSpaceItem>Link</a>
      <a *nzSpaceItem>Link</a>
      <a *nzSpaceItem>Link</a>
    </nz-space>
  `
})
export class NzDemoSpaceSplitComponent {
  size = 8;
}
```

### Vertical Space

Crowded components vertical spacing.

```typescript
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-space-vertical',
  imports: [NzCardModule, NzSpaceModule],
  template: `
    <nz-space nzDirection="vertical">
      <nz-card *nzSpaceItem nzTitle="Card" style="width: 300px">
        <p>Card content</p>
        <p>Card content</p>
      </nz-card>
      <nz-card *nzSpaceItem nzTitle="Card" style="width: 300px">
        <p>Card content</p>
        <p>Card content</p>
      </nz-card>
    </nz-space>
  `
})
export class NzDemoSpaceVerticalComponent {}
```

### Wrap

Auto wrap line.

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-space-wrap',
  imports: [NzButtonModule, NzSpaceModule],
  template: `
    <nz-space [nzSize]="[8, 16]" nzWrap>
      @for (item of items; track $index) {
        <button *nzSpaceItem nz-button>Button</button>
      }
    </nz-space>
  `
})
export class NzDemoSpaceWrapComponent {
  items = new Array(20).fill(null);
}
```
