---
category: Components
type: 布局
subtitle: 间距
title: Space
cols: 1
cover: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg'
description: 设置组件之间的间距。
---

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。
- 需要表单组件之间紧凑连接且合并边框时，使用 `<nz-space-compact>`。

与 Flex 组件的区别：

- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

## API

### nz-space

| 参数            | 说明                                   | 类型                                         | 默认值         | 支持全局配置 |
| --------------- | -------------------------------------- | -------------------------------------------- | -------------- | ------------ |
| `[nzSize]`      | 间距大小                               | `NzSpaceSize \| NzSpaceSize[]`               | `'small'`      | ✅           |
| `[nzDirection]` | 间距方向                               | `'vertical' \| 'horizontal'`                 | `'horizontal'` |              |
| `[nzAlign]`     | 对齐方式                               | `'start' \| 'end' \| 'baseline' \| 'center'` | -              |              |
| `[nzWrap]`      | 是否自动换行，仅在 `horizontal` 时有效 | `boolean`                                    | `false`        |              |
| `[nzSplit]`     | 设置分隔符                             | `TemplateRef \| string`                      | -              |              |

#### Interfaces

```ts
type NzSpaceSize = 'small' | 'middle' | 'large' | number;
```

### nz-space-compact

需要表单组件之间紧凑连接且合并边框时，使用 `<nz-space-compact>`。支持的组件有：

- Button
- Cascader
- DatePicker
- Input
- Select
- TimePicker
- TreeSelect

| 参数            | 说明                         | 类型                              | 默认值         | 支持全局配置 |
| --------------- | ---------------------------- | --------------------------------- | -------------- | ------------ |
| `[nzBlock]`     | 将宽度调整为父元素宽度的选项 | `boolean`                         | `false`        |              |
| `[nzDirection]` | 指定排列方向                 | `'vertical' \| 'horizontal'`      | `'horizontal'` |              |
| `[nzSize]`      | 子组件大小                   | `'large' \| 'small' \| 'default'` | `'default'`    |              |

---

## 代码示例

### 对齐

设置对齐模式。

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

### 基本用法

相邻组件水平间距。

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

### 垂直方向紧凑布局

垂直方向的紧凑布局，目前仅支持 Button 组合。

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

### Button 紧凑布局

Button 组件紧凑排列的示例。

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

### 紧凑布局组合

使用 `<nz-space-compact>` 让表单组件之间紧凑连接且合并边框。

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

### 自定义尺寸

自定义间距大小。

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

### 间距大小

间距预设大、中、小三种大小。

通过设置 `nzSize` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `nzSize`，则间距为小。

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

### 分隔符

相邻组件分隔符。

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

### 垂直间距

相邻组件垂直间距。

可以设置 `width: 100%` 独占一行。

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

### 换行

自动换行。

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
