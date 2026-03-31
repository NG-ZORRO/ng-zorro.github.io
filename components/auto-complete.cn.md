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
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-basic',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-input">
      <input
        placeholder="input here"
        nz-input
        [(ngModel)]="inputValue"
        (input)="onInput($event)"
        [nzAutocomplete]="auto"
      />
      <nz-autocomplete [nzDataSource]="options" nzBackfill #auto />
    </div>
  `
})
export class NzDemoAutoCompleteBasicComponent {
  inputValue?: string;
  options: string[] = [];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }
}
```

### 查询模式 - 确定类目

[查询模式: 确定类目](https://ant.design/docs/spec/reaction#Lookup-Patterns) 示例。

```typescript
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}

@Component({
  selector: 'nz-demo-auto-complete-certain-category',
  imports: [FormsModule, NzAutocompleteModule, NzIconModule, NzInputModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-input">
      <nz-input-wrapper>
        <input
          placeholder="input here"
          nz-input
          [(ngModel)]="inputValue"
          (ngModelChange)="onChange($event)"
          [nzAutocomplete]="auto"
        />
        <nz-icon nzInputSuffix nzType="search" />
      </nz-input-wrapper>
      <nz-autocomplete #auto>
        @for (group of optionGroups; track group.title) {
          <nz-auto-optgroup [nzLabel]="groupTitle">
            <ng-template #groupTitle>
              <span>
                {{ group.title }}
                <a class="more-link" href="https://www.google.com/search?q=ng+zorro" target="_blank">更多</a>
              </span>
            </ng-template>
            @for (option of group.children; track option.title) {
              <nz-auto-option [nzLabel]="option.title" [nzValue]="option.title">
                {{ option.title }}
                <span class="certain-search-item-count">{{ option.count }} 人 关注</span>
              </nz-auto-option>
            }
          </nz-auto-optgroup>
        }
      </nz-autocomplete>
    </div>
  `,
  styles: `
    .certain-search-item-count {
      position: absolute;
      color: #999;
      right: 16px;
    }

    .more-link {
      float: right;
    }
  `
})
export class NzDemoAutoCompleteCertainCategoryComponent implements OnInit {
  inputValue?: string;
  optionGroups: AutocompleteOptionGroups[] = [];

