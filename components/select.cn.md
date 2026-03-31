---
category: Components
subtitle: 选择器
type: 数据录入
title: Select
cover: 'https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg'
description: 下拉选择器。
---

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/components/radio/zh) 是更好的选择。
- 如果你在寻找一个可输可选的输入框，那你可能需要 [AutoComplete](/components/auto-complete/zh)。

## API

```html
<nz-select>
  <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
</nz-select>
```

### nz-select

| 参数                           | 说明                                                                                                                                             | 类型                                                                                                                                                                      | 默认值                          | 全局配置 | 版本   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------- | ------ |
| `[nzId]`                       | 组件内部 input 的 id 值                                                                                                                          | `string`                                                                                                                                                                  | -                               |
| `[ngModel]`                    | 当前选中的 nz-option 的 nzValue 值，可双向绑定，当 `nzMode` 为 `multiple` 或 `tags` 时，ngModel 为数组                                           | `any \| any[]`                                                                                                                                                            | -                               |
| `[compareWith]`                | 与 [SelectControlValueAccessor](https://angular.cn/api/forms/SelectControlValueAccessor) 相同                                                    | `(o1: any, o2: any) => boolean`                                                                                                                                           | `(o1: any, o2: any) => o1===o2` |
| `[nzAutoClearSearchValue]`     | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效。                                                                           | `boolean`                                                                                                                                                                 | `true`                          |
| `[nzAllowClear]`               | 支持清除                                                                                                                                         | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzBackdrop]`                 | 浮层是否应带有背景板                                                                                                                             | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzVariant]`                  | 形态变体                                                                                                                                         | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`                                                                                                                  | `'outlined'`                    | ✅       | 20.0.0 |
| `[nzOpen]`                     | 下拉菜单是否打开，可双向绑定                                                                                                                     | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzAutoFocus]`                | 默认获取焦点                                                                                                                                     | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzDisabled]`                 | 是否禁用                                                                                                                                         | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzDropdownClassName]`        | 下拉菜单的 className 属性                                                                                                                        | `string \| string[]`                                                                                                                                                      | -                               |
| `[nzDropdownMatchSelectWidth]` | 下拉菜单和选择器同宽                                                                                                                             | `boolean`                                                                                                                                                                 | `true`                          |
| `[nzDropdownStyle]`            | 下拉菜单的 style 属性                                                                                                                            | `object`                                                                                                                                                                  | -                               |
| `[nzCustomTemplate]`           | 自定义选择框的 Template 内容                                                                                                                     | `TemplateRef<{ $implicit: NzOptionComponent }>`                                                                                                                           | -                               |
| `[nzServerSearch]`             | 是否使用服务端搜索，当为 true 时，将不再在前端对 nz-option 进行过滤                                                                              | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzFilterOption]`             | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | `(input?: string, option?: NzOptionComponent) => boolean;`                                                                                                                | -                               |
| `[nzMaxMultipleCount]`         | 最多选中多少个标签                                                                                                                               | `number`                                                                                                                                                                  | `Infinity`                      |
| `[nzMode]`                     | 设置 nz-select 的模式                                                                                                                            | `'multiple' \| 'tags' \| 'default'`                                                                                                                                       | `'default'`                     |
| `[nzNotFoundContent]`          | 当下拉列表为空时显示的内容                                                                                                                       | `string \| TemplateRef<void>`                                                                                                                                             | -                               |
| `[nzPlaceHolder]`              | 选择框默认文字                                                                                                                                   | `string`                                                                                                                                                                  | -                               |
| `[nzShowArrow]`                | 是否显示下拉小箭头                                                                                                                               | `boolean`                                                                                                                                                                 | 单选为 `true`，多选为 `false`   |
| `[nzShowSearch]`               | 使单选模式可搜索                                                                                                                                 | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzSize]`                     | 选择框大小                                                                                                                                       | `'large' \| 'small' \| 'default'`                                                                                                                                         | `'default'`                     |
| `[nzStatus]`                   | 设置校验状态                                                                                                                                     | `'error' \| 'warning'`                                                                                                                                                    | -                               |
| `[nzPreix]`                    | 自定义的选择框前缀                                                                                                                               | `TemplateRef<any> \| string`                                                                                                                                              | -                               |
| `[nzSuffixIcon]`               | 自定义的选择框后缀图标                                                                                                                           | `TemplateRef<any> \| string`                                                                                                                                              | -                               | ✅       |
| `[nzRemoveIcon]`               | 自定义的多选框清除图标                                                                                                                           | `TemplateRef<any>`                                                                                                                                                        | -                               |
| `[nzClearIcon]`                | 自定义的多选框清空图标                                                                                                                           | `TemplateRef<any>`                                                                                                                                                        | -                               |
| `[nzMenuItemSelectedIcon]`     | 自定义当前选中的条目图标                                                                                                                         | `TemplateRef<any>`                                                                                                                                                        | -                               |
| `[nzTokenSeparators]`          | 在 tags 和 multiple 模式下自动分词的分隔符                                                                                                       | `string[]`                                                                                                                                                                | `[]`                            |
| `[nzLoading]`                  | 加载中状态                                                                                                                                       | `boolean`                                                                                                                                                                 | `false`                         |
| `[nzMaxTagCount]`              | 最多显示多少个 tag                                                                                                                               | `number`                                                                                                                                                                  | -                               |
| `[nzMaxTagPlaceholder]`        | 隐藏 tag 时显示的内容                                                                                                                            | `TemplateRef<{ $implicit: any[] }>`                                                                                                                                       | -                               |
| `[nzOptions]`                  | option 列表，可以取代 nz-option，用法参见例子                                                                                                    | `Array<{ label: string \| number \| TemplateRef<any>; value: any; key?: string \| number; disabled?: boolean; hide?: boolean; groupLabel?: string \| TemplateRef<any>;}>` | -                               |
| `[nzOptionHeightPx]`           | 下拉菜单中每个 Option 的高度                                                                                                                     | `number`                                                                                                                                                                  | `32`                            | ✅       |
| `[nzOptionOverflowSize]`       | 下拉菜单中最多展示的 Option 个数，超出部分滚动                                                                                                   | `number`                                                                                                                                                                  | `8`                             |
| `[nzSelectOnTab]`              | 允许使用 TAB 键选择项目                                                                                                                          | `boolean`                                                                                                                                                                 | `false`                         |
| `(ngModelChange)`              | 选中的 nz-option 发生变化时，调用此函数                                                                                                          | `EventEmitter<any[]>`                                                                                                                                                     | -                               |
| `(nzOpenChange)`               | 下拉菜单打开状态变化回调                                                                                                                         | `EventEmitter<boolean>`                                                                                                                                                   | -                               |
| `(nzScrollToBottom)`           | 下拉列表滚动到底部的回调                                                                                                                         | `EventEmitter<any>`                                                                                                                                                       | -                               |
| `(nzOnSearch)`                 | 文本框值变化时回调                                                                                                                               | `EventEmitter<string>`                                                                                                                                                    | -                               |
| `(nzOnClear)`                  | 清空已选项时触发的回调函数。                                                                                                                     | `EventEmitter<any>`                                                                                                                                                       | -                               | -        | 20.0.0 |
| `(nzFocus)`                    | focus 时回调                                                                                                                                     | `EventEmitter<any>`                                                                                                                                                       | -                               |
| `(nzBlur)`                     | blur 时回调                                                                                                                                      | `EventEmitter<any>`                                                                                                                                                       | -                               |

