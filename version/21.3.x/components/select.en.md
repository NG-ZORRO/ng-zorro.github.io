---
category: Components
type: Data Entry
title: Select
cover: 'https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg'
description: A dropdown menu for displaying choices.
---

## When To Use

- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.
- Utilizing [Radio](/components/radio/en) is recommended when there are fewer total options (less than 5).
- You probably need [AutoComplete](/components/auto-complete/en) if you're looking for an input box that can be typed or selected.

## API

```html
<nz-select>
  <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
</nz-select>
```

### nz-select

| Property                       | Description                                                                                                                                                                                                     | Type                                                                                                                                                                      | Default                                                 | Global Config | Version |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------- | ------- |
| `[nzId]`                       | input id attribute inside the component                                                                                                                                                                         | `string`                                                                                                                                                                  | -                                                       |
| `[ngModel]`                    | Current selected nz-option value, double binding.                                                                                                                                                               | `any \| any[]`                                                                                                                                                            | -                                                       |
| `[compareWith]`                | Same as [SelectControlValueAccessor](https://angular.dev/api/forms/SelectControlValueAccessor)                                                                                                                  | `(o1: any, o2: any) => boolean`                                                                                                                                           | `(o1: any, o2: any) => o1===o2`                         |
| `[nzAutoClearSearchValue]`     | Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags`.                                                                                       | `boolean`                                                                                                                                                                 | `true`                                                  |
| `[nzAllowClear]`               | Show clear button.                                                                                                                                                                                              | `boolean`                                                                                                                                                                 | `false`                                                 |
| `[nzBackdrop]`                 | whether or not the overlay should attach a backdrop                                                                                                                                                             | `boolean`                                                                                                                                                                 | `false`                                                 |
| `[nzVariant]`                  | Variants of Select                                                                                                                                                                                              | `'outlined' \| 'borderless' \| 'filled' \| 'underlined'`                                                                                                                  | `'outlined'`                                            | ✅            | 20.0.0  |
| `[nzOpen]`                     | dropdown expand state, double binding                                                                                                                                                                           | `boolean`                                                                                                                                                                 | `false`                                                 |
| `[nzAutoFocus]`                | Get focus by default                                                                                                                                                                                            | `boolean`                                                                                                                                                                 | `false`                                                 |
| `[nzDisabled]`                 | Whether disabled select                                                                                                                                                                                         | `boolean`                                                                                                                                                                 | `false`                                                 |
| `[nzDropdownClassName]`        | className of dropdown menu                                                                                                                                                                                      | `string \| string[]`                                                                                                                                                      | -                                                       |
| `[nzDropdownMatchSelectWidth]` | Whether dropdown's width is same width than select.                                                                                                                                                             | `boolean`                                                                                                                                                                 | `true`                                                  |
| `[nzDropdownStyle]`            | style of dropdown menu                                                                                                                                                                                          | `object`                                                                                                                                                                  | -                                                       |
| `[nzCustomTemplate]`           | The custom template of select                                                                                                                                                                                   | `TemplateRef<{ $implicit: NzOptionComponent }>`                                                                                                                           | -                                                       |
| `[nzServerSearch]`             | nz-option will not be filtered when set to true                                                                                                                                                                 | `boolean`                                                                                                                                                                 | `false`                                                 |
| `[nzFilterOption]`             | Filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded. | `(input?: string, option?: NzOptionComponent) => boolean;`                                                                                                                | -                                                       |
| `[nzMaxMultipleCount]`         | Max selected option can be selected                                                                                                                                                                             | `number`                                                                                                                                                                  | `Infinity`                                              |
| `[nzMode]`                     | Set mode of Select                                                                                                                                                                                              | `'multiple' \| 'tags' \| 'default'`                                                                                                                                       | `'default'`                                             |
| `[nzNotFoundContent]`          | Specify content to show when no result matches..                                                                                                                                                                | `string \| TemplateRef<void>`                                                                                                                                             | `'Not Found'`                                           |
| `[nzPlaceHolder]`              | Placeholder of select                                                                                                                                                                                           | `string`                                                                                                                                                                  | -                                                       |
| `[nzShowArrow]`                | Whether to show the drop-down arrow                                                                                                                                                                             | `boolean`                                                                                                                                                                 | `true`(for single select), `false`(for multiple select) |
| `[nzShowSearch]`               | Whether show search input in single mode.                                                                                                                                                                       | `boolean`                                                                                                                                                                 | `false`                                                 |
| `[nzSize]`                     | Size of Select input                                                                                                                                                                                            | `'large' \| 'small' \| 'default'`                                                                                                                                         | `'default'`                                             |
| `[nzStatus]`                   | Set validation status                                                                                                                                                                                           | `'error' \| 'warning'`                                                                                                                                                    | -                                                       |
| `[nzPrefix]`                   | The custom prefix                                                                                                                                                                                               | `TemplateRef<any> \| string`                                                                                                                                              | -                                                       |
| `[nzSuffixIcon]`               | The custom suffix icon                                                                                                                                                                                          | `TemplateRef<any> \| string`                                                                                                                                              | -                                                       | ✅            |
| `[nzRemoveIcon]`               | The custom remove icon                                                                                                                                                                                          | `TemplateRef<any>`                                                                                                                                                        | -                                                       |
| `[nzClearIcon]`                | The custom clear icon                                                                                                                                                                                           | `TemplateRef<any>`                                                                                                                                                        | -                                                       |
| `[nzMenuItemSelectedIcon]`     | The custom menuItemSelected icon                                                                                                                                                                                | `TemplateRef<any>`                                                                                                                                                        | -                                                       |
| `[nzTokenSeparators]`          | Separator used to tokenize on tag/multiple mode                                                                                                                                                                 | `string[]`                                                                                                                                                                | `[]`                                                    |
| `[nzLoading]`                  | indicate loading state                                                                                                                                                                                          | `boolean`                                                                                                                                                                 | false                                                   |
| `[nzMaxTagCount]`              | Max tag count to show                                                                                                                                                                                           | `number`                                                                                                                                                                  | -                                                       |
| `[nzOptions]`                  | use nzOptions or `nz-option` to pass options to the select                                                                                                                                                      | `Array<{ label: string \| number \| TemplateRef<any>; value: any; key?: string \| number; disabled?: boolean; hide?: boolean; groupLabel?: string \| TemplateRef<any>;}>` | -                                                       |
| `[nzMaxTagPlaceholder]`        | Placeholder for not showing tags                                                                                                                                                                                | `TemplateRef<{ $implicit: any[] }>`                                                                                                                                       | -                                                       |
| `[nzOptionHeightPx]`           | Each option height inside the dropdown                                                                                                                                                                          | `number`                                                                                                                                                                  | `32`                                                    | ✅            |
| `[nzOptionOverflowSize]`       | Max option size inside the dropdown, overflow when exceed the size                                                                                                                                              | `number`                                                                                                                                                                  | `8`                                                     |
| `[nzSelectOnTab]`              | Allows to select an item with TAB key                                                                                                                                                                           | `boolean`                                                                                                                                                                 | `false`                                                 |
| `(ngModelChange)`              | Current selected nz-option value change callback.                                                                                                                                                               | `EventEmitter<any[]>`                                                                                                                                                     | -                                                       |
| `(nzOpenChange)`               | dropdown expand change callback                                                                                                                                                                                 | `EventEmitter<boolean>`                                                                                                                                                   | `false`                                                 |
| `(nzScrollToBottom)`           | Called when dropdown scrolls to bottom                                                                                                                                                                          | `EventEmitter<any>`                                                                                                                                                       | -                                                       |
| `(nzOnSearch)`                 | Callback function that is fired when input changed.                                                                                                                                                             | `EventEmitter<string>`                                                                                                                                                    | -                                                       |
| `(nzOnClear)`                  | Callback function that clear the selected items                                                                                                                                                                 | `EventEmitter<any>`                                                                                                                                                       | -                                                       | -             | 20.0.0  |
| `(nzFocus)`                    | focus callback                                                                                                                                                                                                  | `EventEmitter<any>`                                                                                                                                                       | -                                                       |
| `(nzBlur)`                     | blur callback                                                                                                                                                                                                   | `EventEmitter<any>`                                                                                                                                                       | -                                                       |

### nz-option

| Property            | Description                                                                                                                 | Type                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| `[nzDisabled]`      | Disable this option                                                                                                         | `boolean`           | `false` |
| `[nzTitle]`         | Native title hint on this option                                                                                            | `string \| number`  | -       |
| `[nzLabel]`         | The text show in nz-select and dropdown menu                                                                                | `string \| number`  | -       |
| `[nzValue]`         | The value passed to ngModel of nz-select                                                                                    | `any `              | -       |
| `[nzKey]`           | Should be passed when typeof nzValue - Object. Key will be used for performance optimizations                               | `string \| number ` | -       |
| `[nzHide]`          | Whether hide the option in the option list                                                                                  | `boolean`           | `false` |
| `[nzCustomContent]` | Whether custom nz-option content in dropdown menu, the ng-content in nz-option will replace nzLabel when it was set to true | `boolean`           | `false` |

### nz-option-group

| Property    | Description | Type                                    | Default |
| ----------- | ----------- | --------------------------------------- | ------- |
| `[nzLabel]` | Group label | `string \| number \| TemplateRef<void>` | -       |

## Methods

### nz-select

| Name      | Description  |
| --------- | ------------ |
| `blur()`  | Remove focus |
| `focus()` | Get focus    |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Automatic tokenization

Try to copy `Lucy,Jack` to the input. Only available in tags and multiple mode.

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

### Basic Usage

Basic Usage.

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

### Large amounts of data

With the help of virtual scroll, select component can deal with Large amounts of data.

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

### coordinate

Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.

Using the [Cascader](/components/cascader/en) component is strongly recommended instead as it is more flexible and capable.

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

### Custom Option Template

Custom the content of nz-option via `nzCustomContent`.

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

### Custom dropdown

Customize the dropdown menu via `nzDropdownRender`.

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

### Custom Top Render

Custom the content of nz-select via `nzCustomTemplate`.

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

### Default Value

Display a default value that not in the option list with `nzHide` in `nz-option`

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

### Hide Already Selected

Hide already selected options in the dropdown via `nzHide`.

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

### Get option object of selected item

The value of `ngModel` comes from the `nzValue` of `nz-option`, when the `nzValue` of `nz-option` is an object, the `ngModel` will be an object too, the usage of `compareWith` is the same as [SelectControlValueAccessor](https://angular.dev/api/forms/SelectControlValueAccessor).

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

### Max Count

You can set the `nzMaxMultipleCount` prop to control the max number of items can be selected. When the limit is exceeded, the options will become disabled.

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

### multiple selection

Multiple selection, selecting from existing items, max 3 option will display at the same time by `nzMaxTagCount`.

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

### Option Group

Using `nz-option-group` to group the options.

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

### Input Options

Pass all options via `nzOptions`

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

### Placement

You can manually specify the position of the popup via `placement`.

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

### Prefix and Suffix

Custom `nzPrefix` and `nzSuffixIcon`.

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

### Load Data on Scroll

Load data on scroll.

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

### Search Box

Search with remote data.

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

### Select with search field

Search the options while expanded.

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

### Search and Select Users

A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.

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

### Sizes

The height of the input field for the select defaults to 32px. If `nzSize` is set to large, the height will be 40px, and if set to small, 24px.

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

### Status

Add status to Select with `nzStatus`, which could be `error` or `warning`.

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

### Tags

Select with tags, transform input to tag (scroll the menu)

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

### Variants

Variants of Select, there are four variants: `outlined`, `filled`, `borderless` and `underlined`.

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