  onChange(value: string): void {
    console.log(value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [
        {
          title: '话题',
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
          title: '问题',
          children: [
            {
              title: 'AntDesign UI 有多好',
              count: 60100
            },
            {
              title: 'AntDesign 是啥',
              count: 30010
            }
          ]
        },
        {
          title: '文章',
          children: [
            {
              title: 'AntDesign 是一个设计语言',
              count: 100000
            }
          ]
        }
      ];
    }, 1000);
  }
}
```

### 自定义输入组件

自定义输入组件。

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-custom',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-input">
      <textarea
        placeholder="input here"
        nz-input
        rows="4"
        [(ngModel)]="inputValue"
        (input)="onInput($event)"
        [nzAutocomplete]="auto"
      ></textarea>
      <nz-autocomplete #auto>
        @for (option of options; track $index) {
          <nz-auto-option [nzValue]="option">{{ option }}</nz-auto-option>
        }
      </nz-autocomplete>
    </div>
  `
})
export class NzDemoAutoCompleteCustomComponent {
  inputValue?: string;
  options: string[] = [];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }
}
```

### 不区分大小写

不区分大小写的 AutoComplete

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-non-case-sensitive',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-input">
      <input
        placeholder='try to type "b"'
        nz-input
        [(ngModel)]="inputValue"
        (ngModelChange)="onChange($event)"
        [nzAutocomplete]="auto"
      />
      <nz-autocomplete [nzDataSource]="filteredOptions" #auto />
    </div>
  `
})
export class NzDemoAutoCompleteNonCaseSensitiveComponent {
  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  constructor() {
    this.filteredOptions = this.options;
  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
```

### 使用对象类型选项

当 `nzValue` 和 `ngModel` 类型为 `object` 时使用 `compareWith`([SelectControlValueAccessor](https://angular.cn/api/forms/SelectControlValueAccessor))。

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-input">
      <input placeholder="input here" nz-input [(ngModel)]="inputValue" [nzAutocomplete]="auto" />
      <nz-autocomplete #auto [compareWith]="compareFun">
        @for (option of options; track $index) {
          <nz-auto-option [nzValue]="option" [nzLabel]="option.label">
            {{ option.label }}
          </nz-auto-option>
        }
      </nz-autocomplete>
    </div>
  `
})
export class NzDemoAutoCompleteObjectValueComponent {
  inputValue: Option = { label: 'Lucy', value: 'lucy', age: 20 };
  options: Option[] = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];

  compareFun = (o1: Option | string, o2: Option): boolean => {
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
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-options',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-input">
      <input
        placeholder="input here"
        nz-input
        [(ngModel)]="inputValue"
        (input)="onInput($event)"
        [nzAutocomplete]="auto"
      />
      <nz-autocomplete #auto>
        @for (option of options; track $index) {
          <nz-auto-option [nzValue]="option">{{ option }}</nz-auto-option>
        }
      </nz-autocomplete>
    </div>
  `
})
export class NzDemoAutoCompleteOptionsComponent {
  inputValue?: string;
  options: string[] = [];

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
  }
}
```

### 自定义状态

使用 `nzStatus` 为 AutoComplete 添加状态，可选 `error` 或者 `warning`。

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-status',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" nzStatus="error" />
    <br />
    <br />
    <input nz-input [(ngModel)]="value" [nzAutocomplete]="auto" nzStatus="warning" />
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
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-uncertain-category',
  imports: [FormsModule, NzAutocompleteModule, NzButtonModule, NzIconModule, NzInputModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-input-search nzEnterButton>
      <input
        nz-input
        placeholder="input here"
        nzSize="large"
        [(ngModel)]="inputValue"
        (input)="onChange($event)"
        [nzAutocomplete]="auto"
      />
    </nz-input-search>
    <nz-autocomplete #auto>
      @for (option of options; track option.category) {
        <nz-auto-option class="search-item" [nzValue]="option.category">
          Found {{ option.value }} on
          <a
            class="search-item-desc"
            [href]="'https://s.taobao.com/search?q=' + option.value"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ option.category }}
          </a>
          <span class="search-item-count">{{ option.count }} results</span>
        </nz-auto-option>
      }
    </nz-autocomplete>
  `,
  styles: `
    .search-item {
      display: flex;
    }

    .search-item-desc {
      flex: auto;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .search-item-count {
      flex: none;
    }
  `
})
export class NzDemoAutoCompleteUncertainCategoryComponent {
  inputValue?: string;
  options: Array<{ value: string; category: string; count: number }> = [];

  onChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.options = new Array(this.getRandomInt(5, 15))
      .join('.')
      .split('.')
      .map((_item, idx) => ({
        value,
        category: `${value}${idx}`,
        count: this.getRandomInt(200, 100)
      }));
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
```

### 多种形态

通过使用 `nz-input` 并将 `nzVariant` 设置为 `outlined`、`underlined`、`filled` 和 `borderless`，即可支持变体

```typescript
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import type { NzVariant } from 'ng-zorro-antd/core/types';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nz-demo-auto-complete-variant',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule, NzFlexModule],
  template: `
    <section nz-flex nzVertical nzGap="1rem">
      @for (variant of variants(); track variant) {
        <div class="example-input">
          <input
            placeholder="input here"
            nz-input
            [(ngModel)]="inputValue"
            (input)="onInput($event)"
            [nzAutocomplete]="auto"
            [nzVariant]="variant"
          />
          <nz-autocomplete [nzDataSource]="options()" nzBackfill #auto />
        </div>
      }
    </section>
  `
})
export class NzDemoAutoCompleteVariantComponent {
  options = signal<string[]>([]);
  inputValue = model<string>('');
  variants = signal<NzVariant[]>(['outlined', 'filled', 'borderless', 'underlined']);
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options.set(value ? [value, value + value, value + value + value] : []);
  }
}
```