### nz-option

| 参数                | 说明                                                                                             | 类型               | 默认值  |
| ------------------- | ------------------------------------------------------------------------------------------------ | ------------------ | ------- |
| `[nzDisabled]`      | 是否禁用                                                                                         | `boolean`          | `false` |
| `[nzTitle]`         | 选项上的原生 title 提示                                                                          | `string \| number` | -       |
| `[nzLabel]`         | 选中该 nz-option 后，nz-select 中显示的文字                                                      | `string \| number` | -       |
| `[nzValue]`         | nz-select 中 ngModel 的值                                                                        | `any`              | -       |
| `[nzKey]`           | nz-select 中 ngModel 的值                                                                        | `string \| number` | -       |
| `[nzHide]`          | 是否在选项列表中隐藏该选项                                                                       | `boolean`          | `false` |
| `[nzCustomContent]` | 是否自定义在下拉菜单中的 Template 内容，当为 true 时，nz-option 包裹的内容将直接渲染在下拉菜单中 | `boolean`          | `false` |

### nz-option-group

| 参数        | 说明 | 类型                                    | 默认值 |
| ----------- | ---- | --------------------------------------- | ------ |
| `[nzLabel]` | 组名 | `string \| number \| TemplateRef<void>` | -      |

## 方法

### nz-select

