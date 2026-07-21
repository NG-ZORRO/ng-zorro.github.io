---
category: Components
subtitle: 分段控制器
type: 数据展示
title: Segmented
cover: 'https://gw.alipayobjects.com/zos/bmw-prod/a3ff040f-24ba-43e0-92e9-c845df1612ad.svg'
description: 用于展示多个选项并允许用户选择其中单个选项。
---

## 何时使用

- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。

## API

### nz-segmented

| 参数              | 说明                                      | 类型                                                                                                           | 默认值    | 全局配置 | 版本   |
| ----------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------- | -------- | ------ |
| `[nzBlock]`       | 将宽度调整为父元素宽度的选项              | `boolean`                                                                                                      | `false`   |          |
| `[nzDisabled]`    | 是否禁用                                  | `boolean`                                                                                                      | `false`   |          |
| `[nzOptions]`     | 数据化配置选项内容                        | `string[] \| number[] \| Array<{ label: string; value: string \| number; icon: string; disabled?: boolean; }>` | -         |          |
| `[nzSize]`        | 控件尺寸                                  | `large \| default \| small`                                                                                    | -         | ✅       |
| `[nzShape]`       | 形状                                      | `default \| round`                                                                                             | `default` | -        | 20.3.0 |
| `[nzVertical]`    | 排列方向                                  | `boolean`                                                                                                      | `false`   | -        | 20.2.0 |
| `[nzName]`        | 所有 `input[type="radio"]` 的 `name` 属性 | `string`                                                                                                       | -         |          | 20.3.0 |
| `[ngModel]`       | 当前选中项目的 value                      | `string \| number`                                                                                             | -         |          |
| `(nzValueChange)` | 当前选中项目变化时触发回调                | `EventEmitter<string \| number>`                                                                               | -         |          |
| `(ngModelChange)` | 当前选中项目变化时触发回调                | `EventEmitter<string \| number>`                                                                               | -         |          |

### label[nz-segmented-item]

| 参数           | 说明     | 类型               | 默认值  | 全局配置 |
| -------------- | -------- | ------------------ | ------- | -------- |
| `[nzIcon]`     | 图标     | `string`           | -       |          |
| `[nzValue]`    | 值       | `string \| number` | -       |          |
| `[nzDisabled]` | 是否禁用 | `boolean`          | `false` |          |

---

## 代码示例

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-basic',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" (nzValueChange)="handleValueChange($event)" />`
})
export class NzDemoSegmentedBasicComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleValueChange(e: string | number): void {
    console.log(e);
  }
}
```

### Block 分段选择器

`nzBlock` 属性使其适合父元素宽度。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-block',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" [nzBlock]="true" />`
})
export class NzDemoSegmentedBlockComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
}
```

### 自定义渲染

自定义渲染每一个 Segmented Item。

```typescript
import { Component } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-custom',
  imports: [NzAvatarModule, NzSegmentedModule],
  template: `
    <nz-segmented>
      <label nz-segmented-item nzValue="user1">
        <nz-avatar nzSrc="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <div>User 1</div>
      </label>
      <label nz-segmented-item nzValue="user2">
        <nz-avatar nzText="K" [style.background]="'#f56a00'" />
        <div>User 2</div>
      </label>
      <label nz-segmented-item nzValue="user3">
        <nz-avatar nzIcon="user" [style.background]="'#87d068'" />
        <div>User 3</div>
      </label>
    </nz-segmented>

    <br />
    <br />

    <nz-segmented>
      <label nz-segmented-item nzValue="spring">
        <div>Spring</div>
        <div>Jan-Mar</div>
      </label>
      <label nz-segmented-item nzValue="summer">
        <div>Summer</div>
        <div>Apr-Jun</div>
      </label>
      <label nz-segmented-item nzValue="autumn">
        <div>Autumn</div>
        <div>Jul-Sept</div>
      </label>
      <label nz-segmented-item nzValue="winter">
        <div>Winter</div>
        <div>Oct-Dec</div>
      </label>
    </nz-segmented>
  `,
  styles: `
    :host ::ng-deep .ant-segmented-item-label {
      margin: 4px;
    }
  `
})
export class NzDemoSegmentedCustomComponent {}
```

### 不可用

Segmented 不可用。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-disabled',
  imports: [NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="['Map', 'Transit', 'Satellite']" nzDisabled />
    <br />
    <nz-segmented [nzOptions]="options" />
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedDisabledComponent {
  options = [
    'Daily',
    { label: 'Weekly', value: 'Weekly', disabled: true },
    'Monthly',
    { label: 'Quarterly', value: 'Quarterly', disabled: true },
    'Yearly'
  ];
}
```

