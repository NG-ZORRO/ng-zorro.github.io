---
category: Components
type: Data Entry
title: AutoComplete
cover: 'https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg'
description: AutoComplete function of input field.
---

## When To Use

When there is a need for autocomplete functionality.

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

| Property           | Description                              | Type                      | Default |
| ------------------ | ---------------------------------------- | ------------------------- | ------- |
| `[nzAutocomplete]` | used to bind `nzAutocomplete` components | `NzAutocompleteComponent` | -       |

### nz-autocomplete

| Property                       | Description                                                                                    | Type                            | Default                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------- |
| `[nzBackfill]`                 | backfill selected item the input when using keyboard                                           | `boolean`                       | `false`                         |
| `[nzDataSource]`               | Data source for autocomplete                                                                   | `AutocompleteDataSource`        | -                               |
| `[nzDefaultActiveFirstOption]` | Whether active first option by default                                                         | `boolean`                       | `true`                          |
| `[nzWidth]`                    | Custom width, unit px                                                                          | `number`                        | trigger element width           |
| `[nzOverlayClassName]`         | Class name of the dropdown root element                                                        | `string`                        | -                               |
| `[nzOverlayStyle]`             | Style of the dropdown root element                                                             | `object`                        | -                               |
| `[compareWith]`                | Same as [SelectControlValueAccessor](https://angular.dev/api/forms/SelectControlValueAccessor) | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |

### nz-auto-option

| Property       | Description                          | Type      | Default |
| -------------- | ------------------------------------ | --------- | ------- |
| `[nzValue]`    | bind ngModel of the trigger element  | `any`     | -       |
| `[nzLabel]`    | display value of the trigger element | `string`  | -       |
| `[nzDisabled]` | disabled option                      | `boolean` | `false` |

## FAQ

### Q: The overlay layer element does not follow the scroll position when scrolling

By default, the overlay layer element uses body as the scroll container. If using another scroll container, add the [CdkScrollable](https://material.angular.dev/cdk/scrolling/api#CdkScrollable) directive to the custom scroll container element.
Note: You need to import the `CdkScrollable` directive or `ScrollingModule` module from `@angular/cdk/scrolling`.

---

## Examples

### Basic Usage

Basic Usage, set `nzDataSource` of `nz-autocomplete` with dataSource property.

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

### Lookup-Patterns - Certain Category

Demonstration of [Lookup Patterns: Certain Category](https://ant.design/docs/spec/reaction#Lookup-Patterns).

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

### Customize Input Component

Customize Input Component

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

### Non-case-sensitive AutoComplete

A non-case-sensitive AutoComplete

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

### Use option with object type

Use `compareWith`([SelectControlValueAccessor](https://angular.dev/api/forms/SelectControlValueAccessor)) when the `nzValue` and `ngModel` type is `object`.

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

### Customized

You could pass `nz-auto-option` as Content of `nz-autocomplete`, instead of using nzDataSource`.

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

### Status

Add status to AutoComplete with `nzStatus`, which could be `error` or `warning`.

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

### Lookup-Patterns - Uncertain Category

Demonstration of [Lookup Patterns: Uncertain Category](https://ant.design/docs/spec/reaction#Lookup-Patterns).

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

### Variants

Variant is supported out of the box by using `nz-input` and setting `nzVariant` to `outlined`, `underlined`, `filled` and `borderless`

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