| 名称      | 说明     |
| --------- | -------- |
| `blur()`  | 取消焦点 |
| `focus()` | 获取焦点 |

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 自动分词

试下复制 `露西,杰克` 到输入框里。只在 tags 和 multiple 模式下可用。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}

@Component({
  selector: 'nz-demo-select-automatic-tokenization',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select
      [(ngModel)]="listOfTagOptions"
      nzMode="tags"
      [nzTokenSeparators]="[',']"
      nzPlaceHolder="automatic tokenization"
    >
      @for (option of listOfOption; track option.value) {
        <nz-option [nzLabel]="option.label" [nzValue]="option.value" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectAutomaticTokenizationComponent {
  readonly listOfOption: Array<{ label: string; value: string }> = alphabet().map(item => ({
    label: item,
    value: item
  }));
  listOfTagOptions: string[] = [];
}
```

### 基本使用

基本使用。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-basic',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select ngModel="lucy">
      <nz-option nzValue="jack" nzLabel="Jack" />
      <nz-option nzValue="lucy" nzLabel="Lucy" />
      <nz-option nzValue="disabled" nzLabel="Disabled" nzDisabled />
    </nz-select>
    <nz-select ngModel="lucy" nzDisabled>
      <nz-option nzValue="lucy" nzLabel="Lucy" />
    </nz-select>
    <nz-select ngModel="lucy" nzLoading>
      <nz-option nzValue="lucy" nzLabel="Lucy" />
    </nz-select>
    <nz-select ngModel="lucy" nzAllowClear nzPlaceHolder="Choose">
      <nz-option nzValue="lucy" nzLabel="Lucy" />
    </nz-select>
  `,
  styles: `
    nz-select {
      margin: 0 8px 10px 0;
      width: 120px;
    }
  `
})
export class NzDemoSelectBasicComponent {}
```

### 大量数据

组件使用了虚拟滚动技术，可以同时处理大量数据。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

function alphabet(size: number): string[] {
  const children: string[] = [];
  for (let i = 10; i < size; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}

@Component({
  selector: 'nz-demo-select-big-data',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select
      nzMode="multiple"
      nzPlaceHolder="Please select"
      [nzOptions]="listOfOption"
      [(ngModel)]="listOfSelectedValue"
    />
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectBigDataComponent {
  readonly listOfOption: Array<{ value: string; label: string }> = alphabet(10000).map(item => ({
    label: item,
    value: item
  }));
  listOfSelectedValue = ['a10', 'c12'];
}
```

### 联动

省市联动是典型的例子。

推荐使用 [Cascader](/components/cascader/zh) 组件。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-coordinate',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select [(ngModel)]="selectedProvince" (ngModelChange)="provinceChange($event)">
      @for (p of provinceData; track p) {
        <nz-option [nzValue]="p" [nzLabel]="p" />
      }
    </nz-select>
    <nz-select [(ngModel)]="selectedCity">
      @for (c of cityData[selectedProvince]; track c) {
        <nz-option [nzValue]="c" [nzLabel]="c" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      margin-right: 8px;
      width: 120px;
    }
  `
})
export class NzDemoSelectCoordinateComponent {
  selectedProvince = 'Zhejiang';
  selectedCity = 'Hangzhou';
  provinceData = ['Zhejiang', 'Jiangsu'];
  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }
}
```

### 自定义下拉菜单内容

通过 `nzCustomContent` 自定义下拉菜单选项显示的内容。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-custom-content',
  imports: [FormsModule, NzIconModule, NzSelectModule],
  template: `
    <nz-select nzShowSearch nzAllowClear nzPlaceHolder="Select OS" [(ngModel)]="selectedValue">
      <nz-option nzCustomContent nzLabel="Windows" nzValue="windows">
        <nz-icon nzType="windows" />
        Windows
      </nz-option>
      <nz-option nzCustomContent nzLabel="Mac" nzValue="mac">
        <nz-icon nzType="apple" />
        Mac
      </nz-option>
      <nz-option nzCustomContent nzLabel="Android" nzValue="android">
        <nz-icon nzType="android" />
        Android
      </nz-option>
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 200px;
    }
  `
})
export class NzDemoSelectCustomContentComponent {
  selectedValue = null;
}
```

### 扩展菜单

使用 `nzDropdownRender` 对下拉菜单进行自由扩展。

```typescript
import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-custom-dropdown-menu',
  imports: [NzDividerModule, NzIconModule, NzInputModule, NzSelectModule],
  template: `
    <nz-select nzShowSearch nzAllowClear [nzDropdownRender]="renderTemplate" nzPlaceHolder="custom dropdown render">
      @for (item of listOfItem; track item) {
        <nz-option [nzLabel]="item" [nzValue]="item" />
      }
    </nz-select>
    <ng-template #renderTemplate>
      <nz-divider />
      <div class="container">
        <input type="text" nz-input #inputElement />
        <a class="add-item" (click)="addItem(inputElement)">
          <nz-icon nzType="plus" />
          Add item
        </a>
      </div>
    </ng-template>
  `,
  styles: `
    nz-select {
      width: 240px;
    }
    nz-divider {
      margin: 4px 0;
    }
    .container {
      display: flex;
      flex-wrap: nowrap;
      padding: 8px;
    }
    .add-item {
      flex: 0 0 auto;
      padding: 8px;
      display: block;
    }
  `
})
export class NzDemoSelectCustomDropdownMenuComponent {
  listOfItem = ['jack', 'lucy'];
  index = 0;