### 动态数据

动态加载数据。

```typescript
import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

const defaultOptions = ['Daily', 'Weekly', 'Monthly'];

@Component({
  selector: 'nz-demo-segmented-dynamic',
  imports: [NzButtonModule, NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="options" />
    <br />
    <button nz-button nzType="primary" [disabled]="moreLoaded" (click)="handleLoadMore()"> Load more options </button>
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedDynamicComponent {
  options = [...defaultOptions];

  moreLoaded = false;

  handleLoadMore(): void {
    this.moreLoaded = true;
    this.options = [...defaultOptions, 'Quarterly', 'Yearly'];
  }
}
```

### 设置图标

给 Segmented Item 设置 Icon。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-icon',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" />`
})
export class NzDemoSegmentedIconComponent {
  options = [
    { label: 'List', value: 'List', icon: 'bars' },
    { label: 'Kanban', value: 'Kanban', icon: 'appstore' }
  ];
}
```

### 胶囊形状

胶囊型的 Segmented。

```typescript
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-shape',
  imports: [NzSegmentedModule, FormsModule],
  template: `
    <nz-segmented [nzOptions]="optionsSize" [(ngModel)]="currentSize" />
    <nz-segmented [nzOptions]="options" nzShape="round" [nzSize]="currentSize()" />
  `,
  styles: `
    nz-segmented:first-child {
      display: block;
      width: fit-content;
      margin-bottom: 16px;
    }
  `
})
export class NzDemoSegmentedShapeComponent {
  currentSize = model<NzSizeLDSType>('default');

  optionsSize = [
    { value: 'small', label: 'Small' },
    { value: 'default', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];
  options = [
    { value: 'List', icon: 'bars' },
    { value: 'Kanban', icon: 'appstore' }
  ];
}
```

### 三种大小

我们为 Segmented 组件定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-size',
  imports: [NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="options" nzSize="small" />
    <br />
    <nz-segmented [nzOptions]="options" />
    <br />
    <nz-segmented [nzOptions]="options" nzSize="large" />
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedSizeComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
}
```

### 受控模式

通过 ngModel 指定选中的 value

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-value',
  imports: [FormsModule, NzSegmentedModule],
  template: `
    <nz-segmented [nzOptions]="options" [(ngModel)]="selectedValue" (ngModelChange)="handleModelChange($event)" />
    <br />
    Selected value: {{ selectedValue }}
  `,
  styles: `
    .ant-segmented {
      margin-bottom: 10px;
    }
  `
})
export class NzDemoSegmentedValueComponent {
  selectedValue = 'Weekly';
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleModelChange(value: string): void {
    console.log(value);
  }
}
```

### 垂直方向

垂直方向。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-vertical',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" nzVertical />`
})
export class NzDemoSegmentedVerticalComponent {
  options = [
    { value: 'List', icon: 'bars' },
    { value: 'Kanban', icon: 'appstore' }
  ];
}
```

### 只设置图标

在 Segmented Item 选项中只设置 Icon。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule, NzSegmentedOptions } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-with-icon-only',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" />`
})
export class NzDemoSegmentedWithIconOnlyComponent {
  options: NzSegmentedOptions = [
    { value: 'List', icon: 'bars' },
    { value: 'Kanban', icon: 'appstore' }
  ];
}
```

### 配合 name 使用

可以为配置 `nzName` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把分段控制器下的 input 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。

```typescript
import { Component } from '@angular/core';

import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-segmented-with-name',
  imports: [NzSegmentedModule],
  template: `<nz-segmented [nzOptions]="options" (nzValueChange)="handleValueChange($event)" nzName="group" />`
})
export class NzDemoSegmentedWithNameComponent {
  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleValueChange(e: string | number): void {
    console.log(e);
  }
}
```
