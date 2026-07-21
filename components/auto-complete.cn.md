---
category: Components
type: 数据录入
title: AutoComplete
subtitle: 自动完成
cover: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg'
description: 输入框自动完成功能。
---

## 何时使用

需要自动完成时。

## API

```html
<input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" />
<nz-autocomplete [nzDataSource]="['12345', '23456', '34567']" #auto></nz-autocomplete>
```

```html
<input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" />
<nz-autocomplete #auto>
  <nz-auto-option [nzValue]="'12345'">12345</nz-auto-option>
  <nz-auto-option [nzValue]="'23456'">23456</nz-auto-option>
  <nz-auto-option [nzValue]="'34567'">34567</nz-auto-option>
</nz-autocomplete>
```

### [nzAutocomplete]

| 属性               | 说明                         | 类型                      | 默认值 |
| ------------------ | ---------------------------- | ------------------------- | ------ |
| `[nzAutocomplete]` | 用于绑定 nzAutocomplete 组件 | `NzAutocompleteComponent` | -      |

### nz-autocomplete

| 属性                           | 说明                                                                                          | 类型                            | 默认值                          |
| ------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------- |
| `[nzBackfill]`                 | 使用键盘选择选项的时候，会把当前高亮项的值即时回填到输入框中                                  | `boolean`                       | `false`                         |
| `[nzDataSource]`               | 自动完成的数据源                                                                              | `AutocompleteDataSource`        | -                               |
| `[nzDefaultActiveFirstOption]` | 是否默认高亮第一个选项。                                                                      | `boolean`                       | `true`                          |
| `[nzWidth]`                    | 自定义宽度单位 px                                                                             | `number`                        | 触发元素宽度                    |
| `[nzOverlayClassName]`         | 下拉根元素的类名称                                                                            | `string`                        | -                               |
| `[nzOverlayStyle]`             | 下拉根元素的样式                                                                              | `object`                        | -                               |
| `[compareWith]`                | 与 [SelectControlValueAccessor](https://angular.cn/api/forms/SelectControlValueAccessor) 相同 | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |

### nz-auto-option

| 属性           | 说明                        | 类型      | 默认值  |
| -------------- | --------------------------- | --------- | ------- |
| `[nzValue]`    | 绑定到触发元素 ngModel 的值 | `any`     | -       |
| `[nzLabel]`    | 填入触发元素显示的值        | `string`  | -       |
| `[nzDisabled]` | 禁用选项                    | `boolean` | `false` |

## FAQ

### Q：滚动时浮层元素没有跟随滚动位置

默认情况下，浮层元素使用 `body` 作为滚动容器，如果使用了其他滚动容器，在自定义滚动容器元素上添加 [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) 指令。
注意：您需要从 `@angular/cdk/scrolling` 导入 `CdkScrollable` 指令或 `ScrollingModule` 模块。

---

## 代码示例

### 基本使用

基本使用。通过 `nzDataSource` 设置自动完成的数据源

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-basic',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input
      placeholder="input here"
      nz-input
      [(ngModel)]="inputValue"
      (input)="onInput($event)"
      [nzAutocomplete]="auto"
    />
    <nz-autocomplete [nzDataSource]="option()" nzBackfill #auto />
  `
})
export class NzDemoAutoCompleteBasicComponent {
  inputValue?: string;
  readonly option = signal<string[]>([]);

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.option.set(value ? [value, value + value, value + value + value] : []);
  }
}
```

### 查询模式 - 确定类目

[查询模式: 确定类目](https://ant.design/docs/spec/reaction#Lookup-Patterns) 示例。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-certain-category',
  imports: [FormsModule, NzAutocompleteModule, NzFlexModule, NzIconModule, NzInputModule],
  template: `
    <nz-input-search>
      <input placeholder="input here" nz-input nzSize="large" [(ngModel)]="value" [nzAutocomplete]="auto" />
    </nz-input-search>
    <nz-autocomplete #auto>
      @for (group of options; track group.title) {
        <nz-auto-optgroup [nzLabel]="groupTitle">
          <ng-template #groupTitle>
            <nz-flex nzJustify="space-between">
              {{ group.title }}
              <a href="https://www.google.com/search?q=ng+zorro" rel="noopener noreferrer" target="_blank">More</a>
            </nz-flex>
          </ng-template>
          @for (option of group.children; track option.title) {
            <nz-auto-option [nzLabel]="option.title" [nzValue]="option.title">
              <nz-flex nzJustify="space-between">
                {{ option.title }}
                <span>
                  <nz-icon nzType="user" />
                  {{ option.count }}
                </span>
              </nz-flex>
            </nz-auto-option>
          }
        </nz-auto-optgroup>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteCertainCategoryComponent {
  value?: string;
  readonly options = [
    {
      title: 'Libraries',
      children: [
        {
          title: 'AntDesign',
          count: 10000
        },
        {
          title: 'AntDesign UI',
          count: 10600
        }
      ]
    },
    {
      title: 'Solutions',
      children: [
        {
          title: 'AntDesign UI FAQ',
          count: 60100
        },
        {
          title: 'AntDesign FAQ',
          count: 30010
        }
      ]
    },
    {
      title: 'Articles',
      children: [
        {
          title: 'AntDesign design language',
          count: 100000
        }
      ]
    }
  ];
}
```

### 自定义输入组件

自定义输入组件。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-custom',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <textarea
      placeholder="input here"
      nz-input
      rows="4"
      [(ngModel)]="inputValue"
      (input)="onInput($event)"
      [nzAutocomplete]="auto"
    ></textarea>
    <nz-autocomplete #auto>
      @for (option of options(); track $index) {
        <nz-auto-option [nzValue]="option">{{ option }}</nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteCustomComponent {
  inputValue?: string;
  readonly options = signal<string[]>([]);

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options.set(value ? [value, value + value, value + value + value] : []);
  }
}
```

### 不区分大小写

不区分大小写的 AutoComplete

```typescript
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-non-case-sensitive',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input placeholder='try to type "b"' nz-input [(ngModel)]="value" [nzAutocomplete]="auto" />
    <nz-autocomplete [nzDataSource]="filteredOptions()" #auto />
  `
})
export class NzDemoAutoCompleteNonCaseSensitiveComponent {
  readonly value = signal<string>('');
  readonly options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  readonly filteredOptions = computed(() =>
    this.options.filter(option => option.toLowerCase().indexOf(this.value().toLowerCase()) !== -1)
  );
}
```

### 使用对象类型选项

当 `nzValue` 和 `ngModel` 类型为 `object` 时使用 `compareWith`([SelectControlValueAccessor](https://angular.cn/api/forms/SelectControlValueAccessor))。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

interface Option {
  label: string;
  value: string;
  age: number;
}

@Component({
  selector: 'nz-demo-auto-complete-object-value',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input placeholder="input here" nz-input [(ngModel)]="inputValue" [nzAutocomplete]="auto" />
    <nz-autocomplete #auto [compareWith]="compareFn">
      @for (option of options; track $index) {
        <nz-auto-option [nzValue]="option" [nzLabel]="option.label">
          {{ option.label }}
        </nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteObjectValueComponent {
  inputValue: Option = { label: 'Lucy', value: 'lucy', age: 20 };
  readonly options: Option[] = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];
  readonly compareFn = (o1: Option | string, o2: Option): boolean => {
    if (o1) {
      return typeof o1 === 'string' ? o1 === o2.label : o1.value === o2.value;
    } else {
      return false;
    }
  };
}
```

### 自定义选项

也可以直接传 `nz-auto-option` 作为 `nz-autocomplete` 的 Content，而非使用 `nzDataSource`。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-options',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  template: `
    <input placeholder="input here" nz-input [(ngModel)]="value" (input)="onInput($event)" [nzAutocomplete]="auto" />
    <nz-autocomplete #auto>
      @for (option of options(); track $index) {
        <nz-auto-option [nzValue]="option">{{ option }}</nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteOptionsComponent {
  value?: string;
  readonly options = signal<string[]>([]);

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options.set([]);
    } else {
      this.options.set(['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`));
    }
  }
}
```

### 自定义状态

使用 `nzStatus` 为 AutoComplete 添加状态，可选 `error` 或者 `warning`。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-status',
  imports: [FormsModule, NzAutocompleteModule, NzFlexModule, NzInputModule],
  template: `
    <nz-flex nzVertical nzGap="1rem">
      <input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" nzStatus="error" />
      <input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" nzStatus="warning" />
    </nz-flex>
    <nz-autocomplete [nzDataSource]="['12345', '23456', '34567']" #auto />
  `
})
export class NzDemoAutoCompleteStatusComponent {
  value?: string;
}
```

### 查询模式 - 不确定类目

[查询模式: 不确定类目](https://ant.design/docs/spec/reaction#Lookup-Patterns) 示例。

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-uncertain-category',
  imports: [FormsModule, NzAutocompleteModule, NzFlexModule, NzInputModule],
  template: `
    <nz-input-search nzEnterButton>
      <input
        nz-input
        placeholder="input here"
        nzSize="large"
        [(ngModel)]="value"
        (input)="onChange($event)"
        [nzAutocomplete]="auto"
      />
    </nz-input-search>
    <nz-autocomplete #auto>
      @for (option of options(); track option.category) {
        <nz-auto-option [nzValue]="option.category">
          <nz-flex nzJustify="space-between">
            <span>
              Found {{ option.value }} on
              <a href="https://s.taobao.com/search?q={{ option.value }}" target="_blank" rel="noopener noreferrer">
                {{ option.category }}
              </a>
            </span>
            <span>{{ option.count }} results</span>
          </nz-flex>
        </nz-auto-option>
      }
    </nz-autocomplete>
  `
})
export class NzDemoAutoCompleteUncertainCategoryComponent {
  value?: string;
  readonly options = signal<Array<{ value: string; category: string; count: number }>>([]);

  onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.options.set(
      new Array(this.getRandomInt(5, 15))
        .join('.')
        .split('.')
        .map((_item, idx) => ({
          value,
          category: `${value}${idx}`,
          count: this.getRandomInt(200, 100)
        }))
    );
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
```

### 多种形态

通过使用 `nz-input` 并将 `nzVariant` 设置为 `outlined`、`underlined`、`filled` 和 `borderless`，即可支持变体

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzVariant } from 'ng-zorro-antd/core/types';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-variant',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule, NzFlexModule],
  template: `
    <nz-flex nzVertical nzGap="1rem">
      @for (variant of variants; track variant) {
        <input
          placeholder="input here"
          nz-input
          [(ngModel)]="value"
          (input)="onInput($event)"
          [nzAutocomplete]="auto"
          [nzVariant]="variant"
        />
        <nz-autocomplete [nzDataSource]="options()" nzBackfill #auto />
      }
    </nz-flex>
  `
})
export class NzDemoAutoCompleteVariantComponent {
  value?: string;
  readonly variants: NzVariant[] = ['outlined', 'filled', 'borderless', 'underlined'];
  readonly options = signal<string[]>([]);

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options.set(value ? [value, value + value, value + value + value] : []);
  }
}
```