  addItem(input: HTMLInputElement): void {
    const value = input.value;
    if (this.listOfItem.indexOf(value) === -1) {
      this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
    }
  }
}
```

### 自定义选择标签

通过 `nzCustomTemplate` 自定义 nz-select 显示的内容。

```typescript
import { Component } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-custom-template',
  imports: [NzIconModule, NzSelectModule],
  template: `
    <nz-select nzAllowClear nzPlaceHolder="Select OS" [nzCustomTemplate]="defaultTemplate">
      <nz-option nzLabel="Windows" nzValue="windows" />
      <nz-option nzLabel="Apple" nzValue="apple" />
      <nz-option nzLabel="Android" nzValue="android" />
    </nz-select>
    <ng-template #defaultTemplate let-selected>
      <nz-icon [nzType]="selected.nzValue" />
      {{ selected.nzLabel }}
    </ng-template>
    <br />
    <br />
    <nz-select nzAllowClear nzPlaceHolder="Select OS" nzMode="multiple" [nzCustomTemplate]="multipleTemplate">
      <nz-option nzLabel="Windows" nzValue="windows" />
      <nz-option nzLabel="Apple" nzValue="apple" />
      <nz-option nzLabel="Android" nzValue="android" />
    </nz-select>
    <ng-template #multipleTemplate let-selected>
      <div class="ant-select-selection-item-content">
        <nz-icon [nzType]="selected.nzValue" />
        {{ selected.nzLabel }}
      </div>
    </ng-template>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectCustomTemplateComponent {}
```

### 默认数据

当需要显示默认值，同时默认值又不在选项列表中时，可以使用 `nzHide` 在 `nz-option` 中将默认选项隐藏

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-default-value',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select nzMode="multiple" nzPlaceHolder="Inserted are removed" [(ngModel)]="listOfSelectedValue">
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" />
      }
      @for (option of defaultOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" nzHide />
      }
    </nz-select>
    <br />
    <br />
    <nz-select [(ngModel)]="selectedValue">
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" />
      }
      <nz-option nzLabel="Default Value" nzValue="Default" nzHide />
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectDefaultValueComponent {
  listOfOption = ['Option 01', 'Option 02'];
  listOfSelectedValue = ['Default 01', 'Default 02'];
  defaultOption = [...this.listOfSelectedValue];
  selectedValue = 'Default';
}
```

### 隐藏已选择选项

通过 `nzHide` 隐藏下拉列表中已选择的选项。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-hide-selected',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select nzMode="multiple" nzPlaceHolder="Inserted are removed" [(ngModel)]="listOfSelected">
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" [nzHide]="!isSelected(option)" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectHideSelectedComponent {
  listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  listOfSelected: string[] = [];

  isSelected(value: string): boolean {
    return this.listOfSelected.indexOf(value) !== -1;
  }
}
```

### 获得选项的对象

`ngModel` 取到的值为选中 `nz-option` 的 `nzValue` 值，当 `nzValue` 传入为一个对象时，`ngModel` 获取的值也是一个对象，`compareWith` 的用法参见 [SelectControlValueAccessor](https://angular.cn/api/forms/SelectControlValueAccessor)。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

interface Option {
  label: string;
  value: string;
  age: number;
}

@Component({
  selector: 'nz-demo-select-label-in-value',
  imports: [FormsModule, NzSelectModule],
  template: `
    <p>The selected option's age is {{ selectedValue?.age }}</p>
    <br />
    <nz-select
      [(ngModel)]="selectedValue"
      [compareWith]="compareFn"
      (ngModelChange)="log($event)"
      nzAllowClear
      nzPlaceHolder="Choose"
    >
      @for (option of optionList; track option) {
        <nz-option [nzValue]="option" [nzLabel]="option.label" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 120px;
    }
  `
})
export class NzDemoSelectLabelInValueComponent {
  optionList: Option[] = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];
  selectedValue: Option = { label: 'Jack', value: 'jack', age: 22 };
  readonly compareFn = (o1: Option, o2: Option): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  log(value: Option): void {
    console.log(value);
  }
}
```

### 最大选中数量

你可以通过设置 `nzMaxMultipleCount` 约束最多可选中的数量，当超出限制时会变成禁止选中状态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}

@Component({
  selector: 'nz-demo-select-max-count',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select
      [nzMaxMultipleCount]="3"
      nzMode="multiple"
      nzPlaceHolder="Please select"
      nzAllowClear
      [nzShowArrow]="true"
      [(ngModel)]="listOfSelectedValue"
    >
      @for (item of listOfOption; track item) {
        <nz-option [nzLabel]="item" [nzValue]="item" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectMaxCountComponent {
  readonly listOfOption: string[] = alphabet();
  listOfSelectedValue = ['a10', 'c12'];
}
```

### 多选

多选，从已有条目中选择，例子中通过 `nzMaxTagCount` 限制最多显示3个选项。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}

@Component({
  selector: 'nz-demo-select-multiple',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select
      [nzMaxTagCount]="3"
      [nzMaxTagPlaceholder]="tagPlaceHolder"
      nzMode="multiple"
      nzAllowClear
      nzPlaceHolder="Please select"
      [(ngModel)]="listOfSelectedValue"
    >
      @for (item of listOfOption; track item) {
        <nz-option [nzLabel]="item" [nzValue]="item" />
      }
    </nz-select>
    <ng-template #tagPlaceHolder let-selectedList>and {{ selectedList.length }} more selected</ng-template>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectMultipleComponent {
  readonly listOfOption: string[] = alphabet();
  listOfSelectedValue = ['a10', 'c12'];
}
```

### 分组

用 `nz-option-group` 进行选项分组。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-optgroup',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select [(ngModel)]="selectedValue" nzAllowClear nzPlaceHolder="Choose" nzShowSearch>
      <nz-option-group nzLabel="Manager">
        <nz-option nzValue="jack" nzLabel="Jack" />
        <nz-option nzValue="lucy" nzLabel="Lucy" />
      </nz-option-group>
      <nz-option-group nzLabel="Engineer">
        <nz-option nzValue="tom" nzLabel="Tom" />
      </nz-option-group>
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 120px;
    }
  `
})
export class NzDemoSelectOptgroupComponent {
  selectedValue = 'lucy';
}
```

### 传入 Options

通过 `nzOptions` 直接传入选项内容

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-options',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select ngModel="lucy" [nzOptions]="listOfOption" />
    <nz-select [(ngModel)]="selectedValue" nzAllowClear nzPlaceHolder="Choose" [nzOptions]="listOfGroupOption" />
  `,
  styles: `
    nz-select {
      margin: 0 8px 10px 0;
      width: 120px;
    }
  `
})
export class NzDemoSelectOptionsComponent {
  selectedValue = 'lucy';
  readonly listOfOption = [
    { label: 'Jack', value: 'jack' },
    { label: 'Lucy', value: 'lucy' },
    { label: 'disabled', value: 'disabled', disabled: true }
  ];
  readonly listOfGroupOption = [
    { label: 'Jack', value: 'jack', groupLabel: 'Manager' },
    { label: 'Lucy', value: 'lucy', groupLabel: 'Manager' },
    { label: 'Tom', value: 'tom', groupLabel: 'Engineer' }
  ];
}
```

### 弹出位置

可以通过 `placement` 手动指定弹出的位置。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule, NzSelectPlacementType } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-placement',
  imports: [FormsModule, NzRadioModule, NzSelectModule],
  template: `
    <nz-radio-group [(ngModel)]="placement">
      <label nz-radio-button nzValue="topLeft">topLeft</label>
      <label nz-radio-button nzValue="topRight">topRight</label>
      <label nz-radio-button nzValue="bottomLeft">bottomLeft</label>
      <label nz-radio-button nzValue="bottomRight">bottomRight</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-select [(ngModel)]="selectedValue" [nzDropdownMatchSelectWidth]="false" [nzPlacement]="placement">
      <nz-option nzValue="HangZhou" nzLabel="HangZhou #310000" />
      <nz-option nzValue="NingBo" nzLabel="NingBo #315000" />
      <nz-option nzValue="WenZhou" nzLabel="WenZhou #325000" />
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 120px;
    }
  `
})
export class NzDemoSelectPlacementComponent {
  placement: NzSelectPlacementType = 'topLeft';
  selectedValue = 'HangZhou';
}
```

### 前后缀

自定义前缀 `nzPrefix` 和后缀图标 `nzSuffixIcon`。

```typescript
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSelectModule, NzSelectOptionInterface } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-prefix-and-suffix',
  imports: [FormsModule, NzSelectModule, NzFlexModule],
  template: `
    <nz-flex nzWrap="wrap" nzGap="small">
      <nz-select [(ngModel)]="value" nzAllowClear [style.width.px]="200" nzPrefix="User" [nzOptions]="options" />
      <nz-select [(ngModel)]="value" nzAllowClear [style.width.px]="120" nzSuffixIcon="smile" [nzOptions]="options" />
      <nz-select
        [(ngModel)]="value"
        nzAllowClear
        [style.width.px]="120"
        nzSuffixIcon="meh"
        nzDisabled
        [nzOptions]="options"
      />
      <br />
      <nz-select
        [(ngModel)]="multipleValue"
        nzAllowClear
        [style.width.px]="200"
        nzMode="tags"
        nzPrefix="User"
        [nzOptions]="options"
      />
      <nz-select
        [(ngModel)]="multipleValue"
        nzAllowClear
        [style.width.px]="120"
        nzMode="tags"
        nzSuffixIcon="smile"
        [nzOptions]="options"
      />
      <nz-select
        [(ngModel)]="multipleValue"
        nzAllowClear
        [style.width.px]="120"
        nzMode="tags"
        nzSuffixIcon="meh"
        nzDisabled
        [nzOptions]="options"
      />
    </nz-flex>
  `
})
export class NzDemoSelectPrefixAndSuffixComponent {
  readonly options: NzSelectOptionInterface[] = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];

  value = model('lucy');
  multipleValue = model(['lucy']);
}
```

### 下拉加载

一个带有下拉加载远程数据的例子。

```typescript
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';

interface MockUser {
  name: {
    first: string;
  };
}

@Component({
  selector: 'nz-demo-select-scroll-load',
  imports: [FormsModule, NzSelectModule, NzSpinModule],
  template: `
    <nz-select
      [(ngModel)]="selectedUser"
      (nzScrollToBottom)="loadMore()"
      nzPlaceHolder="Select users"
      nzAllowClear
      [nzDropdownRender]="renderTemplate"
    >
      @for (item of optionList; track item) {
        <nz-option [nzValue]="item" [nzLabel]="item" />
      }
    </nz-select>
    <ng-template #renderTemplate>
      @if (isLoading) {
        <nz-spin />
      }
    </ng-template>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectScrollLoadComponent implements OnInit {
  readonly randomUserUrl: string = 'https://api.randomuser.me/?results=10';
  optionList: string[] = [];
  selectedUser: string | null = null;
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMore();
  }

  getRandomNameList(): Observable<string[]> {
    return this.http
      .get<{ results: MockUser[] }>(`${this.randomUserUrl}`)
      .pipe(
        map(res => res.results),
        catchError(() => of<MockUser[]>([]))
      )
      .pipe(map(list => list.map(item => `${item.name.first}`)));
  }

  loadMore(): void {
    this.isLoading = true;
    this.getRandomNameList().subscribe(data => {
      this.isLoading = false;
      this.optionList = [...this.optionList, ...data];
    });
  }
}
```

### 搜索框

搜索和远程数据结合。

```typescript
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-search-box',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select
      nzShowSearch
      nzServerSearch
      nzPlaceHolder="input search text"
      [(ngModel)]="selectedValue"
      [nzShowArrow]="false"
      [nzFilterOption]="nzFilterOption"
      (nzOnSearch)="search($event)"
    >
      @for (item of listOfOption; track item) {
        <nz-option [nzLabel]="item" [nzValue]="item" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 200px;
    }
  `
})
export class NzDemoSelectSearchBoxComponent {
  selectedValue: string | null = null;
  listOfOption: string[] = [];
  readonly nzFilterOption = (): boolean => true;

  constructor(private http: HttpClient) {}

  search(value: string): void {
    this.http
      .jsonp<{ result: Array<[string, string]> }>(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
      .subscribe(data => {
        this.listOfOption = data.result.map(([item]) => item);
      });
  }
}
```

### 带搜索框

展开后可对选项进行搜索。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'nz-demo-select-search',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select nzShowSearch nzAllowClear nzPlaceHolder="Select a person" [(ngModel)]="selectedValue">
      <nz-option nzLabel="Jack" nzValue="jack" />
      <nz-option nzLabel="Lucy" nzValue="lucy" />
      <nz-option nzLabel="Tom" nzValue="tom" />
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 200px;
    }
  `
})
export class NzDemoSelectSearchComponent {
  selectedValue = null;
}
```

### 搜索用户

一个带有远程搜索，节流控制，请求时序控制，加载状态的多选示例。

```typescript
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

interface MockUser {
  name: {
    first: string;
  };
}

@Component({
  selector: 'nz-demo-select-select-users',
  imports: [FormsModule, NzIconModule, NzSelectModule],
  template: `
    <nz-select
      nzMode="multiple"
      nzPlaceHolder="Select users"
      nzAllowClear
      nzShowSearch
      nzServerSearch
      [(ngModel)]="selectedUser"
      (nzOnSearch)="onSearch($event)"
    >
      @if (!loading) {
        @for (o of optionList; track o) {
          <nz-option [nzValue]="o" [nzLabel]="o" />
        }
      } @else {
        <nz-option nzDisabled nzCustomContent>
          <nz-icon nzType="loading" class="loading-icon" />
          Loading Data...
        </nz-option>
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 100%;
    }

    .loading-icon {
      margin-right: 8px;
    }
  `
})
export class NzDemoSelectSelectUsersComponent implements OnInit {
  randomUserUrl = 'https://api.randomuser.me/?results=5';
  searchChange$ = new BehaviorSubject('');
  optionList: string[] = [];
  selectedUser?: string;
  loading = false;

  onSearch(value: string): void {
    this.loading = true;
    this.searchChange$.next(value);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchChange$
      .pipe(
        debounceTime(500),
        switchMap(name => this.getRandomNameList(name))
      )
      .subscribe(data => {
        this.optionList = data;
        this.loading = false;
      });
  }

  getRandomNameList(name: string): Observable<string[]> {
    return this.http.get<{ results: MockUser[] }>(`${this.randomUserUrl}`).pipe(
      map(res => res.results),
      catchError(() => of<MockUser[]>([])),
      map(list => list.map(item => `${item.name.first} ${name}`))
    );
  }
}
```

### 三种大小

三种大小的选择框，当 `nzSize` 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}

@Component({
  selector: 'nz-demo-select-size',
  imports: [FormsModule, NzSelectModule, NzRadioModule],
  template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large">Large</label>
      <label nz-radio-button nzValue="default">Default</label>
      <label nz-radio-button nzValue="small">Small</label>
    </nz-radio-group>
    <br />
    <br />
    <nz-select [(ngModel)]="singleValue" [nzSize]="size">
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" />
      }
    </nz-select>
    <br />
    <br />
    <nz-select [(ngModel)]="singleValue" [nzSize]="size" nzShowSearch>
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" />
      }
    </nz-select>
    <br />
    <br />
    <nz-select [(ngModel)]="multipleValue" [nzSize]="size" nzMode="multiple" nzPlaceHolder="Please select">
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" />
      }
    </nz-select>
    <br />
    <br />
    <nz-select [(ngModel)]="tagValue" [nzSize]="size" nzMode="tags" nzPlaceHolder="Please select">
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectSizeComponent {
  readonly listOfOption: string[] = alphabet();
  size: NzSelectSizeType = 'default';
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tagValue = ['a10', 'c12', 'tag'];
}
```

### 自定义状态

使用 `nzStatus` 为 Select 添加状态，可选 `error` 或者 `warning`。

```typescript
import { Component } from '@angular/core';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-select-status',
  imports: [NzSelectModule, NzSpaceModule],
  template: `
    <nz-select nzStatus="error" />
    <br />
    <br />
    <nz-select nzStatus="warning" />
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectStatusComponent {}
```

### 标签

tags select，随意输入的内容（scroll the menu）

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

function alphabet(): string[] {
  const children: string[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(i.toString(36) + i);
  }
  return children;
}

@Component({
  selector: 'nz-demo-select-tags',
  imports: [FormsModule, NzSelectModule],
  template: `
    <nz-select nzMode="tags" nzPlaceHolder="Tag Mode" [(ngModel)]="listOfTagOptions">
      @for (option of listOfOption; track option) {
        <nz-option [nzLabel]="option" [nzValue]="option" />
      }
    </nz-select>
  `,
  styles: `
    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectTagsComponent {
  readonly listOfOption: string[] = alphabet();
  listOfTagOptions: string[] = [];
}
```

### 形态变体

Select 形态变体，可选 `outlined`、`filled`、`borderless`、`underlined` 四种形态。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzFlexDirective } from 'ng-zorro-antd/flex';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nz-demo-select-variant',
  imports: [FormsModule, NzSelectModule, NzSpaceModule, NzFlexDirective],
  template: `
    <div nz-flex nzGap="large">
      <nz-space nzDirection="vertical" style="flex: 1">
        <nz-select *nzSpaceItem ngModel="lucy" [nzOptions]="options" />
        <nz-select *nzSpaceItem ngModel="lucy" nzVariant="filled" [nzOptions]="options" />
        <nz-select *nzSpaceItem ngModel="lucy" nzVariant="borderless" [nzOptions]="options" />
        <nz-select *nzSpaceItem ngModel="lucy" nzVariant="underlined" [nzOptions]="options" />
      </nz-space>
      <nz-space nzDirection="vertical" style="flex: 1">
        <nz-select *nzSpaceItem nzMode="multiple" [ngModel]="['lucy']" [nzOptions]="options" />
        <nz-select *nzSpaceItem nzMode="multiple" [ngModel]="['lucy']" nzVariant="filled" [nzOptions]="options" />
        <nz-select *nzSpaceItem nzMode="multiple" [ngModel]="['lucy']" nzVariant="borderless" [nzOptions]="options" />
        <nz-select *nzSpaceItem nzMode="multiple" [ngModel]="['lucy']" nzVariant="underlined" [nzOptions]="options" />
      </nz-space>
    </div>
  `,
  styles: `
    nz-space {
      flex: 1;
    }

    nz-select {
      width: 100%;
    }
  `
})
export class NzDemoSelectVariantComponent {
  options = [
    { label: 'Jack', value: 'jack' },
    { label: 'Lucy', value: 'lucy' },
    { label: 'Disabled', value: 'disabled', disabled: true }
  ];
}
```
